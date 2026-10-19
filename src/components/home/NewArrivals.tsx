import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { productRepository } from '../../data/productRepository'
import { Container } from '../layout/Container'
import { ProductGrid } from '../products/ProductGrid'
import { SectionHeading } from '../ui/SectionHeading'

export function NewArrivals() {
  return (
    <section className="section new-arrivals">
      <Container>
        <SectionHeading eyebrow="Novedades" title="Recién llegados. Nuevos favoritos." linkLabel="Seguí descubriendo" to="/catalogo" />
        <ProductGrid products={productRepository.getNew().slice(0, 4)} />
        <div className="closing-note"><p>Hay más para vos.<strong>Encontralo en nuestro catálogo.</strong></p><Link className="button button-primary" to="/catalogo">Ver todos los productos<ArrowUpRight size={18} aria-hidden="true" /></Link></div>
      </Container>
    </section>
  )
}

