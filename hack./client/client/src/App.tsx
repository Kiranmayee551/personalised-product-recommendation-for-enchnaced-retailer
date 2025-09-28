import { useState } from 'react'
import { Switch, Route } from "wouter"
import { queryClient } from "./lib/queryClient"
import { QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from "@/components/ui/tooltip"

// Import our custom components
import Login from './components/Login'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Recommendations from './components/Recommendations'
import OrderHistory from './components/OrderHistory'
import Analytics from './components/Analytics'

function MainApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [retailerName, setRetailerName] = useState('')
  const [activeSection, setActiveSection] = useState('dashboard')

  const handleLogin = (name: string) => {
    console.log('User logged in:', name)
    setRetailerName(name)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    console.log('User logged out')
    setIsLoggedIn(false)
    setRetailerName('')
    setActiveSection('dashboard')
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard retailerName={retailerName} />
      case 'recommendations':
        return <Recommendations />
      case 'orders':
        return <OrderHistory />
      case 'insights':
        return <Analytics />
      default:
        return <Dashboard retailerName={retailerName} />
    }
  }

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <div className="min-h-screen bg-gray">
      <Navbar retailerName={retailerName} onLogout={handleLogout} />
      
      <div className="flex">
        <Sidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
        
        <main className="flex-1 p-xl">
          <div className="container">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  )
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={MainApp} />
      <Route>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-md">Page Not Found</h1>
            <p className="text-secondary">The page you're looking for doesn't exist.</p>
          </div>
        </div>
      </Route>
    </Switch>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  )
}

export default App
