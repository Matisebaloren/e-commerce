import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { categories } from '../../data/categories'
import { Container } from './Container'
import { Brand } from '../ui/Brand'

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-main">
          <div className="footer-intro"><Brand /><p>Encontrá eso que hace<br />mejor tu día.</p><span>Una selección. Muchas posibilidades.</span></div>
          <div className="footer-column"><h2>Explorá NEXO</h2><Link to="/">Inicio<ArrowUpRight size={14} aria-hidden="true" /></Link><Link to="/catalogo">Todo el catálogo<ArrowUpRight size={14} aria-hidden="true" /></Link><Link to="/catalogo?categoria=tecnologia">Nuestra selección tech<ArrowUpRight size={14} aria-hidden="true" /></Link></div>
          <div className="footer-column"><h2>Categorías</h2><div className="footer-category-links">{categories.map((category) => <Link key={category.id} to={`/catalogo?categoria=${category.slug}`}>{category.name}</Link>)}</div></div>
          <div className="footer-note"><span className="eyebrow">Hecho para descubrir</span><p>Pequeños hallazgos.<br />Grandes favoritos.</p><Link className="text-link" to="/catalogo">Encontrá el tuyo<ArrowUpRight size={18} aria-hidden="true" /></Link></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} NEXO Market · Portfolio</span><p>Proyecto demostrativo de portfolio. No se realizan ventas reales.</p><span>Diseñado con intención.</span></div>
      </Container>
    </footer>
  )
}

