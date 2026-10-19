import { useState } from 'react'
import type { ImgHTMLAttributes } from 'react'

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> & {
  src: string
  alt: string
}

export function ResponsiveImage({ src, alt, className = '', sizes = '(min-width: 1440px) 322px, (min-width: 1200px) 24vw, (min-width: 768px) 31vw, (min-width: 420px) 46vw, 92vw', ...props }: Props) {
  const [failedSource, setFailedSource] = useState<string>()
  const failed = failedSource === src
  const widths = [320, 640, 1000, 1600]
  const srcSet = src.startsWith('https://images.unsplash.com/')
    ? widths.map((width) => `${src.replace(/([?&])w=\d+/, `$1w=${width}`)} ${width}w`).join(', ')
    : undefined

  return (
    <img
      decoding="async"
      {...props}
      className={`${className}${failed ? ' image-fallback' : ''}`}
      src={failed ? '/images/placeholder.svg' : src}
      srcSet={failed ? undefined : srcSet}
      sizes={sizes}
      alt={failed && alt ? `${alt}. Imagen no disponible` : alt}
      onError={() => setFailedSource(src)}
    />
  )
}

