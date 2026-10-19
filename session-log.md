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
