/* =========================================================
   DATOS DE PROYECTOS  ·  edita este array
   Campos: title, year, emoji, glow, category
           (potencia | embedded | digital),
           summary, description, features[], tags[], link
   ========================================================= */
const PROJECTS = [
  {
    id: "motor-dc-puente-h",
    title: "Control de motor DC con puente en H",
    year: "2025",
    emoji: "⚙️",
    glow: "#2438ff",
    category: "potencia",
    summary: "Control en lazo cerrado de un motor DC mediante puente en H, con PID y montaje en PCB.",
    description:
      "Diseño y caracterización del control de un motor DC con un puente en H. Incluye la " +
      "configuración de los tiempos muertos, el ajuste del lazo cerrado con un controlador PID " +
      "sobre Arduino y la simulación del modelo promediado en pequeña señal con LTspice. " +
      "Montaje completo en PCB y documentación técnica del proyecto.",
    features: [
      "Configuración de los tiempos muertos del puente en H",
      "Control en lazo cerrado (PID) implementado en Arduino",
      "Simulación del modelo promediado en pequeña señal (LTspice)",
      "Montaje completo en PCB propia",
      "Documentación técnica completa del proyecto",
    ],
    tags: ["Electrónica de potencia", "Puente en H", "PID", "Arduino", "LTspice", "KiCad"],
    link: "",
  },
  {
    id: "convertidor-buck",
    title: "Convertidor Buck DC-DC",
    year: "2025",
    emoji: "⚡",
    glow: "#ff5a2c",
    category: "potencia",
    summary: "Convertidor reductor DC-DC diseñado, simulado y caracterizado en lazo cerrado.",
    description:
      "Diseño y caracterización de un convertidor Buck (reductor) DC-DC. Simulación del " +
      "comportamiento en LTspice, ajuste del lazo cerrado con un controlador PID sobre Arduino " +
      "y validación del prototipo montado en protoboard.",
    features: [
      "Diseño del convertidor Buck DC-DC",
      "Simulaciones en LTspice",
      "Caracterización del lazo cerrado (PID) en Arduino",
      "Montaje y comprobación del prototipo en protoboard",
    ],
    tags: ["Electrónica de potencia", "Convertidor Buck", "DC-DC", "PID", "LTspice", "Arduino"],
    link: "",
  },
  {
    id: "robot-movil",
    title: "Robot móvil teledirigido",
    year: "2026",
    emoji: "🤖",
    glow: "#2438ff",
    category: "embedded",
    summary: "Robot móvil sobre MSP430FR2355 con sensores integrados y control inalámbrico por WiFi.",
    description:
      "Firmware para un robot móvil basado en el microcontrolador MSP430FR2355. Integra lectura " +
      "de sensores por I2C y ADC, un sensor de ultrasonidos para detección de obstáculos y control " +
      "mediante joystick analógico. La comunicación con los actuadores Bioloid se realiza de forma " +
      "inalámbrica a través de un módulo ESP-01S por WiFi.",
    features: [
      "Lectura de sensores por I2C y ADC",
      "Sensor de ultrasonidos para detección de obstáculos",
      "Control mediante joystick analógico",
      "Comunicación WiFi con servos Bioloid vía ESP-01S",
      "Gestión de periféricos en tiempo real",
    ],
    tags: ["MSP430", "C", "I2C", "ADC", "WiFi", "ESP-01S"],
    link: "",
  },
  {
    id: "chip-fifo-asic",
    title: "Chip FIFO digital — Flujo ASIC",
    year: "2025",
    emoji: "🔲",
    glow: "#ff5a2c",
    category: "digital",
    summary: "Diseño de un chip FIFO digital con flujo ASIC completo, de RTL hasta layout para foundry.",
    description:
      "Diseño de un chip FIFO digital siguiendo el flujo ASIC completo (RTL → Foundry) sobre el " +
      "proceso XFAB XH018 (180 nm). Descripción RTL en SystemVerilog con verificación mediante " +
      "testbench autoverificable (scoreboard), síntesis lógica, DFT/ATPG y Place & Route hasta " +
      "obtener el layout listo para fabricación.",
    features: [
      "RTL en SystemVerilog + testbench autoverificable (scoreboard)",
      "Síntesis lógica con Genus",
      "DFT / ATPG con Modus",
      "Place & Route hasta layout con Innovus",
      "Proceso XFAB XH018 (180 nm)",
    ],
    tags: ["ASIC", "SystemVerilog", "Cadence", "RTL", "Place & Route", "180 nm"],
    link: "",
  },
];

