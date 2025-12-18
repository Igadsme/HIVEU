
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getGroup } from '../api'

export default function Group() {
  const { id } = useParams()
  const [group, setGroup] = useState<any | null>(null)

  useEffect(() => {
    if (id) getGroup(Number(id)).then(setGroup).catch(console.error)
  }, [id])

  if (!group) return <div>Loading group...</div>

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{group.name || `Group ${group.id}`}</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border rounded-xl p-4 bg-white">
          <h3 className="font-semibold mb-2">Chat (placeholder)</h3>
          <div className="h-48 bg-zinc-50 border rounded" />
        </div>
        <div className="border rounded-xl p-4 bg-white">
          <h3 className="font-semibold mb-2">Shared Files (placeholder)</h3>
          <div className="h-48 bg-zinc-50 border rounded" />
        </div>
      </div>
    </div>
  )
}
