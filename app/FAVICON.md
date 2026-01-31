# 🎨 FAVICON (Opcional)

El favicon es el pequeño icono que aparece en la pestaña del navegador.

## Cómo Añadirlo:

1. Crea o descarga un favicon (16x16 o 32x32 px)
2. Guárdalo como `favicon.ico`
3. Colócalo en la carpeta `app/`

```
app/
├── favicon.ico  ← Aquí
├── layout.tsx
├── page.tsx
└── globals.css
```

## Generadores Online Gratuitos:

- https://favicon.io/
- https://realfavicongenerator.net/

## Opcional:

También puedes usar PNG o SVG:

```typescript
// En app/layout.tsx, añade:
export const metadata = {
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}
```

---

**Nota**: No es necesario para que funcione el sitio, pero mejora la apariencia profesional.
