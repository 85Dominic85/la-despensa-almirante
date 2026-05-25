# Plantilla base para nuevas páginas de categoría

> Cómo construir `/conservas`, `/aceite`, `/sales`, etc. siguiendo el patrón que ya tiene `/cafe` —
> manteniendo coherencia visual a nivel de marca pero permitiendo que cada categoría tenga su propia paleta y temática.

---

## 1. Filosofía: estructura compartida, paleta propia

Lo que TODAS las páginas comparten:
- **Container max-width**: `1200px` (`--da-container-max`)
- **Header**: max-width 1200px, logo 160px, sin breadcrumb sobre el hero
- **Footer del tema**: oculto (lo gestionamos manualmente)
- **Botones flotantes**: WhatsApp (verde, abajo derecha 28/28) + back-to-top (dorado, encima a 100/28) — ambos 58×58
- **Separación texto → botón**: `var(--da-cta-mt)` = `clamp(24px, 3vw, 40px)`
- **Tipografía**: Playfair Display (títulos/serif), Inter (cuerpo/botones)
- **Botones primarios**: pill (radius 9999px), Inter 14px peso 600
- **Tarjetas**: radius entre 16-24px, sombra `0 4px 16px rgba(navy, .08)`, hover lift `translateY(-4px)`
- **Padding de sección**: `clamp(60px, 8vw, 110px) clamp(16px, 4vw, 40px)`
- **Breakpoints**: 960px (tablet → 1 col), 600px (mobile)

Lo que cada categoría puede personalizar:
- **Paleta** (fondos, color del título de sección, fondo de tarjetas)
- **Acento sectorial** (gold para café, podría ser olive para aceite, salt-blue para sales, etc.)
- **Iconografía** y decoraciones gráficas
- **Hero script** (la palabra grande en cursiva)

---

## 2. Estructura de archivos

Crear nueva carpeta espejando `wordpress-export/cafe/`:

```
wordpress-export/
├── shared/
│   ├── da-design-system.css     ← fuente única de tokens
│   └── PAGE-TEMPLATE.md         ← este archivo
├── cafe/
│   └── split/
│       ├── cafe-body.html       ← contenido HTML pegado en widget Elementor
│       └── cafe-styles.css      ← CSS scoped a body.page-id-XXXX, pega en Customizer
└── conservas/                   ← nueva categoría
    └── split/
        ├── conservas-body.html
        └── conservas-styles.css
```

---

## 3. Anatomía de una página de categoría (referencia: `/cafe`)

Cada página tiene estas secciones, en este orden:

| # | Bloque | Clase BEM | Propósito |
|---|---|---|---|
| 1 | Hero a sangre | `.{cat}-hero` | Foto fullbleed + título script + CTA scroll-to-products |
| 2 | Storytelling 50/50 | `.{cat}-story` | Narrativa de la categoría + foto + botón "Saber más" → blog |
| 3 | Productos grid | `.{cat}-products` + `.{cat}-cards` | 3 tarjetas con imagen, nombre, meta, precio, CTA |
| 4 | USP grid | `.{cat}-usp` | 4 diferenciales con icono + título + texto + CTA final |
| 5 | CTA band | `.{cat}-cta-band` | Banner full-bleed con foto, título, 2 botones (Tienda + WhatsApp) |
| 6 | Contacto | `.{cat}-contact` | Caja blanca con texto + botón email (dorado) + botón WhatsApp (verde) |
| 7 | Botones flotantes | `.{cat}-float-wa` + `.{cat}-float-backtop` | WhatsApp + back-to-top apilados |

Sustituye `{cat}` por el prefijo de la categoría: `cp` (café), `co` (conservas), `ao` (aceite), `sa` (sales).

---

## 4. CSS scoped por página

**Regla**: TODO el CSS específico de una categoría va scoped al `body.page-id-NNNN` correspondiente,
para que el Elementor kit y otras páginas no se vean afectadas.

```css
/* conservas-styles.css */
body.page-id-1240 { background: var(--da-cream); }
body.page-id-1240 .co-hero { ... }
body.page-id-1240 .co-cards { ... }
```

