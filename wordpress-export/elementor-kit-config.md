# Kit de Elementor — La Despensa del Almirante

Configuración de los estilos globales (Global Colors, Global Fonts, Layout, etc.) extraída de `landing.html` y `cafe-styles.css`. Aplicar en **Elementor → menú hamburguesa (arriba-izquierda) → Site Settings (Configuración del sitio)** después de crear el kit nuevo.

---

## 1. Crear el kit (si no existe)
En el diálogo que sale al abrir Elementor: clic en **"Crear de nuevo el kit"**.

---

## 2. Global Colors (Colores globales)

Site Settings → **Global Colors → System Colors**:

| Slot Elementor | Nombre | Hex | Uso |
|---|---|---|---|
| Primary | Navy | `#2A343E` | Textos principales, headings de la home |
| Secondary | Gold | `#96724D` | CTAs, acentos, hover |
| Text | Navy texto | `#2A343E` | Texto cuerpo |
| Accent | Coffee | `#603809` | Headings de la sección café |

Luego añade en **Custom Colors** (botón "+"):

| Nombre | Hex |
|---|---|
| Cream | `#FDFBF7` |
| Cream Warm | `#fff9f1` |
| Cream Amber | `#ffeed8` |
| Gold Bright | `#f9c06a` |
| Gray Body | `#707070` |
| WhatsApp Green | `#25D366` |

---

## 3. Global Fonts (Tipografías globales)

Site Settings → **Global Fonts → System Typography**:

| Slot Elementor | Family | Weight | Tamaño |
|---|---|---|---|
| **Primary** (Headings) | Playfair Display | 700 | (sin tamaño fijo) |
| **Secondary** (Subheadings) | Playfair Display | 600 | (sin tamaño fijo) |
| **Text** (Body) | Inter | 400 | 16px |
| **Accent** (Botones / etiquetas) | Inter | 600 | 14px |

Añade en **Custom Fonts** (botón "+"):

| Nombre | Family | Weight |
|---|---|---|
| Script Decorativa | Clicker Script | 400 |

> ⚠️ Si Playfair Display, Inter o Clicker Script no aparecen en el desplegable: Elementor las carga automáticamente desde Google Fonts. Si tienes "Google Fonts desactivado" en algún plugin de optimización (LiteSpeed, Autoptimize), reactívalo temporalmente.

---

## 4. Theme Style (Estilos por defecto del tema)

Site Settings → **Theme Style**:

### Typography
- **Body**: Inter 400, 16px, line-height 1.6, color `#2A343E` (Navy)
- **Link**: Color normal `#2A343E`, hover `#96724D` (Gold)
- **Heading h1**: Playfair Display 700, 48px, color Navy
- **Heading h2**: Playfair Display 700, 36px, color Navy
- **Heading h3**: Playfair Display 600, 28px, color Navy
- **Heading h4**: Playfair Display 600, 22px, color Navy
- **Heading h5**: Playfair Display 600, 18px, color Navy
- **Heading h6**: Inter 600, 16px, uppercase, letter-spacing 0.05em, color Gold

### Buttons
- **Typography**: Inter 600, 14px
- **Text Color**: White (`#FFFFFF`)
- **Background**: Navy (`#2A343E`)
- **Border Radius**: 9999px (pill / píldora)
- **Padding**: 16px top/bottom, 32px left/right
- **Box Shadow**: `0 4px 14px rgba(42,52,62,0.25)`

**Hover**:
- Background: Gold (`#96724D`)
- Transform: `translateY(-1px)`

### Images
- **Border radius**: 8px por defecto

### Form Fields
- **Background**: White
- **Border**: 1px sólido `#d1d5db` (gray-300)
- **Border radius**: 8px
- **Padding**: 12px 16px
- **Typography**: Inter 400, 15px

---

## 5. Layout (Diseño del sitio)

Site Settings → **Layout**:

| Ajuste | Valor |
|---|---|
| Content Width | **1200 px** |
| Widgets Space (Espacio entre widgets) | 24 px |
| Page Title Selector | `h1.entry-title` |
| Breakpoints → Mobile | 600 px |
| Breakpoints → Tablet | 960 px |

---

## 6. Lightbox

Site Settings → **Lightbox**: dejar valores por defecto. Color de fondo del overlay: `rgba(42,52,62,0.85)` (Navy con transparencia).

---

## 7. Background del sitio (opcional)

Site Settings → **Background**: dejar blanco (`#FFFFFF`). El fondo crema (`#FDFBF7`) lo aplicaremos por página cuando haga falta (ya lo gestiona el CSS adicional para la página del café).

---

## 8. Guardar y verificar

1. Clic en **Update / Actualizar** (arriba a la derecha)
2. Abre la home — debe verse idéntica
3. Abre `/cafe` — debe verse idéntica (los estilos del café siguen viniendo del CSS adicional, no del kit)

Si algo cambia, normalmente es porque el theme style del kit "pisa" estilos inline anteriores. En ese caso, ajustar el theme style hasta que coincida.

---

## Notas

- **Por qué Navy y no Coffee como Primary**: la home usa Navy como color base; el Coffee (#603809) solo aparece en la sección de café. Ponemos Navy como Primary global y Coffee como Accent.
- **Por qué Container Width 1200px**: alineado con la nueva página del café. La home actual usa 1280px (`80rem`) pero los 80px de diferencia son imperceptibles y unifica el sistema.
- **El kit no afecta a las páginas con HTML personalizado**: la home (HTML embebido) y la página del café (HTML + CSS adicional) siguen funcionando aunque cambies el kit, porque sus estilos son scoped (clases propias).

---

## Backlog — Mejoras futuras del kit

Cuando tengamos Elementor Pro y migremos a Theme Builder:
- Crear plantilla **Header global** con menú principal
- Crear plantilla **Footer global**
- Crear plantilla **Single Product** personalizada para SureCart/Woo
- Crear plantilla **Archive** para categorías de blog
