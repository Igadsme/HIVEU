
import { useEffect, useState } from 'react'
import { getGroups, createGroup } from '../api'

export default function Finder() {
  const [groups, setGroups] = useState<any[]>([])
  const [name, setName] = useState('')

  useEffect(() => {
    getGroups().then(setGroups).catch(console.error)
  }, [])

  async function onCreate(e: React.FormEvent) {
    e.preventDefault()
    const g = await createGroup({ name })
    setGroups([g, ...groups])
    setName('')
  }

  return (
    <div className="grid md:grid-cols-[2fr_1fr] gap-6">
      <div>
        <h2 className="text-xl font-semibold mb-3">Find a Study Group</h2>
        <div className="grid gap-3">
          {groups.map(g => (
            <div key={g.id} className="border rounded-xl p-4 bg-white">
              <div className="font-semibold">{g.name || `Group ${g.id}`}</div>
              <div className="text-sm text-zinc-600">{(g.members?.length ?? 0)} members</div>
            </div>
          ))}
        </div>
      </div>
      <aside className="border rounded-xl p-4 bg-white h-fit">
        <h3 className="font-semibold mb-2">Create a group</h3>
        <form onSubmit={onCreate} className="space-y-3">
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="e.g., CS 3410 Study Crew" className="w-full px-3 py-2 rounded border" />
          <button className="w-full bg-ksuGold text-black rounded-lg py-2 font-semibold">Create</button>
        </form>
      </aside>
    </div>
  )
}
