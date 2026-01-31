# 🚀 GUÍA COMPLETA: GitHub + Vercel

## 📋 RESUMEN DE NOMBRES DE ARCHIVOS

Para que todo funcione correctamente, necesitas **6 imágenes** en la carpeta `public/`:

| Nombre del archivo | Descripción |
|-------------------|-------------|
| `aceite.jpg` | Aceite de Oliva (Hero + Producto 1) |
| `caballas.jpg` | Caballas al Pedro Ximénez (Producto 2) |
| `sal.jpg` | Escamas de Sal (Producto 3) |
| `equipo-presentacion.jpg` | Foto oficial del equipo |
| `equipo-cata.jpg` | Foto de la cata de productos |
| `cadiz.jpg` | Imagen de la Bahía de Cádiz |

---

## 🎯 PARTE 1: PREPARAR TU PROYECTO

### Paso 1: Estructura de Carpetas

Tu proyecto debe tener esta estructura:

```
la-despensa-almirante/
├── app/
│   ├── layout.tsx
│   ├── page.tsx          ← El archivo que te proporcioné
│   ├── globals.css
│   └── favicon.ico (opcional)
├── public/
│   ├── aceite.jpg         ← TUS IMÁGENES AQUÍ
│   ├── caballas.jpg
│   ├── sal.jpg
│   ├── equipo-presentacion.jpg
│   ├── equipo-cata.jpg
│   └── cadiz.jpg
├── tailwind.config.ts
├── package.json
├── tsconfig.json
└── next.config.js
```

### Paso 2: Renombrar tus Imágenes

Renombra tus imágenes actuales a estos nombres:

1. **Aceite de Oliva** → `aceite.jpg`
2. **Caballas** → `caballas.jpg`
3. **Sal** → `sal.jpg`
4. **Foto del equipo (presentación)** → `equipo-presentacion.jpg`
5. **Foto del equipo (cata)** → `equipo-cata.jpg`
6. **Bahía de Cádiz** → `cadiz.jpg`

⚠️ **IMPORTANTE**: 
- Los nombres deben estar en minúsculas
- Usa guiones, no espacios
- Extensiones: `.jpg`, `.jpeg`, o `.png` (todas funcionan)

### Paso 3: Verificar que el Proyecto Funciona Localmente

Abre la terminal en la carpeta del proyecto:

```bash
# Instalar dependencias
npm install

# Instalar lucide-react (necesario para los iconos)
npm install lucide-react

# Iniciar el servidor de desarrollo
npm run dev
```

Abre `http://localhost:3000` y verifica que:
✅ La página carga correctamente
✅ Las imágenes se ven (no placeholders grises)
✅ Todo el contenido está visible

---

## 📤 PARTE 2: SUBIR A GITHUB

### Opción A: Desde la Terminal (Recomendado)

#### 1. Inicializar Git en tu proyecto

```bash
# Navega a tu carpeta del proyecto
cd la-despensa-almirante

# Inicializa Git
git init

# Añade todos los archivos
git add .

# Haz el primer commit
git commit -m "Initial commit - La Despensa del Almirante"
```

#### 2. Crear un repositorio en GitHub

