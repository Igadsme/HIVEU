import { useState } from 'react'
import { signup } from '../api'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    major: ''
  })
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    try {
      const payload = {
        name: form.name,
        email: form.email,
        password: form.password,
        major: form.major
      }

      const res = await signup(payload)
      console.log('Signup success:', res)

      // Redirect to login or dashboard
      navigate('/login')
    } catch (err: any) {
      console.error('Signup failed:', err.response?.data || err.message)
      if (err.response && err.response.data && err.response.data.detail) {
        setError(err.response.data.detail)
      } else {
        setError('Signup failed — please check your details or try again.')
      }
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-2xl shadow-lg w-[400px]"
      >
        <h1 className="text-2xl font-bold text-center mb-6">
          🦉 Create your HiveU account
        </h1>

        {error && (
          <div className="bg-red-600 text-white text-center py-2 mb-4 rounded-md">
            {error}
          </div>
        )}

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded-md bg-gray-700 focus:outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="KSU Email (.edu)"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded-md bg-gray-700 focus:outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded-md bg-gray-700 focus:outline-none"
        />

        <input
          type="text"
          name="major"
          placeholder="Major"
          value={form.major}
          onChange={handleChange}
          className="w-full mb-6 p-2 rounded-md bg-gray-700 focus:outline-none"
        />

        <button
          type="submit"
          className="w-full bg-yellow-400 text-black py-2 font-semibold rounded-md hover:bg-yellow-500 transition"
        >
          Sign Up
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-yellow-400 underline">
            Sign in
          </a>
        </p>
      </form>
    </div>
  )
}
