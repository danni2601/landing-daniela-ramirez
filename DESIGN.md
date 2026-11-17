---
version: alpha
name: TÖWI Studios — Sistema de diseño
description: "Sistema de diseño de Daniela Ramírez Olmos (TÖWI Studios): maximalista, orgánico y funcional, construido sobre verdes azulados, azules profundos y una base blanca."
colors:
  primary: "#00BFC1"
  secondary: "#1A9EA0"
  tertiary: "#40E0D0"
  neutral: "#FFFFFF"
  text: "#04121C"
typography:
  h1:
    fontFamily: Montecatini Pro
    fontSize: 66px
    fontWeight: 700
    lineHeight: 1.05
  h2:
    fontFamily: Montecatini Pro
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.15
  h3:
    fontFamily: Montecatini Pro
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.2
  subtitle:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: 800
    lineHeight: 1.3
  body:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
rounded:
  sm: 8px
  md: 16px
  lg: 24px
  full: 9999px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text}"
    rounded: "{rounded.full}"
    typography: "{typography.subtitle}"
    padding: "{spacing.md}"
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.text}"
    rounded: "{rounded.full}"
    typography: "{typography.body}"
    padding: "{spacing.md}"
  heading:
    textColor: "{colors.primary}"
    typography: "{typography.h1}"
  body-copy:
    textColor: "{colors.text}"
    typography: "{typography.body}"
  ornament:
    backgroundColor: "{colors.secondary}"
---

# MI SISTEMA DE DISEÑO

**Daniela Ramírez Olmos** — TÖWI Studios

## Overview

*Personalidad de la marca.*

Mi marca es una estética un tanto maximalista, orgánica y centrada en ser funcional, trata de ser una agradable experiencia y artística. Se apoya de verdes azulados y azules oscuros y un blanco que te da la certeza de transparencia, creatividad y pasión por la ilustración.

Priorizo la funcionalidad y las figuras orgánicas, una composición admirable y una tipografía que represente a la marca. Está pensada para diseñadores que les interese la experimentación; respeta siempre el trato al usuario. En una frase: **es Artístico pero funcional, tiene un buen contraste y no se olvida de la experiencia del usuario.**

## Colors

*Colores.*

Mi paleta está compuesta por 3 verdes azulados, 1 verde menta, azules oscuros y una base blanca contrastante con todo, claramente todos tienen sus derivados.

- **Primary (#00BFC1):** Tropical Cyan. Es para los títulos.
- **Secondary (#1A9EA0):** Sea Green. Para las ornamentaciones y decorativos de la página.
- **Tertiary (#40E0D0):** Turquesa. Es para dar acentuaciones, se usa en la mayoría de toda la composición, pero al ser un color brillante es un acento en los iconos al ser seleccionados.
- **Neutral (#FFFFFF):** Blanco base, da la certeza de transparencia y contrasta con todo.
- **Text (#04121C):** Abyss. Para el cuerpo del texto.

## Typography

*Tipografía.*

Se usan 2 familias tipográficas:

- **Títulos:** *Montecatini Pro* y todas sus variantes. Para el título principal sería `66px`.
- **Subtítulos:** *Manrope* usando `ExtraBold`.
- **Texto completo:** *Manrope* usando `Regular`.

Montecatini Pro se carga desde Adobe Fonts (kit propio) en sus cuatro anchos —Ampio, Largo, Normale y Stretto— con pesos 400 y 700. El sitio usa **Largo**. La familia no incluye cursivas y sus minúsculas están dibujadas como versalitas, así que los títulos se leen en mayúsculas. *Karmina Sans*, la familia original para el texto corrido, no viene en el kit: mientras se consigue, el texto se compone en *Manrope*, de proporciones y peso equivalentes.

Las medidas de los niveles intermedios (subtítulos, texto y pies de página) son una propuesta de partida construida a partir del título de `66px`; pueden ajustarse sin alterar el resto del sistema.

## Layout

*Layout y espaciado.*

El layout se basa en una composición flexible que combina orden y experimentación visual. Se utiliza una estructura clara para priorizar la funcionalidad, mientras que los elementos decorativos aportan una personalidad maximalista y orgánica.

El espaciado parte de una base de `4px` y crece en múltiplos (`4`, `8`, `16`, `24`, `40`, `64`), de manera que la retícula se mantiene ordenada incluso cuando la composición se vuelve más experimental.

## Elevation & Depth

*Profundidad.*

La profundidad se utiliza para crear jerarquía visual y distinguir los elementos interactivos de los decorativos. Se logra mediante superposición, contraste de color, sombras suaves y variaciones de escala, sin perder la claridad de la interfaz.

## Shapes

*Formas.*

La identidad visual utiliza formas orgánicas, curvas y asimétricas que transmiten creatividad, movimiento y experimentación. Estas conviven con estructuras geométricas que mantienen el orden y la funcionalidad.

Los botones emplean bordes redondeados (`8px`, `16px`, `24px` y forma de píldora), lo que suaviza la geometría sin volverla informal.

## Components

*Componentes.*

Los componentes mantienen una apariencia coherente con la identidad artística de la marca, sin comprometer la facilidad de uso. Para los botones utilizan colores contrastantes, bordes redondeados y texto legible. Deben distinguirse claramente entre acciones principales y secundarias.

- **Botón principal:** fondo Tropical Cyan, texto Abyss y forma de píldora. Es la acción que debe resaltar.
- **Botón secundario:** fondo blanco, texto Abyss y borde visible. Acompaña sin competir con el principal.
- **Títulos:** Tropical Cyan sobre la base blanca o sobre fondos oscuros, nunca sobre el turquesa brillante.
- **Texto de párrafo:** Abyss sobre blanco para garantizar la lectura.
- **Ornamentos:** Sea Green, siempre decorativos y nunca por encima del contenido.

## Do's and Don'ts

*Reglas de uso: sí y no.*

### Do

- Usar colores con contraste suficiente para facilitar la lectura.
- Mantener una jerarquía tipográfica clara.
- Combinar formas orgánicas con estructuras ordenadas.
- Utilizar componentes consistentes y accesibles.
- Reservar los colores brillantes para destacar acciones y elementos clave.

### Don't

- Saturar las pantallas con ornamentación innecesaria.
- Usar turquesa brillante para párrafos extensos.
- Mezclar estilos de iconos o demasiadas tipografías.
- Aplicar sombras fuertes a todos los elementos.
- Sacrificar la navegación o legibilidad por la estética.
