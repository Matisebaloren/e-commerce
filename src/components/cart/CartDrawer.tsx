import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { X, ShoppingBag } from 'lucide-react'
import { useCart } from '../../cart/useCart'
import { CartItem } from './CartItem'
import { CartSummary } from './CartSummary'
import { CartEmptyState } from './CartEmptyState'

export function CartDrawer() {
  const { isDrawerOpen, closeCart, lines, isEmpty, totalUnits, notice } = useCart()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const location = useLocation()
  const previousRoute = useRef(location.key)

  useEffect(() => {
    if (previousRoute.current === location.key) return
    previousRoute.current = location.key
    if (dialogRef.current?.open) {
      dialogRef.current.close()
      document.getElementById('main-content')?.focus({ preventScroll: true })
    }
    closeCart()
  }, [location.key, closeCart])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!isDrawerOpen || !dialog) return
    const previousOverflow = document.body.style.overflow
    if (!dialog.open) dialog.showModal()
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      if (dialog.open) dialog.close()
      document.body.style.overflow = previousOverflow
    }
  }, [isDrawerOpen])

  useEffect(() => {
    const dialog = dialogRef.current
    if (isDrawerOpen && dialog?.open && !dialog.contains(document.activeElement)) closeRef.current?.focus()
  }, [lines, isDrawerOpen])

  return (
    <dialog
      ref={dialogRef}
      id="cart-drawer"
      className="cart-drawer"
      aria-labelledby="cart-drawer-title"
      onCancel={(event) => { event.preventDefault(); closeCart() }}
      onClose={closeCart}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return
        const bounds = event.currentTarget.getBoundingClientRect()
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeCart()
      }}
    >
      <div className="cart-drawer-panel">
        <header className="cart-drawer-header"><div><h2 id="cart-drawer-title"><ShoppingBag size={22} aria-hidden="true" />Tu carrito</h2><p>{isEmpty ? 'Todavía no agregaste productos.' : `${totalUnits} ${totalUnits === 1 ? 'unidad seleccionada' : 'unidades seleccionadas'}`}</p></div><button ref={closeRef} className="icon-button" type="button" onClick={closeCart} aria-label="Cerrar carrito"><X size={23} aria-hidden="true" /></button></header>
        <div className="cart-drawer-content">
          {isEmpty ? <CartEmptyState compact onNavigate={closeCart} /> : <ul className="cart-lines">{lines.map((line) => <li key={line.productId}><CartItem line={line} compact onNavigate={closeCart} /></li>)}</ul>}
        </div>
        {!isEmpty && <footer className="cart-drawer-footer"><CartSummary compact onNavigate={closeCart} /></footer>}
        <p className="visually-hidden" role="status" aria-live="polite">{isDrawerOpen ? notice?.text : ''}</p>
      </div>
    </dialog>
  )
}
