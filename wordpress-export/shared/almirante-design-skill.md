---
description: >
  Skill de diseño para La Despensa del Almirante. Adapta cualquier diseño
  nuevo (Figma, boceto o descripción) a los cánones establecidos del proyecto:
  estructura de secciones, tokens CSS, prefijos BEM, overrides de Astra y
  flujo de despliegue en WordPress. Invoca con /almirante-design [descripción
  del nuevo diseño o página].
---

Cuando se invoca esta skill, el asistente actúa como el guardián del sistema
de diseño de La Despensa del Almirante y sigue este flujo de trabajo en orden:

## PASO 1 — Leer la configuración canónica

Lee estos archivos antes de escribir cualquier código:

1. `wordpress-export/shared/da-design-system.css` — tokens globales (colores,
   tipografía, spacing, sombras, transiciones, floating buttons)
2. `wordpress-export/shared/PAGE-TEMPLATE.md` — playbook completo de nuevas
   páginas (anatomía, CSS scoped, móvil, despliegue, checklist QA)
3. `wordpress-export/cafe/split/cafe-styles.css` — referencia CSS cp-* (página
   de categoría canónica)
4. `wordpress-export/shared/almirante-design-agent.md` — todos los cánones del
   proyecto resumidos

## PASO 2 — Analizar el diseño entregado

Si se entrega un URL de Figma:
- Usar Figma MCP (`get_design_context`, `get_screenshot`, `get_variable_defs`)
- Extraer: colores, tipografías, estructura de secciones, componentes

Si se describe verbalmente:
- Preguntar qué secciones tiene la página
- Preguntar si hay un diseño de referencia visual

## PASO 3 — Mapear al sistema de diseño

Para cada elemento del diseño nuevo:

### Colores
| Diseño externo | Mapea a |
|---------------|---------|
| Oscuro/negro | `--da-navy: #2A343E` |
| Dorado/ámbar | `--da-gold: #96724D` |
| Marrón café | `--da-coffee-deep: #603809` |
| Crema/beige | `--da-cream: #FDFBF7` |
| Blanco | `--da-white: #FFFFFF` |
| Verde (WhatsApp) | `#25D366` |
| Color nuevo sectorial | Crear `--{cat}-accent` en el CSS de la categoría |

**Regla**: Nunca hardcodear un color nuevo si ya existe un token `--da-*` similar.
Si el diseño usa un color realmente nuevo, crear un token sectorial (`--{cat}-accent`)
en el CSS de la categoría, no en `da-design-system.css`.

### Tipografías
| Diseño externo | Mapea a |
|---------------|---------|
| Serif/editorial (títulos) | `Playfair Display 700` |
| Sans-serif (cuerpo/botones) | `Inter 400/600` |
| Script/cursiva (decorativa) | `Clicker Script` (solo café) |
| Otra familia | ❌ No añadir. Usar Playfair Display como alternativa |

### Botones
Todos los botones, sin excepción, siguen este molde:
```css
border-radius: 9999px;   /* pill */
font-family: 'Inter', sans-serif;
font-weight: 600;
font-size: 14px;
padding: 12px 28px;
transition: background 250ms cubic-bezier(0.4,0,0.2,1),
            transform 250ms cubic-bezier(0.4,0,0.2,1);
:hover { transform: translateY(-4px); }
```
- Si el Figma muestra botones rectangulares (radius 4-8px): ignorar, usar pill.
- Si el Figma muestra botones grandes (padding 20px 48px): reducir a la escala estándar.

### Tarjetas
```css
border-radius: 16px;   /* mínimo. Máximo 24px. Nunca menos. */
box-shadow: 0 4px 16px rgba(42,52,62,0.08);
transition: box-shadow 0.3s ease, transform 0.3s ease;
:hover { box-shadow: 0 16px 40px rgba(42,52,62,0.15); transform: translateY(-4px); }
```

### Secciones
Toda sección nueva sigue el patrón fondo-full / container-1200px:
```html
<section class="{cat}-section {cat}-section--{color}">
  <div class="{cat}-container">
    <!-- contenido -->
  </div>
</section>
```
La sección ocupa 100% ancho. El container centra a 1200px con padding-inline responsive.

