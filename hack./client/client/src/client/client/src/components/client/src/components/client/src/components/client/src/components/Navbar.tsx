import { useState } from 'react'

interface NavbarProps {
  retailerName: string
  onLogout: () => void
}

export default function Navbar({ retailerName, onLogout }: NavbarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleProfileClick = () => {
    console.log('Profile clicked')
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between" style={{ height: '64px' }}>
          {/* Logo */}
          <div className="flex items-center gap-md">
            <div className="text-xl font-bold text-primary" style={{ color: 'var(--primary-blue)' }}>
              Qwipo SmartRetail
            </div>
          </div>

          {/* User Profile Dropdown */}
          <div className="relative">
            <button
              onClick={handleProfileClick}
              className="flex items-center gap-sm btn btn-ghost"
              data-testid="button-profile-dropdown"
            >
              <div 
                className="rounded-lg bg-light flex items-center justify-center"
                style={{ 
                  width: '32px', 
                  height: '32px',
                  backgroundColor: 'var(--light-blue)',
                  color: 'var(--primary-blue)'
                }}
              >
                {retailerName.charAt(0).toUpperCase()}
              </div>
              <span className="font-medium">{retailerName}</span>
              <svg 
                className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div 
                className="absolute right-0 mt-sm bg-white rounded shadow-lg border"
                style={{ 
                  minWidth: '200px',
                  top: '100%',
                  zIndex: 50
                }}
              >
                <div className="p-sm">
                  <button
                    onClick={() => {
                      console.log('Profile settings clicked')
                      setIsDropdownOpen(false)
                    }}
                    className="w-full text-left p-sm rounded hover:bg-light transition-colors"
                    data-testid="button-profile-settings"
                  >
                    Profile Settings
                  </button>
                  <button
                    onClick={() => {
                      setIsDropdownOpen(false)
                      onLogout()
                    }}
                    className="w-full text-left p-sm rounded hover:bg-light transition-colors text-warning"
                    data-testid="button-logout"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
