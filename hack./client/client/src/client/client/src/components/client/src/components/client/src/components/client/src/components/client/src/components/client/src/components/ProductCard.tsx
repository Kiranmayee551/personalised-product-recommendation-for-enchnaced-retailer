interface ProductCardProps {
  id: string
  name: string
  category: string
  price: number
  image: string
  recommended?: boolean
  onAddToCart?: (id: string) => void
}

export default function ProductCard({ 
  id, 
  name, 
  category, 
  price, 
  image, 
  recommended = false,
  onAddToCart 
}: ProductCardProps) {
  const handleAddToCart = () => {
    console.log(`Adding product ${name} to cart`)
    onAddToCart?.(id)
  }

  return (
    <div className="card">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full"
          style={{ height: '200px', objectFit: 'cover' }}
          onError={(e) => {
            // Fallback for broken images
            e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMjUgNzVIMTc1VjEyNUgxMjVWNzVaIiBmaWxsPSIjOUI5QjlCIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUI5QjlCIiBmb250LXNpemU9IjEyIj5Qcm9kdWN0IEltYWdlPC90ZXh0Pgo8L3N2Zz4K'
          }}
        />
        {recommended && (
          <div 
            className="absolute top-0 right-0 m-sm p-sm rounded text-sm font-medium"
            style={{
              backgroundColor: 'var(--success-green)',
              color: 'white'
            }}
          >
            Recommended for You
          </div>
        )}
      </div>
      
      <div className="card-body">
        <h3 className="font-semibold mb-sm" style={{ margin: 0 }}>
          {name}
        </h3>
        
        <div className="text-sm text-secondary mb-md">
          {category}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold" style={{ color: 'var(--primary-blue)' }}>
            ₹{price.toFixed(2)}
          </div>
          
          <button
            onClick={handleAddToCart}
            className="btn btn-primary btn-sm"
            data-testid={`button-add-to-cart-${id}`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
