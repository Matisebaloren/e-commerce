import { useCallback, useEffect, useMemo, useReducer, useState } from 'react'
import type { ReactNode } from 'react'
import { CartContext } from './CartContext'
import { cartReducer, createCartState } from './cartReducer'
import { readCartStorage, writeCartStorage } from './cartStorage'
import { getCartSnapshot } from './cartUtils'
import './cart.css'

export function CartProvider({ children }: { children: ReactNode }) {
  const [initial] = useState(readCartStorage)
  const [state, dispatch] = useReducer(cartReducer, initial.items, createCartState)
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const [persistenceAvailable, setPersistenceAvailable] = useState(initial.available)
  const snapshot = useMemo(() => getCartSnapshot(state.items), [state.items])

  useEffect(() => {
    setPersistenceAvailable(writeCartStorage(state.items))
  }, [state.items])

  useEffect(() => {
    if (!state.notice) return
    const id = state.notice.id
    const timeout = window.setTimeout(() => dispatch({ type: 'dismissNotice', id }), 4000)
    return () => window.clearTimeout(timeout)
  }, [state.notice])

  const addItem = useCallback((productId: string, quantity = 1) => dispatch({ type: 'add', productId, quantity }), [])
  const removeItem = useCallback((productId: string) => dispatch({ type: 'remove', productId }), [])
  const setQuantity = useCallback((productId: string, quantity: number) => dispatch({ type: 'setQuantity', productId, quantity }), [])
  const clearCart = useCallback(() => dispatch({ type: 'clear' }), [])
  const openCart = useCallback(() => setDrawerOpen(true), [])
  const closeCart = useCallback(() => setDrawerOpen(false), [])
  const dismissNotice = useCallback((id: number) => dispatch({ type: 'dismissNotice', id }), [])

  const value = useMemo(() => ({
    ...snapshot, addItem, removeItem, setQuantity, clearCart,
    isDrawerOpen, openCart, closeCart, notice: state.notice, dismissNotice, persistenceAvailable,
  }), [snapshot, addItem, removeItem, setQuantity, clearCart, isDrawerOpen, openCart, closeCart, state.notice, dismissNotice, persistenceAvailable])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
