import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categories } from '../../data/categories'
import { Container } from '../layout/Container'
import { CategoryCard } from '../products/CategoryCard'

export function CategorySection() {
  return (
    <section className="section category-section" id="categorias" aria-labelledby="categories-title">
      <Container>
        <div className="section-heading">
          <h2 id="categories-title">Explorá por categoría</h2>
          <Link className="text-link" to="/catalogo">Ver todo<ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
        <div className="category-grid">{categories.map((category) => <CategoryCard key={category.id} category={category} />)}</div>
      </Container>
    </section>
  )
}

