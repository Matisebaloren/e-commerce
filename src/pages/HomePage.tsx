import { Hero } from '../components/home/Hero'
import { CategorySection } from '../components/home/CategorySection'
import { FeaturedProducts } from '../components/home/FeaturedProducts'
import { PromoBanner } from '../components/home/PromoBanner'
import { NewArrivals } from '../components/home/NewArrivals'
import { usePageTitle } from '../lib/usePageTitle'

export function HomePage() {
  usePageTitle('Encontrá tu próximo favorito')
  return <><Hero /><CategorySection /><FeaturedProducts /><PromoBanner /><NewArrivals /></>
}