Y siempre referencia tokens del design system en lugar de hardcodear valores:

```css
/* ✅ BIEN */
.co-card {
  border-radius: var(--da-radius-lg);
  box-shadow: var(--da-shadow-md);
  transition: transform var(--da-dur-base) var(--da-ease);
}

/* ❌ MAL */
.co-card {
  border-radius: 18px;
  box-shadow: 0 4px 14px rgba(50,50,50,0.1);
  transition: transform 0.4s ease;
}
```

---

## 5. Reglas comunes que NO hay que duplicar

Ya están en `da-design-system.css` para TODO el sitio:

- Separación texto → botón (`:where(p,h1...) + .{cat}-btn → margin-top: var(--da-cta-mt)`)
- `.da-float-wa` y `.da-float-backtop` (si usas exactamente esas clases en vez de scoped, no necesitas CSS local)
- Override de Elementor kit en `.btn-submit`

Si nombras los botones flotantes con el prefijo de tu categoría (`co-float-wa`), **debes añadir esas clases al bloque de "Separación uniforme" en `da-design-system.css`** para que hereden el spacing.
Más fácil: usar `.da-float-wa` y `.da-float-backtop` tal cual (compartidos).

---

## 6. Botones — patrón unificado

Todos los botones primarios siguen este molde (ya está en `da-design-system.css` como `.da-cta--primary`):

```css
display: inline-flex;
align-items: center;
gap: 8px;
padding: 12px 28px;
border-radius: 9999px;       /* pill */
font-family: 'Inter', sans-serif;
font-weight: 600;
font-size: 14px;
background: var(--da-gold);  /* o el acento de la categoría */
color: #fff;
border: 0;
transition: background var(--da-dur-base), transform var(--da-dur-base);
```

**Hover**: oscurece el bg (`#7a5a3a` para dorado) + `translateY(-2px)`.

Variantes permitidas:
- `--primary` (dorado, principal)
- `--ghost` (transparente, borde, secundario)
- `--whatsapp` (verde `#25D366`, hover `#1da854`)
- `--accent` (acento sectorial: para conservas podría ser azul mar, para aceite verde oliva)

**No usar**: border-radius 16-24px en botones (eso queda para tarjetas). Pill o nada.

---

## 7. Móvil — comportamiento garantizado

Cada CSS de categoría debe replicar estas reglas al final (copy-paste del bloque de `cafe-styles.css`):

```css
@media (max-width: 960px) {
  .{cat}-story__inner       { grid-template-columns: 1fr; }
  .{cat}-cards              { grid-template-columns: repeat(2, 1fr); }
  .{cat}-usp__grid          { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .{cat}-hero               { min-height: 58vh; }
  .{cat}-hero__script       { font-size: clamp(48px, 14vw, 78px) !important; line-height: 1.1; }
  .{cat}-cards              { grid-template-columns: 1fr; max-width: 360px; margin: 0 auto; }
  .{cat}-usp__grid          { grid-template-columns: 1fr; }
  .{cat}-cta-band__actions  { flex-direction: column; align-items: flex-start; }
  .{cat}-contact__actions   { flex-direction: column; align-items: stretch; gap: 10px; }
  .{cat}-contact__btn-email,
  .{cat}-contact__btn-wa    { text-align: center; width: 100%; }
}
```

---

## 8. Despliegue — paso a paso (replica de lo que se hizo con `/cafe`)

1. Crear página en wp-admin con slug definitivo (`/conservas`, etc.) y plantilla **Elementor Canvas**.
2. Anotar el `post-id` (ej. 1240) — irá en el scope CSS y en `_elementor_data`.
3. Editar con Elementor, añadir **un único widget HTML** dentro de **una sección full-width** (gap=no).
4. Pegar el `{cat}-body.html` completo en el widget.
5. Vía REST API (o panel "Customizer → CSS adicional"), pegar el `{cat}-styles.css` scoped a `body.page-id-NNNN`.
6. Verificar que el Customizer también incluye:
   - Hide del título de página / breadcrumb (`body.page-id-NNNN .entry-title, .ast-breadcrumbs-wrapper { display: none !important; }`)
   - Hide del footer del tema si la página tiene su propio CTA de cierre.
