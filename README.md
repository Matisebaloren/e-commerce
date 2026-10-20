# Vuravo — E-commerce

Vuravo es una aplicación web de comercio electrónico desarrollada como proyecto personal de portfolio. El objetivo es recrear la experiencia de una tienda online moderna, con una interfaz responsive, navegación intuitiva y funcionalidades de compra simuladas.

El proyecto está desarrollado con **React, TypeScript y Tailwind CSS**, utilizando datos locales para representar un catálogo de productos.

## Funcionalidades

- Catálogo de 18 productos distribuidos en seis categorías.
- Búsqueda de productos por nombre y filtros por categoría.
- Páginas individuales con información, imágenes y características de cada producto.
- Carrito de compras con opciones para agregar, eliminar y modificar cantidades.
- Persistencia del carrito mediante `localStorage`.
- Diseño responsive adaptado a dispositivos móviles y escritorio.
- Navegación entre páginas mediante React Router.

## Tecnologías utilizadas

**Frontend:** React, TypeScript, Tailwind CSS 4 y Vite.

**Navegación:** React Router.

**Estado:** React Context y useReducer.

**Iconografía:** Lucide React.

**Persistencia:** LocalStorage.

## Instalación

Cloná el repositorio:

```bash
git clone https://github.com/Matisebaloren/e-commerce.git
cd e-commerce
```

Instalá las dependencias:

```bash
npm install
```

Iniciá el servidor de desarrollo:

```bash
npm run dev
```

## Sobre el proyecto

Actualmente, Vuravo funciona como una demostración frontend. Los productos, marcas y precios son ficticios, y el carrito se almacena localmente en el navegador.

La estructura del proyecto separa componentes, páginas, lógica del carrito y acceso a datos para facilitar su mantenimiento y futuras ampliaciones.

Entre las mejoras previstas se encuentra la integración con WooCommerce para incorporar productos reales y funcionalidades de comercio electrónico.

**Nota:** Este proyecto es únicamente demostrativo. No permite realizar compras ni procesar pagos reales.
