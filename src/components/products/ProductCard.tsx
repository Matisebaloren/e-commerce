import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Product } from '../../types/product'
import { getCategory } from '../../data/categories'
import { formatPrice } from '../../lib/formatters'
import { ResponsiveImage } from '../ui/ResponsiveImage'

export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.category)
  const location = useLocation()
  const image = product.images[0]
  const discount = product.previousPrice && product.previousPrice > product.price
    ? Math.round((1 - product.price / product.previousPrice) * 100)
    : undefined

  return (
    <article className="product-card">
      <Link className="product-card-link" to={`/producto/${product.slug}`} state={{ catalogSearch: location.pathname === '/catalogo' ? location.search : '' }}>
        <div className="product-card-media">
          {image && <ResponsiveImage src={image.src} alt={image.alt} loading="lazy" width={600} height={600} />}
          <div className="product-badges">{discount && <span className="badge badge-promo">−{discount}%</span>}{product.isNew && <span className="badge badge-new">Nuevo</span>}</div>
          <span className="product-card-arrow" aria-hidden="true"><ArrowUpRight size={19} /></span>
        </div>
        <div className="product-card-body">
          <span className="product-category">{category?.name}</span>
          <h3>{product.name}</h3>
          <div className="product-prices"><strong>{formatPrice(product.price)}</strong>{discount && <del>{formatPrice(product.previousPrice!)}</del>}</div>
          <span className="product-card-detail">Descubrí los detalles <ArrowUpRight size={14} aria-hidden="true" /></span>
        </div>
      </Link>
    </article>
  )
}