1. Ve a [github.com](https://github.com)
2. Haz clic en el botón **"New"** (arriba a la derecha)
3. Nombre del repositorio: `la-despensa-almirante`
4. Descripción: "Landing page para La Despensa del Almirante"
5. Déjalo como **Público** o **Privado** (tu elección)
6. **NO selecciones** "Add a README file"
7. Haz clic en **"Create repository"**

#### 3. Conectar tu proyecto local con GitHub

GitHub te mostrará unas instrucciones. Copia y pega estos comandos en tu terminal:

```bash
# Reemplaza "TU-USUARIO" con tu nombre de usuario de GitHub
git remote add origin https://github.com/TU-USUARIO/la-despensa-almirante.git

# Cambia el nombre de la rama a main (si no lo está ya)
git branch -M main

# Sube los archivos a GitHub
git push -u origin main
```

🎉 **¡Listo!** Tu proyecto ya está en GitHub.

---

### Opción B: Desde GitHub Desktop (Más Fácil)

1. Descarga [GitHub Desktop](https://desktop.github.com/)
2. Abre GitHub Desktop
3. File → Add Local Repository → Busca tu carpeta del proyecto
4. Publish Repository → Elige un nombre y privacidad
5. Listo, tu proyecto está en GitHub

---

## 🌐 PARTE 3: DESPLEGAR EN VERCEL

### Paso 1: Crear Cuenta en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **"Sign Up"**
3. Selecciona **"Continue with GitHub"**
4. Autoriza a Vercel para acceder a tus repositorios

### Paso 2: Importar tu Proyecto

1. En el dashboard de Vercel, haz clic en **"Add New..."** → **"Project"**
2. Busca tu repositorio: `la-despensa-almirante`
3. Haz clic en **"Import"**

### Paso 3: Configurar el Proyecto

Vercel detectará automáticamente que es un proyecto Next.js. Solo necesitas:

1. **Project Name**: `la-despensa-almirante` (o el que prefieras)
2. **Framework Preset**: Next.js (ya detectado)
3. **Root Directory**: `./` (dejar por defecto)
4. **Build Command**: `npm run build` (dejar por defecto)
5. **Output Directory**: `.next` (dejar por defecto)

### Paso 4: Variables de Entorno (Opcional)

Si en el futuro necesitas API keys, aquí es donde las pondrías. Por ahora, **déjalo vacío**.

### Paso 5: Desplegar

1. Haz clic en **"Deploy"**
2. Espera 2-3 minutos (Vercel compilará tu proyecto)
3. ¡Listo! Vercel te dará una URL como:
   ```
   https://la-despensa-almirante.vercel.app
   ```

---

## 🎨 PARTE 4: CONFIGURAR DOMINIO PERSONALIZADO (Opcional)

Si tienes un dominio propio (ej: `ladespensadelmirante.com`):

### En Vercel:

1. Ve a tu proyecto → Settings → Domains
2. Add Domain → Escribe tu dominio
3. Vercel te dará instrucciones DNS

### En tu Proveedor de Dominio (GoDaddy, Namecheap, etc.):

Añade estos registros DNS:

```
Tipo: A
Nombre: @
Valor: 76.76.21.21

Tipo: CNAME
Nombre: www
Valor: cname.vercel-dns.com
```

⏰ **Tiempo de propagación**: 24-48 horas (aunque suele ser menos)

---

## 🔄 PARTE 5: ACTUALIZAR TU SITIO EN EL FUTURO

Cada vez que hagas cambios:

### Desde la Terminal:

```bash
# 1. Guarda tus cambios
git add .

# 2. Haz un commit con un mensaje descriptivo
git commit -m "Actualizar fotos de productos"

# 3. Sube los cambios a GitHub
git push
```

### Desde GitHub Desktop:

1. Abre GitHub Desktop
2. Verás tus cambios listados
3. Escribe un mensaje de commit
4. Haz clic en "Commit to main"
5. Haz clic en "Push origin"

🚀 **Vercel desplegará automáticamente** los cambios en 2-3 minutos.

---

## 🐛 SOLUCIÓN DE PROBLEMAS COMUNES

### Problema 1: Las imágenes no se ven en Vercel

**Causa**: Los nombres de archivo no coinciden

**Solución**:
1. Verifica que las imágenes estén en `public/`
2. Revisa que los nombres sean EXACTOS:
   - `aceite.jpg` (no `Aceite.jpg` ni `aceite.JPG`)
   - `caballas.jpg`
   - `sal.jpg`
   - `equipo-presentacion.jpg`
   - `equipo-cata.jpg`
   - `cadiz.jpg`

### Problema 2: Error "Module not found: lucide-react"

**Solución**:
```bash
npm install lucide-react
git add .
git commit -m "Add lucide-react dependency"
git push
```

### Problema 3: La página se ve diferente en Vercel que en local

**Causa**: Caché del navegador

**Solución**:
- Presiona `Ctrl + Shift + R` (Windows) o `Cmd + Shift + R` (Mac)
- O abre en modo incógnito

### Problema 4: Build failed en Vercel

**Solución**:
1. Ve a la pestaña "Deployments" en Vercel
2. Haz clic en el deployment fallido
3. Lee el error en los logs
4. Copia el error y búscalo en Google o pregúntame

---

## 📝 CHECKLIST FINAL

Antes de desplegar, verifica:

- [ ] El proyecto funciona correctamente en local (`npm run dev`)
- [ ] Las 6 imágenes están en `/public/` con los nombres correctos
- [ ] `lucide-react` está instalado (`npm install lucide-react`)
- [ ] El archivo `page.tsx` está actualizado con el código nuevo
- [ ] Has hecho commit de todos los cambios
- [ ] El repositorio está en GitHub
- [ ] Has importado el proyecto en Vercel
- [ ] El sitio funciona en la URL de Vercel

---

## 🎯 RESUMEN DE COMANDOS RÁPIDOS

```bash
# Preparar el proyecto
npm install
npm install lucide-react

# Subir a GitHub (primera vez)
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TU-USUARIO/la-despensa-almirante.git
git branch -M main
git push -u origin main

# Actualizar en el futuro
git add .
git commit -m "Tu mensaje aquí"
git push
```

---

## 🆘 ¿NECESITAS AYUDA?

Si encuentras algún problema:
1. Copia el error EXACTO que ves
2. Dime en qué paso estás
3. Te ayudaré a resolverlo

---

## 🎉 ¡FELICIDADES!

Una vez que todo esté desplegado, tu sitio estará:
- ✅ En línea 24/7
- ✅ Con HTTPS seguro
- ✅ Con URL profesional
- ✅ Listo para compartir con clientes

**URL de tu sitio**: `https://la-despensa-almirante.vercel.app`
(o tu dominio personalizado si lo configuraste)
