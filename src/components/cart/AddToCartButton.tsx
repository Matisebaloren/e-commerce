import { ShoppingBag } from 'lucide-react'
import { useCart } from '../../cart/useCart'
import { MAX_CART_QUANTITY } from '../../cart/cartUtils'

export function AddToCartButton({ productId, quantity = 1 }: { productId: string; quantity?: number }) {
  const { addItem, lines } = useCart()
  const inCart = lines.find((line) => line.productId === productId)?.quantity ?? 0
  const atLimit = inCart >= MAX_CART_QUANTITY

  return (
    <button className="button button-primary add-to-cart-button" type="button" disabled={atLimit} onClick={() => addItem(productId, quantity)} title={atLimit ? 'Límite demostrativo de 10 unidades por artículo; no representa stock real.' : undefined}>
      <ShoppingBag size={18} aria-hidden="true" /><span>{atLimit ? '10 en el carrito' : 'Agregar al carrito'}</span>
    </button>
  )
}
