interface SearchFilterProps {
  searchTerm: string
  selectedCategory: string
  priceRange: [number, number]
  categories: string[]
  onSearchChange: (term: string) => void
  onCategoryChange: (category: string) => void
  onPriceRangeChange: (range: [number, number]) => void
}

export default function SearchFilter({
  searchTerm,
  selectedCategory,
  priceRange,
  categories,
  onSearchChange,
  onCategoryChange,
  onPriceRangeChange
}: SearchFilterProps) {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`Search term changed to: ${e.target.value}`)
    onSearchChange(e.target.value)
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(`Category changed to: ${e.target.value}`)
    onCategoryChange(e.target.value)
  }

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = parseFloat(e.target.value) || 0
    console.log(`Min price changed to: ${newMin}`)
    onPriceRangeChange([newMin, priceRange[1]])
  }

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = parseFloat(e.target.value) || 1000
    console.log(`Max price changed to: ${newMax}`)
    onPriceRangeChange([priceRange[0], newMax])
  }

  return (
    <div className="bg-white p-lg rounded shadow-sm border mb-lg">
      <div className="grid grid-cols-4 gap-md">
        {/* Search Bar */}
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="label">Search Products</label>
          <input
            type="text"
            className="input"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearchChange}
            data-testid="input-search"
          />
        </div>

        {/* Category Filter */}
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="label">Category</label>
          <select
            className="select"
            value={selectedCategory}
            onChange={handleCategoryChange}
            data-testid="select-category"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="label">Min Price</label>
          <input
            type="number"
            className="input"
            placeholder="Min"
            value={priceRange[0]}
            onChange={handleMinPriceChange}
            data-testid="input-min-price"
          />
        </div>

        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="label">Max Price</label>
          <input
            type="number"
            className="input"
            placeholder="Max"
            value={priceRange[1]}
            onChange={handleMaxPriceChange}
            data-testid="input-max-price"
          />
        </div>
      </div>
    </div>
  )
}
