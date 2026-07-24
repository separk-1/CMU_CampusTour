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

const mapCodes = {
  "2.1": [
    { code: "TEP", grid: "E3", type: "academic", label: "Tepper Building" },
    { code: "WC", grid: "D4", type: "poi", label: "Coulter Welcome Center" },
  ],
  "2.2": [{ code: "GHC", grid: "E5", type: "academic", label: "Gates/Hillman Centers" }],
  "2.3": [{ code: "PB", grid: "E5", type: "poi", label: "Pausch Bridge" }],
  "2.4": [{ code: "PCA", grid: "F5", type: "academic", label: "Purnell Center for the Arts" }],
  "2.5": [{ code: "WH", grid: "F4", type: "academic", label: "Warner Hall" }],
  "3.1": [{ code: "WS", grid: "F4", type: "poi", label: "Walking to the Sky" }],
  "3.2": [
    { code: "CUC", grid: "G5", type: "academic", label: "Cohon University Center" },
    { code: "US", grid: "F5", type: "poi", label: "University Store" },
  ],
  "4.1": [{ code: "HMC", grid: "G7", type: "academic", label: "Highmark Center" }],
  "4.2": [{ code: "G5/G6", grid: "", type: "poi", label: "Gesling Stadium area" }],
  "5.1": [{ code: "MM", grid: "G6", type: "academic", label: "Margaret Morrison Carnegie Hall" }],
  "5.2": [{ code: "POS", grid: "G6", type: "academic", label: "Posner Hall" }],
  "5.3": [{ code: "KC", grid: "F7", type: "poi", label: "Kraus Campo" }],
  "5.4": [{ code: "CFA", grid: "F6", type: "academic", label: "College of Fine Arts" }],
  "5.5": [{ code: "HL", grid: "F7", type: "academic", label: "Hunt Library" }],
  "5.6": [
    { code: "FE", grid: "F6", type: "poi", label: "The Fence" },
    { code: "The Cut", grid: "F6/G6", type: "poi", label: "The Cut" },
  ],
  "6.1": [{ code: "DH", grid: "E6", type: "academic", label: "Doherty Hall" }],
  "6.2": [
    { code: "BH", grid: "E6", type: "academic", label: "Baker Hall" },
    { code: "PH", grid: "D6", type: "academic", label: "Porter Hall" },
  ],
  "6.3": [{ code: "HH", grid: "D6", type: "academic", label: "Hamerschlag Hall" }],
  "6.4": [{ code: "WEH", grid: "D5", type: "academic", label: "Wean Hall" }],
  "6.5": [{ code: "AN", grid: "D6", type: "academic", label: "ANSYS Hall" }],
  "6.6": [{ code: "SH", grid: "C6", type: "academic", label: "Scaife Hall" }],
  "8.1": [{ code: "HLMAN", grid: "E3", type: "pitt", label: "Hillman Library" }],
  "8.2": [{ code: "HEINZ", grid: "F2", type: "pitt", label: "Heinz Memorial Chapel" }],
  "8.3": [{ code: "CL", grid: "F2", type: "pitt", label: "Cathedral of Learning" }],
  "8.4": [{ code: "WPU", grid: "E3", type: "pitt", label: "William Pitt Union" }],
};

const mapSearchOverrides = {
  "2.4": "Carnegie Mellon University School Of Drama",
  "7.3": "Carnegie Museum of Natural History",
};

