import type { Category } from '../types/category'

export const categories: readonly Category[] = [
  { id: 'cat-01', slug: 'tecnologia', name: 'Tecnología', description: 'Conectá con lo que te inspira.', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85', imageAlt: 'Auriculares inalámbricos de diseño minimalista' },
  { id: 'cat-02', slug: 'hogar', name: 'Hogar', description: 'Tu espacio, a tu manera.', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85', imageAlt: 'Lámpara decorativa en un ambiente cálido' },
  { id: 'cat-03', slug: 'moda', name: 'Moda', description: 'Esenciales con personalidad.', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85', imageAlt: 'Zapatilla deportiva roja sobre fondo rojo' },
  { id: 'cat-04', slug: 'belleza', name: 'Belleza', description: 'Un momento para vos.', image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=85', imageAlt: 'Productos para una rutina de cuidado personal' },
  { id: 'cat-05', slug: 'deportes', name: 'Deportes', description: 'Encontrá tu propio ritmo.', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85', imageAlt: 'Botella reutilizable para la actividad diaria' },
  { id: 'cat-06', slug: 'accesorios', name: 'Accesorios', description: 'Los detalles hacen la diferencia.', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85', imageAlt: 'Reloj de pulsera con esfera blanca y correa clara' },
]

export const getCategory = (slug: string) => categories.find((category) => category.slug === slug)

