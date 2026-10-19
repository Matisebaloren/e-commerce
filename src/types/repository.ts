import type { Product } from './product'

export interface ProductFilters {
  readonly query?: string
  readonly category?: string
}

/** Local synchronous boundary. A future remote adapter maps its results to Product. */
export interface ProductRepository {
  getAll(): readonly Product[]
  getBySlug(slug: string): Product | undefined
  getFeatured(): readonly Product[]
  getNew(): readonly Product[]
  filter(filters: ProductFilters): readonly Product[]
}

