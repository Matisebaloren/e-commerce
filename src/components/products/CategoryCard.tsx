import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Category } from '../../types/category'
import { ResponsiveImage } from '../ui/ResponsiveImage'

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link className={`category-card category-${category.slug}`} to={`/catalogo?categoria=${category.slug}`}>
      <div className="category-card-copy"><h3>{category.name}</h3><p>{category.description}</p></div>
      <ResponsiveImage src={category.image} alt={category.imageAlt} loading="lazy" width={600} height={500} sizes="(min-width: 1024px) 20vw, (min-width: 600px) 25vw, 40vw" />
      <span className="category-card-arrow" aria-hidden="true"><ArrowUpRight size={20} /></span>
    </Link>
  )
}

