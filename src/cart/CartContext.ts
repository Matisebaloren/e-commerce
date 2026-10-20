import { createContext } from 'react'
import type { CartNotice, CartSnapshot } from './cartTypes'

export interface CartContextValue extends CartSnapshot {
  addItem: (productId: string, quantity?: number) => void
  removeItem: (productId: string) => void
  setQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  isDrawerOpen: boolean
  openCart: () => void
  closeCart: () => void
  notice: CartNotice | null
  dismissNotice: (id: number) => void
  persistenceAvailable: boolean
}

export const CartContext = createContext<CartContextValue | undefined>(undefined)
