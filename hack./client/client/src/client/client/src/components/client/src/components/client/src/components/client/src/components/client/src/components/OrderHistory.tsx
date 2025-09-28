import { useState } from 'react'
import ordersData from '../data/orders.json'

interface Order {
  id: string
  retailer: string
  date: string
  total: number
  status: string
  items: Array<{
    id: string
    name: string
    quantity: number
    price: number
  }>
}

export default function OrderHistory() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [orders] = useState<Order[]>(ordersData)

  const handleOrderClick = (order: Order) => {
    console.log(`Order ${order.id} clicked`)
    setSelectedOrder(order)
  }

  const handleBackToList = () => {
    console.log('Back to order list clicked')
    setSelectedOrder(null)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (selectedOrder) {
    return (
      <div>
        <div className="flex items-center gap-md mb-lg">
          <button
            onClick={handleBackToList}
            className="btn btn-secondary"
            data-testid="button-back-to-orders"
          >
            ← Back to Orders
          </button>
          <h2 style={{ margin: 0 }}>Order Details - {selectedOrder.id}</h2>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="flex items-center justify-between">
              <div>
                <h3 style={{ margin: 0 }}>Order {selectedOrder.id}</h3>
                <p className="text-secondary" style={{ margin: 0 }}>
                  Placed on {formatDate(selectedOrder.date)}
                </p>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold" style={{ color: 'var(--primary-blue)' }}>
                  ₹{selectedOrder.total.toFixed(2)}
                </div>
                <div 
                  className="text-sm font-medium p-sm rounded"
                  style={{
                    backgroundColor: 'var(--success-green)',
                    color: 'white',
                    display: 'inline-block'
                  }}
                >
                  {selectedOrder.status}
                </div>
              </div>
            </div>
          </div>
          
          <div className="card-body">
            <h4>Items Ordered</h4>
            <div className="space-y-sm">
              {selectedOrder.items.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-md border rounded">
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-secondary">Quantity: {item.quantity}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">₹{item.price.toFixed(2)} each</div>
                    <div className="text-sm text-secondary">
                      Total: ₹{(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h2 className="mb-lg">Order History</h2>
      
      <div className="space-y-md">
        {orders.map((order) => (
          <div key={order.id} className="card cursor-pointer" onClick={() => handleOrderClick(order)}>
            <div className="card-body">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold" style={{ margin: 0 }}>
                    Order {order.id}
                  </h3>
                  <p className="text-secondary" style={{ margin: 0 }}>
                    {formatDate(order.date)} • {order.items.length} items
                  </p>
                </div>
                
                <div className="text-right">
                  <div className="text-xl font-bold" style={{ color: 'var(--primary-blue)' }}>
                    ₹{order.total.toFixed(2)}
                  </div>
                  <div 
                    className="text-sm font-medium p-sm rounded"
                    style={{
                      backgroundColor: 'var(--success-green)',
                      color: 'white',
                      display: 'inline-block'
                    }}
                  >
                    {order.status}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
