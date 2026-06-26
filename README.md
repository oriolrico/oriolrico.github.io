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
| `emoji`       | Icono (solo se usa si el proyecto no tiene imágenes)          |
| `glow`        | Color de acento (hex), p. ej. `"#2438ff"`                     |
| `category`    | `potencia` · `embedded` · `digital` (controla los filtros)    |
| `summary`     | Frase corta que se ve en la lista                             |
| `description` | Texto largo que aparece al abrir el proyecto                   |
| `features`    | Lista de viñetas                                               |
| `tags`        | Tecnologías (etiquetas)                                        |
| `images`      | Lista de rutas a imágenes, p. ej. `["assets/projects/foto.jpg"]` |
| `link`        | URL (GitHub, memoria PDF...). Déjalo `""` si no hay enlace     |

### Añadir imágenes a un proyecto
1. Copia tus imágenes (fotos, capturas de osciloscopio, esquemáticos, layouts…) en
   la carpeta `assets/projects/`.
2. Añade sus rutas al campo `images` del proyecto. Puedes poner varias:
   ```js
   images: ["assets/projects/foto.jpg", "assets/projects/bode.jpg"],
   ```
La primera imagen aparece como miniatura en la lista; todas se muestran en la galería
del proyecto, y al hacer clic se amplían a pantalla completa. Si un proyecto no tiene
`images`, se muestra su `emoji`.

## Personalizar lo demás

- **Tus datos / contacto** → `index.html` (busca la sección `#contact` y el `<footer>`).
  Cambia las URLs de GitHub y LinkedIn por las tuyas.
- **Colores y estilo** → variables `:root` al principio de `styles.css`.
- **Stack técnico** → array `STACK` en `script.js`.

## Publicarlo gratis

Al ser solo archivos estáticos, puedes subirlo a:

- **GitHub Pages** — sube la carpeta a un repo y actívalo en *Settings → Pages*.
- **Netlify / Vercel** — arrastra la carpeta y listo.
