import { ArrowDown, ArrowUpRight, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../layout/Container'
import { ResponsiveImage } from '../ui/ResponsiveImage'

export function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <Container>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span className="status-dot" />UNA SELECCIÓN, MUCHAS POSIBILIDADES</span>
            <h1 id="hero-title">Eso que buscás.<br />Eso que <span>va con vos.</span></h1>
            <p>Pequeños hallazgos que hacen grandes tus días. Descubrí tecnología, hogar, moda y mucho más, en un mismo lugar.</p>
            <Link className="button button-primary" to="/catalogo">Explorar productos<ArrowUpRight size={20} aria-hidden="true" /></Link>
            <div className="hero-footnote"><span className="hero-footnote-mark" aria-hidden="true"><Plus size={21} /></span><span>Elegidos con intención.<br /><strong>Pensados para tu día a día.</strong></span></div>
          </div>
          <div className="hero-visual">
            <ResponsiveImage className="hero-photo" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=90" alt="Living luminoso con sofá, madera y detalles de decoración contemporánea" width={1000} height={1100} fetchPriority="high" sizes="(min-width: 1024px) 50vw, 100vw" />
            <span className="hero-visual-label">ESPACIOS QUE INSPIRAN · NEXO HOME</span>
            <span className="hero-stamp" aria-hidden="true">Un nuevo<br />favorito<br /><ArrowDown size={22} /></span>
            <Link className="hero-image-link" to="/catalogo?categoria=hogar"><span><small>HACÉ TUYO CADA RINCÓN</small><strong>Tu casa. Tu lugar.</strong></span><span className="circle-arrow"><ArrowUpRight size={24} aria-hidden="true" /></span></Link>
          </div>
        </div>
        <div className="discovery-strip">
          <p>Lo cotidiano,<br /><strong>un poco más extraordinario.</strong></p>
          <div><span>01 — DESCUBRÍ</span><p>Seis universos para explorar.</p></div>
          <div><span>02 — ENCONTRÁ</span><p>Detalles que van con tu estilo.</p></div>
          <div><span>03 — INSPIRATE</span><p>Una nueva forma de elegir.</p></div>
        </div>
      </Container>
    </section>
  )
}

