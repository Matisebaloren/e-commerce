import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../layout/Container'
import { ResponsiveImage } from '../ui/ResponsiveImage'
import { productRepository } from '../../data/productRepository'
import { getCategory } from '../../data/categories'
import { brand } from '../../config/brand'

const heroProducts = [
  { slug: 'auriculares-inalambricos-studio', className: 'hero-tech' },
  { slug: 'zapatillas-urbanas-move', className: 'hero-fashion' },
  { slug: 'lampara-de-mesa-aura', className: 'hero-home' },
]

export function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <Container>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{brand.name} · elegí tu próximo favorito</span>
            <h1 id="hero-title">Todo para tu día,<br /><span>en un mismo lugar.</span></h1>
            <p>Descubrí tecnología, moda, hogar y mucho más. Productos para cada momento y cada estilo.</p>
            <Link className="button button-white" to="/catalogo">Explorar productos<ArrowUpRight size={20} aria-hidden="true" /></Link>
            <div className="hero-category-links" aria-label="Explorar categorías">
              <Link to="/catalogo?categoria=tecnologia">Tecnología</Link>
              <Link to="/catalogo?categoria=moda">Moda</Link>
              <Link to="/catalogo?categoria=hogar">Hogar</Link>
              <span>y mucho más.</span>
            </div>
          </div>
          <div className="hero-products" aria-label="Productos de nuestra selección">
            {heroProducts.map(({ slug, className }) => {
              const product = productRepository.getBySlug(slug)
              const image = product?.images[0]
              if (!product || !image) return null
              return (
                <Link key={slug} className={`hero-product ${className}`} to={`/producto/${slug}`}>
                  <span className="hero-product-category">{getCategory(product.category)?.name}</span>
                  <ResponsiveImage src={image.src} alt={image.alt} width={700} height={700} sizes="(min-width: 1024px) 25vw, 50vw" fetchPriority={className === 'hero-tech' ? 'high' : 'auto'} />
                  <span className="hero-product-caption"><strong>{product.name}</strong><ArrowUpRight size={20} aria-hidden="true" /></span>
                </Link>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

