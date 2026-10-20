import { productRepository } from '../data/productRepository'
import type { CartItem, CartLine, CartSnapshot } from './cartTypes'

export const MIN_CART_QUANTITY = 1
export const MAX_CART_QUANTITY = 10

export const getCartProduct = (productId: string) =>
  productRepository.getAll().find((product) => product.id === productId)

export function normalizeCartQuantity(quantity: number): number | undefined {
  if (!Number.isSafeInteger(quantity) || quantity < MIN_CART_QUANTITY) return undefined
  return Math.min(quantity, MAX_CART_QUANTITY)
}

/** Storage is untrusted input. Keep only known IDs and valid integer quantities. */
export function restoreCartItems(value: unknown): readonly CartItem[] {
  if (!Array.isArray(value)) return []
  const quantities = new Map<string, number>()
  for (const candidate of value) {
    if (!candidate || typeof candidate !== 'object') continue
    const record = candidate as Record<string, unknown>
    if (typeof record.productId !== 'string' || typeof record.quantity !== 'number') continue
    const quantity = normalizeCartQuantity(record.quantity)
    if (quantity === undefined || !getCartProduct(record.productId)) continue
    quantities.set(record.productId, Math.min(MAX_CART_QUANTITY, (quantities.get(record.productId) ?? 0) + quantity))
  }
  return Array.from(quantities, ([productId, quantity]) => ({ productId, quantity }))
}

/** All views consume these totals; current prices always come from the repository. */
export function getCartSnapshot(items: readonly CartItem[]): CartSnapshot {
  const lines: CartLine[] = []
  let totalUnits = 0
  let subtotal = 0
  for (const item of items) {
    const product = getCartProduct(item.productId)
    if (!product) continue
    const lineSubtotal = product.price * item.quantity
    lines.push({ ...item, product, lineSubtotal })
    totalUnits += item.quantity
    subtotal += lineSubtotal
  }
  return { lines, totalUnits, lineCount: lines.length, subtotal, isEmpty: lines.length === 0 }
}
