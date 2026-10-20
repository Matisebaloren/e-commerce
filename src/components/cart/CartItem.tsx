import { Link } from 'react-router-dom'
import { Trash2 } from 'lucide-react'
import type { CartLine } from '../../cart/cartTypes'
import { useCart } from '../../cart/useCart'
import { getCategory } from '../../data/categories'
import { formatPrice } from '../../lib/formatters'
import { getProductImageClass } from '../../lib/productImages'
import { ResponsiveImage } from '../ui/ResponsiveImage'
import { QuantitySelector } from './QuantitySelector'

interface Props {
  line: CartLine
  compact?: boolean
  onNavigate?: () => void
}

export function CartItem({ line, compact = false, onNavigate }: Props) {
  const { removeItem, setQuantity } = useCart()
  const { product, quantity, lineSubtotal } = line
  const image = product.images[0]
  const source = image?.src ?? '/images/placeholder.svg'
  return (
    <article className={`cart-line ${compact ? 'cart-line-compact' : ''}`} aria-label={product.name}>
      <Link className="cart-line-image" to={`/producto/${product.slug}`} onClick={onNavigate} aria-label={`Ver ${product.name}`}>
        <ResponsiveImage src={source} className={getProductImageClass(source)} alt={image?.alt ?? product.name} width={160} height={160} sizes={compact ? '76px' : '112px'} loading="lazy" />
      </Link>
      <div className="cart-line-content">
        <div className="cart-line-heading"><Link to={`/producto/${product.slug}`} onClick={onNavigate}>{product.name}</Link><button className="icon-button cart-remove" type="button" onClick={() => removeItem(product.id)} aria-label={`Eliminar ${product.name} del carrito`}><Trash2 size={17} aria-hidden="true" /></button></div>
        <span className="cart-line-category">{getCategory(product.category)?.name}</span>
        <p className="cart-unit-price">{formatPrice(product.price)} <span>por unidad</span></p>
        <div className="cart-line-bottom"><QuantitySelector value={quantity} onChange={(value) => setQuantity(product.id, value)} label={`Cantidad de ${product.name}`} />{(!compact || quantity > 1) && <p className="cart-line-subtotal"><span>Subtotal</span><strong>{formatPrice(lineSubtotal)}</strong></p>}</div>
      </div>
    </article>
  )
}
