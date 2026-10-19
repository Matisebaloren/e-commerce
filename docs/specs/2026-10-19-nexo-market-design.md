# NEXO Market — Diseño de la primera etapa

## Objetivo

Convertir el scaffold de Vite en una experiencia pública de marketplace demostrativa, visualmente premium, navegable y preparada para conectar una futura fuente WooCommerce.

## Alcance

- Identidad visual NEXO Market con azul `#335CFF`, naranja `#F97316`, fondo `#F7F8FA`, superficies blancas y texto `#111827`.
- Tipografías Manrope para títulos e Inter para contenido.
- Layout global responsive con header, navegación, buscador visual, menú móvil y footer.
- Home con hero, seis categorías, destacados, banner promocional y novedades.
- Catálogo `/catalogo` con búsqueda, filtro de categoría y sincronización de filtros en URL.
- Detalle `/producto/:slug` con galería, precio, descripción, características y regreso al catálogo.
- Aproximadamente 18 productos locales, tipados y separados de la interfaz.
- Tailwind CSS 4 con plugin oficial de Vite, React Router y Lucide React.
- Estados vacíos y ruta de producto inexistente; sin peticiones externas.

## No objetivos

- WordPress, WooCommerce, autenticación, carrito, checkout, pagos o administración.
- Acciones de cuenta o carrito presentadas como funcionales.
- Suite de tests automatizados o validaciones adicionales, por decisión explícita del usuario.

## Dirección visual

La interfaz usará un lenguaje de marketplace editorial: una grilla estructurada con bloques asimétricos, mucho espacio negativo, imágenes de producto protagonistas y acentos de color controlados. El hero combinará un mensaje corto orientado a descubrir productos con una imagen de lifestyle. Las categorías usarán un mosaico de tarjetas de alturas variables para evitar el patrón de grilla uniforme.

La jerarquía será: campaña principal, exploración por categoría, productos destacados y novedades. Las tarjetas de producto mantendrán una composición repetible, con imagen, categoría, nombre y precio claramente separados.

## Arquitectura

- `src/types/` define `Product`, `Category` y contratos de acceso.
- `src/data/` contiene fixtures y un repositorio local que expone la misma forma que un futuro adaptador remoto.
- `src/components/` contiene header, footer, cards, secciones de home, controles de catálogo y elementos compartidos.
- `src/pages/` contiene Home, Catalog y ProductDetail.
- `src/App.tsx` concentra las rutas públicas y el shell global.
- `src/index.css` contiene tokens, reset, tipografía, responsive y motion preferences; Tailwind 4 se importa desde el entry CSS.

## Flujo de datos

La UI consume productos desde el repositorio local. Catálogo y detalle derivan sus vistas mediante funciones puras sobre los fixtures. El catálogo lee `q` y `categoria` desde `URLSearchParams` y actualiza la URL sin recargar. Un slug no encontrado muestra una vista informativa con enlace al catálogo.

## Accesibilidad y responsive

- HTML semántico, enlace para saltar al contenido, labels visibles y `aria-label` en controles de iconos.
- Focus visible, objetivos táctiles de al menos 44 px y orden de tabulación lógico.
- Grilla de productos de 1 columna en pantallas muy estrechas, 2 en móvil, 3 en tablet y 4 en escritorio.
- Menú móvil con botón accesible y cierre al seleccionar una ruta.
- Transiciones discretas desactivadas o reducidas bajo `prefers-reduced-motion`.

## Modos de fallo y límites aceptables

- Un filtro o slug inválido no rompe la aplicación: se muestra un estado vacío o de producto no encontrado.
- Las imágenes remotas de Unsplash se usan solo como recurso visual de demostración; el catálogo mantiene nombre, precio y contenido local.
- No se agrega loading/error de API porque esta etapa no realiza solicitudes asíncronas.

## Verificación de diseño

No se agregan tests ni validaciones automatizadas. La implementación se mantendrá autocontenida y se revisará por estructura de archivos y consistencia con esta especificación.
