const copy = {
  ko: {
    routeTitle: "목차",
    map: "Google Map",
  },
  en: {
    routeTitle: "Contents",
    map: "Google Map",
  },
};

const sourceFiles = {
  ko: "tour-content-ko.txt",
  en: "tour-content-en.txt",
};

let currentLang = "ko";
let tours = { ko: [], en: [] };

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const slug = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const cleanHeading = (line) => line.replace(/^[→\s]+/, "").trim();

const mapUrl = (title) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${title} Pittsburgh`)}`;

function splitSource(text) {
  const lines = text.replace(/\r\n/g, "\n").split("\n");
  const firstDetailIndex = lines.findIndex((line, index) => index > 10 && /^1\.\s+/.test(line.trim()));
  return lines.slice(firstDetailIndex > -1 ? firstDetailIndex : 0);
}

function parseTour(text) {
  const lines = splitSource(text);
  const sections = [];
  let section = null;
  let stop = null;

  const flushStop = () => {
    if (!section || !stop) return;
    stop.body = stop.body.join("\n").trim();
    section.stops.push(stop);
    stop = null;
  };

  const flushSection = () => {
    flushStop();
    if (section) sections.push(section);
    section = null;
  };

  for (let i = 0; i < lines.length; i += 1) {
    const raw = lines[i].trim();
    if (!raw) continue;

    if (/^\d+\.\s+/.test(raw)) {
      flushSection();
      const number = raw.match(/^(\d+)\./)?.[1] || String(sections.length + 1);
      section = {
        id: `section-${number}`,
        number,
        title: cleanHeading(raw),
        stops: [],
      };
      continue;
    }

    if (/^\d+\.\d+\s+/.test(raw)) {
      flushStop();
      const number =
        raw.match(/^(\d+\.\d+)/)?.[1] || `${section?.number || sections.length + 1}.${section?.stops.length || 1}`;
      const title = cleanHeading(raw);
      const titleSlug = slug(title) || number.replace(".", "-");
      stop = {
        id: `stop-${number.replace(".", "-")}-${titleSlug}`,
        number,
        title,
        mapTitle: title,
        body: [],
      };
      continue;
    }

    if (stop) {
      stop.body.push(raw);
    }
  }

  flushSection();
  return sections;
}

function activeTour() {
  return tours[currentLang] || [];
}

function shouldShowMap(section) {
  return section.number !== "1";
}

function renderNav() {
  const routeNav = document.querySelector("#routeNav");
  routeNav.innerHTML = activeTour()
    .map(
      (section) => `
        <div class="nav-group">
          <a class="nav-section" href="#${section.id}">${escapeHtml(section.title)}</a>
          ${section.stops
            .map((stop) => `<a class="nav-stop" href="#${stop.id}">${escapeHtml(stop.title)}</a>`)
            .join("")}
        </div>
      `
    )
    .join("");
}

function renderTour() {
  document.querySelector("#tour").innerHTML = activeTour()
    .map(
      (section) => `
        <article class="section" id="${section.id}">
          <h2 class="section-title">${escapeHtml(section.title)}</h2>
          ${section.stops
            .map(
              (stop) => `
                <section class="stop" id="${stop.id}">
                  <div class="stop-header">
                    <h3>${escapeHtml(stop.title)}</h3>
                    ${
                      shouldShowMap(section)
                        ? `<a class="map-link" href="${mapUrl(stop.mapTitle)}" target="_blank" rel="noreferrer">${copy[currentLang].map}</a>`
                        : ""
                    }
                  </div>
                  <div class="body ${currentLang}">${escapeHtml(stop.body)}</div>
                </section>
              `
            )
            .join("")}
        </article>
      `
    )
    .join("");
}

function render() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-copy]").forEach((node) => {
    node.textContent = copy[currentLang][node.dataset.copy];
  });

  document.querySelectorAll(".lang-switch button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLang);
  });

  renderNav();
  renderTour();
}

async function loadTour(lang) {
  const response = await fetch(sourceFiles[lang]);
  if (!response.ok) throw new Error(`${sourceFiles[lang]} ${response.status}`);
  return parseTour(await response.text());
}

async function init() {
  const [ko, en] = await Promise.all([loadTour("ko"), loadTour("en")]);
  tours = { ko, en };
  render();
}

document.querySelectorAll(".lang-switch button").forEach((button) => {
  button.addEventListener("click", () => {
    currentLang = button.dataset.lang;
    render();
  });
});

init().catch((error) => {
  document.querySelector("#tour").textContent = `Unable to load tour content: ${error.message}`;
});
