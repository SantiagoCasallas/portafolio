# David Casallas · Portafolio

Portafolio personal desarrollado con Angular y CSS. Incluye presentación, experiencia, contacto y tarjetas filtrables de proyectos. Las tarjetas actuales describen proyectos planeados; sus enlaces se añadirán al disponer de las demos.

## Desarrollo local

Requisitos: Node.js 24 y pnpm 11.25.0.

```sh
npx --yes pnpm@11.25.0 install --frozen-lockfile
npx --yes pnpm@11.25.0 start
```

## Compilación

```sh
npx --yes pnpm@11.25.0 build
```

Los archivos publicables se generan en `dist/client`.

## Desplegar en Vercel

1. Subir este repositorio a GitHub.
2. En Vercel, elegir **Add New → Project** e importar `SantiagoCasallas/portafolio`.
3. Mantener la raíz del proyecto en `./` y Node.js en `24.x`.
4. El archivo `vercel.json` configura instalación, compilación y directorio de salida automáticamente.
5. Pulsar **Deploy**. Esta versión no necesita variables de entorno.

Los siguientes pushes a la rama de producción configurada en Vercel generarán nuevos despliegues.

## Archivos excluidos

No se suben dependencias, compilados, cachés, variables de entorno ni el checkout local de Sites. Se conservan `pnpm-lock.yaml` y `pnpm-workspace.yaml` para instalaciones reproducibles. La limpieza del índice no elimina archivos del historial anterior.
