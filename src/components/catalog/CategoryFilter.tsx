import { categories } from '../../data/categories'

export function CategoryFilter({ selected, onChange }: { selected: string; onChange: (value: string) => void }) {
  return (
    <fieldset className="category-filter"><legend>Filtrar por categoría</legend><div className="category-filter-options">
      <button type="button" className={selected === '' ? 'filter-chip is-active' : 'filter-chip'} aria-pressed={selected === ''} onClick={() => onChange('')}>Todos</button>
      {categories.map((category) => <button key={category.id} type="button" className={selected === category.slug ? 'filter-chip is-active' : 'filter-chip'} aria-pressed={selected === category.slug} onClick={() => onChange(category.slug)}>{category.name}</button>)}
    </div></fieldset>
  )
}

