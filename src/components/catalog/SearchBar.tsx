import { Search, X, ArrowRight } from 'lucide-react'
import type { FormEvent } from 'react'

interface Props {
  id: string
  query: string
  onQueryChange: (query: string) => void
  onSearch?: () => void
  compact?: boolean
}

export function SearchBar({ id, query, onQueryChange, onSearch, compact = false }: Props) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSearch?.()
  }

  return (
    <form className={`search-form ${compact ? 'search-compact' : ''}`} role="search" aria-label={compact ? 'Búsqueda general de productos' : 'Búsqueda en el catálogo'} onSubmit={handleSubmit}>
      <label className={compact ? 'visually-hidden' : undefined} htmlFor={id}>Buscar productos</label>
      <div className="search-control">
        <Search className="search-leading" size={19} aria-hidden="true" />
        <input id={id} type="search" name="q" value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Buscar productos por nombre" autoComplete="off" />
        {query && <button className="icon-button search-clear" type="button" onClick={() => onQueryChange('')} aria-label="Borrar búsqueda"><X size={16} aria-hidden="true" /></button>}
        <button className="search-submit" type="submit" aria-label="Buscar productos"><ArrowRight size={19} aria-hidden="true" /></button>
      </div>
    </form>
  )
}

