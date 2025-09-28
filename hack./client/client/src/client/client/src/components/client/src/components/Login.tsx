import { useState } from 'react'

interface LoginProps {
  onLogin: (retailerName: string) => void
}

export default function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempted with:', { username, password })
    
    // Mock authentication - todo: remove mock functionality
    if (username && password) {
      setIsLoading(true)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock successful login
      onLogin('Raj Kirana Store')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray">
      <div className="card" style={{ width: '400px' }}>
        <div className="card-header text-center">
          <h1 className="text-2xl font-bold" style={{ color: 'var(--primary-blue)', margin: 0 }}>
            Qwipo SmartRetail
          </h1>
          <p className="text-secondary" style={{ margin: 0 }}>
            Login to your retailer account
          </p>
        </div>
        
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="label">Username</label>
              <input
                type="text"
                className="input"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                data-testid="input-username"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                data-testid="input-password"
                required
              />
            </div>
            
            <button
              type="submit"
              className="btn btn-primary w-full btn-lg"
              disabled={isLoading}
              data-testid="button-login"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          
          <div className="mt-lg text-center">
            <p className="text-sm text-secondary">
              Demo credentials: Any username and password
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