const mapUrlOverrides = {
  "2.1":
    "https://www.google.com/maps/place/Tepper+School+of+Business/@40.4449397,-79.9453551,17z/data=!4m10!1m2!2m1!1sTepper+Building+Pittsburgh+Pittsburgh!3m6!1s0x8834f21f58679a9f:0xa4dc782d726fd9ee!8m2!3d40.4450795!4d-79.9453962!15sCiVUZXBwZXIgQnVpbGRpbmcgUGl0dHNidXJnaCBQaXR0c2J1cmdoWiciJXRlcHBlciBidWlsZGluZyBwaXR0c2J1cmdoIHBpdHRzYnVyZ2iSAQ9idXNpbmVzc19zY2hvb2yaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTlNPR015VVRKM1JSQULgAQD6AQQIABA3!16zL20vMDFxMnYx?entry=ttu&g_ep=EgoyMDI2MDcyMS4wIKXMDSoASAFQAw%3D%3D",
  "2.2":
    "https://www.google.com/maps/place/Gates+and+Hillman+Centers/@40.4435931,-79.9444979,17z/data=!4m10!1m2!2m1!1sGates%2FHillman+Centers+Pittsburgh+Pittsburgh!3m6!1s0x8834f22177d9f8ef:0x719357c7895d25a8!8m2!3d40.4436655!4d-79.9444765!15sCitHYXRlcy9IaWxsbWFuIENlbnRlcnMgUGl0dHNidXJnaCBQaXR0c2J1cmdoWi0iK2dhdGVzIGhpbGxtYW4gY2VudGVycyBwaXR0c2J1cmdoIHBpdHRzYnVyZ2iSARV1bml2ZXJzaXR5X2RlcGFydG1lbnTgAQA!16s%2Fg%2F1tdlvy8r?entry=ttu&g_ep=EgoyMDI2MDcyMS4wIKXMDSoASAFQAw%3D%3D",
  "5.2":
    "https://www.google.com/maps/place/Posner+Center+for+Special+Collections,+Carnegie+Mellon+University/@40.4416142,-79.9431395,19z/data=!4m7!3m6!1s0x8834f3628266833d:0x8dd89b9bbb54323a!4b1!8m2!3d40.4418857!4d-79.9422705!16s%2Fg%2F11mf7v9_xd?entry=ttu&g_ep=EgoyMDI2MDcyMS4wIKXMDSoASAFQAw%3D%3D",
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

function mapSearchTitle(stop) {
  if (mapSearchOverrides[stop.number]) return mapSearchOverrides[stop.number];

  const codedLabel = mapCodes[stop.number]?.[0]?.label;
  if (codedLabel) return codedLabel;

  const englishStop = tours.en
    .flatMap((section) => section.stops)
    .find((candidate) => candidate.number === stop.number);

  return englishStop?.title || stop.title;
}

function stopMapUrl(stop) {
  return mapUrlOverrides[stop.number] || mapUrl(mapSearchTitle(stop));
}

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
        ${section.number === "8" ? renderPittMap() : ""}
        <article class="section" id="${section.id}">
          <h2 class="section-title">${escapeHtml(section.title)}</h2>
          ${section.stops
            .map(
              (stop) => `
                <section class="stop" id="${stop.id}">
                  <div class="stop-header">
                    <div>
                      <h3>${escapeHtml(stop.title)}</h3>
                      ${renderMapCodes(stop.number)}
                    </div>
                    ${
                      shouldShowMap(section)
                        ? `<a class="map-link" href="${stopMapUrl(stop)}" target="_blank" rel="noreferrer">${copy[currentLang].map}</a>`
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

function renderPittMap() {
  return `
    <section class="map-preview map-preview--pitt" aria-label="University of Pittsburgh campus map">
      <div class="map-preview__header">
        <h2>University of Pittsburgh Campus Map</h2>
        <a href="pitt-campus-map.pdf" target="_blank" rel="noreferrer">Open PDF</a>
      </div>
      <a href="pitt-campus-map.pdf" target="_blank" rel="noreferrer">
        <img src="pitt-campus-map.png" alt="University of Pittsburgh campus map" />
      </a>
    </section>
  `;
}

function renderMapCodes(number) {
  const codes = mapCodes[number] || [];
  if (!codes.length) return "";

  return `
    <div class="code-row" aria-label="Campus map code">
      ${codes
        .map(
          (item) => `
            <span class="map-code map-code--${item.type}" title="${escapeHtml(item.label)}">
              <span class="map-code__code">${escapeHtml(item.code)}</span>
              ${item.grid ? `<span class="map-code__grid">${escapeHtml(item.grid)}</span>` : ""}
            </span>
          `
        )
        .join("")}
    </div>
  `;
}

function render() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-copy]").forEach((node) => {
    node.textContent = copy[currentLang][node.dataset.copy];
  });

  document.querySelectorAll(".lang-switch button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLang);
  });

  document.querySelector(".toc-toggle").textContent = currentLang === "ko" ? "목차" : "Contents";

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

document.querySelector(".toc-toggle").addEventListener("click", () => {
  const panel = document.querySelector("#routePanel");
  const isMobile = window.matchMedia("(max-width: 760px)").matches;

  if (isMobile) {
    const isOpen = panel.classList.toggle("open");
    document.querySelector(".toc-toggle").setAttribute("aria-expanded", String(isOpen));
    return;
  }

  const isCollapsed = document.body.classList.toggle("toc-collapsed");
  document.querySelector(".toc-toggle").setAttribute("aria-expanded", String(!isCollapsed));
});

document.querySelector("#routeNav").addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;
  const panel = document.querySelector("#routePanel");
  panel.classList.remove("open");
  document.querySelector(".toc-toggle").setAttribute("aria-expanded", "false");
});

init().catch((error) => {
  document.querySelector("#tour").textContent = `Unable to load tour content: ${error.message}`;
});
