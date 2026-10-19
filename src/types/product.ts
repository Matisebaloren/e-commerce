import type { CategorySlug } from './category'

export interface ProductImage {
  readonly src: string
  readonly alt: string
}

export interface ProductFeature {
  readonly label: string
  readonly value: string
}

export interface Product {
  readonly id: string
  readonly slug: string
  readonly name: string
  readonly category: CategorySlug
  readonly brand: string
  readonly price: number
  readonly previousPrice?: number
  readonly shortDescription: string
  readonly description: string
  readonly images: readonly ProductImage[]
  readonly features: readonly ProductFeature[]
  readonly isFeatured: boolean
  readonly isNew: boolean
}

