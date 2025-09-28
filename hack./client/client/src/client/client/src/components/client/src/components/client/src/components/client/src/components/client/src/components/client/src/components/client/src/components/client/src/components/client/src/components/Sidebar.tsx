interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'recommendations', label: 'Recommendations', icon: '💡' },
    { id: 'orders', label: 'Orders', icon: '📦' },
    { id: 'insights', label: 'Insights', icon: '📈' }
  ]

  return (
    <aside className="bg-white border-r" style={{ width: '240px', minHeight: 'calc(100vh - 64px)' }}>
      <div className="p-lg">
        <nav>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                console.log(`Navigation to ${item.label} clicked`)
                onSectionChange(item.id)
              }}
              className={`w-full flex items-center gap-md p-md rounded text-left transition-colors mb-sm ${
                activeSection === item.id
                  ? 'bg-light font-medium'
                  : 'hover:bg-light'
              }`}
              style={{
                backgroundColor: activeSection === item.id ? 'var(--light-blue)' : 'transparent',
                color: activeSection === item.id ? 'var(--primary-blue)' : 'var(--text-primary)'
              }}
              data-testid={`nav-${item.id}`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  )
}
