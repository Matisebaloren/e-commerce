// Presentation metadata lives outside the product domain models.
// Isolated items retain their full silhouette; commercial scenes fill the frame.
const isolatedPhotos = new Set([
  'photo-1546435770-a3e426bf472b',
  'photo-1546868871-7041f2a55e12',
  'photo-1551028719-00167b16eac5',
  'photo-1542291026-7eec264c27ff',
  'photo-1620916566398-39f1143ab7be',
  'photo-1511499767150-a48a237f0083',
  'photo-1523275335684-37898b6baf30',
])

export function getProductImageClass(src: string): string {
  const photo = src.split('/').at(-1)?.split('?')[0] ?? ''
  return src.startsWith('/') || isolatedPhotos.has(photo)
    ? 'image-fit-contain'
    : 'image-fit-cover'
}
