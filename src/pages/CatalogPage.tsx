import { Link, useSearchParams } from 'react-router-dom'
import { ChevronRight, SlidersHorizontal, X } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { SearchBar } from '../components/catalog/SearchBar'
import { CategoryFilter } from '../components/catalog/CategoryFilter'
import { EmptyState } from '../components/catalog/EmptyState'
import { ProductGrid } from '../components/products/ProductGrid'
import { productRepository } from '../data/productRepository'
import { getCategory } from '../data/categories'
import { usePageTitle } from '../lib/usePageTitle'
import { brand } from '../config/brand'

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
      <div className="catalog-heading"><span className="eyebrow">El catálogo de {brand.name}</span><h1>{currentCategory?.name ?? 'Todos los productos'}</h1><p>{currentCategory?.description ?? 'Encontrá tecnología, moda, hogar y más para tu día a día.'}</p></div>
      <div className="catalog-controls">
        <SearchBar id="catalog-search" query={query} onQueryChange={(value) => updateFilter('q', value, true)} />
        <div className="catalog-filter-heading"><SlidersHorizontal size={17} aria-hidden="true" /><span>Encontrá tu selección</span>{hasFilters && <button className="text-button" type="button" onClick={() => setSearchParams({})}>Limpiar filtros<X size={15} aria-hidden="true" /></button>}</div>
        <CategoryFilter selected={category} onChange={(value) => updateFilter('categoria', value)} />
      </div>
      <div className="catalog-results-bar"><p role="status" aria-live="polite"><strong>{products.length}</strong> {products.length === 1 ? 'producto' : 'productos'}{query.trim() && <> para <strong>“{query.trim()}”</strong></>}{category && <> en <strong>{currentCategory?.name ?? 'categoría desconocida'}</strong></>}</p><span>Precios en pesos argentinos</span></div>
      {products.length ? <ProductGrid products={products} /> : <EmptyState onReset={() => setSearchParams({})} />}
    </Container>
  )
}

