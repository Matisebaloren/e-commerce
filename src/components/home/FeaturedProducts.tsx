import { productRepository } from '../../data/productRepository'
import { Container } from '../layout/Container'
import { ProductGrid } from '../products/ProductGrid'
import { SectionHeading } from '../ui/SectionHeading'

export function FeaturedProducts() {
  return <section className="section featured-section"><Container><SectionHeading eyebrow="LA SELECCIÓN NEXO" title="Tienen algo especial." description="Nuestros elegidos para acompañarte todos los días." linkLabel="Ver todo el catálogo" to="/catalogo" /><ProductGrid products={productRepository.getFeatured().slice(0, 4)} /></Container></section>
}

