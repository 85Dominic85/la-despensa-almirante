# Página corporativa de Café — Guía de despliegue

> Esta guía sigue la misma filosofía que `wordpress-export/PASOS_WORDPRESS.md` (de la landing principal). El HTML final (`cafe-page.html`) se genera tras recibir el diseño Figma.

---

## PASO 0 — Prerrequisito: cargar el sistema de diseño compartido

Solo se hace **una vez** (si no se hizo antes para la landing v2).

1. Subir `wordpress-export/shared/da-design-system.css` a la Media Library de WordPress (carpeta sugerida: `wp-content/uploads/landing-almirante/shared/`).
2. En **Ajustes → Insert Headers and Footers → Scripts in Header**, añadir DEBAJO de los preconnects de Google Fonts:
   ```html
   <link rel="stylesheet"
         href="/wp-content/uploads/landing-almirante/shared/da-design-system.css">
   ```
3. Limpiar caché de LiteSpeed (Toolbox → Purge All).

---

## PASO 1 — Subir imágenes del café

Carpeta sugerida en Media Library: `landing-almirante/cafe/`. Mínimo por producto (3 imágenes):

| Archivo | Aspecto | Uso |
|---|---|---|
| `cafe-suarez-tradicional-hero.webp` | 1:1 | tarjeta principal, hero |
| `cafe-suarez-tradicional-lifestyle.webp` | 4:5 | contexto |
| `cafe-suarez-tradicional-packaging.webp` | 1:1 | detalle envase |
| `cafe-suarez-geisha-hero.webp` | 1:1 | tarjeta |
| `cafe-suarez-geisha-lifestyle.webp` | 4:5 | contexto |
| `cafe-suarez-geisha-packaging.webp` | 1:1 | envase |
| `elida-estate-geisha-hero.webp` | 1:1 | tarjeta |
| `elida-estate-geisha-lifestyle.webp` | 4:5 | contexto |
| `elida-estate-geisha-packaging.webp` | 1:1 | envase |

Adicionales sugeridas (atmosféricas / storytelling):

- `cafe-boquete-hero.webp` (paisaje Boquete / Alto Quiel)
- `cafe-suarez-finca.webp` (finca Suárez)
- `cafe-lamastus-finca.webp` (finca Lamastus)
- `cafe-proceso-secado.webp` (secado natural al sol)
- `cafe-proceso-tueste.webp` (tueste artesanal)

> Si todavía no hay imágenes reales, dejar placeholders y rellenar después — el HTML usa `onerror` igual que la landing.

---

## PASO 2 — Crear los 3 productos en WooCommerce (antes de la página `/cafe`)

Razón: la página `/cafe` enlaza a `/producto/<slug>`. Si los productos no existen, los CTA dan 404.

1. **wp-admin → Productos → Categorías**: crear "Café" (slug: `cafe`).
2. **wp-admin → Productos → Atributos**: crear los atributos globales **reutilizables** (no como texto plano):
   - `variedad` (Catuai, Geisha)
   - `finca` (Café Suárez, Lamastus Family Estates)
   - `altitud`
   - `proceso` (Natural, Lavado, Lavado y secado tradicional al sol)
   - `origen` (Alto Quiel-Boquete, Boquete)
3. **wp-admin → Productos → Añadir nuevo**, una entrada por cada ficha:
   - Café Suárez Tradicional Catuai — slug `cafe-suarez-tradicional` — 250 g — SKU `DA-CAF-SUAREZ-TRAD-250`
   - Café Suárez Geisha — slug `cafe-suarez-geisha` — 100 g — SKU `DA-CAF-SUAREZ-GEISHA-100`
   - Elida Estate Geisha — slug `elida-estate-geisha` — 100 g — SKU `DA-CAF-ELIDA-GEISHA-100`
4. Para cada producto:
   - Descripción larga: copiar el contenido Markdown de la ficha correspondiente en `catalogo/cafe/*.md` (convertido a HTML semántico — `<h2>`, `<p>`, `<ul>`).
   - Asignar la categoría "Café".
   - Asignar atributos globales (variedad, finca, altitud, proceso, origen).
   - Subir imagen destacada (`-hero.webp`) y galería (`-lifestyle`, `-packaging` + adicionales).
   - Precio B2C (pendiente de definir).
   - Peso del producto (envío).
5. Publicar.

---

## PASO 3 — Crear la página `/cafe`

1. **wp-admin → Páginas → Añadir nueva**.
2. Título: **"Café"**. Slug: `cafe`.
3. Plantilla (panel derecho): **Astra → "Sin barras laterales"** + desactivar cabecera y pie si interfieren (igual que la landing).
4. Bloque **"HTML personalizado"** → pegar el contenido de `wordpress-export/cafe/cafe-page.html` (entre las etiquetas `<body>` y `</body>`, sin incluirlas).
5. Publicar.

---

## PASO 4 — Añadir al menú principal

**wp-admin → Apariencia → Menús**:

- Añadir página "Café" al menú principal, justo después de "Productos" (o donde encaje editorialmente).
- Si en el futuro hay `/conservas`, `/aceite`, `/sales`, considerar agrupar bajo un menú "Catálogo" con submenús.

---

## PASO 5 — Verificación

- [ ] `/cafe` carga y muestra el diseño del Figma.
- [ ] Las 3 tarjetas de producto en `/cafe` enlazan correctamente a `/producto/cafe-suarez-tradicional`, etc.
- [ ] Cada producto Woo es accesible, tiene precio, galería completa y descripción larga.
- [ ] "Añadir al carrito" funciona desde cada ficha de producto.
- [ ] Móvil OK (DevTools + dispositivo real).
- [ ] Yoast SEO: meta-title, meta-description y OG image rellenos para `/cafe` y los 3 productos.
- [ ] LiteSpeed Cache purgado tras subir cambios.

---

## SIGUIENTE — Replicar patrón

Mismo flujo para `/conservas`, `/aceite`, `/sales`. Reutilizar `da-design-system.css` y los componentes `da-product-card`, `da-grid--cards-3`, etc.
