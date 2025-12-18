
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="text-center space-y-4">
        <div className="text-6xl">🦉</div>
        <h1 className="text-2xl font-bold">Page not found</h1>
        <Link to="/dashboard" className="text-ksuGold underline">Go back to dashboard</Link>
      </div>
    </div>
  )
}
