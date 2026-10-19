import { useEffect } from 'react'
import { brand } from '../config/brand'

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `${title} | ${brand.name}`
  }, [title])
}

