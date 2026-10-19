import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../layout/Container'
import { ResponsiveImage } from '../ui/ResponsiveImage'
import { getCategory } from '../../data/categories'

export function PromoBanner() {
  const technology = getCategory('tecnologia')
  const home = getCategory('hogar')

  return (
    <section className="promo-section" aria-label="Selecciones de tecnología y hogar">
      <Container>
        <div className="campaign-grid">
          <article className="campaign">
            <div className="campaign-copy">
              <span className="eyebrow">Tecnología para todos los días</span>
              <h2>Conectá con<br />lo que te gusta.</h2>
              <Link className="text-link" to="/catalogo?categoria=tecnologia">Explorar tecnología<ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
            <div className="campaign-media">{technology && <ResponsiveImage src={technology.image} alt={technology.imageAlt} width={700} height={700} loading="lazy" sizes="(min-width: 768px) 23vw, 45vw" />}</div>
          </article>
          <article className="campaign campaign-warm">
            <div className="campaign-copy">
              <span className="eyebrow">Objetos para tu espacio</span>
              <h2>Hacé de tu casa<br />tu lugar.</h2>
              <Link className="text-link" to="/catalogo?categoria=hogar">Descubrí hogar<ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
            <div className="campaign-media">{home && <ResponsiveImage src={home.image} alt={home.imageAlt} width={700} height={700} loading="lazy" sizes="(min-width: 768px) 23vw, 45vw" />}</div>
          </article>
        </div>
      </Container>
    </section>
  )
}

