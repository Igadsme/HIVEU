import { Bell, Menu, Moon, Sun, X, Heart, MessageCircle, Sparkles, FileText, Users, Calendar as CalIcon, Send, Mail, ArrowRight, Shield, GraduationCap, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "./ui/sheet";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// ==================== OWL ICONS ====================

interface OwlIconProps {
  className?: string;
  size?: number;
}

export function OwlIcon({ className = "", size = 24 }: OwlIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="currentColor" fillOpacity="0.2" />
      <path d="M7 4L6 7M17 4L18 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="9" cy="11" r="2.5" fill="currentColor" fillOpacity="0.9" />
      <circle cx="15" cy="11" r="2.5" fill="currentColor" fillOpacity="0.9" />
      <circle cx="9" cy="11" r="1" fill="white" />
      <circle cx="15" cy="11" r="1" fill="white" />
      <path d="M12 13L11 15L12 16L13 15L12 13Z" fill="currentColor" fillOpacity="0.6" />
      <path d="M5 12C5 12 6 14 7 15M19 12C19 12 18 14 17 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function OwlLogoIcon({ className = "", size = 40 }: OwlIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="currentColor" fillOpacity="0.1" />
      <ellipse cx="20" cy="22" rx="10" ry="11" fill="currentColor" fillOpacity="0.3" />
      <path d="M13 12L12 16M27 12L28 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="20" r="3" fill="currentColor" />
      <circle cx="24" cy="20" r="3" fill="currentColor" />
      <circle cx="16" cy="20" r="1.2" fill="white" />
      <circle cx="24" cy="20" r="1.2" fill="white" />
      <path d="M20 22L19 25L20 26L21 25L20 22Z" fill="currentColor" fillOpacity="0.8" />
      <path d="M20 10L14 13L20 16L26 13L20 10Z" fill="currentColor" fillOpacity="0.6" stroke="currentColor" strokeWidth="1" />
      <path d="M26 13V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="28" r="1" fill="currentColor" fillOpacity="0.2" />
      <circle cx="30" cy="28" r="1" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

// ==================== NAVBAR ====================

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onToggleNotifications: () => void;
  notificationCount?: number;
}

export function Navbar({ 
  onNavigate, 
  currentPage, 
  darkMode, 
  onToggleDarkMode,
  onToggleNotifications,
  notificationCount = 3
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'finder', label: 'Find Groups' },
    { id: 'calendar', label: 'Calendar' },
    { id: 'marketplace', label: 'Marketplace' },
    { id: 'leaderboard', label: 'Leaderboard' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'workspace', label: 'My Groups' },
    { id: 'profile', label: 'Profile' },
  ];

  const handleNavClick = (page: string) => {
    if (page === 'dashboard') {
      onNavigate('/dashboard');
    } else {
      onNavigate(`/${page}`);
    }
    setMobileOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <button 
            onClick={() => handleNavClick('dashboard')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <OwlLogoIcon className="text-primary w-10 h-10" size={40} />
            <div className="hidden lg:block">
              <h1 className="text-xl tracking-tight" style={{ fontFamily: 'var(--font-orbitron)' }}>HiveU</h1>
              <p className="text-xs text-muted-foreground -mt-1">StudyMatch</p>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "default" : "ghost"}
                onClick={() => handleNavClick(item.id)}
                className={`transition-all ${currentPage === item.id ? "gradient-gold text-primary-foreground shadow-lg" : ""}`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={onToggleNotifications} className="relative">
              <Bell className="h-5 w-5" />
              {notificationCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-destructive text-destructive-foreground text-xs">
                  {notificationCount}
                </Badge>
              )}
            </Button>

            <Button variant="ghost" size="icon" onClick={onToggleDarkMode}>
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Mobile navigation menu to access different pages
                </SheetDescription>
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Button
                      key={item.id}
                      variant={currentPage === item.id ? "default" : "ghost"}
                      onClick={() => handleNavClick(item.id)}
                      className={`justify-start ${currentPage === item.id ? "gradient-gold text-primary-foreground" : ""}`}
                    >
                      {item.label}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ==================== FOOTER ====================

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
              <OwlIcon className="text-primary-foreground" size={24} />
            </div>
            <div>
              <p className="text-sm">
                <span className="font-medium" style={{ fontFamily: 'var(--font-orbitron)' }}>HiveU StudyMatch</span> 
                <span className="text-muted-foreground"> — Powered by Scrappy, the KSU Owl 🦉</span>
              </p>
              <p className="text-xs text-muted-foreground">Where students connect to succeed</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <button className="hover:text-foreground transition-colors">About</button>
            <button className="hover:text-foreground transition-colors">Privacy</button>
            <button className="hover:text-foreground transition-colors">Contact</button>
            <button className="hover:text-foreground transition-colors">Help</button>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t text-center text-xs text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} HiveU StudyMatch. Made with <Heart className="h-3 w-3 text-destructive fill-destructive" /> for KSU students.
          </p>
          <p className="mt-1 text-xs opacity-75">
            Only verified Kennesaw State University students can join the HiveU network.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ==================== AI ASSISTANT ====================

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Scrappy, your AI study assistant! 🦉 I can help you find study groups, generate flashcards, summarize notes, and answer questions about your courses!",
      sender: "bot"
    }
  ]);

  const quickActions = [
    { icon: Users, label: "Find study groups", action: "suggest_groups" },
    { icon: FileText, label: "Generate flashcards", action: "flashcards" },
    { icon: FileText, label: "Summarize my notes", action: "summarize" },
    { icon: CalIcon, label: "Review my schedule", action: "schedule" }
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const newUserMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user"
    };
    
    setMessages([...messages, newUserMessage]);
    setInputValue("");
    
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "I'm analyzing your request... Based on your courses and preferences, I have some suggestions for you!",
        sender: "bot"
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickAction = (action: string, label: string) => {
    const newMessage = {
      id: messages.length + 1,
      text: label,
      sender: "user"
    };
    setMessages([...messages, newMessage]);
    
    setTimeout(() => {
      let response = "";
      switch(action) {
        case "suggest_groups":
          response = "I found 3 study groups that match your CS and Math courses! Check out 'CS Study Squad', 'Math Wizards', and 'Data Structures Deep Dive'. Would you like to see more details?";
          break;
        case "flashcards":
          response = "I can generate flashcards from your shared notes! Which topic would you like flashcards for? (e.g., SQL Joins, Calculus derivatives, etc.)";
          break;
        case "summarize":
          response = "I'll summarize your most recent notes from CS 3410 about Database Normalization. Key points: 1NF removes repeating groups, 2NF removes partial dependencies, 3NF removes transitive dependencies. Would you like a more detailed summary?";
          break;
        case "schedule":
          response = "You have 3 study sessions this week: CS 3410 today at 3 PM, Math 2345 tomorrow at 5:30 PM, and Physics on Thursday at 6 PM. You're on track with your 12-hour weekly goal!";
          break;
        default:
          response = "I'm here to help! What would you like to know?";
      }
      
      const botResponse = {
        id: messages.length + 2,
        text: response,
        sender: "bot"
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-16 w-16 rounded-full shadow-2xl gradient-gold hover:gradient-gold-hover text-primary-foreground p-0 glow-gold-hover border-2 border-primary-foreground/20"
          size="icon"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X className="h-7 w-7" />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} className="relative">
                <OwlIcon className="h-7 w-7" size={28} />
                <motion.span 
                  className="absolute -top-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50"
          >
            <Card className="w-[380px] md:w-[420px] h-[600px] shadow-2xl rounded-3xl flex flex-col overflow-hidden border-2 border-primary/20 glow-gold">
              <div className="gradient-gold p-5 text-primary-foreground">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <OwlIcon className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold flex items-center gap-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
                      Scrappy AI
                      <Sparkles className="h-4 w-4" />
                    </h3>
                    <p className="text-xs opacity-90">Your Smart Study Assistant</p>
                  </div>
                  <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse" />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary/10">
                <AnimatePresence>
                  {messages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                          message.sender === 'user'
                            ? 'gradient-gold text-primary-foreground ml-4'
                            : 'bg-card border shadow-sm'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {messages.length === 1 && (
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="text-xs text-muted-foreground px-2">Quick actions:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {quickActions.map((action, index) => (
                        <motion.button
                          key={action.action}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 p-3 rounded-xl border bg-card hover:bg-secondary/50 transition-colors text-left"
                          onClick={() => handleQuickAction(action.action, action.label)}
                        >
                          <action.icon className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-xs">{action.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="p-4 border-t bg-card">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask Scrappy anything..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSend();
                      }
                    }}
                  />
                  <Button 
                    size="icon" 
                    className="rounded-xl gradient-gold gradient-gold-hover h-11 w-11 shadow-md"
                    onClick={handleSend}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Powered by HiveU AI • Always learning to serve you better
                </p>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ==================== NOTIFICATIONS PANEL ====================

interface NotificationsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotificationsPanel({ isOpen, onClose }: NotificationsPanelProps) {
  const notifications = [
    {
      id: 1,
      type: "session",
      icon: CalIcon,
      title: "Study Session Reminder",
      message: "CS 3410 group meeting starts in 30 minutes",
      time: "30 min",
      unread: true,
      actionable: true
    },
    {
      id: 2,
      type: "invite",
      icon: Users,
      title: "Group Invitation",
      message: "Sarah K. invited you to join Math Wizards",
      time: "1 hour",
      unread: true,
      actionable: true
    },
    {
      id: 3,
      type: "message",
      icon: MessageCircle,
      title: "New Message",
      message: "Michael T. commented on your shared notes",
      time: "2 hours",
      unread: true,
      actionable: false
    },
    {
      id: 4,
      type: "session",
      icon: CalIcon,
      title: "Session Completed",
      message: "You completed a 2-hour study session! 🎉",
      time: "Yesterday",
      unread: false,
      actionable: false
    },
    {
      id: 5,
      type: "alert",
      icon: Bell,
      title: "Assignment Due",
      message: "Database project due in 2 days",
      time: "Yesterday",
      unread: false,
      actionable: false
    },
    {
      id: 6,
      type: "invite",
      icon: Users,
      title: "New Group Match",
      message: "Found 3 new groups matching your preferences",
      time: "2 days ago",
      unread: false,
      actionable: false
    }
  ];

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
        onClick={onClose}
      />

      <Card className="fixed top-16 right-4 w-96 max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-5rem)] shadow-2xl z-50 rounded-2xl flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            <h3>Notifications</h3>
            <Badge variant="secondary" className="ml-2">
              {notifications.filter(n => n.unread).length}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-xs">
              Mark all read
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose}
              className="h-8 w-8 md:hidden"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-2">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 mb-2 rounded-xl border transition-colors cursor-pointer ${
                  notification.unread
                    ? 'bg-primary/5 border-primary/20 hover:bg-primary/10'
                    : 'bg-card hover:bg-secondary/50'
                }`}
              >
                <div className="flex gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    notification.unread ? 'bg-primary/20' : 'bg-secondary'
                  }`}>
                    <notification.icon className={`h-5 w-5 ${
                      notification.unread ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="text-sm">{notification.title}</h4>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>

                    {notification.actionable && (
                      <div className="flex gap-2 mt-3">
                        <Button size="sm" className="rounded-lg bg-primary h-8">
                          <Check className="h-3 w-3 mr-1" />
                          Accept
                        </Button>
                        <Button size="sm" variant="outline" className="rounded-lg h-8">
                          <X className="h-3 w-3 mr-1" />
                          Decline
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t">
          <Button variant="ghost" className="w-full rounded-xl">
            View All Notifications
          </Button>
        </div>
      </Card>
    </>
  );
}

// ==================== LOGIN PAGE ====================
// Note: LoginPage functionality is in LoginPage.tsx - this is just a design placeholder
// The actual LoginPage with signup/login handlers should be used from LoginPage.tsx