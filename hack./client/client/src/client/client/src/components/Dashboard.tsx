import { useState } from 'react'
import MetricsCard from './MetricsCard'
import ProductCard from './ProductCard'
import productsData from '../data/products.json'

interface DashboardProps {
  retailerName: string
}

interface Product {
  id: string
  name: string
  category: string
  price: number
  image: string
  recommended: boolean
}

export default function Dashboard({ retailerName }: DashboardProps) {
  const [products] = useState<Product[]>(productsData)
  
  // Filter for recommended products - todo: remove mock functionality
  const recommendedProducts = products.filter(product => product.recommended).slice(0, 4)

  const handleAddToCart = (productId: string) => {
    console.log(`Added product ${productId} to cart`)
    // Mock add to cart functionality
  }

  return (
    <div>
      {/* Welcome Section */}
      <div className="mb-xl">
        <h1>Welcome back, {retailerName}! 👋</h1>
        <p className="text-secondary">
          Here's what's happening with your business today.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="mb-xl">
        <h2 className="mb-lg">Key Metrics</h2>
        <div className="grid grid-cols-3 gap-lg">
          <MetricsCard
            title="Average Order Value"
            value="₹2,845"
            change="+12.5% from last month"
            changeType="positive"
            icon="💰"
          />
          <MetricsCard
            title="Repeat Purchase Rate"
            value="68%"
            change="+5.2% from last month"
            changeType="positive"
            icon="🔄"
          />
          <MetricsCard
            title="Customer Retention"
            value="89%"
            change="+2.1% from last month"
            changeType="positive"
            icon="📈"
          />
        </div>
      </div>

      {/* Recommendations Section */}
      <div>
        <div className="flex items-center justify-between mb-lg">
          <h2 style={{ margin: 0 }}>Your Recommendations</h2>
          <button className="btn btn-secondary btn-sm">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-4 gap-lg">
          {recommendedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
              recommended={product.recommended}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
