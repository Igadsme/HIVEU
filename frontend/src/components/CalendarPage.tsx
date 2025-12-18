import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Clock, MapPin, Users, Video, Plus, Download, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar } from "./ui/calendar";
import { useState } from "react";
import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const events = [
    {
      id: 1,
      title: "CS 3410 Study Session",
      time: "3:00 PM - 5:00 PM",
      date: "Today",
      location: "Library Room 204",
      type: "study",
      attendees: 5,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Math 2345 Group Meeting",
      time: "5:30 PM - 7:00 PM",
      date: "Tomorrow",
      location: "Virtual (Zoom)",
      type: "meeting",
      attendees: 8,
      color: "bg-purple-500"
    },
    {
      id: 3,
      title: "Database Project Deadline",
      time: "11:59 PM",
      date: "Nov 15",
      location: "Canvas Submission",
      type: "deadline",
      attendees: 0,
      color: "bg-red-500"
    },
    {
      id: 4,
      title: "Physics Study Group",
      time: "6:00 PM - 8:00 PM",
      date: "Thu, Nov 12",
      location: "Engineering Building 102",
      type: "study",
      attendees: 6,
      color: "bg-green-500"
    },
    {
      id: 5,
      title: "Literature Essay Due",
      time: "2:00 PM",
      date: "Fri, Nov 13",
      location: "Turnitin",
      type: "deadline",
      attendees: 0,
      color: "bg-red-500"
    }
  ];

  const upcomingToday = events.filter(e => e.date === "Today");
  const upcomingThis= events.filter(e => e.date !== "Today");

  return (
    <div className="min-h-screen owl-bg">
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl mb-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
                Calendar & Schedule
              </h1>
              <p className="text-muted-foreground">Manage your study sessions and deadlines</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="rounded-xl hover:bg-secondary">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button className="rounded-2xl gradient-gold gradient-gold-hover shadow-lg">
                <Plus className="mr-2 h-4 w-4" />
                New Event
              </Button>
            </div>
          </div>

          {/* Sync Options */}
          <Card className="rounded-2xl border-primary/20 shadow-lg">
            <CardContent className="p-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Settings className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="text-sm">Calendar Sync</h4>
                    <p className="text-xs text-muted-foreground">Connect with external calendars</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="rounded-lg">
                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17A4.82 4.82 0 0019.46 4c-2.67 0-4.83 2.16-4.83 4.83 0 .38.04.75.13 1.1-4.02-.2-7.58-2.13-9.97-5.05-.42.72-.66 1.55-.66 2.44 0 1.68.85 3.16 2.15 4.02-.8-.02-1.54-.24-2.2-.6v.06c0 2.34 1.66 4.29 3.87 4.73-.4.11-.83.17-1.27.17-.31 0-.62-.03-.91-.08.62 1.94 2.42 3.35 4.55 3.39-1.67 1.31-3.77 2.09-6.05 2.09-.39 0-.78-.02-1.17-.07 2.18 1.4 4.77 2.21 7.55 2.21 9.06 0 14.01-7.5 14.01-14.01 0-.21 0-.42-.01-.63.96-.69 1.8-1.56 2.46-2.55z"/>
                    </svg>
                    Google Calendar
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-lg">
                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V7h16v12z"/>
                    </svg>
                    Outlook
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-lg">
                    Mock Integration
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Calendar View */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Tabs defaultValue="month" className="w-full">
              <TabsList className="rounded-xl mb-4">
                <TabsTrigger value="month">Month</TabsTrigger>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="day">Day</TabsTrigger>
              </TabsList>

              <TabsContent value="month">
                <Card className="rounded-2xl">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>November 2025</CardTitle>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="rounded-lg">
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-lg">
                          Today
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-lg">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-xl"
                    />
                    
                    {/* Color Legend */}
                    <div className="mt-6 flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                        <span>Study Sessions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-purple-500" />
                        <span>Meetings</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <span>Deadlines</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span>Group Events</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="week">
                <Card className="rounded-2xl">
                  <CardContent className="p-6">
                    <div className="text-center py-12">
                      <CalendarIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="mb-2">Week View</h3>
                      <p className="text-muted-foreground">
                        Weekly calendar view showing all your scheduled events
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="day">
                <Card className="rounded-2xl">
                  <CardContent className="p-6">
                    <div className="text-center py-12">
                      <CalendarIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="mb-2">Day View</h3>
                      <p className="text-muted-foreground">
                        Detailed daily schedule with hourly breakdown
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Events Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Today's Events */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Today</CardTitle>
                <CardDescription>November 9, 2025</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingToday.length > 0 ? (
                  upcomingToday.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="p-3 rounded-xl border bg-card hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-1 h-full ${event.color} rounded-full`} />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm mb-1 truncate">{event.title}</h4>
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {event.time}
                            </p>
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {event.location}
                            </p>
                            {event.attendees > 0 && (
                              <p className="text-xs text-muted-foreground flex items-center gap-1">
                                <Users className="h-3 w-3" />
                                {event.attendees} attending
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    No events today
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Upcoming</CardTitle>
                <CardDescription>This week</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingThis.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="p-3 rounded-xl border bg-card hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-1 h-full ${event.color} rounded-full`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-sm truncate">{event.title}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {event.date}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mb-1">
                          <Clock className="h-3 w-3" />
                          {event.time}
                        </p>
                        {event.type === "study" && (
                          <Badge variant="outline" className="text-xs">
                            <Video className="h-2 w-2 mr-1" />
                            Study Session
                          </Badge>
                        )}
                        {event.type === "deadline" && (
                          <Badge variant="destructive" className="text-xs">
                            Deadline
                          </Badge>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
