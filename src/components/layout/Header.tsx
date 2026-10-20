import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { Container } from './Container'
import { MobileMenu } from './MobileMenu'
import { Brand } from '../ui/Brand'
import { SearchBar } from '../catalog/SearchBar'
import { categories } from '../../data/categories'
import { useCart } from '../../cart/useCart'

function HeaderSearch({ initialQuery, onSearch }: { initialQuery: string; onSearch: () => void }) {
  const [query, setQuery] = useState(initialQuery)
  const navigate = useNavigate()
  return <SearchBar id="header-search" query={query} onQueryChange={setQuery} compact onSearch={() => {
    const params = new URLSearchParams()
    if (query.trim()) params.set('q', query.trim())
    navigate({ pathname: '/catalogo', search: params.toString() })
    onSearch()
  }} />
}

export function Header() {
  const { totalUnits, isDrawerOpen, openCart } = useCart()
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const [params] = useSearchParams()
  const location = useLocation()

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="site-header">
      <Container>
        <div className="header-main">
          <Brand />
          <nav className="desktop-nav" aria-label="Navegación principal">
            <NavLink to="/" end>Inicio</NavLink>
            <NavLink to="/catalogo">Catálogo</NavLink>
          </nav>
          <div className="header-search"><HeaderSearch key={location.key} initialQuery={params.get('q') ?? ''} onSearch={() => setOpen(false)} /></div>
          <button className="icon-button header-cart" type="button" onClick={() => { setOpen(false); openCart() }} aria-haspopup="dialog" aria-expanded={isDrawerOpen} aria-controls="cart-drawer" aria-label={`Abrir carrito: ${totalUnits} ${totalUnits === 1 ? 'unidad' : 'unidades'}`}>
            <ShoppingBag size={23} aria-hidden="true" /><span className={`cart-count ${totalUnits === 0 ? 'cart-count-empty' : ''}`} aria-hidden="true">{totalUnits}</span>
          </button>
          <button ref={toggleRef} className="icon-button menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(!open)}>
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
        <MobileMenu open={open} onClose={() => setOpen(false)} />
      </Container>
      <div className="category-nav-wrap">
        <Container>
          <nav className="category-nav" aria-label="Categorías de productos">
            <Link className="category-nav-all" to="/catalogo"><Menu size={16} aria-hidden="true" />Todas las categorías</Link>
            {categories.map((category) => <Link key={category.id} className={params.get('categoria') === category.slug && location.pathname === '/catalogo' ? 'is-active' : undefined} aria-current={params.get('categoria') === category.slug && location.pathname === '/catalogo' ? 'page' : undefined} to={`/catalogo?categoria=${category.slug}`}>{category.name}</Link>)}
          </nav>
        </Container>
      </div>
    </header>
  )
}

