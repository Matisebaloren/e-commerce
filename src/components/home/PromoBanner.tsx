import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../layout/Container'
import { ResponsiveImage } from '../ui/ResponsiveImage'
import { getCategory } from '../../data/categories'

export function PromoBanner() {
  const technology = getCategory('tecnologia')
  const home = getCategory('hogar')

  return (
    <section className="promo-section" aria-label="Colecciones para explorar">
      <Container>
        <div className="campaign-grid">
          <article className="campaign campaign-coral">
            <div className="campaign-copy">
              <span className="eyebrow">Tu mundo, más conectado</span>
              <h2>Un upgrade<br />para tus días.</h2>
              <p>Sonido, diseño y tecnología que van con vos.</p>
              <Link className="button button-dark" to="/catalogo?categoria=tecnologia">Explorar tecnología<ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
            {technology && <ResponsiveImage src={technology.image} alt={technology.imageAlt} width={600} height={600} loading="lazy" sizes="(min-width: 768px) 25vw, 50vw" />}
          </article>
          <article className="campaign campaign-cream">
            <div className="campaign-copy">
              <span className="eyebrow">Hogar con personalidad</span>
              <h2>Ese toque<br />que faltaba.</h2>
              <p>Detalles que hacen más tuyo cada rincón.</p>
              <Link className="text-link" to="/catalogo?categoria=hogar">Descubrí hogar<ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
            {home && <ResponsiveImage src={home.image} alt={home.imageAlt} width={600} height={600} loading="lazy" sizes="(min-width: 768px) 25vw, 50vw" />}
          </article>
        </div>
      </Container>
    </section>
  )
}

