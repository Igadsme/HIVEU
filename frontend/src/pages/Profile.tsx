
import { useEffect, useState } from 'react'
import { useAuth } from '../store'
import { getUser } from '../api'

export default function Profile() {
  const { userId } = useAuth()
  const [user, setUser] = useState<any | null>(null)

  useEffect(() => {
    if (userId) getUser(userId).then(setUser).catch(console.error)
  }, [userId])

  if (!user) return <div>Loading profile...</div>

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Profile</h1>
      <div className="border rounded-xl p-4 bg-white">
        <div className="font-semibold">{user.name || 'Student'}</div>
        <div className="text-sm text-zinc-600">{user.email}</div>
        <div className="text-sm text-zinc-600">Major: {user.major || '—'}</div>
      </div>
    </div>
  )
}
