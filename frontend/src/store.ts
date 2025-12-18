
import { create } from 'zustand'

type AuthState = {
  token: string | null
  userId: number | null
  setAuth: (token: string, userId: number) => void
  clear: () => void
}

export const useAuth = create<AuthState>((set) => ({
  token: localStorage.getItem('token'),
  userId: localStorage.getItem('userId') ? Number(localStorage.getItem('userId')) : null,
  setAuth: (token, userId) => {
    localStorage.setItem('token', token)
    localStorage.setItem('userId', String(userId))
    set({ token, userId })
  },
  clear: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    set({ token: null, userId: null })
  }
}))
