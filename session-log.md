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
