# Carrito local de Vuravo — etapa 2.1

## Capas

La interfaz consume useCart. CartProvider expone operaciones sobre cartReducer y un snapshot centralizado calculado por cartUtils. cartStorage es el único módulo que conoce localStorage. Los productos se resuelven mediante productRepository.getAll(), sin modificar su contrato.

El estado de dominio contiene líneas { productId, quantity }. Feedback y apertura del drawer son transitorios y no se persisten.

## Operaciones

- addItem crea una línea o acumula unidades hasta 10. El mensaje informa la cantidad agregada y si se alcanzó el límite.
- removeItem elimina una línea por ID.
- setQuantity acepta enteros positivos, limitados a 10.
- clearCart elimina las líneas; la página solicita confirmación inline.
- openCart y closeCart controlan el diálogo.

El reducer no ejecuta efectos laterales. Los avisos usan un identificador incremental; el proveedor los retira a los cuatro segundos o por acción del usuario.

## Cálculos

Un único snapshot contiene líneas enriquecidas, subtotales por línea, cantidad de líneas, unidades, subtotal e indicador de vacío. Se utilizan precios actuales del repositorio y formatPrice para ARS; nunca precios anteriores o persistidos.

## Persistencia

vuravo-cart-v1 contiene un array JSON de IDs y cantidades. Se escribe al cambiar las líneas y se elimina al vaciar. No se guardan nombres, fotos, descripciones, precios ni subtotales.

La lectura captura errores de acceso y JSON; conserva solo productos conocidos y cantidades enteras positivas. Agrupa duplicados y limita a 10. Con almacenamiento bloqueado, el carrito funciona en memoria y el resumen avisa que podría perderse al recargar. No sincroniza pestañas o dispositivos.

## Interfaz compartida

QuantitySelector se usa en detalle, drawer y página. CartItem, CartSummary y CartEmptyState se comparten entre las vistas de carrito. ProductPurchase conserva la cantidad seleccionada por producto y AddToCartButton se reutiliza en cards y detalle.

Las cards separan el enlace y el botón de agregado. El header incorpora bolsa y contador real de unidades. Agregar no abre automáticamente el drawer.

## Drawer

CartDrawer vive bajo BrowserRouter y CartProvider. Usa dialog.showModal(), bloquea scroll del documento y cierra por Escape, botón, backdrop o navegación. El navegador mantiene modalidad y restaura el foco. Si desaparece el control enfocado al eliminar un artículo, el foco vuelve al cierre del diálogo.

## Ruta y alcance

/carrito comparte el layout existente e incluye lista responsive, cantidades, eliminación, vaciado, estado vacío y resumen. No hay checkout ni acción de pago.

La base disponible correspondía a la etapa 1.2. La búsqueda por nombre y categoría se conserva; precio, ordenamiento y autocompletado de 2.0 no estaban presentes.

## Migración a WooCommerce

Conservar componentes sobre useCart, sustituir persistencia y operaciones por un adaptador de sesión remota, agregar estados asíncronos y reconciliar las mutaciones con respuestas del servidor. Stock, precios finales, impuestos, envíos y checkout serán responsabilidad de WooCommerce.

## Condiciones de ejecución

Por solicitud explícita no se crean ni ejecutan tests, lint, builds, validaciones, auditorías o comprobaciones posteriores. No se realizan commits, push ni PR.
