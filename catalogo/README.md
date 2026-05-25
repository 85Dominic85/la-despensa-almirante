# Catálogo — La Despensa del Almirante

Fuente única de verdad del catálogo de productos. Toda la información que aparece en la web (WordPress + WooCommerce) y en cualquier soporte comercial debe coincidir con lo descrito aquí. Si se edita algo en wp-admin, **se replica también aquí** para mantener paridad.

## Estructura

```
catalogo/
├── README.md                    ← este archivo
├── productos.md                 ← tabla resumen de todos los productos
├── original/
│   └── Descripcion_de_productos_del_catalogo.docx   ← fuente original del cliente
├── cafe/
│   ├── cafe-suarez-tradicional.md
│   ├── cafe-suarez-geisha.md
│   └── elida-estate-geisha.md
├── conservas/
│   ├── caballas-aceite-oliva.md
│   ├── caballas-pedro-ximenez.md
│   └── chicharron-atun.md
├── aceite/
│   └── aove-la-despensa.md
├── sales/
│   ├── flor-de-sal.md
│   └── escamas-sal.md
└── accesorios/
    └── bean-green.md            ← tabla de productos dropshipping Bean Green
```

## Convención de las fichas

Cada ficha individual usa frontmatter YAML con estos campos cuando aplique:

```yaml
---
nombre: ...
slug: ...                # URL del producto en Woo (/producto/<slug>)
categoria: cafe|conservas|aceite|sales|accesorios
presentacion: ...        # ej. "bolsa 250 g"
sku: ...                 # cuando esté definido
precio_b2c: ...          # EUR, IVA incluido
precio_b2b: ...          # opcional, vía B2BKing
proveedor: ...           # finca / fabricante / dropshipper
origen: ...              # país / región
variedad: ...            # solo café/aceite
altitud: ...             # solo café
proceso: ...             # solo café
notas_cata: [..., ...]   # solo café
aromas: [..., ...]       # solo café
url_proveedor: ...       # cuando aplique
imagenes:
  - hero: cafe-...-hero.webp
  - lifestyle: cafe-...-lifestyle.webp
  - packaging: cafe-...-packaging.webp
---
```

Tras el frontmatter va la **descripción larga** en Markdown — el mismo texto que se publicará en la descripción larga del producto Woo (en HTML semántico).

## Convención de imágenes

Cada producto, mínimo 3 imágenes en formato **WebP**:

- `<slug>-hero.webp` — cuadrada 1:1, fondo limpio, packaging visible
- `<slug>-lifestyle.webp` — 4:5, contexto de uso
- `<slug>-packaging.webp` — 1:1, detalle del envase/etiqueta

Subidas a WordPress en `/wp-content/uploads/landing-almirante/<categoria>/`.

## Estado actual del repo

- Landing principal publicada en WordPress (ver `wordpress-export/PASOS_WORDPRESS.md`).
- Páginas de categoría en construcción, empezando por **café** (`wordpress-export/cafe/`).
- Sistema de diseño compartido en `wordpress-export/shared/da-design-system.css`.
