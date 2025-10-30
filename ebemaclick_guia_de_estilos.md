

# Guía de Estilos: Landing Page EbemaClick

**Documento de Referencia para Diseño y Desarrollo**

---

## 1. Introducción

Esta guía de estilos establece los estándares de diseño, identidad visual y componentes de interfaz de usuario (UI) para la landing page de **EbemaClick**. Su propósito es asegurar la consistencia, coherencia y calidad en todas las futuras actualizaciones y desarrollos del sitio. Adherirse a estas directrices es fundamental para mantener una experiencia de usuario unificada y reforzar la identidad de marca de Ebema.

El documento está dirigido a diseñadores, desarrolladores y equipos de marketing que trabajen en el proyecto. Proporciona una base sólida para la toma de decisiones de diseño y la implementación técnica, garantizando que cada elemento visual y funcional se alinee con los objetivos estratégicos de la marca: comunicar **confianza, solidez industrial y facilidad de compra en línea**.

---

## 2. Identidad de Marca

La identidad de marca de EbemaClick se basa en los más de 40 años de trayectoria de Ebema en la industria de la construcción chilena. El diseño debe proyectar una imagen moderna y robusta, sin perder la seriedad y el respaldo técnico que caracterizan a la empresa.

### 2.1. Logo

El logo de Ebema es el principal identificador de la marca. Su uso debe ser consistente y respetuoso con las directrices corporativas.

**Versión Principal**

Se utilizará el logo a color sobre fondos blancos o claros para asegurar su máxima legibilidad.

<img src="/home/ubuntu/ebemaclick-landing/src/assets/logo.png" alt="Logo Ebema a color" width="200"/>

**Reglas de Uso**

| Regla | Descripción |
| :--- | :--- |
| **Espacio de Respeto** | Se debe mantener un área de exclusión alrededor del logo, equivalente al 50% de su altura, libre de otros elementos gráficos. |
| **Tamaño Mínimo** | El logo no debe reproducirse en un tamaño inferior a 80px de ancho en digital para garantizar su legibilidad. |
| **Consistencia** | No se debe alterar, distorsionar, rotar ni aplicar efectos al logo. |
| **Ubicación** | El logo debe aparecer en la esquina superior izquierda del header y en el footer de la página. |

### 2.2. Paleta de Colores

La paleta de colores define la atmósfera visual de la landing page. Combina los colores corporativos de Ebema con tonos neutros para crear un diseño limpio, industrial y enfocado en la conversión.

**Colores Principales**

| Color | Hex | Variable CSS | Uso Principal |
| :--- | :--- | :--- | :--- |
| **Rojo Ebema** | `#ed1c24` | `--ebema-red` | Botones CTA, enlaces importantes, acentos, iconos. |
| **Gris Acero** | `#6d6e71` | `--ebema-gray` | Textos principales, títulos, footer, fondos oscuros. |

**Colores Secundarios y de Soporte**

| Color | Hex | Variable CSS | Uso |
| :--- | :--- | :--- | :--- |
| **Fondo Claro** | `#f5f5f5` | `--ebema-light-gray` | Fondos de secciones para crear contraste. |
| **Blanco** | `#ffffff` | `N/A` | Fondo principal, texto sobre fondos oscuros. |
| **Verde Éxito** | `#28a745` | `N/A` | Iconos de validación, mensajes de éxito. |
| **Rojo Error** | `#dc3545` | `N/A` | Mensajes de error, iconos de problemas. |

### 2.3. Tipografía

La tipografía ha sido seleccionada para maximizar la legibilidad y mantener la coherencia con la identidad corporativa de Ebema. Se utilizan fuentes estándar de sistema para garantizar un rendimiento óptimo y una visualización consistente en todos los dispositivos.

**Fuentes Utilizadas**

| Rol | Fuente | Peso | Estilo |
| :--- | :--- | :--- | :--- |
| **Titulares (H1, H2, H3)** | **Helvetica Neue LT Std** (o fallback a Arial, sans-serif) | **Bold Condensed** | Mayúsculas/Minúsculas |
| **Textos de Párrafo** | **Arial** (o fallback a sans-serif) | Regular | Normal |
| **Botones y Enlaces** | **Arial** (o fallback a sans-serif) | Bold | Normal |

**Jerarquía Tipográfica**

| Elemento | Tamaño (Desktop) | Tamaño (Móvil) | Peso | Color |
| :--- | :--- | :--- | :--- | :--- |
| **H1 (Hero Title)** | 48px - 60px | 36px - 42px | Bold | Blanco / Gris Acero |
| **H2 (Section Title)** | 36px - 42px | 30px - 36px | Bold | Gris Acero (`#6d6e71`) |
| **H3 (Card Title)** | 20px - 24px | 18px - 20px | Bold | Gris Acero (`#6d6e71`) |
| **Párrafo** | 16px - 18px | 16px | Regular | Gris Acero (`#6d6e71`) |
| **Botón** | 16px | 16px | Bold | Blanco / Rojo Ebema |
| **Etiqueta (Label)** | 14px | 14px | Semibold | Gris Acero (`#6d6e71`) |




---

## 3. Componentes de Interfaz de Usuario (UI)

