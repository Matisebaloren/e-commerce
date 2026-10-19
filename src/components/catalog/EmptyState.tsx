import { SearchX, ArrowUpRight } from 'lucide-react'

export function EmptyState({ onReset }: { onReset: () => void }) {
  return <div className="empty-state"><div className="empty-icon"><SearchX size={34} aria-hidden="true" /></div><span className="eyebrow">Sigamos buscando</span><h2>No encontramos coincidencias.</h2><p>Probá con otro nombre o explorá todas las categorías. Tu próximo favorito puede estar un poco más allá.</p><button className="button button-primary" type="button" onClick={onReset}>Limpiar filtros<ArrowUpRight size={18} aria-hidden="true" /></button></div>
}

