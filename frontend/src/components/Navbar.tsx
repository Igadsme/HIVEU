import { Bell, Menu, Moon, Sun, X, Award } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetTrigger } from "./ui/sheet";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { OwlLogoIcon } from "./OwlIcon";
import { VisuallyHidden } from "./ui/visually-hidden";

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
    // Handle React Router navigation - onNavigate expects paths like '/dashboard'
    const path = page.startsWith('/') ? page : `/${page}`;
    onNavigate(path);
    setMobileOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/30" style={{ backgroundColor: '#1A1A1A' }}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
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

          {/* Desktop Navigation */}
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

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* HivePoints Badge - NEW */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleNavClick('hivepoints')}
              className="relative hidden md:flex items-center gap-2 rounded-xl hover:bg-primary/10"
            >
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold">2,340</span>
              <Badge className="gradient-gold text-primary-foreground text-xs px-1.5 py-0">
                Lvl 8
              </Badge>
            </Button>
            
            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleNotifications}
              className="relative"
            >
              <Bell className="h-5 w-5" />
              {notificationCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-destructive text-destructive-foreground text-xs">
                  {notificationCount}
                </Badge>
              )}
            </Button>

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleDarkMode}
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <VisuallyHidden>
                  <SheetTitle>Navigation Menu</SheetTitle>
                  <SheetDescription>
                    Mobile navigation menu for HiveU StudyMatch
                  </SheetDescription>
                </VisuallyHidden>
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