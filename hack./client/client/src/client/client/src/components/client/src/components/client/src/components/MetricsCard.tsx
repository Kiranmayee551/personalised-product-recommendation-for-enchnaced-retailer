interface MetricsCardProps {
  title: string
  value: string | number
  change?: string
  changeType?: 'positive' | 'negative' | 'neutral'
  icon?: string
}

export default function MetricsCard({ title, value, change, changeType = 'neutral', icon }: MetricsCardProps) {
  const getChangeColor = () => {
    switch (changeType) {
      case 'positive': return 'var(--success-green)'
      case 'negative': return 'var(--warning-orange)'
      default: return 'var(--text-secondary)'
    }
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="flex items-center justify-between mb-md">
          <h4 className="text-sm font-medium text-secondary" style={{ margin: 0 }}>
            {title}
          </h4>
          {icon && (
            <span className="text-lg">{icon}</span>
          )}
        </div>
        
        <div className="text-2xl font-bold mb-sm" style={{ margin: 0 }}>
          {value}
        </div>
        
        {change && (
          <div 
            className="text-sm"
            style={{ color: getChangeColor() }}
          >
            {change}
          </div>
        )}
      </div>
    </div>
  )
}
