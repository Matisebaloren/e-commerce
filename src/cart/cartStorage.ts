import type { CartItem } from './cartTypes'
import { restoreCartItems } from './cartUtils'

export const CART_STORAGE_KEY = 'vuravo-cart-v1'

interface StoredCart {
  readonly items: readonly CartItem[]
  readonly available: boolean
}

export function readCartStorage(): StoredCart {
  let raw: string | null
  try {
    raw = window.localStorage.getItem(CART_STORAGE_KEY)
  } catch {
    return { items: [], available: false }
  }
  if (!raw) return { items: [], available: true }
  try {
    return { items: restoreCartItems(JSON.parse(raw) as unknown), available: true }
  } catch {
    return { items: [], available: true }
  }
}

export function writeCartStorage(items: readonly CartItem[]): boolean {
  try {
    if (items.length === 0) window.localStorage.removeItem(CART_STORAGE_KEY)
    else window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items.map(({ productId, quantity }) => ({ productId, quantity }))))
    return true
  } catch {
    return false
  }
}
