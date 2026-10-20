import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Trash2 } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { CartItem } from '../components/cart/CartItem'
import { CartSummary } from '../components/cart/CartSummary'
import { CartEmptyState } from '../components/cart/CartEmptyState'
import { useCart } from '../cart/useCart'
import { usePageTitle } from '../lib/usePageTitle'

export function CartPage() {
  const { lines, totalUnits, isEmpty, clearCart } = useCart()
  const [confirmClear, setConfirmClear] = useState(false)
  usePageTitle('Tu carrito')

  return (
    <Container className="cart-page">
      <nav className="breadcrumbs" aria-label="Ruta de navegación"><Link to="/">Inicio</Link><ChevronRight size={14} aria-hidden="true" /><span aria-current="page">Carrito</span></nav>
      <div className="cart-page-heading"><div><span className="eyebrow">Tus próximos favoritos</span><h1>Tu carrito</h1><p>Un carrito local para organizar lo que te gusta. No permite concretar compras.</p></div>{!isEmpty && <button className="text-button cart-clear" type="button" onClick={() => setConfirmClear(!confirmClear)} aria-expanded={confirmClear} aria-controls="clear-cart-confirmation"><Trash2 size={16} aria-hidden="true" />Vaciar carrito</button>}</div>
      {isEmpty ? <CartEmptyState /> : <>
        {confirmClear && <div id="clear-cart-confirmation" className="cart-clear-confirmation" role="group" aria-label="Confirmar vaciado del carrito"><p>¿Querés eliminar todos los artículos del carrito?</p><button className="button button-primary" type="button" onClick={() => { clearCart(); setConfirmClear(false) }}>Sí, vaciar carrito</button><button className="text-button" type="button" onClick={() => setConfirmClear(false)}>Conservar artículos</button></div>}
        <div className="cart-page-grid">
          <section className="cart-page-items" aria-labelledby="cart-items-heading"><h2 id="cart-items-heading">Artículos seleccionados <span>({totalUnits} {totalUnits === 1 ? 'unidad' : 'unidades'})</span></h2><ul className="cart-lines">{lines.map((line) => <li key={line.productId}><CartItem line={line} /></li>)}</ul><p className="cart-limit-note">Límite demostrativo: 10 unidades por artículo. No representa disponibilidad ni reserva de stock.</p></section>
          <CartSummary />
        </div>
      </>}
    </Container>
  )
}
