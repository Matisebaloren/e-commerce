import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../layout/Container'
import { ResponsiveImage } from '../ui/ResponsiveImage'
import { brand } from '../../config/brand'

export function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <Container>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{brand.name} · tus esenciales, tu estilo</span>
            <h1 id="hero-title">Descubrí lo que<br /><span>va con vos.</span></h1>
            <p>Tecnología, moda, hogar y mucho más. Encontrá tus próximos favoritos en un solo lugar.</p>
            <Link className="button button-primary" to="/catalogo">Explorar productos<ArrowUpRight size={20} aria-hidden="true" /></Link>
          </div>
          <div className="hero-media">
            <ResponsiveImage
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=85"
              alt="Prendas y accesorios de uso cotidiano en una composición sobre un fondo claro"
              width={1200}
              height={1000}
              fetchPriority="high"
              sizes="(min-width: 1440px) 700px, (min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

