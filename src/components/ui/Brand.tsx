import { Link } from 'react-router-dom'
import { brand } from '../../config/brand'

export function Brand() {
  return (
    <Link className="brand" to="/" aria-label={`${brand.name} — Inicio`}>
      <img className="brand-logo" src={brand.logo} alt="" width={244} height={64} />
    </Link>
  )
}

