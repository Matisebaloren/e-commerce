import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { productRepository } from '../../data/productRepository'
import { Container } from '../layout/Container'
import { ProductGrid } from '../products/ProductGrid'
import { SectionHeading } from '../ui/SectionHeading'

export function NewArrivals() {
  return <section className="section new-arrivals"><Container><SectionHeading eyebrow="RECIÉN LLEGADOS A LA SELECCIÓN" title="Un nuevo buen descubrimiento." description="Nuevas ideas para renovar tus esenciales." linkLabel="Seguí descubriendo" to="/catalogo" /><ProductGrid products={productRepository.getNew().slice(0, 4)} /><div className="closing-note"><span className="closing-symbol" aria-hidden="true">↗</span><p>No es solo lo que elegís.<br /><strong>Es lo que hacés tuyo.</strong></p><LinkToCatalog /></div></Container></section>
}


function LinkToCatalog() {
  return <Link className="text-link" to="/catalogo">Encontrá tu próximo favorito<ArrowUpRight size={20} aria-hidden="true" /></Link>
}