7. Limpiar caché: `#elementor-clear-cache-button` + `#wp-admin-bar-litespeed-purge-all a`.
8. Verificar en desktop 1440px y móvil 375px (DevTools device mode).

---

## 9. Checklist de QA antes de publicar

- [ ] Container respeta 1200px en desktop (no se ve full-width).
- [ ] Header sin breadcrumb sobre el hero.
- [ ] Logo a 160px (sin texto "site title" al lado — debe estar oculto vía `.site-title { display: none }` en el design system).
- [ ] Todos los botones son pill, Inter 14px peso 600.
- [ ] Separación texto → botón uniforme (sin botones pegados a párrafos).
- [ ] Tarjetas con sombra suave y hover lift.
- [ ] WhatsApp flotante a 28/28, back-to-top a 100/28, ambos 58×58.
- [ ] Móvil 375px: tarjetas en 1 col, hero título no overflow, botones contacto stacked.
- [ ] Footer del tema oculto en la página (si no usa el del sitio).
- [ ] No hay texto invisible (revisar contraste de cualquier botón que herede de Elementor kit).
- [ ] LiteSpeed cache purgado y Elementor regenerado tras subir.

## 11. Gotchas conocidos y reglas globales que NO hay que quitar

Reglas que viven en `da-design-system.css` y resuelven problemas no obvios.
Si alguien las quita "porque parecen huérfanas", el sitio se rompe visualmente:

| Regla | Por qué existe |
|---|---|
| `.site-title, .ast-site-title-wrap { display: none !important; }` | El "Site Title" de WordPress está configurado (necesario para SEO, Organization schema, Search Console, título de pestaña). Astra lo renderiza junto al logo por defecto. Como usamos LOGO como branding visual, ocultamos el texto. **No quitar nunca.** |
| `.ast-footer-widget-area { display: none !important; }` (por página) | El footer del tema Astra renderiza widgets viejos del template de restaurante importado. Aunque limpiemos los widgets, dejar esta regla por categoría asegura cero filtraciones. |
| `body.page-id-NNNN .entry-title, .ast-breadcrumbs-wrapper { display: none !important; }` | Astra muestra el título de la página y un breadcrumb sobre el hero. Cada página custom tiene su propio hero, así que el título nativo de WP debe ocultarse por página. |
| `:where(p, h1, h2, h3, h4) + .{botón} { margin-top: var(--da-cta-mt) !important; }` | Compensa el reset CSS agresivo (`.cafe-page * { margin: 0 }`) que quita márgenes naturales. Sin esto, los botones se pegan al texto. |
| `.btn-submit { background, color, fill !important; }` | Elementor Kit inyecta colores que pisan los del widget. Sin `!important`, el botón se vuelve invisible (texto color del fondo). |
| `.float-backtop, .cp-float-backtop { padding: 0; min-width; min-height; line-height: 1; !important }` | Astra aplica `padding: 32px` y `min-width` por defecto a todo `<button>`. Sin estos overrides el botón flotante se infla a 64×64 con icon tiny. |

---

## 10. Token de paleta sectorial — sugerencias para cada categoría

| Categoría | Acento principal | Fondo cálido | Sección hero overlay |
|---|---|---|---|
| Café | `--da-gold` `#96724D` | `#fff9f1` warm-cream | navy overlay |
| Conservas | `#3B5C7C` azul mar | `#FFF8F0` arena | azul oscuro overlay |
| Aceite | `#7A8F3F` olivo | `#FAF7EE` verde-crema | oliva oscuro overlay |
| Sales | `#7AA3C4` salt-blue | `#FBFCFD` blanco-azulado | gris-azul overlay |

Define estos acentos como CSS vars locales en cada `{cat}-styles.css`:

```css
:root {
  --co-accent: #3B5C7C;
  --co-accent-dark: #294460;
  --co-bg-warm: #FFF8F0;
}
```

Y úsalos donde antes usarías `--da-gold` para que cada categoría tenga su personalidad sin romper la coherencia estructural.