Los componentes de UI son los bloques de construcción de la landing page. Deben ser consistentes, reutilizables y seguir los estándares de diseño definidos.

### 3.1. Botones (Buttons)

Los botones son el principal elemento para las llamadas a la acción (CTA). Su diseño debe ser claro, consistente y guiar al usuario hacia los objetivos de conversión.

**Botón Primario**

Se utiliza para las acciones más importantes, como "Cotiza ahora" o "Enviar cotización".

- **Estilo**: Fondo rojo Ebema (`#ed1c24`), texto blanco, esquinas redondeadas.
- **Hover**: Tono de rojo ligeramente más oscuro (`#d11920`), sombra más pronunciada.
- **Clase CSS**: `btn-primary`

**Botón Secundario**

Se utiliza para acciones secundarias, como "Ver catálogo".

- **Estilo**: Fondo transparente, borde blanco (sobre fondos oscuros) o rojo Ebema (sobre fondos claros), texto blanco o rojo.
- **Hover**: Fondo blanco con texto rojo (o viceversa).
- **Clase CSS**: `btn-secondary`

| Estado | Botón Primario | Botón Secundario (sobre oscuro) |
| :--- | :--- | :--- |
| **Normal** | Cotiza ahora | Ver catálogo |
| **Hover** | Cotiza ahora | Ver catálogo |

### 3.2. Formularios (Forms)

Los formularios son cruciales para la captura de leads. Su diseño debe ser limpio, fácil de usar y minimizar la fricción.

**Campos de Entrada (Inputs)**

- **Estilo**: Borde gris claro, esquinas redondeadas, padding interno.
- **Focus**: Borde de 2px en rojo Ebema (`#ed1c24`) para indicar el campo activo.
- **Validación**: Borde rojo error (`#dc3545`) para campos con errores.

**Etiquetas (Labels)**

- **Estilo**: Texto en gris acero (`#6d6e71`), peso semibold, ubicado sobre el campo de entrada.

**Selectores (Dropdowns)**

- **Estilo**: Apariencia consistente con los campos de entrada, con un icono de flecha hacia abajo.

### 3.3. Cards

Las cards se utilizan para presentar información de manera modular, como en el catálogo de productos o testimonios.

- **Estilo**: Fondo blanco o gris claro, esquinas redondeadas, sombra sutil.
- **Hover**: Elevación (translate-y) y sombra más pronunciada para dar feedback visual.
- **Borde**: Borde opcional que puede aparecer al hacer hover para destacar la selección.

### 3.4. Iconografía

Se utiliza una librería de iconos moderna y limpia (Lucide React) para apoyar visualmente la información y las acciones.

- **Estilo**: Iconos lineales, consistentes en grosor de línea.
- **Color**: Generalmente en rojo Ebema (`#ed1c24`) o gris acero (`#6d6e71`).
- **Tamaño**: Adaptado al contexto, típicamente 20px, 24px o 32px.

| Icono | Uso | Ejemplo |
| :--- | :--- | :--- |
| `ArrowRight` | Indicar avance o continuación | Cotiza ahora → |
| `Check` | Indicar éxito o solución | ✓ Solución |
| `X` | Indicar problema o error | ❌ Problema |
| `Menu` | Abrir navegación móvil | ☰ |

---

## 4. Guía de Contenido e Imágenes

### 4.1. Tono de Voz

El tono de voz de EbemaClick debe ser:

- **Profesional y Confiable**: Transmitir la seriedad y el respaldo de una empresa con 40 años de experiencia.
- **Claro y Directo**: Usar un lenguaje sencillo y fácil de entender para profesionales de la construcción.
- **Orientado a Soluciones**: Enfocarse en cómo EbemaClick resuelve los problemas del cliente.

### 4.2. Imágenes y Fotografías

Las imágenes son un componente clave para transmitir la calidad y el profesionalismo de Ebema.

- **Estilo**: Fotografías reales de alta calidad de materiales, obras y personal.
- **Iluminación**: Preferiblemente luz natural y brillante.
- **Composición**: Limpia, profesional, con enfoque en los detalles de los materiales.
- **Evitar**: Imágenes de stock genéricas, efectos 3D, sombras duras o elementos que resten legibilidad.

**Imagen Hero**

La imagen principal de la página debe ser impactante y relevante. Debe mostrar materiales de construcción en un contexto industrial o de obra, transmitiendo actividad y profesionalismo.

<img src="/home/ubuntu/ebemaclick-landing/src/assets/hero_construction_materials.jpg" alt="Imagen Hero de referencia" width="600"/>

---

## 5. Mantenimiento y Actualizaciones

Para mantener la consistencia del sitio, cualquier nuevo componente o sección debe ser diseñado y desarrollado siguiendo esta guía.

- **Nuevos Componentes**: Deben basarse en los estilos de los componentes existentes.
- **Actualización de Colores o Tipografías**: Cualquier cambio en la paleta de colores o tipografía debe ser aprobado y documentado en esta guía.
- **Revisión Periódica**: Se recomienda revisar y actualizar esta guía anualmente o cada vez que haya un cambio significativo en la estrategia de marca.

---

**Documento creado por**: Manus AI
**Fecha**: 7 de octubre de 2025
**Versión**: 1.0

