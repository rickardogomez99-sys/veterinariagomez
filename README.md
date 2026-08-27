# Veterinaria Gómez - Sitio Web Profesional

Sitio web moderno y responsivo para Veterinaria Gómez, ubicada en Santa Ana, Chihuahua.

## 📋 Características

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ SEO optimizado con Schema.org
- ✅ Formulario de contacto con validación
- ✅ Cookie consent banner (RGPD compliant)
- ✅ Google Analytics ready
- ✅ Open Graph para redes sociales
- ✅ PWA (Progressive Web App)
- ✅ Google Maps integrado
- ✅ Enlaces a redes sociales (Facebook)
- ✅ Páginas legales (privacidad, términos)

## 🗂️ Estructura

```
├── index.html          # Página principal
├── gracias.html        # Página post-formulario
├── 404.html            # Página de error
├── privacidad.html     # Aviso de privacidad
├── terminos.html       # Términos y condiciones
├── robots.txt          # Para SEO
├── sitemap.xml         # Mapa del sitio
├── assets/
│   ├── style.css       # Estilos
│   ├── site.js         # JavaScript
│   ├── fonts/          # Fuentes locales (opcional)
│   ├── logo.png
│   ├── storefront.jpg
│   ├── og-image.jpg
│   ├── favicon.ico
│   └── site.webmanifest
└── README.md
```

## 🚀 Cómo Editar

### Cambiar Información de Contacto
Busca `659 576 0296` en los archivos y reemplázalo con tu número.

### Cambiar Colores
Edita `assets/style.css` líneas 1-18 (variables CSS):
```css
--blue: #1D5FA6;        /* Color principal */
--gold: #C08A1E;        /* Color secundario */
```

### Conectar Formulario de Contacto
1. Crea cuenta en [Formspree.io](https://formspree.io) (gratis)
2. En `index.html`, línea 242, agrega:
   ```html
   <form class="gform" id="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">
   ```

### Habilitar Google Analytics
En `assets/site.js`, línea 29, reemplaza `G-XXXXXXXXXX` con tu ID de Google Analytics 4.

## 📦 Deploy

### Con Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

### Con GitHub Pages
1. Push a GitHub
2. Activa GitHub Pages en Settings
3. Selecciona rama `main`

## 📞 Contacto

**Veterinaria Gómez**
- 📱 659 576 0296
- 📍 C. Paralelo y Ortiz Camacho 702, Santa Ana, Chih.
- 🌐 [Facebook](https://www.facebook.com/p/Veterinaria-GOMEZ-100032460444443/)

---

*Última actualización: 2026-08-27*
