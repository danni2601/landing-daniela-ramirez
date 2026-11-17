# Landing de Daniela Ramírez — TÖWI Studios

Sitio de portafolio y manual de marca de **Daniela Ramírez Olmos (TÖWI Studios)**, hecho con HTML,
CSS y JavaScript sin dependencias ni frameworks.

- **Portafolio:** presentación, sobre mí, educación, experiencia, galería de trabajos, habilidades y contacto.
- **La marca:** el sistema de diseño completo (personalidad, colores, tipografía, espaciado, profundidad,
  formas, componentes y reglas de uso).

## Cómo verlo

Abre `index.html` en cualquier navegador. La navegación entre el portafolio y la página de la marca
funciona con enlaces relativos, así que también se puede publicar tal cual en GitHub Pages o en
cualquier hosting estático.

## Estructura

```
index.html            Portafolio (una sola página con secciones)
marca.html            Sistema de diseño / manual de marca
css/estilos.css       Estilos, tokens de color, temas claro y oscuro, diseño adaptable
js/app.js             Tema, menú móvil, filtros, galería, copiar colores y animaciones
img/                  Imágenes y videos optimizados para la web
Assets/               Material original (ilustraciones, renders y videos sin comprimir)
DESIGN.md             Sistema de diseño en el formato oficial, validado con @google/design.md
```

## Sistema de diseño

Los colores, la tipografía y el espaciado salen de `DESIGN.md`:

| Uso | Color |
| --- | --- |
| Títulos | `#00BFC1` Tropical Cyan |
| Ornamentos | `#1A9EA0` Sea Green |
| Acentos | `#40E0D0` Turquesa |
| Texto | `#04121C` Abyss |
| Base | `#FFFFFF` Blanco |

Para validar el documento:

```bash
npx @google/design.md lint DESIGN.md
```

## Detalles técnicos

- Tema claro y oscuro con preferencia guardada en el navegador.
- Menú adaptable con botón de hamburguesa en móvil.
- Galería con filtros y visor de imagen.
- Animaciones suaves que respetan la preferencia de movimiento reducido.
- Navegación con teclado y etiquetas accesibles.
- Imágenes en `assets/web/` reducidas para que el sitio cargue rápido.

## Pendiente

- Sustituir las tipografías sustitutas (Bodoni Moda y Manrope) por **Montecatini Pro** y **Karmina Sans**
  cuando estén disponibles los archivos con licencia.

---

© TÖWI Studios · Daniela Ramírez Olmos
