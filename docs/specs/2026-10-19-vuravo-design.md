# Vuravo — Sistema visual vigente, etapa 1.1

> Registro histórico: la composición de esta etapa quedó sustituida por [Vuravo 1.2](2026-10-19-vuravo-1-2-design.md). La marca y los contratos de datos se conservan.

Sustituye la identidad NEXO Market de la etapa 1. El documento original se conserva como registro histórico.

## Alcance

Rebranding y rediseño de la aplicación existente conservando arquitectura, rutas, modelos, IDs, slugs, precios, búsqueda y filtros. No se reconstruye el proyecto ni se agregan dependencias.

## Identidad

- Marca provisional: Vuravo; logotipo tipográfico en minúsculas `vuravo.`.
- Isotipo: una V blanca sobre base azul, con detalle coral.
- Nombre, lema, recursos y aviso demostrativo en `src/config/brand.ts`.
- Metadatos de HTML y títulos de página con la marca vigente.
- La marca ficticia Nexo Sound se sustituye por Vuravo Audio; los IDs nx-* se conservan.

## Paleta y tipografía

| Token | Color |
| --- | --- |
| brand-primary | #335CFF |
| brand-coral | #FF7043 |
| brand-dark | #172044 |
| brand-blue-soft | #DDE7FF |
| brand-cream | #FFF0DF |
| background | #F7F8FA |
| surface | #FFFFFF |
| text-primary | #111827 |

Manrope para encabezados e Inter para contenido. La información secundaria se presenta desde 12 px; los controles mantienen áreas de interacción de 44 px. El coral se combina con texto oscuro para las campañas y etiquetas.

## Composición comercial

- Header compacto: sin franja informativa, navegación activa, buscador y fila de categorías en escritorio.
- Menú móvil con categorías, cierre al navegar y mediante Escape.
- Hero azul con CTA blanco y tres fotografías de tecnología, moda y hogar sobre superficies de azul suave, coral y crema.
- Hero de escritorio con altura orientativa de 440–456 px, adaptable al contenido.
- Mosaico de seis categorías con anchos asimétricos, superficies diferenciadas y texto sobre fondos sólidos.
- Cuatro destacados mediante las cards compartidas; precios protagonistas, imágenes completas, etiquetas y enlace de detalle.
- Dos campañas compactas: tecnología en coral y hogar en crema.
- Novedades y cierre comercial breve con acceso al catálogo.
- Footer reducido a identidad, navegación, categorías y aclaración demostrativa.

## Catálogo y detalle

Se mantiene la lógica de q/categoria y la navegación sin recargas. Se actualizan encabezados, chips, contadores, estados vacíos y cards. El detalle mantiene breadcrumbs, características, relacionados y regreso al catálogo, con panel de precio en azul suave e información secundaria legible.

## Recursos de producto

Se eliminan las miniaturas generadas como recorte de la misma fotografía. Los fixtures actuales utilizan una imagen por artículo. La galería admite varias imágenes cuando existan vistas realmente complementarias del mismo producto; no se muestran miniaturas para una imagen única.

Se reemplazan fotografías genéricas de cafetera, organizador, secador y bolso por fotografías específicas de Unsplash, con fuentes en README. Las imágenes de producto usan contain; las de categoría y campaña usan cover cuando su función compositiva lo requiere. Se conserva el fallback SVG local, actualizado a Vuravo.

## Responsive y accesibilidad

- Productos: una columna bajo 420 px; dos desde 420; tres desde 768; cuatro desde 1200.
- Hero apilado en móvil, tres fotografías en una fila en tablet y composición dividida en escritorio.
- Mosaico de categorías en una, dos o varias columnas según el espacio.
- Inputs con labels visibles, navegación por teclado, foco visible, HTML semántico y enlace de salto.
- Movimiento discreto condicionado por prefers-reduced-motion.

## Límites de esta etapa

Sin carrito, checkout, autenticación, pagos, backend, WordPress ni WooCommerce. Sin nuevos paquetes. No se crean ni ejecutan tests, validaciones, lint, builds, auditorías o revisiones manuales posteriores, por instrucción explícita del propietario.
