import { useState } from 'react'
import ProductCard from './ProductCard'
import SearchFilter from './SearchFilter'
import productsData from '../data/products.json'

interface Product {
  id: string
  name: string
  category: string
  price: number
  image: string
  recommended: boolean
}

export default function Recommendations() {
  const [products] = useState<Product[]>(productsData)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])

  // Get unique categories - todo: remove mock functionality
  const categories = Array.from(new Set(products.map(product => product.category)))

  // Filter products based on search and filters
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || product.category === selectedCategory
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    
    return matchesSearch && matchesCategory && matchesPrice
  })

  // Sort to show recommended products first
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (a.recommended && !b.recommended) return -1
    if (!a.recommended && b.recommended) return 1
    return 0
  })

  const handleAddToCart = (productId: string) => {
    console.log(`Added product ${productId} to cart`)
    // Mock add to cart functionality
  }

  return (
    <div>
      <h2 className="mb-lg">Product Recommendations</h2>
      
      <SearchFilter
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        priceRange={priceRange}
        categories={categories}
        onSearchChange={setSearchTerm}
        onCategoryChange={setSelectedCategory}
        onPriceRangeChange={setPriceRange}
      />
      
      <div className="mb-lg">
        <p className="text-secondary">
          Showing {sortedProducts.length} products
          {searchTerm && ` matching "${searchTerm}"`}
          {selectedCategory && ` in ${selectedCategory}`}
        </p>
      </div>
      
      <div className="grid grid-cols-4 gap-lg">
        {sortedProducts.map((product) => (
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
      
      {sortedProducts.length === 0 && (
        <div className="text-center p-xl">
          <p className="text-secondary">No products found matching your criteria.</p>
          <button 
            onClick={() => {
              setSearchTerm('')
              setSelectedCategory('')
              setPriceRange([0, 1000])
            }}
            className="btn btn-secondary mt-md"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  )
}
