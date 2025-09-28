import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function Analytics() {
  // Mock data for charts - todo: remove mock functionality
  const orderValueData = [
    { month: 'Jan', value: 2400 },
    { month: 'Feb', value: 1398 },
    { month: 'Mar', value: 3200 },
    { month: 'Apr', value: 3908 },
    { month: 'May', value: 4800 },
    { month: 'Jun', value: 3800 },
  ]

  const repeatPurchaseData = [
    { month: 'Jan', repeat: 45, new: 55 },
    { month: 'Feb', repeat: 52, new: 48 },
    { month: 'Mar', repeat: 61, new: 39 },
    { month: 'Apr', repeat: 58, new: 42 },
    { month: 'May', repeat: 65, new: 35 },
    { month: 'Jun', repeat: 72, new: 28 },
  ]

  const categoryData = [
    { name: 'Groceries', value: 45, color: 'var(--primary-blue)' },
    { name: 'Kitchen Supplies', value: 25, color: 'var(--success-green)' },
    { name: 'Cleaning Supplies', value: 15, color: 'var(--warning-orange)' },
    { name: 'Restaurant Supplies', value: 10, color: '#8B5CF6' },
    { name: 'Beverages', value: 5, color: '#F59E0B' },
  ]

  const COLORS = ['#1e3a8a', '#10b981', '#f59e0b', '#8B5CF6', '#F59E0B']

  return (
    <div>
      <h2 className="mb-lg">Analytics & Insights</h2>
      
      <div className="grid grid-cols-1 gap-lg">
        {/* Order Value Growth */}
        <div className="card">
          <div className="card-header">
            <h3 style={{ margin: 0 }}>Order Value Growth</h3>
            <p className="text-secondary" style={{ margin: 0 }}>Monthly order value trends</p>
          </div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={orderValueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`₹${value}`, 'Order Value']} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="var(--primary-blue)" 
                  strokeWidth={3}
                  name="Order Value"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Repeat Purchase Trends */}
        <div className="card">
          <div className="card-header">
            <h3 style={{ margin: 0 }}>Repeat Purchase Trends</h3>
            <p className="text-secondary" style={{ margin: 0 }}>New vs returning customer purchases</p>
          </div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={repeatPurchaseData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, '']} />
                <Legend />
                <Bar dataKey="repeat" fill="var(--success-green)" name="Repeat Customers" />
                <Bar dataKey="new" fill="var(--warning-orange)" name="New Customers" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Preferences */}
        <div className="card">
          <div className="card-header">
            <h3 style={{ margin: 0 }}>Category Preferences</h3>
            <p className="text-secondary" style={{ margin: 0 }}>Distribution of purchases by category</p>
          </div>
          <div className="card-body">
            <div className="flex items-center gap-lg">
              <div style={{ width: '50%' }}>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Share']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div style={{ width: '50%' }}>
                <div className="space-y-md">
                  {categoryData.map((category, index) => (
                    <div key={category.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-sm">
                        <div 
                          className="rounded"
                          style={{
                            width: '16px',
                            height: '16px',
                            backgroundColor: COLORS[index % COLORS.length]
                          }}
                        />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className="text-secondary">{category.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
