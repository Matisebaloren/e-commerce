import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Category } from '../../types/category'
import { ResponsiveImage } from '../ui/ResponsiveImage'

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link className="category-card" to={`/catalogo?categoria=${category.slug}`}>
      <div className="category-card-media">
        <ResponsiveImage src={category.image} alt={category.imageAlt} loading="lazy" width={600} height={338} sizes="(min-width: 1440px) 215px, (min-width: 1024px) 16vw, (min-width: 600px) 30vw, 46vw" />
      </div>
      <div className="category-card-copy"><h3>{category.name}</h3><ArrowUpRight className="category-card-arrow" size={16} aria-hidden="true" /></div>
    </Link>
  )
}