## PASO 4 — Generar el código

### CSS (nuevo archivo `{cat}-styles.css`)

Estructura obligatoria en este orden:
```css
/* 1. Importar fuentes (si no están ya cargadas globalmente) */
@import url('https://fonts.googleapis.com/...');

/* 2. Reset scoped */
body.page-id-NNNN .{cat}-page,
body.page-id-NNNN .{cat}-page * { box-sizing: border-box; margin: 0; padding: 0; }

/* 3. Variables scoped */
body.page-id-NNNN {
  --{cat}-accent: ...;
  --{cat}-cream: ...;
  background: var(--da-cream);
}

/* 4. Override Astra (siempre) */
body.page-id-NNNN .ast-article-single { background: transparent !important; ... }
body.page-id-NNNN .content-area, body.page-id-NNNN #primary { margin: 0 !important; }
body.page-id-NNNN .entry-title, .ast-breadcrumbs-wrapper { display: none !important; }
/* Full-width containers */
body.page-id-NNNN .elementor-section,
body.page-id-NNNN .elementor-container,
/* ... (ver almirante-design-agent.md §6) */

/* 5. Container y secciones */
body.page-id-NNNN .{cat}-container { max-width: 1200px; margin: 0 auto; padding-inline: clamp(20px,4vw,40px); }
body.page-id-NNNN .{cat}-section  { padding: var(--da-section-pad-y) 0; }

/* 6. Componentes (hero, story, cards, usp, cta-band, contact, floating) */

/* 7. Responsive */
@media (max-width: 960px) { ... }
@media (max-width: 600px) { ... }
```

### HTML (nuevo archivo `{cat}-body.html`)

Estructura semántica con `data-da-block` para cada sección:
```html
<div class="{cat}-page">
  <section class="{cat}-section {cat}-section--hero" data-da-block="hero">...</section>
  <section class="{cat}-section {cat}-section--white" data-da-block="story">...</section>
  <section class="{cat}-section" data-da-block="products">...</section>
  <section class="{cat}-section {cat}-section--white" data-da-block="usp">...</section>
  <section class="{cat}-section {cat}-section--navy" data-da-block="cta-band">...</section>
  <section class="{cat}-section" data-da-block="contact">...</section>

  <!-- Botones flotantes (usar clases da- compartidas) -->
  <a class="da-float-wa" href="https://wa.me/34665029116?text=..." ...>...</a>
  <button class="da-float-backtop" ...>...</button>
</div>
```

## PASO 5 — Verificación pre-entrega

Antes de entregar cualquier código, comprobar mentalmente:

- [ ] ¿Todos los selectores CSS están scoped a `body.page-id-NNNN`?
- [ ] ¿Hay override de `.ast-article-single` con `background: transparent`?
- [ ] ¿Las secciones usan `padding: Y 0` y el container `padding-inline: X`?
- [ ] ¿Todos los botones son `border-radius: 9999px`?
- [ ] ¿Los colores referencian tokens `--da-*` en vez de valores hardcodeados?
- [ ] ¿La separación texto→botón usa `--da-cta-mt`?
- [ ] ¿Los botones flotantes usan `.da-float-wa` y `.da-float-backtop`?
- [ ] ¿Hay bloque responsive para 960px y 600px?
- [ ] ¿El WhatsApp apunta a `https://wa.me/34665029116` y el número no aparece como texto visible?

## PASO 6 — Instrucciones de despliegue

Siempre acompañar el código entregado con:

```
DESPLIEGUE:
1. Crear página en wp-admin con slug /[slug] y plantilla [Canvas/Default]
2. Anotar el post-id asignado → actualizar el scope CSS body.page-id-NNNN
3. Elementor: una sección full-width, widget HTML → pegar {cat}-body.html
4. Customizer → CSS adicional → pegar {cat}-styles.css
5. Limpiar caché: Elementor + LiteSpeed
6. Verificar en desktop 1440px y móvil 375px
```

---

## Referencia rápida de prefijos por categoría futura

```
/conservas  → co-   body.page-id-TBD
/aceite     → ao-   body.page-id-TBD
/sales      → sa-   body.page-id-TBD
/blog       → (usar clases del tema Astra, sin prefijo custom)
```
