import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../layout/Container'
import { ResponsiveImage } from '../ui/ResponsiveImage'

export function PromoBanner() {
  return <section className="promo-section"><Container><div className="promo-banner"><div className="promo-copy"><span className="eyebrow">CONECTÁ CON TU MUNDO</span><h2>Subile el volumen<br />a tus días.</h2><p>Diseño que se siente. Tecnología que te acompaña.<br />Conocé los esenciales de nuestra selección tech.</p><Link className="button button-white" to="/catalogo?categoria=tecnologia">Explorar tecnología<ArrowUpRight size={20} aria-hidden="true" /></Link><span className="promo-edition">NEXO SELECTION / 01</span></div><div className="promo-visual"><ResponsiveImage src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1100&q=85" alt="Auriculares de la selección de tecnología NEXO" width={900} height={900} loading="lazy" sizes="(min-width: 768px) 50vw, 100vw" /><span className="promo-orbit" aria-hidden="true">PLAY YOUR EVERYDAY ↗</span></div></div></Container></section>
}

