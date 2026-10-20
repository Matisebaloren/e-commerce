import { Minus, Plus } from 'lucide-react'
import { MIN_CART_QUANTITY, MAX_CART_QUANTITY } from '../../cart/cartUtils'

interface Props {
  value: number
  onChange: (value: number) => void
  label: string
}

export function QuantitySelector({ value, onChange, label }: Props) {
  return (
    <div className="quantity-selector" role="group" aria-label={label}>
      <button type="button" onClick={() => onChange(value - 1)} disabled={value <= MIN_CART_QUANTITY} aria-label={`Disminuir: ${label}`}><Minus size={16} aria-hidden="true" /></button>
      <output aria-label={label} aria-live="polite">{value}</output>
      <button type="button" onClick={() => onChange(value + 1)} disabled={value >= MAX_CART_QUANTITY} aria-label={`Aumentar: ${label}`}><Plus size={16} aria-hidden="true" /></button>
    </div>
  )
}
