import Navbar from '../Navbar'

export default function NavbarExample() {
  const handleLogout = () => {
    console.log('Logout clicked')
  }

  return <Navbar retailerName="Raj Kirana Store" onLogout={handleLogout} />
}
