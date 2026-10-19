import { Link, useLocation, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, ChevronRight, Info } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { ProductGallery } from '../components/products/ProductGallery'
import { ProductGrid } from '../components/products/ProductGrid'
import { SectionHeading } from '../components/ui/SectionHeading'
import { productRepository } from '../data/productRepository'
import { getCategory } from '../data/categories'
import { formatPrice } from '../lib/formatters'
import { usePageTitle } from '../lib/usePageTitle'
import { NotFoundPage } from './NotFoundPage'
import { brand } from '../config/brand'

export function ProductDetailPage() {
  const { slug = '' } = useParams()
  const location = useLocation()
  const product = productRepository.getBySlug(slug)
  usePageTitle(product?.name ?? 'Producto no encontrado')
  const state = location.state as { catalogSearch?: string } | null
  const catalogSearch = state?.catalogSearch?.startsWith('?') ? state.catalogSearch : ''
  const catalogUrl = `/catalogo${catalogSearch}`

  if (!product) return <NotFoundPage product />
  const category = getCategory(product.category)
  const related = productRepository.filter({ category: product.category }).filter((item) => item.id !== product.id)
  const hasDiscount = product.previousPrice !== undefined && product.previousPrice > product.price

  return (
    <Container className="product-page">
      <nav className="breadcrumbs" aria-label="Ruta de navegación"><Link to="/">Inicio</Link><ChevronRight size={14} aria-hidden="true" /><Link to={catalogUrl}>Catálogo</Link><ChevronRight size={14} aria-hidden="true" /><Link to={`/catalogo?categoria=${product.category}`}>{category?.name}</Link><ChevronRight size={14} aria-hidden="true" /><span aria-current="page">{product.name}</span></nav>
      <Link className="back-link" to={catalogUrl}><ArrowLeft size={17} aria-hidden="true" />Volver al catálogo</Link>
      <div className="product-detail-grid">
        <ProductGallery key={product.id} images={product.images} name={product.name} />
        <div className="product-detail-copy">
          <div className="product-detail-kicker"><Link to={`/catalogo?categoria=${product.category}`}>{category?.name}</Link><span>{product.brand}</span></div>
          <div className="detail-badges">{product.isNew && <span className="badge badge-new">Nuevo en {brand.name}</span>}{product.isFeatured && <span className="badge badge-neutral">Selección destacada</span>}</div>
          <h1>{product.name}</h1><p className="product-short-description">{product.shortDescription}</p>
          <div className="detail-price"><strong>{formatPrice(product.price)}</strong>{hasDiscount && <del>{formatPrice(product.previousPrice!)}</del>}<span>Precio ilustrativo en pesos argentinos</span></div>
          <p className="product-description">{product.description}</p>
          <section className="product-features" aria-labelledby="features-heading"><h2 id="features-heading">Características del producto.</h2><dl>{product.features.map((feature) => <div key={feature.label}><dt>{feature.label}</dt><dd>{feature.value}</dd></div>)}</dl></section>
          <div className="demo-notice"><Info size={20} aria-hidden="true" /><p><strong>Catálogo demostrativo.</strong> Las imágenes y características son ilustrativas. {brand.demoNotice}</p></div>
          <Link className="text-link" to={`/catalogo?categoria=${product.category}`}>Seguí explorando {category?.name.toLocaleLowerCase('es-AR')}<ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </div>
      {related.length > 0 && <section className="related-products"><SectionHeading eyebrow="SEGUÍ EXPLORANDO" title="También van con vos." to={`/catalogo?categoria=${product.category}`} linkLabel={`Ver ${category?.name.toLocaleLowerCase('es-AR')}`} /><ProductGrid products={related} /></section>}
    </Container>
  )
}

