
import { useEffect, useState } from 'react'
import { getGroups, getMatches } from '../api'
import { useAuth } from '../store'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const [groups, setGroups] = useState<any[]>([])
  const [matches, setMatches] = useState<any[]>([])
  const { userId } = useAuth()

  useEffect(() => {
    getGroups().then(setGroups).catch(console.error)
    if (userId) getMatches(userId).then(setMatches).catch(console.error)
  }, [userId])

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-semibold mb-3">Active Study Groups</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {groups.map(g => (
            <Link to={`/group/${g.id}`} key={g.id} className="border rounded-xl p-4 hover:shadow bg-white">
              <div className="font-semibold">{g.name || `Group ${g.id}`}</div>
              <div className="text-sm text-zinc-600">{(g.members?.length ?? 0)} members</div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Top Matches For You</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {matches.map((m, i) => (
            <div key={i} className="border rounded-xl p-4 bg-white">
              <div className="font-semibold">{m.name || `Student ${m.user_id || i+1}`}</div>
              <div className="text-sm text-zinc-600">Score: {Math.round((m.score || 0)*100)}%</div>
            </div>
          ))}
          {(!matches || matches.length===0) && <p className="text-sm text-zinc-600">No matches yet. Update your profile & courses.</p>}
        </div>
      </section>
    </div>
  )
}