/* Stack técnico */
const STACK = [
  { group: "Lenguajes & HDL", items: ["C", "Python", "Verilog", "SystemVerilog"] },
  { group: "Electrónica de potencia", items: ["Convertidores DC-DC", "Puente en H", "Control PID"] },
  { group: "Diseño PCB & Simulación", items: ["KiCad", "LTspice", "Selección de componentes"] },
  { group: "Flujo ASIC / EDA", items: ["Cadence Xcelium", "Genus", "Innovus", "Modus"] },
  { group: "Microcontroladores", items: ["MSP430", "Arduino", "ESP-01S"] },
  { group: "Laboratorio", items: ["Osciloscopio", "Multímetro", "Soldadura THT/SMD"] },
];

/* ============ RENDER PROYECTOS (entradas) ============ */
const projectsEl = document.getElementById("projects");

function renderProjects(filter = "all") {
  projectsEl.innerHTML = "";
  const list = PROJECTS.filter((p) => filter === "all" || p.category === filter);

  list.forEach((p, i) => {
    const n = String(i + 1).padStart(2, "0");
    const row = document.createElement("article");
    row.className = "entry reveal";
    row.style.transitionDelay = `${i * 70}ms`;
    row.innerHTML = `
      <span class="entry__num">${n}</span>
      <div class="entry__main">
        <h3 class="entry__title"><span class="entry__emoji">${p.emoji}</span>${p.title}</h3>
        <p class="entry__sub">${p.summary}</p>
        <div class="entry__tags">${p.tags.slice(0, 5).map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      </div>
      <div class="entry__side">
        <span class="entry__year">${p.year}</span>
        <span class="entry__arrow">↗</span>
      </div>`;
    row.addEventListener("click", () => openModal(p));
    projectsEl.appendChild(row);
  });
  observeReveal();
}

/* ============ RENDER STACK ============ */
const stackGrid = document.getElementById("stackGrid");
STACK.forEach((g) => {
  const cell = document.createElement("div");
  cell.className = "stack__cell";
  cell.innerHTML = `<h3>${g.group}</h3><ul>${g.items.map((it) => `<li>${it}</li>`).join("")}</ul>`;
  stackGrid.appendChild(cell);
});

/* ============ FILTROS ============ */
const filtersEl = document.getElementById("filters");
filtersEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter");
  if (!btn) return;
  filtersEl.querySelectorAll(".filter").forEach((b) => b.classList.remove("is-active"));
  btn.classList.add("is-active");
  renderProjects(btn.dataset.filter);
});

/* ============ MODAL ============ */
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

function openModal(p) {
  modalContent.innerHTML = `
    <button class="modal__close" data-close aria-label="Cerrar">Cerrar ×</button>
    <div class="modal__hero" style="background: radial-gradient(circle at 50% 130%, ${p.glow}33, transparent 62%), var(--paper-2)">${p.emoji}</div>
    <div class="modal__inner">
      <p class="modal__kicker">${categoryLabel(p.category)} · ${p.year}</p>
      <h3 class="modal__title">${p.title}</h3>
      <p class="lead">${p.description}</p>
      <h4>Características</h4>
      <ul class="modal__features">${p.features.map((f) => `<li>${f}</li>`).join("")}</ul>
      <div class="modal__tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      ${p.link ? `<a class="modal__cta" href="${p.link}" target="_blank" rel="noopener">Ver proyecto →</a>` : ""}
    </div>`;
  modal.classList.add("is-open");
  document.body.style.overflow = "hidden";
}
function closeModal() { modal.classList.remove("is-open"); document.body.style.overflow = ""; }
function categoryLabel(c) {
  return { potencia: "Electrónica de potencia", embedded: "Embedded", digital: "Diseño digital" }[c] || c;
}
modal.addEventListener("click", (e) => { if (e.target.dataset.close !== undefined) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

/* ============ REVEAL ON SCROLL ============ */
let io;
function observeReveal() {
  if (!io) {
    io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      }),
      { threshold: 0.1 }
    );
  }
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => io.observe(el));
}

/* ============ NAV ============ */
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => nav.classList.toggle("is-scrolled", window.scrollY > 24));

const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav__links");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  Object.assign(navLinks.style, open ? {
    display: "flex", position: "absolute", top: "60px", right: "20px", flexDirection: "column",
    background: "var(--ink)", color: "var(--paper)", padding: "18px 24px", borderRadius: "10px", gap: "14px",
    mixBlendMode: "normal",
  } : { display: "" });
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    if (window.innerWidth <= 860) { navLinks.classList.remove("is-open"); navLinks.style.display = ""; }
  })
);

/* ============ INIT ============ */
document.getElementById("year").textContent = new Date().getFullYear();
renderProjects();
observeReveal();
