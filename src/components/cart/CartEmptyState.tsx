import { ShoppingBag, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function CartEmptyState({ compact = false, onNavigate }: { compact?: boolean; onNavigate?: () => void }) {
  const Heading = compact ? 'h3' : 'h2'
  return (
    <div className={`cart-empty ${compact ? 'cart-empty-compact' : ''}`}>
      <span className="cart-empty-icon"><ShoppingBag size={34} aria-hidden="true" /></span>
      <Heading>Tu carrito está vacío</Heading>
      <p>Guardá acá tus próximos favoritos mientras explorás Vuravo. Podés agregar productos y ajustar las cantidades.</p>
      <Link className="button button-primary" to="/catalogo" onClick={onNavigate}>Explorar productos<ArrowUpRight size={18} aria-hidden="true" /></Link>
      <span className="cart-demo-note">Carrito local demostrativo. No se realizan compras reales.</span>
    </div>
  )
}
