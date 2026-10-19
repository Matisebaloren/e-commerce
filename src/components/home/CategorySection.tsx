import { categories } from '../../data/categories'
import { Container } from '../layout/Container'
import { CategoryCard } from '../products/CategoryCard'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export function CategorySection() {
  return (
    <section className="section category-section" id="categorias" aria-labelledby="categories-title">
      <Container>
        <div className="section-heading">
          <div><span className="eyebrow">Encontrá lo que buscás</span><h2 id="categories-title">Tu próxima parada.</h2></div>
          <Link className="text-link" to="/catalogo">Ver todo el catálogo<ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
        <div className="category-mosaic">{categories.map((category) => <CategoryCard key={category.id} category={category} />)}</div>
      </Container>
    </section>
  )
}

