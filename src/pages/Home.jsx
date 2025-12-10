import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 rounded-lg mb-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to EStore</h1>
          <p className="text-xl mb-8">Discover amazing products at great prices</p>
          <Link to="/products" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Electronics', 'Fashion', 'Home'].map((category) => (
            <div key={category} className="bg-gray-100 p-8 rounded-lg text-center hover:bg-gray-200 transition cursor-pointer">
              <h3 className="text-xl font-semibold">{category}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
