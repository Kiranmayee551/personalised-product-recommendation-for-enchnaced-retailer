import ProductCard from '../ProductCard'

export default function ProductCardExample() {
  const handleAddToCart = (id: string) => {
    console.log('Added to cart:', id)
  }

  return (
    <div className="grid grid-cols-4 gap-lg">
      <ProductCard
        id="1"
        name="Premium Basmati Rice"
        category="Groceries"
        price={125.50}
        image="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop"
        recommended={true}
        onAddToCart={handleAddToCart}
      />
      <ProductCard
        id="2"
        name="Organic Wheat Flour"
        category="Groceries"
        price={89.99}
        image="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=200&fit=crop"
        recommended={false}
        onAddToCart={handleAddToCart}
      />
    </div>
  )
}
