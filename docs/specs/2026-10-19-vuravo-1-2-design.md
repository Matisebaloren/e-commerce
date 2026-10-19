# Vuravo — Etapa 1.2, sistema visual vigente

Sustituye la composición visual de la etapa 1.1. Se conserva la marca Vuravo y la arquitectura de la aplicación.

## Objetivo

Dar protagonismo a los productos mediante superficies neutras, fotografía integrada y navegación clara. Eliminar la composición de paneles saturados y las dependencias entre altura intrínseca de fotografías y altura de los bloques.

## Sistema visual

- Principal #335CFF; oscuro #172044; fondo #F6F7F9; superficie #FFFFFF.
- Fondo cálido #F4EDE3; coral #FF7043 para acentos promocionales pequeños.
- Texto #111827 y gris secundario de buen contraste.
- Manrope para encabezados e Inter para contenido.
- Escala de espaciado compartida y secciones de aproximadamente 40 px de separación.
- Azul en CTA, enlaces, foco e indicadores; sin grandes campos coral o lavanda.

## Home

1. Header compacto con buscador protagonista; su label queda visualmente oculto, preservando la asociación semántica.
2. Hero cálido con título, descripción y CTA a /catalogo. Una fotografía lifestyle ocupa el segundo sector.
3. Seis categorías en grilla regular con fotografía 16:9 y nombre debajo.
4. Cuatro productos destacados mediante las cards compartidas.
5. Dos campañas con texto y fotografía rectangular, sin recortes elípticos ni campos saturados.
6. Novedades y cierre breve separado por una línea.
7. Footer con marca, enlaces y aviso de demostración.

### Hero y dimensiones

La copia permanece en el flujo y determina el alto de la fila. La imagen se posiciona dentro de un contenedor independiente con min-width: 0 y min-height: 0; no impone dimensiones intrínsecas a las filas de la grilla. En móvil, el marco reserva aspecto 16:10; desde tablet se divide en dos columnas minmax(0, 1fr). No se usan min-height excesivos ni overflow para ocultar desbordes del contenido.

Se busca una presencia de escritorio próxima a 390–440 px, adaptable a tipografía, ancho, zoom y contenido.

## Cards, recursos y galería

Las cards mantienen nombre, categoría, precio ARS, precio anterior, descuentos, novedades y navegación al detalle. Fondos blancos, borde fino, fotografía cuadrada y precio destacado entre 22 y 26 px según ancho.

La utilidad src/lib/productImages.ts distingue fotografías comerciales completas y objetos aislados. Las primeras usan cover; las segundas contain. Esta información es de presentación y no modifica los contratos de dominio.

Se mantienen las imágenes específicas de los fixtures, sin imágenes aleatorias ni perspectivas inventadas. Los errores de imagen utilizan el SVG local. La galería reserva un marco fotográfico proporcionado y ubica el aviso ilustrativo debajo; las miniaturas solo aparecen si existen varias fotografías reales del mismo artículo.

## Catálogo y detalle

El catálogo utiliza un encabezado breve sin hero secundario. Buscador, controles de limpieza y chips comparten un bloque compacto; el contador precede la grilla.

El detalle equilibra galería e información, presenta el precio sobre superficie neutra y separa descripción y características mediante encabezados claros. Conserva relacionados, breadcrumbs, regreso con filtros y estado de producto inexistente.

## Responsive y accesibilidad

- Cards: una columna bajo 420 px; dos desde 420; tres desde 768; cuatro desde 1200.
- Categorías: dos columnas, tres desde 600 y seis desde 1024.
- Hero apilado en móvil y dividido desde 768 px.
- Menú móvil con Escape y cierre al seleccionar enlaces.
- Labels accesibles, alternativas de imagen, foco visible, navegación por teclado y enlace de salto.
- Movimiento discreto bajo prefers-reduced-motion.

## Contratos y límites

Sin cambios en rutas, IDs, slugs, filtros q/categoria, repositorio, formato ARS, modelos o dependencias. No se agregan carrito, autenticación, checkout, backend ni conexiones de comercio.

Por instrucción del propietario no se crean ni ejecutan tests, lint, builds, validaciones, auditorías, comprobaciones visuales ni revisiones manuales posteriores. No se realizan commits ni push.
