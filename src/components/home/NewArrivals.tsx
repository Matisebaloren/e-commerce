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
        <SectionHeading eyebrow="Recién llegados" title="Nuevos favoritos por descubrir." linkLabel="Explorar más" to="/catalogo" />
        <ProductGrid products={productRepository.getNew().slice(0, 4)} />
        <div className="closing-note"><p><strong>¿Todavía buscando?</strong> Encontrá más en nuestro catálogo.</p><Link className="text-link" to="/catalogo">Ver todos los productos<ArrowUpRight size={18} aria-hidden="true" /></Link></div>
      </Container>
    </section>
  )
}

