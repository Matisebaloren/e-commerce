import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Category } from '../../types/category'
import { ResponsiveImage } from '../ui/ResponsiveImage'

export function CategoryCard({ category, index }: { category: Category; index: number }) {
  return (
    <Link className={`category-card category-${category.slug}`} to={`/catalogo?categoria=${category.slug}`}>
      <ResponsiveImage src={category.image} alt={category.imageAlt} loading="lazy" width={800} height={700} sizes="(min-width: 1024px) 33vw, (min-width: 600px) 50vw, 100vw" />
      <div className="category-card-shade" />
      <span className="category-index" aria-hidden="true">0{index + 1}</span>
      <div className="category-card-copy"><h3>{category.name}</h3><p>{category.description}</p></div>
      <span className="category-card-arrow" aria-hidden="true"><ArrowUpRight size={21} /></span>
    </Link>
  )
}

