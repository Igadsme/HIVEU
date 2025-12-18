import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate, useLocation, Outlet } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { AIAssistant } from './components/AIAssistant'
import { LoginPage } from './components/LoginPage'
import { Dashboard } from './components/Dashboard'
import { StudyGroupFinder } from './components/StudyGroupFinder'
import { GroupWorkspace } from './components/GroupWorkspace'
import { ProfilePage } from './components/ProfilePage'
import { CalendarPage } from './components/CalendarPage'
import { MarketplacePage } from './components/MarketplacePage'
import { LeaderboardPage } from './components/LeaderboardPage'
import { AnalyticsPage } from './components/AnalyticsPage'
import { NotificationsPanel } from './components/NotificationsPanel'
import { Toaster } from './components/ui/sonner'
import { useAuth } from './store'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  const { userId } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [darkMode, setDarkMode] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  // Initialize dark mode from system preference
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const handleNavigate = (page: string) => {
    if (page.startsWith('/')) {
      navigate(page)
    } else {
      navigate(`/${page}`)
    }
    setNotificationsOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen)
  }

  // Page transition variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  }

  const getCurrentPage = () => {
    const path = location.pathname
    if (path === '/dashboard' || path === '/') return 'dashboard'
    if (path === '/finder') return 'finder'
    if (path === '/workspace' || path.startsWith('/group/')) return 'workspace'
    if (path === '/profile') return 'profile'
    if (path === '/calendar') return 'calendar'
    if (path === '/marketplace') return 'marketplace'
    if (path === '/leaderboard') return 'leaderboard'
    if (path === '/analytics') return 'analytics'
    return 'dashboard'
  }

  // Layout component for protected routes
  const ProtectedLayout = () => (
    <>
      <Navbar
        onNavigate={handleNavigate}
        currentPage={getCurrentPage()}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onToggleNotifications={toggleNotifications}
        notificationCount={3}
      />
      <Outlet />
      <Footer />
      <AIAssistant />
      <NotificationsPanel 
        isOpen={notificationsOpen} 
        onClose={() => setNotificationsOpen(false)} 
      />
    </>
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/login" element={
          userId ? <Navigate to="/dashboard" replace /> : <LoginPage onLogin={() => navigate('/dashboard')} />
        } />
        <Route element={<ProtectedRoute />}>
          <Route element={<ProtectedLayout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={
            <main className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key="dashboard"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Dashboard onNavigate={handleNavigate} />
                </motion.div>
              </AnimatePresence>
            </main>
          } />
          <Route path="/finder" element={
            <main className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key="finder"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <StudyGroupFinder />
                </motion.div>
              </AnimatePresence>
            </main>
          } />
          <Route path="/workspace" element={
            <main className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key="workspace"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <GroupWorkspace />
                </motion.div>
              </AnimatePresence>
            </main>
          } />
          <Route path="/group/:id" element={
            <main className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key="group"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <GroupWorkspace />
                </motion.div>
              </AnimatePresence>
            </main>
          } />
          <Route path="/profile" element={
            <main className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key="profile"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <ProfilePage />
                </motion.div>
              </AnimatePresence>
            </main>
          } />
          <Route path="/calendar" element={
            <main className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key="calendar"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <CalendarPage />
                </motion.div>
              </AnimatePresence>
            </main>
          } />
          <Route path="/marketplace" element={
            <main className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key="marketplace"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <MarketplacePage />
                </motion.div>
              </AnimatePresence>
            </main>
          } />
          <Route path="/leaderboard" element={
            <main className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key="leaderboard"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <LeaderboardPage />
                </motion.div>
              </AnimatePresence>
            </main>
          } />
          <Route path="/analytics" element={
            <main className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key="analytics"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <AnalyticsPage />
                </motion.div>
              </AnimatePresence>
            </main>
          } />
          </Route>
        </Route>
      </Routes>

      <Toaster />
    </div>
  )
}
