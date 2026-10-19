import type { ProductRepository } from '../types/repository'
import { normalizeSearch } from '../lib/formatters'
import { products } from './products'

export const productRepository: ProductRepository = {
  getAll: () => products,
  getBySlug: (slug) => products.find((product) => product.slug === slug),
  getFeatured: () => products.filter((product) => product.isFeatured),
  getNew: () => products.filter((product) => product.isNew),
  filter: ({ query = '', category = '' }) => {
    const search = normalizeSearch(query)
    return products.filter((product) =>
      (!category || product.category === category) &&
      (!search || normalizeSearch(product.name).includes(search)),
    )
  },
}

