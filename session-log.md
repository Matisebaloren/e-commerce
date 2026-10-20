## 2026-10-19 [saved]
Goal: Implementar la primera etapa pública de NEXO Market sobre Vite.
Decisions:
- Usar React Router, Tailwind 4 y Lucide con CSS propio para mantener una identidad comercial distintiva.
- Mantener fixtures síncronos y contratos separados; WooCommerce necesitará un adaptador y estados asíncronos en una fase posterior.
- Omitir tests, lint, builds, auditorías y comprobaciones manuales posteriores por instrucción explícita del propietario.
Rejected:
- Carrito, pagos, autenticación y backend en esta etapa.
- Dependencias de estado y validación innecesarias.
Open:
- Integración futura con WooCommerce y publicación con fallback de rutas.

## 2026-10-19 — Vuravo, etapa 1.1 [saved]
Goal: Sustituir NEXO por Vuravo y compactar la experiencia comercial.
Decisions:
- La identidad visual NEXO queda sustituida por Vuravo; se preserva su especificación como registro histórico.
- Centralizar marca y tokens; conservar contratos, IDs, slugs, filtros y dependencias existentes.
- Mostrar una foto pertinente por producto cuando no existan vistas complementarias; eliminar recortes duplicados.
Rejected:
- Nuevas funciones de compra y dependencias de UI.
- Tests, builds, lint, auditorías y revisiones posteriores.
Open:
- Integrar WooCommerce y funciones comerciales en una etapa posterior.

## 2026-10-19 — Vuravo, etapa 1.2 [saved]
Goal: Sustituir la composición saturada por una tienda de superficies neutras y productos protagonistas.
Decisions:
- La composición de la etapa 1.1 queda sustituida; marca, contratos, rutas, filtros e IDs se conservan.
- Separar el marco fotográfico del flujo del hero para evitar crecimiento por dimensiones intrínsecas.
- Compartir encuadre por recurso entre cards y galería; no modificar modelos por necesidades visuales.
Rejected:
- Paneles saturados, recortes elípticos y collages de producto.
- Tests, lint, builds, auditorías y revisiones posteriores.
Open:
- Fotografía adicional auténtica y futura integración de comercio.

## 2026-10-19 — Vuravo, etapa 2.1 [saved]
Goal: Incorporar carrito local persistente sin alterar el diseño general ni los contratos de productos.
Decisions:
- Usar Context y useReducer; persistir IDs y cantidades, derivando precios desde el repositorio.
- Compartir selector, artículos y resumen entre drawer modal nativo y /carrito.
- Integrar sobre la base local 1.2; la etapa 2.0 citada no estaba implementada.
Rejected:
- Checkout, pagos, backend y stock real.
- Tests, lint, builds, auditorías y comprobaciones posteriores.
Open:
- Migrar el carrito a sesiones y reglas de WooCommerce.
