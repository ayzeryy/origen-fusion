# Origen & Fusión

Sitio web responsive para una marca guatemalteca de café, cacao e infusiones de especialidad.

## Ejecutar el proyecto

Necesitas Node.js 22.13 o una versión superior.

```bash
npm install
npm run dev
```

Abre `http://localhost:3000` en tu navegador.

## Comandos disponibles

```bash
npm run dev      # desarrollo local
npm run build    # versión optimizada de producción
npm run lint     # revisión del código
```

## Personalización pendiente

Antes de publicar la versión definitiva, reemplaza en `app/page.tsx`:

- los productos, descripciones y precios de muestra;
- la dirección, horarios y ciudad;
- los enlaces reales de Instagram, WhatsApp u otros canales.

El logo utilizado está en `public/origen-fusion-logo.png`.

Al publicar, configura `NEXT_PUBLIC_SITE_URL` con la URL final del sitio para que la tarjeta de redes use el dominio correcto.

## Subir a GitHub

1. Crea un repositorio vacío en GitHub llamado `origen-fusion`.
2. Abre una terminal dentro de esta carpeta.
3. Ejecuta:

```bash
git init
git add .
git commit -m "Crea sitio web de Origen y Fusión"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/origen-fusion.git
git push -u origin main
```

Sustituye `TU-USUARIO` por tu nombre de usuario de GitHub.
