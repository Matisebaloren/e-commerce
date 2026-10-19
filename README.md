# NEXO Market

Marketplace multiproducto demostrativo, desarrollado como proyecto de portfolio. Esta primera etapa presenta una experiencia pública en español de Argentina: una home editorial, un catálogo local con filtros y páginas de detalle navegables.

> Proyecto demostrativo de portfolio. No se realizan ventas reales.

## Stack

- React y TypeScript, conservando la versión compatible 5.9.3 del scaffold.
- Vite con su plugin de React.
- Tailwind CSS 4 mediante el plugin oficial `@tailwindcss/vite`.
- React Router para rutas y parámetros de búsqueda.
- Lucide React para iconografía.
- CSS global para tokens, composición responsive y accesibilidad.
- ESLint: se conserva la configuración del repositorio.

No se agregaron librerías de estado, validación, backend ni suites de pruebas.

## Instalación y ejecución

Con Node.js y npm compatibles con la versión de Vite del proyecto:

```bash
npm install
npm run dev
```

Abrí la dirección local indicada por Vite. El archivo `package-lock.json` registra las dependencias para reproducir la instalación; también podés usar `npm ci` cuando el lockfile ya está disponible.

## Rutas

| Ruta | Contenido |
| --- | --- |
| `/` | Home, categorías, destacados, selección tech y novedades |
| `/catalogo` | Catálogo completo |
| `/catalogo?q=auriculares` | Búsqueda por nombre |
| `/catalogo?categoria=hogar` | Categoría seleccionada |
| `/catalogo?q=lampara&categoria=hogar` | Búsqueda y categoría combinadas |
| `/producto/:slug` | Galería e información del producto |
| Cualquier ruta desconocida | Página informativa con navegación de regreso |

Ejemplo de detalle: `/producto/auriculares-inalambricos-studio`.

La aplicación utiliza `BrowserRouter`. Al publicarla, el servidor deberá devolver `index.html` para las rutas del frontend que no correspondan a archivos estáticos, permitiendo abrir enlaces profundos directamente.

## Estructura

```text
src/
├── App.tsx                  # Rutas y layout global
├── main.tsx                 # Montaje de React
├── index.css                # Tailwind 4, tokens, estilos y responsive
├── types/                   # Contratos de categorías, productos y repositorio
├── data/                    # Fixtures y repositorio local síncrono
├── lib/                     # Formato ARS, normalización y títulos
├── components/
│   ├── layout/              # Header, footer, menú y contenedor
│   ├── home/                # Hero y secciones de inicio
│   ├── products/            # Cards, grilla y galería
│   ├── catalog/             # Buscador, filtros y estado vacío
│   └── ui/                  # Marca, encabezados e imágenes con fallback
└── pages/                   # Inicio, catálogo, detalle y página inexistente

public/
├── nexo.svg                 # Identidad del favicon
└── images/placeholder.svg   # Alternativa local para imágenes fallidas
```

`project-map.md` y `session-log.md` conservan el mapa del proyecto y decisiones de implementación. La especificación visual inicial se encuentra en `docs/specs/`.

## Funcionalidades actuales

- Identidad NEXO Market: azul principal, acentos promocionales naranjas, Manrope e Inter.
- Header con navegación, buscador que abre el catálogo y enlaces de categoría.
- Menú móvil desplegable con cierre al elegir un enlace o presionar Escape.
- Hero editorial, mosaico de seis categorías y secciones de destacados y novedades.
- Cards compartidas con categoría, nombre, precio ARS y etiquetas derivadas de los datos.
- Búsqueda por nombre sin distinción de mayúsculas ni acentos.
- Filtros combinables con `q` y `categoria`, sincronizados con React Router.
- Modificar un filtro preserva el otro; se eliminan valores vacíos y se admite atrás/adelante.
- Estado vacío con acción para limpiar filtros, incluidas categorías desconocidas.
- Detalle con miniaturas seleccionables, descripción, características y productos relacionados.
- Regreso desde el detalle al catálogo con sus filtros, cuando se accede desde él.
- Páginas informativas para productos y rutas inexistentes.
- Grilla de una columna por debajo de 420 px, dos desde 420 px, tres desde 768 px y cuatro desde 1200 px.
- HTML semántico, labels visibles, enlace de salto, foco visible y respeto de movimiento reducido.
- Fotografías adaptativas con carga diferida fuera del hero y fallback SVG local.

## Datos de demostración

El catálogo tiene 18 productos: tres por categoría en Tecnología, Hogar, Moda, Belleza, Deportes y Accesorios. Sus IDs y slugs son estables. Marcas, precios, descripciones y especificaciones son ficticios y no constituyen información de una oferta real.

Los precios se almacenan como números y se muestran mediante una función compartida con `Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' })`. Los descuentos solo aparecen cuando un producto tiene un precio anterior mayor al actual; se calculan a partir de esos datos ficticios.

Las fotografías son ilustrativas, utilizan URLs específicas de [Unsplash](https://unsplash.com/) y pueden mostrar productos de terceros que no representan las marcas ficticias del catálogo. Las miniaturas de detalle ofrecen una vista completa y un recorte de la misma fotografía. Consultá la [licencia de Unsplash](https://unsplash.com/license) para la reutilización de los recursos. Las fuentes se cargan desde Google Fonts. Estos recursos visuales requieren conexión; si una fotografía no carga, se utiliza el placeholder local.

Productos, categorías y precios se obtienen exclusivamente de fixtures locales. No se consulta ninguna API externa de datos.

## Preparación para WooCommerce

Los modelos de dominio y el contrato `ProductRepository` están separados de los componentes. El repositorio local ofrece:

- `getAll()`
- `getBySlug(slug)`
- `getFeatured()`
- `getNew()`
- `filter({ query, category })`

Las operaciones actuales son síncronas y puras. Una fase posterior podrá mapear respuestas de WooCommerce a los modelos existentes. Esa integración requerirá incorporar acceso asíncrono y sus estados de carga/error en la capa de datos y las páginas consumidoras. Actualmente no hay conexión, credenciales ni configuración de WordPress o WooCommerce.

## Próxima etapa

- Integración con WordPress y WooCommerce.
- Acceso remoto a productos y estados de carga/error.
- Cuenta y autenticación.
- Carrito y persistencia.
- Checkout, pagos y pedidos.
- Infraestructura y configuración de publicación definitiva.

Estas funcionalidades están pendientes y no se presentan como disponibles en la interfaz.
