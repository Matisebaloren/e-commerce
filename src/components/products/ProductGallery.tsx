import { useState } from 'react'
import type { ProductImage } from '../../types/product'
import { ResponsiveImage } from '../ui/ResponsiveImage'

export function ProductGallery({ images, name }: { images: readonly ProductImage[]; name: string }) {
  const [selected, setSelected] = useState(0)
  const current = images[selected]
  return (
    <div className="product-gallery">
      <div className="gallery-main">
        <ResponsiveImage src={current?.src ?? '/images/placeholder.svg'} alt={current?.alt ?? name} width={1000} height={1000} sizes="(min-width: 1024px) 52vw, 100vw" fetchPriority="high" />
        <span className="gallery-caption">Una mirada más cerca <span>{selected + 1} / {images.length || 1}</span></span>
      </div>
      {images.length > 1 && <div className="gallery-thumbnails" role="group" aria-label="Imágenes del producto">
        {images.map((image, index) => <button type="button" key={image.src} className={selected === index ? 'thumbnail is-selected' : 'thumbnail'} aria-pressed={selected === index} aria-label={`Ver imagen ${index + 1} de ${name}`} onClick={() => setSelected(index)}><ResponsiveImage src={image.src} alt="" width={100} height={100} sizes="100px" /></button>)}
      </div>}
    </div>
  )
}

