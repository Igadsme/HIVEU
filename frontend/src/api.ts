
import axios from 'axios'
import { useAuth } from './store'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://127.0.0.1:8000'

export const api = axios.create({
  baseURL: API_BASE
})

// attach token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers = config.headers || {}
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Auth - Simple auth for now (backend doesn't have auth endpoint yet)
// Since backend doesn't have user search, we'll use localStorage to track users
// In production, this would call a proper auth endpoint
export async function login(email: string, password: string) {
  // Check localStorage for user info
  const storedUsers = localStorage.getItem('hiveu_users')
  if (storedUsers) {
    const users = JSON.parse(storedUsers)
    const user = users.find((u: any) => u.email === email)
    if (user) {
      // Try to get user from backend to ensure they exist
      try {
        const backendUser = await getUser(user.id)
        return { user: backendUser, token: 'mock-token' }
      } catch (error) {
        // User might have been deleted, remove from localStorage
        const updatedUsers = users.filter((u: any) => u.id !== user.id)
        localStorage.setItem('hiveu_users', JSON.stringify(updatedUsers))
        throw new Error('User not found')
      }
    }
  }
  throw new Error('User not found. Please sign up first.')
}

export async function signup(payload: any) {
  const res = await api.post('/users/', payload)
  const user = res.data
  // Store user info in localStorage for login
  const storedUsers = localStorage.getItem('hiveu_users')
  const users = storedUsers ? JSON.parse(storedUsers) : []
  if (!users.find((u: any) => u.id === user.id)) {
    users.push({ id: user.id, email: user.email, name: user.name })
    localStorage.setItem('hiveu_users', JSON.stringify(users))
  }
  return user
}

// Users
export async function getUser(id: number) {
  const res = await api.get(`/users/${id}`)
  return res.data
}

export async function updateUser(id: number, payload: any) {
  const res = await api.patch(`/users/${id}`, payload)
  return res.data
}

// Groups
export async function getGroups() {
  // Backend doesn't have list endpoint, so we'll return empty for now
  return []
}

export async function createGroup(data: any) {
  const res = await api.post('/groups/', data)
  return res.data
}

export async function getGroup(id: number) {
  const res = await api.get(`/groups/${id}`)
  return res.data
}

export async function addGroupMember(groupId: number, userId: number) {
  const res = await api.post(`/groups/${groupId}/members`, { user_id: userId })
  return res.data
}

export async function getGroupMembers(groupId: number) {
  const res = await api.get(`/groups/${groupId}/members`)
  return res.data
}

export async function postGroupMessage(groupId: number, userId: number, content: string) {
  const res = await api.post(`/groups/${groupId}/messages`, null, {
    params: { user_id: userId, content }
  })
  return res.data
}

export async function getGroupMessages(groupId: number, limit: number = 50) {
  const res = await api.get(`/groups/${groupId}/messages`, {
    params: { limit }
  })
  return res.data
}

// Matches
export async function getMatches(userId: number, topK: number = 5) {
  const res = await api.get(`/matches/${userId}`, {
    params: { top_k: topK }
  })
  return res.data
}

// Files
export async function uploadFile(file: File) {
  const form = new FormData()
  form.append('file', file)
  const res = await api.post('/files/upload', form)
  return res.data
}
