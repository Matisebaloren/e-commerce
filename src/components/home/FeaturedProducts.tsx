import { productRepository } from '../../data/productRepository'
import { Container } from '../layout/Container'
import { ProductGrid } from '../products/ProductGrid'
import { SectionHeading } from '../ui/SectionHeading'
import { brand } from '../../config/brand'

export function FeaturedProducts() {
  return (
    <section className="section featured-section">
      <Container>
        <SectionHeading eyebrow={`La selección ${brand.name}`} title="Destacados para vos." linkLabel="Explorar productos" to="/catalogo" />
        <ProductGrid products={productRepository.getFeatured().slice(0, 4)} />
      </Container>
    </section>
  )
}

