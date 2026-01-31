# 🚀 INSTALACIÓN RÁPIDA - La Despensa del Almirante

## 📦 Paso 1: Preparar las Imágenes

Antes de instalar, coloca tus 6 imágenes en la carpeta `public/`:

```
public/
├── aceite.jpg
├── caballas.jpg
├── sal.jpg
├── equipo-presentacion.jpg
├── equipo-cata.jpg
└── cadiz.jpg
```

**Ver**: `public/INSTRUCCIONES.md` para más detalles.

---

## 💻 Paso 2: Instalar Dependencias

Abre la terminal en esta carpeta y ejecuta:

```bash
npm install
```

Esto instalará:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React (iconos)

⏱️ **Tiempo estimado**: 2-3 minutos

---

## 🏃 Paso 3: Iniciar el Servidor

```bash
npm run dev
```

Abre tu navegador en: **http://localhost:3000**

---

## ✅ Verificación

Deberías ver:

- ✅ Header con navegación
- ✅ Hero con "Donde la Tradición y la Calidad Navegan Juntas"
- ✅ 3 productos con imágenes (NO cuadros grises)
- ✅ Sección del equipo con 2 fotos
- ✅ Formulario de contacto
- ✅ Footer

**Si ves cuadros grises**: Las imágenes no están en `public/` o tienen nombres incorrectos.

---

## 🌐 Paso 4: Desplegar (Opcional)

### Subir a GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TU-USUARIO/la-despensa-almirante.git
git push -u origin main
```

### Desplegar en Vercel:

1. Ve a [vercel.com](https://vercel.com)
2. Sign up con GitHub
3. Import Project → `la-despensa-almirante`
4. Deploy
5. ¡Listo!

---

## 🔧 Comandos Útiles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar en producción
npm start

# Verificar errores
npm run lint
```

---

## 📁 Estructura del Proyecto

```
la-despensa-almirante/
├── app/
│   ├── layout.tsx       → Layout principal
│   ├── page.tsx         → Página principal
│   └── globals.css      → Estilos globales
├── public/
│   ├── aceite.jpg       → TUS IMÁGENES AQUÍ
│   ├── caballas.jpg
│   ├── sal.jpg
│   ├── equipo-presentacion.jpg
│   ├── equipo-cata.jpg
│   └── cadiz.jpg
├── .gitignore           → Archivos ignorados por Git
├── package.json         → Dependencias
├── tailwind.config.ts   → Configuración de Tailwind
├── tsconfig.json        → Configuración de TypeScript
└── next.config.js       → Configuración de Next.js
```

---

## ⚠️ Problemas Comunes

### Error: "Module not found: lucide-react"

```bash
npm install lucide-react
```

### Las imágenes no se ven

- Verifica que estén en `public/`
- Verifica que los nombres sean exactos (minúsculas, con guiones)

### Error al hacer `npm install`

```bash
# Elimina node_modules y reinstala
rm -rf node_modules package-lock.json
npm install
```

---

## 📞 ¿Necesitas Ayuda?

Si algo no funciona:

1. Verifica que Node.js esté instalado: `node --version` (necesitas v16+)
2. Lee los errores completos en la terminal
3. Busca el error en Google
4. Pregúntame con el error exacto

---

## 🎉 ¡Todo Listo!

Una vez que el servidor esté corriendo y las imágenes en su lugar:

- ✅ Tu landing page estará funcionando
- ✅ Lista para personalizar
- ✅ Lista para desplegar en Vercel

**URL local**: http://localhost:3000
**URL producción**: Después de desplegar en Vercel

---

**¡Disfruta tu nueva landing page! 🚀**
