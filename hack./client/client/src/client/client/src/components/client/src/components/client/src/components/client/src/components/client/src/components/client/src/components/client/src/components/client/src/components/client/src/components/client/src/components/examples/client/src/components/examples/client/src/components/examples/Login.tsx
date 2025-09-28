import Login from '../Login'

export default function LoginExample() {
  const handleLogin = (retailerName: string) => {
    console.log('Login successful for:', retailerName)
  }

  return <Login onLogin={handleLogin} />
}
