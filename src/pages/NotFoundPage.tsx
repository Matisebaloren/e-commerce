import { Link } from 'react-router-dom'
import { ArrowUpRight, MoveLeft } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { usePageTitle } from '../lib/usePageTitle'

export function NotFoundPage({ product = false }: { product?: boolean }) {
  usePageTitle(product ? 'Producto no encontrado' : 'Página no encontrada')
  return <Container><div className="not-found"><span className="not-found-number" aria-hidden="true">404<span>↗</span></span><span className="eyebrow">UN DESVÍO EN EL CAMINO</span><h1>{product ? 'Este producto no está por acá.' : 'Esta página se nos escapó.'}</h1><p>{product ? 'No encontramos un producto con ese enlace. Todavía hay muchos favoritos por descubrir en nuestra selección.' : 'El enlace puede haber cambiado o la página no existe. Volvé al inicio o seguí explorando el catálogo.'}</p><div className="not-found-actions"><Link className="button button-primary" to="/catalogo">Explorar el catálogo<ArrowUpRight size={19} aria-hidden="true" /></Link><Link className="text-link" to="/"><MoveLeft size={17} aria-hidden="true" />Volver al inicio</Link></div></div></Container>
}

