import type { Product } from '../types/product'

export interface CartItem {
  readonly productId: string
  readonly quantity: number
}

export interface CartLine extends CartItem {
  readonly product: Product
  readonly lineSubtotal: number
}

export interface CartSnapshot {
  readonly lines: readonly CartLine[]
  readonly totalUnits: number
  readonly lineCount: number
  readonly subtotal: number
  readonly isEmpty: boolean
}

export interface CartNotice {
  readonly id: number
  readonly text: string
}

export interface CartState {
  readonly items: readonly CartItem[]
  readonly notice: CartNotice | null
  readonly noticeSerial: number
}

export type CartAction =
  | { type: 'add'; productId: string; quantity: number }
  | { type: 'remove'; productId: string }
  | { type: 'setQuantity'; productId: string; quantity: number }
  | { type: 'clear' }
  | { type: 'dismissNotice'; id: number }
