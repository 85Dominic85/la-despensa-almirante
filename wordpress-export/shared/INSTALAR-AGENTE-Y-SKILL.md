# Instalar el agente y la skill de diseño en Claude Code

Estos dos archivos definen los cánones del proyecto Almirante para Claude Code.
Deben copiarse a las rutas correctas **una sola vez**.

---

## Paso 1 — Crear las carpetas (si no existen)

En la raíz del proyecto (`E:\Proyectos\Almirante-wordpress-ecommerce\`):

```
.claude/
├── agents/
│   └── almirante-design.md   ← copia de almirante-design-agent.md
└── skills/
    └── almirante-design.md   ← copia de almirante-design-skill.md
```

## Paso 2 — Copiar los archivos

```powershell
# Desde la raíz del proyecto
New-Item -ItemType Directory -Force ".claude\agents"
New-Item -ItemType Directory -Force ".claude\skills"

Copy-Item "wordpress-export\shared\almirante-design-agent.md" ".claude\agents\almirante-design.md"
Copy-Item "wordpress-export\shared\almirante-design-skill.md" ".claude\skills\almirante-design.md"
```

## Paso 3 — Verificar

Abre Claude Code en este proyecto. Deberías ver:
- El agente `almirante-design` disponible para tareas de diseño
- La skill `/almirante-design` disponible como comando slash

## Uso

### Agente
Claude Code usará automáticamente el agente `almirante-design` cuando trabaje
en archivos de este proyecto. Puedes invocarlo explícitamente con:
```
@almirante-design adapta este diseño de Figma a nuestra estructura
```

### Skill
En cualquier conversación con Claude Code:
```
/almirante-design nueva página /conservas con hero y 4 tarjetas de producto
```

---

## Actualizar los cánones

Cuando cambies algo estructural en el proyecto (nuevo prefijo, nuevo token,
nuevo patrón de sección):

1. Edita el archivo fuente en `wordpress-export/shared/`
2. Vuelve a copiar a `.claude/agents/` y `.claude/skills/`
3. La fuente de verdad vive en `wordpress-export/shared/` — los archivos
   en `.claude/` son copias de trabajo para Claude Code.
