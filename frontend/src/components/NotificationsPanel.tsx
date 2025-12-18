import { Bell, Calendar, MessageSquare, Users, Check, X } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";

interface NotificationsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotificationsPanel({ isOpen, onClose }: NotificationsPanelProps) {
  const notifications = [
    {
      id: 1,
      type: "session",
      icon: Calendar,
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
      icon: MessageSquare,
      title: "New Message",
      message: "Michael T. commented on your shared notes",
      time: "2 hours",
      unread: true,
      actionable: false
    },
    {
      id: 4,
      type: "session",
      icon: Calendar,
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
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
        onClick={onClose}
      />

      {/* Panel */}
      <Card className="fixed top-16 right-4 w-96 max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-5rem)] shadow-2xl z-50 rounded-2xl flex flex-col">
        {/* Header */}
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

        {/* Notifications List */}
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
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    notification.unread ? 'bg-primary/20' : 'bg-secondary'
                  }`}>
                    <notification.icon className={`h-5 w-5 ${
                      notification.unread ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                  </div>

                  {/* Content */}
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

                    {/* Action Buttons */}
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

        {/* Footer */}
        <div className="p-4 border-t">
          <Button variant="ghost" className="w-full rounded-xl">
            View All Notifications
          </Button>
        </div>
      </Card>
    </>
  );
}
