import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export function Brand() {
  return (
    <Link className="brand" to="/" aria-label="NEXO Market — Inicio">
      <span className="brand-symbol" aria-hidden="true"><ArrowUpRight size={25} strokeWidth={2.5} /></span>
      <span className="brand-name">NEXO<span className="brand-market">market</span></span>
    </Link>
  )
}

