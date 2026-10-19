import { Link, useSearchParams } from 'react-router-dom'
import { ArrowUpRight, ChevronRight, SlidersHorizontal, X } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { SearchBar } from '../components/catalog/SearchBar'
import { CategoryFilter } from '../components/catalog/CategoryFilter'
import { EmptyState } from '../components/catalog/EmptyState'
import { ProductGrid } from '../components/products/ProductGrid'
import { productRepository } from '../data/productRepository'
import { getCategory } from '../data/categories'
import { usePageTitle } from '../lib/usePageTitle'

export function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') ?? ''
  const category = searchParams.get('categoria') ?? ''
  const currentCategory = getCategory(category)
  const products = productRepository.filter({ query, category })
  const hasFilters = Boolean(query || category)
  usePageTitle(currentCategory?.name ?? 'Catálogo')

  function updateFilter(key: string, value: string, replace = false) {
    setSearchParams((previous) => {
      const next = new URLSearchParams(previous)
      if (value.trim()) next.set(key, value)
      else next.delete(key)
      return next
    }, { replace, preventScrollReset: true })
  }

  return (
    <Container className="catalog-page">
      <nav className="breadcrumbs" aria-label="Ruta de navegación"><Link to="/">Inicio</Link><ChevronRight size={14} aria-hidden="true" /><span aria-current="page">Catálogo</span></nav>
      <div className="catalog-heading"><div><span className="eyebrow">ENCONTRÁ ESO QUE VA CON VOS</span><h1>{currentCategory?.name ?? 'Todos tus próximos favoritos.'}</h1><p>{currentCategory?.description ?? 'Una selección para cada momento. Explorá, descubrí y hacelo tuyo.'}</p></div><span className="catalog-heading-mark" aria-hidden="true"><ArrowUpRight size={54} strokeWidth={1.3} /></span></div>
      <div className="catalog-controls">
        <SearchBar id="catalog-search" query={query} onQueryChange={(value) => updateFilter('q', value, true)} />
        <div className="catalog-filter-heading"><SlidersHorizontal size={17} aria-hidden="true" /><span>Encontrá tu selección</span>{hasFilters && <button className="text-button" type="button" onClick={() => setSearchParams({})}>Limpiar filtros<X size={15} aria-hidden="true" /></button>}</div>
        <CategoryFilter selected={category} onChange={(value) => updateFilter('categoria', value)} />
      </div>
      <div className="catalog-results-bar"><p role="status" aria-live="polite"><strong>{products.length}</strong> {products.length === 1 ? 'producto' : 'productos'}{query.trim() && <> para <strong>“{query.trim()}”</strong></>}{category && <> en <strong>{currentCategory?.name ?? 'categoría desconocida'}</strong></>}</p><span>Seleccionados con intención</span></div>
      {products.length ? <ProductGrid products={products} /> : <EmptyState onReset={() => setSearchParams({})} />}
      <div className="catalog-bottom-note"><span>NEXO MARKET</span><p>Todo empieza con un buen descubrimiento.</p></div>
    </Container>
  )
}

