/* =========================================================
   DATOS DE PROYECTOS  ·  edita este array
   Campos: title, year, emoji, glow, category
           (embedded | iot | robotica | pcb),
           summary, description, features[], tags[], link
   ========================================================= */
const PROJECTS = [
  {
    id: "robot-mise",
    title: "Robot MiSE",
    year: "2026",
    emoji: "🤖",
    glow: "#2438ff",
    category: "robotica",
    summary: "Robot móvil sobre MSP430FR2355 con control inalámbrico WiFi y sensores integrados.",
    description:
      "Firmware completo para un robot móvil basado en el microcontrolador MSP430FR2355. " +
      "Integra múltiples periféricos y un protocolo de comunicación inalámbrica para controlar " +
      "actuadores Bioloid mediante un módulo ESP-01S sobre WiFi.",
    features: [
      "Lectura de sensores por I2C y ADC",
      "Sensor de ultrasonidos para detección de obstáculos",
      "Control mediante joystick analógico",
      "Comunicación WiFi con servos Bioloid vía ESP-01S",
      "Gestión de periféricos en tiempo real",
    ],
    tags: ["MSP430", "C", "I2C", "ADC", "WiFi", "ESP-01S", "Bioloid"],
    link: "",
  },
  {
    id: "stm32-template",
    title: "Proyecto STM32",
    year: "2025",
    emoji: "⚙️",
    glow: "#2438ff",
    category: "embedded",
    summary: "Plantilla de ejemplo — sustitúyela por un proyecto real con STM32.",
    description:
      "Describe aquí un proyecto basado en STM32: qué hace, qué problema resuelve y qué " +
      "periféricos usa (timers, DMA, UART...). Borra o edita esta entrada cuando quieras.",
    features: [
      "Configuración de periféricos con HAL / registros",
      "Manejo de interrupciones (ISR)",
      "Transferencias por DMA",
    ],
    tags: ["STM32", "C", "DMA", "UART", "Timers"],
    link: "",
  },
  {
    id: "esp32-iot",
    title: "Nodo IoT ESP32",
    year: "2025",
    emoji: "📡",
    glow: "#ff5a2c",
    category: "iot",
    summary: "Plantilla de ejemplo — dispositivo conectado con ESP32 y envío de datos.",
    description:
      "Ejemplo de nodo IoT con ESP32: lectura de sensores, conexión WiFi/MQTT y envío de " +
      "telemetría a un servidor o dashboard. Personaliza esta entrada con tu proyecto.",
    features: [
      "Conectividad WiFi y MQTT",
      "Lectura periódica de sensores",
      "Bajo consumo (deep sleep)",
    ],
    tags: ["ESP32", "C++", "WiFi", "MQTT", "FreeRTOS"],
    link: "",
  },
  {
    id: "pcb-design",
    title: "Diseño de PCB",
    year: "2024",
    emoji: "🔌",
    glow: "#2438ff",
    category: "pcb",
    summary: "Plantilla de ejemplo — diseño de placa de circuito impreso.",
    description:
      "Ejemplo de proyecto de hardware: esquemático y layout de una PCB. Indica la herramienta " +
      "(KiCad, Altium...), el propósito de la placa y los retos del enrutado.",
    features: [
      "Esquemático y selección de componentes",
      "Layout y enrutado de la PCB",
      "Verificación DRC y fabricación",
    ],
    tags: ["KiCad", "PCB", "Hardware", "Electrónica"],
    link: "",
  },
];

/* Stack técnico */
const STACK = [
  { group: "Lenguajes", items: ["C", "C++", "Python", "Assembly"] },
  { group: "Microcontroladores", items: ["STM32", "ESP32", "MSP430", "Arduino"] },
  { group: "Protocolos", items: ["I2C", "SPI", "UART", "ADC", "PWM"] },
  { group: "Conectividad", items: ["WiFi", "Bluetooth", "MQTT"] },
  { group: "Real-time", items: ["FreeRTOS", "ISR", "DMA", "Bare-metal"] },
  { group: "Herramientas", items: ["KiCad", "Git", "Osciloscopio"] },
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
  return { embedded: "Embedded", iot: "IoT", robotica: "Robótica", pcb: "PCB" }[c] || c;
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
