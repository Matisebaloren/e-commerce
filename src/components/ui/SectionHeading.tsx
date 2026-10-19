import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Props {
  eyebrow: string
  title: string
  description?: string
  linkLabel?: string
  to?: string
}

export function SectionHeading({ eyebrow, title, description, linkLabel, to }: Props) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {to && linkLabel && <Link className="text-link" to={to}>{linkLabel}<ArrowUpRight size={18} aria-hidden="true" /></Link>}
    </div>
  )
}

