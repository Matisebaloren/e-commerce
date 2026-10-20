import { CheckCircle2, X } from 'lucide-react'
import { useCart } from '../../cart/useCart'

export function CartFeedback() {
  const { notice, dismissNotice, isDrawerOpen } = useCart()
  return (
    <div className="cart-feedback-region" role="status" aria-live="polite" aria-atomic="true">
      {notice && !isDrawerOpen && <div className="cart-feedback"><CheckCircle2 size={20} aria-hidden="true" /><p>{notice.text}</p><button className="icon-button" type="button" onClick={() => dismissNotice(notice.id)} aria-label="Cerrar mensaje"><X size={17} aria-hidden="true" /></button></div>}
    </div>
  )
}
