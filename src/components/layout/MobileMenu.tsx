import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { categories } from '../../data/categories'

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <nav id="mobile-menu" className="mobile-menu" hidden={!open} aria-label="Navegación móvil">
      <NavLink to="/" end onClick={onClose}>Inicio<ArrowUpRight size={18} aria-hidden="true" /></NavLink>
      <NavLink to="/catalogo" onClick={onClose}>Todo el catálogo<ArrowUpRight size={18} aria-hidden="true" /></NavLink>
      <p className="eyebrow">Explorá por categoría</p>
      <div className="mobile-categories">
        {categories.map((category) => <Link key={category.id} to={`/catalogo?categoria=${category.slug}`} onClick={onClose}>{category.name}</Link>)}
      </div>
    </nav>
  )
}

