import { productRepository } from '../../data/productRepository'
import { Container } from '../layout/Container'
import { ProductGrid } from '../products/ProductGrid'
import { SectionHeading } from '../ui/SectionHeading'

export function FeaturedProducts() {
  return (
    <section className="section featured-section">
      <Container>
        <SectionHeading eyebrow="Nuestra selección" title="Destacados para tu día." linkLabel="Ver catálogo" to="/catalogo" />
        <ProductGrid products={productRepository.getFeatured().slice(0, 4)} />
      </Container>
    </section>
  )
}

