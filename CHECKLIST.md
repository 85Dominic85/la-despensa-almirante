# ✅ CHECKLIST RÁPIDO - ANTES DE SUBIR A GITHUB/VERCEL

## 📁 ESTRUCTURA DE TU PROYECTO

```
la-despensa-almirante/
│
├── app/
│   ├── layout.tsx          ✅ Ya lo tienes
│   ├── page.tsx            ⚠️ REEMPLAZAR con page_vertical.tsx
│   └── globals.css         ✅ Ya lo tienes
│
├── public/                 ⚠️ AQUÍ VAN TUS 6 IMÁGENES
│   ├── aceite.jpg          ← Renombra tu imagen del aceite
│   ├── caballas.jpg        ← Renombra tu imagen de las caballas
│   ├── sal.jpg             ← Renombra tu imagen de la sal
│   ├── equipo-presentacion.jpg  ← hugo_presentacion.jpeg
│   ├── equipo-cata.jpg          ← hugo_gourmet.jpeg
│   └── cadiz.jpg                ← pagina_ejemplo_3.png o cualquier foto de Cádiz
│
├── .gitignore              ⚠️ CREAR (archivo que te proporcioné)
├── package.json            ⚠️ REEMPLAZAR (archivo actualizado)
├── tailwind.config.ts      ✅ Ya lo tienes
├── tsconfig.json           ✅ Ya lo tienes
└── README.md               ⚠️ CREAR (opcional, para GitHub)
```

---

## 🎯 PASOS ANTES DE SUBIR

### 1. Preparar el archivo principal

```bash
# En tu carpeta app/
# Renombra page.tsx a page_OLD.tsx (por si acaso)
# Copia page_vertical.tsx y renómbralo a page.tsx
```

### 2. Preparar las imágenes

Renombra tus imágenes a estos nombres EXACTOS (en minúsculas):

| Tu imagen actual | Nuevo nombre |
|-----------------|--------------|
| `390bc97ee0c9479983ad81607a4af10d.jpg` | `aceite.jpg` |
| `9734056F65134122A42E93814F44CA58.png` | `caballas.jpg` |
| `de841f7ad9f34b7cb0832c58b2726ad8.jpg` | `sal.jpg` |
| `hugo_presentacion.jpeg` | `equipo-presentacion.jpg` |
| `hugo_gourmet.jpeg` | `equipo-cata.jpg` |
| `pagina_ejemplo_3.png` | `cadiz.jpg` |

💡 **Tip**: Puedes usar `.jpg`, `.jpeg` o `.png` - todas funcionan

### 3. Añadir archivos de configuración

Copia estos archivos que te proporcioné a la raíz del proyecto:

- [ ] `.gitignore`
- [ ] `package.json` (actualizado)
- [ ] `README.md` (opcional, renombra README_GITHUB.md a README.md)

### 4. Verificar que funciona localmente

```bash
# Elimina node_modules y reinstala (para asegurar)
rm -rf node_modules
npm install

# Instala lucide-react
npm install lucide-react

# Inicia el servidor
npm run dev
```

Abre `http://localhost:3000` y verifica:

- [ ] El header se ve correctamente
- [ ] El título "Donde la Tradición y la Calidad Navegan Juntas" está visible
- [ ] Las 3 tarjetas de productos tienen imágenes (no cuadros grises)
- [ ] Las 2 fotos del equipo se ven
- [ ] La imagen de Cádiz está visible
- [ ] El formulario de contacto funciona

---

## 🚀 ORDEN DE ACCIONES

### Paso 1: Preparar (Local)
```bash
✅ Renombrar imágenes
✅ Actualizar page.tsx
✅ Copiar .gitignore
✅ Actualizar package.json
✅ Verificar que funciona: npm run dev
```

### Paso 2: GitHub
```bash
✅ git init
✅ git add .
✅ git commit -m "Initial commit"
✅ Crear repo en github.com
✅ git remote add origin https://github.com/TU-USUARIO/la-despensa-almirante.git
✅ git push -u origin main
```

### Paso 3: Vercel
```bash
✅ Ir a vercel.com
✅ Conectar con GitHub
✅ Importar el repositorio
✅ Deploy
✅ Esperar 2-3 minutos
✅ ¡Listo! Tu sitio está en línea
```

---

## 📸 NOMBRES DE ARCHIVOS - RESUMEN RÁPIDO

Copia y pega esto para renombrar rápidamente:

```bash
# Si tienes las imágenes en la carpeta actual
mv 390bc97ee0c9479983ad81607a4af10d.jpg aceite.jpg
mv 9734056F65134122A42E93814F44CA58.png caballas.jpg
mv de841f7ad9f34b7cb0832c58b2726ad8.jpg sal.jpg
mv hugo_presentacion.jpeg equipo-presentacion.jpg
mv hugo_gourmet.jpeg equipo-cata.jpg
mv pagina_ejemplo_3.png cadiz.jpg

# Luego mueve todo a la carpeta public/
mv *.jpg public/
```

O hazlo manualmente (más seguro):
1. Click derecho en la imagen
2. Renombrar
3. Escribe el nuevo nombre (ej: `aceite.jpg`)
4. Muévela a la carpeta `public/`

---

## ⚠️ ERRORES COMUNES

### ❌ Error: "Module not found: lucide-react"
**Solución**: 
```bash
npm install lucide-react
```

### ❌ Las imágenes no se ven (cuadros grises)
**Solución**: 
- Verifica que las imágenes estén en `/public/`
- Verifica que los nombres sean EXACTOS (minúsculas, con guiones)

### ❌ Error al hacer push a GitHub
**Solución**: 
- Verifica que hayas creado el repositorio en github.com
- Verifica que la URL sea correcta
- Intenta: `git remote -v` para ver la URL configurada

---

## 🎉 ¿TODO LISTO?

Si has completado todos los pasos:

- ✅ Imágenes renombradas y en `/public/`
- ✅ `page.tsx` actualizado
- ✅ Funciona en local (`npm run dev`)
- ✅ Subido a GitHub
- ✅ Desplegado en Vercel

**¡Felicidades!** 🎊 Tu sitio está en línea.

**URL**: `https://la-despensa-almirante.vercel.app`

---

## 📞 ¿NECESITAS AYUDA?

Si algo no funciona:
1. Lee el error COMPLETO
2. Busca en la guía GUIA_GITHUB_VERCEL.md
3. Si no lo encuentras, dime qué error ves exactamente
