# Portfolio · Oriol Rico

Portfolio web personal de proyectos de electrónica y sistemas embebidos.
Hecho con HTML, CSS y JavaScript puro — **sin dependencias ni build**.

## Cómo verlo

Haz doble clic en `index.html` o ábrelo con tu navegador. Ya está.

## Cómo añadir o editar proyectos

Todos tus proyectos viven en un único array al principio de **`script.js`**
(la constante `PROJECTS`). Para añadir uno, copia un bloque `{ ... }` y rellena:

| Campo         | Qué es                                                          |
|---------------|----------------------------------------------------------------|
| `title`       | Nombre del proyecto                                            |
| `year`        | Año                                                            |
| `emoji`       | Icono que se muestra en la tarjeta                            |
| `glow`        | Color de acento (hex), p. ej. `"#4dd0a7"`                     |
| `category`    | `embedded` · `iot` · `robotica` · `pcb` (controla los filtros) |
| `summary`     | Frase corta para la tarjeta                                    |
| `description` | Texto largo que aparece al abrir el proyecto                   |
| `features`    | Lista de viñetas                                               |
| `tags`        | Tecnologías (etiquetas)                                        |
| `link`        | URL (GitHub, demo...). Déjalo `""` si no hay enlace            |

> El **Robot MiSE** ya viene cargado. Las otras 3 tarjetas son plantillas de
> ejemplo: edítalas o bórralas.

## Personalizar lo demás

- **Tus datos / contacto** → `index.html` (busca la sección `#contacto` y el `<footer>`).
  Cambia las URLs de GitHub y LinkedIn por las tuyas.
- **Colores y estilo** → variables `:root` al principio de `styles.css`.
- **Stack técnico** → array `STACK` en `script.js`.

## Publicarlo gratis

Al ser solo archivos estáticos, puedes subirlo a:

- **GitHub Pages** — sube la carpeta a un repo y actívalo en *Settings → Pages*.
- **Netlify / Vercel** — arrastra la carpeta y listo.
