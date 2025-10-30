



# Guía de Mantenimiento: Landing Page EbemaClick

**Documento Técnico para Desarrolladores**

---

## 1. Introducción

Esta guía proporciona toda la información técnica necesaria para mantener, actualizar y desplegar la landing page de **EbemaClick**. Está dirigida a desarrolladores con conocimientos de **React, Vite, y CSS (con Tailwind CSS)**.

El objetivo es facilitar la gestión del proyecto, asegurando que cualquier desarrollador pueda entender la estructura del código, levantar un entorno de desarrollo local y realizar modificaciones de manera segura y eficiente.

---

## 2. Estructura del Proyecto

El proyecto fue creado con **Vite** y utiliza **React** como librería principal. La estructura de archivos está organizada para separar los componentes, los assets y la lógica principal de la aplicación.

```
/ebemaclick-landing
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── hero_construction_materials.jpg
│   │   └── logo.png
│   ├── components/
│   │   ├── ChatWidget.jsx
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Incentive.jsx
│   │   ├── ProblemSolution.jsx
│   │   ├── ProductCatalog.jsx
│   │   ├── QuoteForm.jsx
│   │   └── SocialProof.jsx
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

**Descripción de Directorios Clave**

| Directorio / Archivo | Descripción |
| :--- | :--- |
| `src/` | Contiene todo el código fuente de la aplicación. |
| `src/assets/` | Almacena todos los recursos estáticos como imágenes y logos. |
| `src/components/` | Directorio principal donde reside cada componente de React en su propio archivo `.jsx`. |
| `src/App.jsx` | Componente principal que ensambla todas las secciones de la landing page. |
| `src/App.css` | Archivo CSS global donde se definen las variables de color y estilos base. |
| `src/main.jsx` | Punto de entrada de la aplicación React. |
| `index.html` | Plantilla HTML principal donde se inyecta la aplicación. |
| `tailwind.config.js` | Archivo de configuración para Tailwind CSS. |
| `vite.config.js` | Archivo de configuración para el empaquetador Vite. |

---

## 3. Cómo Levantar el Entorno de Desarrollo

Para trabajar en la landing page, primero necesitas clonar el repositorio y levantar un servidor de desarrollo local.

### 3.1. Prerrequisitos

- **Node.js** (versión 18 o superior)
- **pnpm** (manejador de paquetes)

### 3.2. Pasos para la Instalación

1.  **Clonar el repositorio** (o descargar el código fuente).

2.  **Navegar al directorio del proyecto**:
    ```bash
    cd ebemaclick-landing
    ```

3.  **Instalar las dependencias**:
    Se recomienda usar `pnpm` para una instalación más rápida y eficiente.
    ```bash
    pnpm install
    ```

4.  **Iniciar el servidor de desarrollo**:
    Este comando levantará un servidor local (generalmente en `http://localhost:5173`) con hot-reloading, lo que significa que cualquier cambio en el código se reflejará instantáneamente en el navegador.
    ```bash
    pnpm run dev
    ```

### 3.3. Scripts Disponibles

| Comando | Descripción |
| :--- | :--- |
| `pnpm run dev` | Inicia el servidor de desarrollo con Vite. |
| `pnpm run build` | Compila y empaqueta la aplicación para producción en el directorio `dist/`. |
| `pnpm run preview` | Levanta un servidor local para previsualizar la build de producción. |




---

## 4. Cómo Actualizar el Contenido

La mayoría del contenido de la landing page se puede actualizar directamente en los componentes de React. A continuación se detalla cómo modificar las secciones más comunes.

### 4.1. Textos e Imágenes

- **Textos**: Para cambiar cualquier texto (títulos, párrafos, etc.), abre el componente `.jsx` correspondiente en `src/components/` y edita el contenido directamente en el código.
  - **Ejemplo**: Para cambiar el título del Hero, edita el archivo `src/components/Hero.jsx`.

