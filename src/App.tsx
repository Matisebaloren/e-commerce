import { useEffect, useRef } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HomePage } from './pages/HomePage'
import { CatalogPage } from './pages/CatalogPage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { CartPage } from './pages/CartPage'
import { CartProvider } from './cart/CartProvider'
import { CartDrawer } from './components/cart/CartDrawer'
import { CartFeedback } from './components/cart/CartFeedback'

function RoutePosition() {
  const { pathname } = useLocation()
  const previousPath = useRef(pathname)

  useEffect(() => {
    if (previousPath.current === pathname) return
    previousPath.current = pathname
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.getElementById('main-content')?.focus({ preventScroll: true })
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <div className="app-shell min-h-dvh">
        <a className="skip-link" href="#main-content">Saltar al contenido</a>
        <RoutePosition />
        <Header />
        <main id="main-content" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalogo" element={<CatalogPage />} />
            <Route path="/producto/:slug" element={<ProductDetailPage />} />
            <Route path="/carrito" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <CartDrawer />
        <CartFeedback />
      </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
