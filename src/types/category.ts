export type CategorySlug = 'tecnologia' | 'hogar' | 'moda' | 'belleza' | 'deportes' | 'accesorios'

export interface Category {
  readonly id: string
  readonly slug: CategorySlug
  readonly name: string
  readonly description: string
  readonly image: string
  readonly imageAlt: string
}

