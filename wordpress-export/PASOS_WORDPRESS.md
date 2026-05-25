# Guía de integración de la landing en WordPress
## La Despensa del Almirante — ladespensadelalmirante.com

---

## PASO 1 — Subir imágenes a WordPress Media Library

1. Entra en **wp-admin → Medios → Añadir nuevo**
2. Sube todos los archivos de la carpeta `assets/`:
   - `logo.png`
   - `logo-dorado.png`
   - `aceite.png`
   - `caballas.png`
   - `sal.png`
   - `equipo-presentacion.jpeg`
   - `equipo-cata.jpeg`
   - `cadiz.png`

3. **Importante**: Antes de subir, crea una subcarpeta `landing-almirante` en el gestor de medios (o usa un plugin como "Media Library Folders" para organizarlas). Si no puedes crear subcarpetas, sube las imágenes directamente y en el paso 3 ajusta las rutas.

   > Las rutas en el HTML asumen: `/wp-content/uploads/landing-almirante/ARCHIVO`  
   > Si WordPress las sube a `/wp-content/uploads/2026/05/ARCHIVO`, ajusta las rutas en el HTML.

---

## PASO 2 — Ajustar rutas de imágenes en el HTML

Abre `landing.html` con un editor de texto (Notepad++, VS Code, etc.) y reemplaza todas las ocurrencias de:

```
/wp-content/uploads/landing-almirante/
```

Por la ruta real donde WordPress guardó las imágenes. Por ejemplo, si las subiste en mayo de 2026:

```
/wp-content/uploads/2026/05/
```

Puedes hacer **Buscar y reemplazar** (Ctrl+H) para cambiarlo todo de golpe.

---

## PASO 3 — Instalar plugin "Insert Headers and Footers"

Este plugin es necesario para que los estilos CSS del HTML funcionen correctamente en WordPress.

1. Ve a **wp-admin → Plugins → Añadir nuevo**
2. Busca: **"Insert Headers and Footers"** (por WPBeginner)
3. Instala y activa

Luego:
- Ve a **Ajustes → Insert Headers and Footers**
- En el campo **Scripts in Header**, pega este código:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

---

## PASO 4 — Crear la página de inicio

1. Ve a **wp-admin → Páginas → Añadir nueva**
2. Título de la página: `Inicio`
3. En el editor de bloques (Gutenberg), haz clic en el botón **"+"** para añadir un bloque
4. Busca y selecciona: **"HTML personalizado"**
5. Abre `landing.html` con un editor de texto, **copia todo el contenido** entre las etiquetas `<body>` y `</body>` (sin incluirlas), y pégalo en el bloque HTML personalizado

   > Copia desde `<!-- NAVEGACIÓN FIJA -->` hasta el último `</script>` antes del `</body>`

6. Guarda la página

---

## PASO 5 — Configurar la página como portada

1. Ve a **wp-admin → Ajustes → Lectura**
2. En "La portada muestra", selecciona **"Una página estática"**
3. En "Portada", selecciona **"Inicio"** (la página que acabas de crear)
4. Guarda los cambios

---

## PASO 6 — Ajustar el tema (para que no interfiera)

Si el tema activo (Astra u otro) añade cabecera/pie de página propios que chocan con el diseño de la landing:

**Opción A — Usar plantilla "Sin cabecera" (recomendado con Astra):**
1. En la edición de la página "Inicio", ve al panel derecho → **Astra → Diseño de página**
2. Selecciona **"Sin barras laterales"** y desactiva cabecera y pie del tema

**Opción B — Crear plantilla de página en blanco:**
1. Instala el plugin **"Page Builder Framework"** o **"Blank Page Template"**
2. Asigna la plantilla "Blank / Sin cabecera" a la página "Inicio"

---

## PASO 7 — Plugins recomendados a instalar

Instala estos plugins en orden desde **wp-admin → Plugins → Añadir nuevo**:

| Plugin | Función | Coste |
|--------|---------|-------|
| WooCommerce | Tienda online | Gratis |
| Astra (si no está) | Tema rápido | Gratis |
| Yoast SEO | SEO y sitemap | Gratis |
| WPForms Lite | Formulario de contacto real | Gratis |
| LiteSpeed Cache | Velocidad (Hostinger usa LiteSpeed) | Gratis |
| Wordfence Security | Seguridad | Gratis |
| CookieYes | Banner de cookies RGPD | Gratis |
| WooCommerce Stripe Gateway | Pagos con tarjeta | Gratis |
| WooCommerce PayPal Payments | Pagos PayPal | Gratis |
| B2BKing (free) | Portal mayoristas | Gratis / 139€/año Pro |

> **Nota**: Instala LiteSpeed Cache **antes** que WP Super Cache. En Hostinger con servidor LiteSpeed, LiteSpeed Cache es la opción óptima.

---

## PASO 8 — Reemplazar el formulario por WPForms

El formulario del HTML tiene un feedback visual básico. Para que los mensajes lleguen realmente por email:

1. Instala y activa **WPForms Lite**
2. Crea un formulario nuevo con los campos: Nombre, Email, Empresa, Mensaje
3. Copia el **shortcode** del formulario (ej: `[wpforms id="123"]`)
4. En el HTML de la página, reemplaza el bloque `<form class="da-form"...>...</form>` por:

```html
<div class="da-form-wrapper">
  [wpforms id="123"]
</div>
```

5. Guarda y prueba enviando un mensaje de prueba

---

## PASO 9 — Verificación final

Comprueba que todo funciona en el sitio live:

- [ ] La landing se ve igual que el archivo `landing.html` abierto en local
- [ ] Las imágenes cargan correctamente (abre DevTools → Network para verificar)
- [ ] El botón de WhatsApp flotante abre WhatsApp Web / app
- [ ] El botón "Volver arriba" aparece al hacer scroll
- [ ] Los enlaces del menú (Productos, Equipo, Origen, Contacto) hacen scroll suave a la sección
- [ ] El formulario de contacto envía emails (tras paso 8)
- [ ] La web se ve bien en móvil (prueba en Chrome DevTools → modo responsivo)

---

## PRÓXIMOS PASOS — WooCommerce y B2B

Una vez la landing esté funcionando en WordPress, los siguientes pasos son:

1. **Catálogo de productos**: Crear categorías (Aceites, Conservas, Sales, Café) y añadir los 3 productos estrella con precios aproximados
2. **Pasarelas de pago**: Conectar Stripe y PayPal en WooCommerce
3. **Zonas de envío**: Configurar tarifas provisionales (España 4,95€, Baleares 8,95€, etc.)
4. **Portal B2B**: Configurar B2BKing con los 3 roles de mayorista y descuentos escalonados
5. **Páginas legales**: Aviso Legal, Política de Privacidad (RGPD), T&C, Cookies, Devoluciones
6. **Dropshipping Bean Green**: Listar productos de café y configurar notificación por email

---

*Generado el 19 de mayo de 2026 — La Despensa del Almirante*
