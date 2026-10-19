# Vuravo

Marketplace multiproducto demostrativo, desarrollado como proyecto de portfolio. La etapa 1.2 presenta una experiencia pública en español de Argentina: una home con hero cálido y fotografía lifestyle, categorías compactas, un catálogo local con filtros y páginas de detalle navegables. La primera etapa se desarrolló bajo el nombre NEXO Market; su identidad visual quedó sustituida por Vuravo.

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
├── config/brand.ts          # Identidad y mensajes compartidos de Vuravo
├── types/                   # Contratos de categorías, productos y repositorio
├── data/                    # Fixtures y repositorio local síncrono
├── lib/                     # Formato ARS, normalización, títulos y presentación de fotografías
├── components/
│   ├── layout/              # Header, footer, menú y contenedor
│   ├── home/                # Hero y secciones de inicio
│   ├── products/            # Cards, grilla y galería
│   ├── catalog/             # Buscador, filtros y estado vacío
│   └── ui/                  # Marca, encabezados e imágenes con fallback
└── pages/                   # Inicio, catálogo, detalle y página inexistente

public/
├── favicon.svg              # Isotipo Vuravo
├── brand/vuravo.svg         # Logotipo tipográfico
└── images/placeholder.svg   # Alternativa local para imágenes fallidas
```

`project-map.md` y `session-log.md` conservan el mapa del proyecto y decisiones de implementación. La especificación visual vigente es `docs/specs/2026-10-19-vuravo-1-2-design.md`. Las especificaciones NEXO y Vuravo 1.1 se conservan como registros históricos sustituidos.

## Funcionalidades actuales

- Identidad Vuravo: logotipo e isotipo conservados, superficies blancas, fondo cálido `#F4EDE3` y fondo general `#F6F7F9`.
- Azul `#335CFF` en acciones y navegación; coral reservado para etiquetas promocionales. Manrope e Inter.
- Header compacto con navegación activa, buscador destacado y enlaces de categoría. El label del buscador del header está visualmente oculto y sigue disponible para tecnologías de asistencia.
- Menú móvil desplegable con cierre al elegir un enlace o presionar Escape.
- Hero de dos sectores: mensaje y CTA sobre fondo cálido, con una sola fotografía lifestyle.
- Seis categorías en una grilla regular: dos columnas en móvil, tres desde 600 px y seis desde 1024 px.
- Cuatro destacados, campañas de tecnología y hogar, novedades y cierre comercial breve.
- Cards compartidas con imagen protagonista, categoría, nombre, precio ARS destacado y etiquetas derivadas de los datos.
- Presentación de fotografías según el recurso: `cover` para escenas comerciales y `contain` para objetos aislados.
- Búsqueda por nombre sin distinción de mayúsculas ni acentos.
- Filtros combinables con `q` y `categoria`, sincronizados con React Router.
- Modificar un filtro preserva el otro; se eliminan valores vacíos y se admite atrás/adelante.
- Estado vacío con acción para limpiar filtros, incluidas categorías desconocidas.
- Detalle con descripción, características, productos relacionados y soporte de miniaturas cuando haya varias fotografías pertinentes.
- Regreso desde el detalle al catálogo con sus filtros, cuando se accede desde él.
- Páginas informativas para productos y rutas inexistentes.
- Grilla de una columna por debajo de 420 px, dos desde 420 px, tres desde 768 px y cuatro desde 1200 px.
- HTML semántico, labels accesibles, enlace de salto, foco visible y respeto de movimiento reducido.
- Fotografías adaptativas con carga diferida fuera del hero y fallback SVG local.

## Datos de demostración

El catálogo tiene 18 productos: tres por categoría en Tecnología, Hogar, Moda, Belleza, Deportes y Accesorios. Sus IDs y slugs son estables. Marcas, precios, descripciones y especificaciones son ficticios y no constituyen información de una oferta real.

Los precios se almacenan como números y se muestran mediante una función compartida con `Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' })`. Los descuentos solo aparecen cuando un producto tiene un precio anterior mayor al actual; se calculan a partir de esos datos ficticios.

Las fotografías son ilustrativas, utilizan URLs específicas de [Unsplash](https://unsplash.com/) y pueden mostrar productos de terceros que no representan las marcas ficticias del catálogo. Cada producto utiliza una única fotografía pertinente cuando no se dispone de vistas complementarias auténticas. Se eliminaron los recortes duplicados; el componente de galería conserva soporte para múltiples imágenes cuando se incorporen fotografías del mismo artículo. Consultá la [licencia de Unsplash](https://unsplash.com/license) para la reutilización de los recursos. Las fuentes se cargan desde Google Fonts. Estos recursos visuales requieren conexión; si una fotografía no carga, se utiliza el placeholder local.

Productos, categorías y precios se obtienen exclusivamente de fixtures locales. No se consulta ninguna API externa de datos.

### Fotografías incorporadas en la etapa 1.1

- [Cafetera de filtro — Vlad Chistyakov](https://unsplash.com/photos/coffee-maker-with-cups-and-kettle-on-counter-G3lIh_L3P8g).
- [Organizador de escritorio — Behnam Norouzi](https://unsplash.com/photos/a-desk-with-a-keyboard-speakers-and-pen-holder-8lPsHVz55qE).
- [Secador de pelo — Annie Spratt](https://unsplash.com/photos/white-corded-hair-blower-on-gray-wooden-surface-PM8WRGalS7w).
- [Bolso deportivo — Alfred Rowe](https://unsplash.com/photos/black-duffel-bag-on-white-surface-XNNsbcVy7V4).

Las fotografías representan la naturaleza del artículo y no acreditan sus especificaciones ficticias ni una relación comercial con las marcas visibles.

## Sistema visual vigente

Los tokens de color están centralizados en `src/index.css`: `brand-primary`, `brand-coral`, `brand-dark`, `warm`, `background`, `surface` y `text-primary`. Los tonos secundarios se usan en pequeñas etiquetas e indicadores. Las variables de espaciado definen el ritmo compartido de la home y las páginas públicas.

El hero determina su altura por el contenido: la fotografía se posiciona en un contenedor independiente y no aporta su altura intrínseca a la grilla. En móvil, el contenedor fotográfico reserva una proporción 16:10. Se retiraron los tres paneles de producto, el mosaico de colores y los recortes elípticos de las campañas.

`src/lib/productImages.ts` reúne las decisiones de encuadre de las fotografías existentes, compartidas por cards y galería, sin modificar los modelos de producto. La foto de portada es el recurso fijo de Unsplash `photo-1490481651871-ab68de25d43d`.

La configuración `src/config/brand.ts` reúne el nombre, logotipo, lema y aviso de demostración. Los metadatos estáticos de `index.html` reflejan la misma identidad. El nombre Vuravo es provisional para este portfolio.

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
