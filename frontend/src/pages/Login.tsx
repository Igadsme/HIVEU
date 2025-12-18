
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { login } from '../api'
import { useAuth } from '../store'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const nav = useNavigate()
  const { setAuth } = useAuth()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    try {
      const data = await login(email, password)
      // expect { access_token, token_type, user_id }
      setAuth(data.access_token, data.user_id || 1)
      nav('/dashboard')
    } catch (err: any) {
      setError(err?.response?.data?.detail || 'Login failed')
    }
  }

  return (
    <div className="min-h-screen grid place-items-center bg-zinc-900 text-white">
      <form onSubmit={onSubmit} className="bg-zinc-800/60 border border-zinc-700 rounded-2xl p-8 w-full max-w-md shadow-xl">
        <h1 className="text-2xl font-bold mb-6"><span className="text-ksuGold">🦉</span> HiveU — Sign In</h1>
        {error && <div className="bg-red-600/20 border border-red-600 text-red-200 rounded p-2 mb-4">{error}</div>}
        <label className="block text-sm mb-1">KSU Email</label>
        <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required placeholder="you@students.kennesaw.edu" className="w-full mb-4 px-3 py-2 rounded bg-zinc-900 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-ksuGold" />
        <label className="block text-sm mb-1">Password</label>
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" required className="w-full mb-6 px-3 py-2 rounded bg-zinc-900 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-ksuGold" />
        <button className="w-full bg-ksuGold text-black font-semibold rounded-lg py-2">Sign In</button>
        <p className="text-sm mt-4 text-zinc-300">No account? <Link to="/signup" className="text-ksuGold underline">Sign up</Link></p>
      </form>
    </div>
  )
}
