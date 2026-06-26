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
    year: "2026",
    emoji: "⚙️",
    glow: "#2438ff",
    category: "potencia",
    summary: "Control en lazo cerrado de un motor DC mediante puente en H, con caracterización de conmutación y PID.",
    description:
      "Análisis y control de velocidad de un motor DC de escobillas mediante una etapa de potencia " +
      "en puente en H. Partiendo del modelo electromecánico del motor (dominios eléctrico y mecánico, " +
      "fuerza contraelectromotriz, constante de tiempo eléctrica ~170 µs frente a la mecánica ~100 ms), " +
      "se estudió la topología del puente con cuatro MOSFET de canal N y sus modos de operación " +
      "slow-decay y fast-decay, incluida la generación de PWM a 32 kHz y la gestión de los tiempos " +
      "muertos para evitar el shoot-through. Se modeló todo el conjunto en LTspice y, " +
      "aplicando el método del modelo promediado de la célula PWM de tres terminales, se extrajo la " +
      "función de transferencia en lazo abierto y se diseñó gráficamente un controlador PID " +
      "(superposición de P(s) y 1/C(s) en el diagrama de Bode, cruce a 20 dB/déc y margen de fase " +
      "~45°). Finalmente se verificó el lazo cerrado en régimen estacionario y dinámico frente a " +
      "perturbaciones de carga.",
    features: [
      "Configuración de los tiempos muertos del puente en H",
      "Montaje de la PCB + comprovación de los componentes",
      "Control en lazo cerrado (PID) implementado en Arduino",
      "Simulación del modelo promediado en pequeña señal (LTspice)",
      "Documentación técnica completa del proyecto",
    ],
    tags: ["Electrónica de potencia", "Puente en H", "PID", "Arduino", "LTspice", "AD2"],
    images: ["assets/projects/motor-montaje.jpg", "assets/projects/motor-pid.jpg"],
    link: "",
  },
  {
    id: "convertidor-buck",
    title: "Convertidor Buck DC-DC",
    year: "2026",
    emoji: "⚡",
    glow: "#ff5a2c",
    category: "potencia",
    summary: "Convertidor reductor DC-DC diseñado, simulado y caracterizado en lazo cerrado.",
    description:
      "Diseño, implementación y caracterización completa de un convertidor reductor DC-DC " +
      "(5 V / 5 W, entrada 10–14 V, conmutación PWM a 32 kHz). El proyecto abarca el dimensionado " +
      "analítico (duty cycle, inductancia mínima para conducción continua, rizado de corriente y " +
      "tensión, condensador de filtro, diodo Schottky 1N5819 y MOSFET IRFZ34N con driver high-side " +
      "IR2301 y condensador de bootstrap), la fabricación y caracterización de la bobina toroidal " +
      "(~5 mH, medida con el Impedance Analyzer del Analog Discovery 2) y la validación experimental " +
      "sobre protoboard. Se simuló en LTspice con el modelo promediado de la célula PWM para extraer " +
      "la función de transferencia en lazo abierto (dos polos complejos del filtro LC y un cero del " +
      "ESR). Para el lazo cerrado se identificó la planta con el método autotune (relé con histéresis) " +
      "y se sintonizó un PID digital sobre Arduino Uno por Ziegler-Nichols, con anti-windup y paso de " +
      "tiempo medido por software, regulando la salida a 5 V con error estacionario inferior al 5 % " +
      "frente a variaciones de entrada y de carga.",
    features: [
      "Diseño del convertidor Buck DC-DC",
      "Simulaciones en LTspice",
      "Caracterización del lazo cerrado (PID) en Arduino",
      "Montaje y comprobación del prototipo en protoboard",
    ],
    tags: ["Electrónica de potencia", "Convertidor Buck", "DC-DC", "PID", "LTspice", "Arduino","AD2"],
    images: ["assets/projects/buck-montaje.jpg", "assets/projects/buck-bode.jpg"],
    link: "",
  },
  {
    id: "robot-movil",
    title: "Robot móvil teledirigido",
    year: "2026",
    emoji: "🤖",
    glow: "#2438ff",
    category: "embedded",
    summary: "Robot móvil multimodo sobre MSP430FR2355: control manual, seguimiento de línea/luz y ultrasonidos.",
    description:
      "Robot móvil multimodo gobernado por un microcontrolador MSP430FR2355, con una interfaz local " +
      "propia (menú en LCD 2×16 navegable con joystick) que permite conmutar entre cuatro modos de " +
      "funcionamiento: control manual, seguimiento de línea, seguimiento de luz y mantenimiento de " +
      "distancia por ultrasonidos. El MSP430 actúa como maestro I2C y delega la tracción y los LEDs " +
      "al robot Maqueen Plus, desacoplando control y potencia. Todos los periféricos (ADC de los LDR, " +
      "I2C, joystick y temporizadores) trabajan por interrupción mientras la CPU permanece en bajo " +
      "consumo (LPM0), sobre una máquina de estados modular con paradas de seguridad. " +
      "Incluye sensor de ultrasonidos HC-SR04 (Trigger/Echo medido por timer), dos LDR " +
      "leídos por ADC de 12 bits y un módulo WiFi ESP-01S integrado por UART para teleoperación remota. " +
      "El proyecto incluyó además el diseño de la PCB de control que integra todos los periféricos.",
    features: [
      "Diseño de la PCB con los periféricos necesarios",
      "Interfaz local a bordo: menú en LCD 2×16 + joystick",
      "Cuatro modos: manual, seguir línea, seguir luz y ultrasonidos",
      "MSP430 como maestro I2C del robot Maqueen Plus",
      "Periféricos por interrupción y bajo consumo (LPM0)",
    ],
    tags: ["MSP430", "C", "I2C", "ADC", "UART", "ESP-01S", "LPM0"],
    images: ["assets/projects/robot-foto.jpg", "assets/projects/robot-arquitectura.jpg", "assets/projects/robot-layout.jpg"],
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
      "Diseño de un chip FIFO digital recorriendo el flujo ASIC completo, desde la descripción RTL " +
      "hasta el layout listo para fabricación (RTL-to-GDSII), sobre el proceso XFAB XH018 (180 nm). " +
      "El bloque se describió en SystemVerilog y se verificó con un testbench autoverificable basado " +
      "en scoreboard, que comprueba automáticamente las operaciones de escritura/lectura y las " +
      "condiciones de FIFO llena y vacía. A continuación se realizó la síntesis lógica con Cadence " +
      "Genus (mapeo a la librería de celdas estándar y restricciones de temporización / STA), la " +
      "inserción de test y generación de patrones DFT/ATPG con Modus, y el Place & Route con Innovus " +
      "—floorplan, anillo de alimentación, colocación, árbol de reloj (CTS) y enrutado— integrando las " +
      "macros de memoria RAM hasta obtener el layout final verificado.",
    features: [
      "RTL en SystemVerilog + testbench autoverificable (scoreboard)",
      "Síntesis lógica con Genus",
      "DFT / ATPG con Modus",
      "Place & Route hasta layout con Innovus",
      "Proceso XFAB XH018 (180 nm)",
    ],
    tags: ["ASIC", "SystemVerilog", "Cadence", "RTL", "Place & Route", "180 nm"],
    images: ["assets/projects/fifo-layout.jpg"],
    link: "",
  },
];

