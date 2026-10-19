import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { categories } from '../../data/categories'
import { Container } from './Container'
import { Brand } from '../ui/Brand'
import { brand } from '../../config/brand'

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-main">
          <div className="footer-intro"><Brand /><p>{brand.tagline}</p><span>Encontrá tus próximos favoritos.</span></div>
          <div className="footer-column"><h2>Explorá {brand.name}</h2><Link to="/">Inicio<ArrowUpRight size={16} aria-hidden="true" /></Link><Link to="/catalogo">Todo el catálogo<ArrowUpRight size={16} aria-hidden="true" /></Link><Link to="/catalogo?categoria=tecnologia">Selección tech<ArrowUpRight size={16} aria-hidden="true" /></Link></div>
          <div className="footer-column"><h2>Categorías</h2><div className="footer-category-links">{categories.map((category) => <Link key={category.id} to={`/catalogo?categoria=${category.slug}`}>{category.name}</Link>)}</div></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} {brand.name} · Portfolio</span><p>{brand.demoNotice}</p></div>
      </Container>
    </footer>
  )
}

