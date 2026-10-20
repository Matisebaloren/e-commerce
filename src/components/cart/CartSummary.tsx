import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import { useCart } from '../../cart/useCart'
import { formatPrice } from '../../lib/formatters'

export function CartSummary({ compact = false, onNavigate }: { compact?: boolean; onNavigate?: () => void }) {
  const { totalUnits, lineCount, subtotal, isEmpty, persistenceAvailable } = useCart()
  const Heading = compact ? 'h3' : 'h2'
  if (isEmpty) return null
  return (
    <section className={`cart-summary ${compact ? 'cart-summary-compact' : ''}`} aria-label="Resumen del carrito">
      <Heading>Resumen del carrito</Heading>
      <dl>
        <div><dt>Productos diferentes</dt><dd>{lineCount}</dd></div>
        <div><dt>Unidades</dt><dd>{totalUnits}</dd></div>
        <div className="cart-subtotal"><dt>Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div>
      </dl>
      <p className="cart-summary-note">Importes ilustrativos en ARS. El subtotal no es el total final de una compra. No incluye cálculo de envíos ni impuestos.</p>
      {!persistenceAvailable && <p className="cart-storage-note" role="status">Este navegador no permite guardar el carrito. Podés usarlo durante esta visita, pero podría perderse al recargar.</p>}
      {compact && <Link className="button button-primary cart-summary-primary" to="/carrito" onClick={onNavigate}>Ver carrito completo<ArrowUpRight size={18} aria-hidden="true" /></Link>}
      <Link className="text-link" to="/catalogo" onClick={onNavigate}><ArrowLeft size={16} aria-hidden="true" />Seguir explorando</Link>
      <p className="cart-demo-note">Demostración local: no hay checkout ni pagos.</p>
    </section>
  )
}
