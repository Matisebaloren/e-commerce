import { useState } from 'react'
import { QuantitySelector } from './QuantitySelector'
import { AddToCartButton } from './AddToCartButton'

export function ProductPurchase({ productId, name }: { productId: string; name: string }) {
  const [quantity, setQuantity] = useState(1)
  return (
    <div className="product-purchase">
      <span className="purchase-label">Cantidad</span>
      <div className="product-purchase-actions"><QuantitySelector value={quantity} onChange={setQuantity} label={`Cantidad de ${name}`} /><AddToCartButton productId={productId} quantity={quantity} /></div>
      <p>Máximo 10 unidades por artículo en esta demostración. No representa stock real.</p>
    </div>
  )
}
