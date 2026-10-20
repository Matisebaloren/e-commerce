import type { CartAction, CartItem, CartState } from './cartTypes'
import { getCartProduct, MAX_CART_QUANTITY, normalizeCartQuantity } from './cartUtils'

export const createCartState = (items: readonly CartItem[]): CartState => ({
  items,
  notice: null,
  noticeSerial: 0,
})

function withNotice(state: CartState, items: readonly CartItem[], text: string): CartState {
  const noticeSerial = state.noticeSerial + 1
  return { items, noticeSerial, notice: { id: noticeSerial, text } }
}

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'add': {
      const product = getCartProduct(action.productId)
      const requested = normalizeCartQuantity(action.quantity)
      if (!product || requested === undefined) return state
      const existing = state.items.find((item) => item.productId === action.productId)
      const previousQuantity = existing?.quantity ?? 0
      const quantity = Math.min(MAX_CART_QUANTITY, previousQuantity + requested)
      const added = quantity - previousQuantity
      if (added === 0) {
        return withNotice(state, state.items, `Ya tenés 10 unidades de ${product.name}. Es el límite de esta demostración.`)
      }
      const items = existing
        ? state.items.map((item) => item.productId === action.productId ? { ...item, quantity } : item)
        : [...state.items, { productId: action.productId, quantity }]
      const text = added === 1 ? `${product.name}: producto agregado.` : `${product.name}: se agregaron ${added} unidades.`
      const suffix = added < requested ? ' Se alcanzó el límite de 10 unidades por artículo.' : ''
      return withNotice(state, items, text + suffix)
    }
    case 'remove': {
      const items = state.items.filter((item) => item.productId !== action.productId)
      if (items.length === state.items.length) return state
      return withNotice(state, items, 'Artículo eliminado del carrito.')
    }
    case 'setQuantity': {
      const quantity = normalizeCartQuantity(action.quantity)
      if (quantity === undefined) return state
      return {
        ...state,
        items: state.items.map((item) => item.productId === action.productId ? { ...item, quantity } : item),
      }
    }
    case 'clear':
      return state.items.length ? withNotice(state, [], 'Carrito vaciado.') : state
    case 'dismissNotice':
      return state.notice?.id === action.id ? { ...state, notice: null } : state
    default:
      return state
  }
}
