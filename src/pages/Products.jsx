import { useState } from 'react'
import ProductCard from '../components/ProductCard'

export default function Products() {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 29.99, description: 'High quality product', image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Product 2', price: 39.99, description: 'Premium selection', image: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Product 3', price: 49.99, description: 'Best seller', image: 'https://via.placeholder.com/300' },
    { id: 4, name: 'Product 4', price: 59.99, description: 'New arrival', image: 'https://via.placeholder.com/300' },
    { id: 5, name: 'Product 5', price: 69.99, description: 'Exclusive item', image: 'https://via.placeholder.com/300' },
    { id: 6, name: 'Product 6', price: 79.99, description: 'Limited edition', image: 'https://via.placeholder.com/300' },
  ])

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
