import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()

  const product = {
    id: parseInt(id),
    name: `Product $id`,
    price: 29.99 + (parseInt(id) * 10),
    description: 'This is a detailed product description.',
    image: 'https://via.placeholder.com/400',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={product.image} alt={product.name} className="w-full rounded-lg" />
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-3xl text-blue-600 font-bold mb-6">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.fullDescription}</p>
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