- **Imágenes**: Para cambiar una imagen, reemplaza el archivo en `src/assets/` manteniendo el mismo nombre, o importa una nueva imagen y actualiza la ruta en el componente.

### 4.2. Preguntas Frecuentes (FAQ)

Las preguntas y respuestas se gestionan en el componente `src/components/FAQ.jsx`. El contenido está en un array de objetos. Para añadir, eliminar o modificar una pregunta, simplemente edita este array.

```javascript
// src/components/FAQ.jsx
const faqItems = [
  {
    question: '¿Cuáles son las zonas que cubre EbemaClick?',
    answer: 'Actualmente cubrimos toda la Región Metropolitana y estamos expandiendo...'
  },
  // ... más preguntas
];
```

### 4.3. Productos del Catálogo

De manera similar a las FAQ, las categorías de productos se gestionan en un array de objetos dentro del componente `src/components/ProductCatalog.jsx`.

```javascript
// src/components/ProductCatalog.jsx
const productCategories = [
  {
    icon: 'IconoComponente',
    title: 'Cubiertas metálicas',
    description: 'Soluciones duraderas para techos con garantía de calidad.'
  },
  // ... más categorías
];
```

---

## 5. Gestión de Dependencias

El proyecto utiliza `pnpm` para gestionar las dependencias de Node.js. Todas las dependencias están listadas en el archivo `package.json`.

- **Para añadir una nueva dependencia**:
  ```bash
  pnpm add nombre-del-paquete
  ```

- **Para actualizar las dependencias**:
  ```bash
  pnpm update
  ```

Es importante mantener las dependencias actualizadas para recibir parches de seguridad y mejoras de rendimiento.

---

## 6. Integración con Backend y CRM

Actualmente, el formulario de cotización está configurado para simular el envío de datos. Para una implementación en producción, es necesario conectar este formulario a un endpoint real.

### 6.1. Lógica del Formulario

La lógica de envío se encuentra en el componente `src/components/QuoteForm.jsx`, dentro de la función `handleSubmit`.

```javascript
// src/components/QuoteForm.jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  // ... lógica de validación

  // TODO: Reemplazar este bloque con la llamada al API real
  console.log('Enviando datos:', formData);
  // Ejemplo de llamada a un API con fetch:
  /*
  try {
    const response = await fetch('https://api.ebema.cl/cotizaciones', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (response.ok) {
      // ... mostrar mensaje de éxito
    } else {
      // ... mostrar mensaje de error
    }
  } catch (error) {
    // ... manejar errores de red
  }
  */
};
```

### 6.2. Variables de Entorno

Para manejar URLs de API y otras claves de forma segura, se deben utilizar variables de entorno.

1.  Crea un archivo `.env.local` en la raíz del proyecto.
2.  Añade tus variables con el prefijo `VITE_`:
    ```
    VITE_API_BASE_URL=https://api.ebema.cl
    ```
3.  En el código, accede a ellas a través de `import.meta.env.VITE_API_BASE_URL`.

---

## 7. Despliegue (Deployment)

La aplicación está configurada para ser desplegada fácilmente en cualquier plataforma de hosting para sitios estáticos (como Vercel, Netlify, o un bucket S3).

### 7.1. Proceso de Build

1.  Ejecuta el comando de build:
    ```bash
    pnpm run build
    ```
2.  Este comando generará una carpeta `dist/` en la raíz del proyecto. Esta carpeta contiene todos los archivos estáticos (HTML, CSS, JS) optimizados para producción.

### 7.2. Despliegue

Sube el contenido de la carpeta `dist/` a tu proveedor de hosting. La mayoría de las plataformas modernas pueden conectarse directamente a tu repositorio de Git y automatizar este proceso cada vez que se hace un push a la rama principal.

---

**Documento creado por**: Manus AI
**Fecha**: 7 de octubre de 2025
**Versión**: 1.0

