import { useState } from 'react'
import type { ImgHTMLAttributes } from 'react'

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> & {
  src: string
  alt: string
}

export function ResponsiveImage({ src, alt, sizes = '(min-width: 1200px) 320px, (min-width: 768px) 33vw, 50vw', ...props }: Props) {
  const [failedSource, setFailedSource] = useState<string>()
  const failed = failedSource === src
  const widths = [320, 640, 1000, 1600]
  const srcSet = src.startsWith('https://images.unsplash.com/')
    ? widths.map((width) => `${src.replace(/([?&])w=\d+/, `$1w=${width}`)} ${width}w`).join(', ')
    : undefined

  return (
    <img
      {...props}
      src={failed ? '/images/placeholder.svg' : src}
      srcSet={failed ? undefined : srcSet}
      sizes={sizes}
      alt={failed ? `${alt}. Imagen no disponible` : alt}
      onError={() => setFailedSource(src)}
    />
  )
}

