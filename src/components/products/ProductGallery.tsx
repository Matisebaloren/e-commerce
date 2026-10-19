import { useState } from 'react'
import type { ProductImage } from '../../types/product'
import { ResponsiveImage } from '../ui/ResponsiveImage'
import { getProductImageClass } from '../../lib/productImages'

export function ProductGallery({ images, name }: { images: readonly ProductImage[]; name: string }) {
  const [selected, setSelected] = useState(0)
  const current = images[selected]
  const source = current?.src ?? '/images/placeholder.svg'

  return (
    <div className="product-gallery">
      <div className="gallery-main">
        <div className="gallery-image">
          <ResponsiveImage src={source} className={getProductImageClass(source)} alt={current?.alt ?? name} width={1000} height={1000} sizes="(min-width: 1440px) 680px, (min-width: 1024px) 50vw, 100vw" fetchPriority="high" />
        </div>
        <span className="gallery-caption">Fotografía ilustrativa{images.length > 1 && <span>{selected + 1} / {images.length}</span>}</span>
      </div>
      {images.length > 1 && (
        <div className="gallery-thumbnails" role="group" aria-label="Imágenes del producto">
          {images.map((image, index) => <button type="button" key={image.src} className={selected === index ? 'thumbnail is-selected' : 'thumbnail'} aria-pressed={selected === index} aria-label={`Ver imagen ${index + 1} de ${name}`} onClick={() => setSelected(index)}><ResponsiveImage src={image.src} className={getProductImageClass(image.src)} alt="" width={100} height={100} sizes="72px" /></button>)}
        </div>
      )}
    </div>
  )
}