/* Stack técnico */
const STACK = [
  { group: "Lenguajes & HDL", items: ["C", "Python", "Verilog", "SystemVerilog"] },
  { group: "Electrónica de potencia", items: ["Convertidores DC-DC", "Puente en H", "Control PID"] },
  { group: "Diseño PCB & Simulación", items: ["KiCad", "LTspice", "Selección de componentes"] },
  { group: "Flujo ASIC / EDA", items: ["Cadence Xcelium", "Genus", "Innovus", "Modus"] },
  { group: "Microcontroladores", items: ["MSP430", "Arduino", "ESP-01S", "STM32"] },
  { group: "Laboratorio", items: ["Osciloscopio", "Multímetro", "Analog Discovery 2", "Soldadura THT/SMD"] },
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
        ${p.images && p.images.length ? `<div class="entry__thumb"><img src="${p.images[0]}" alt="" loading="lazy"></div>` : ""}
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
    ${p.images && p.images.length
      ? `<div class="modal__gallery">${p.images.map((src) => `<img src="${src}" alt="${p.title}" loading="lazy">`).join("")}</div>`
      : `<div class="modal__hero" style="background: radial-gradient(circle at 50% 130%, ${p.glow}33, transparent 62%), var(--paper-2)">${p.emoji}</div>`}
    <div class="modal__inner">
      <p class="modal__kicker">${categoryLabel(p.category)}</p>
      <h3 class="modal__title">${p.title}</h3>
      <p class="lead">${p.description}</p>
      <h4>Características</h4>
      <ul class="modal__features">${p.features.map((f) => `<li>${f}</li>`).join("")}</ul>
      <div class="modal__tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      ${p.link ? `<div class="modal__actions"><a class="modal__cta" href="${p.link}" target="_blank" rel="noopener">Ver proyecto →</a></div>` : ""}
    </div>`;
  modal.classList.add("is-open");
  document.body.style.overflow = "hidden";
}
function closeModal() { modal.classList.remove("is-open"); document.body.style.overflow = ""; }
function categoryLabel(c) {
  return { potencia: "Electrónica de potencia", embedded: "Embedded", digital: "Diseño digital" }[c] || c;
}
modal.addEventListener("click", (e) => { if (e.target.dataset.close !== undefined) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeLightbox(); closeModal(); } });

/* Lightbox para ampliar imágenes de la galería */
modalContent.addEventListener("click", (e) => {
  const img = e.target.closest(".modal__gallery img");
  if (!img) return;
  const box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML = `<img src="${img.src}" alt="">`;
  box.addEventListener("click", closeLightbox);
  document.body.appendChild(box);
  requestAnimationFrame(() => box.classList.add("is-open"));
});
function closeLightbox() { document.querySelectorAll(".lightbox").forEach((b) => b.remove()); }

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
