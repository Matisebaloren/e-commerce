import { categories } from '../../data/categories'
import { Container } from '../layout/Container'
import { CategoryCard } from '../products/CategoryCard'

export function CategorySection() {
  return <section className="section category-section" id="categorias" aria-labelledby="categories-title"><Container>
    <div className="section-heading"><div><span className="eyebrow">UN MUNDO POR DESCUBRIR</span><h2 id="categories-title">¿Por dónde empezamos?</h2><p>Seis maneras de encontrar algo muy tuyo.</p></div></div>
    <div className="category-mosaic">{categories.map((category, index) => <CategoryCard key={category.id} category={category} index={index} />)}</div>
  </Container></section>
}

