import { Search, X } from 'lucide-react'
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
    <form className={`search-form ${compact ? 'search-compact' : ''}`} role="search" onSubmit={handleSubmit}>
      <label htmlFor={id}>Buscar productos</label>
      <div className="search-control">
        <Search className="search-leading" size={19} aria-hidden="true" />
        <input id={id} type="search" name="q" value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="¿Qué estás buscando?" autoComplete="off" />
        {query && <button className="icon-button search-clear" type="button" onClick={() => onQueryChange('')} aria-label="Borrar búsqueda"><X size={16} aria-hidden="true" /></button>}
        <button className="search-submit" type="submit" aria-label="Buscar productos"><ArrowSearch /></button>
      </div>
    </form>
  )
}

function ArrowSearch() {
  return <span aria-hidden="true">→</span>
}

