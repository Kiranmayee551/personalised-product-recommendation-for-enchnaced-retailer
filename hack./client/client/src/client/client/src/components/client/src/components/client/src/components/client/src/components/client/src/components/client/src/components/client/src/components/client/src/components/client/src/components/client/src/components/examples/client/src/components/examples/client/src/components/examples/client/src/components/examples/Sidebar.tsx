import { useState } from 'react'
import Sidebar from '../Sidebar'

export default function SidebarExample() {
  const [activeSection, setActiveSection] = useState('dashboard')

  return <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
}
