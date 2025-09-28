import MetricsCard from '../MetricsCard'

export default function MetricsCardExample() {
  return (
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
        change="-2.1% from last month"
        changeType="negative"
        icon="📈"
      />
    </div>
  )
}
