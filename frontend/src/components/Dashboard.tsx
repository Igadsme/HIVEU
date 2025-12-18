import { Calendar, Clock, Plus, BookOpen, MessageSquare, Users, TrendingUp, Award, Sparkles, Brain, Target } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Progress } from "./ui/progress";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { getMatches, getUser } from "../api";
import { useAuth } from "../store";
import { toast } from "sonner";

interface DashboardProps {
  onNavigate: (page: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const { userId } = useAuth();
  const [user, setUser] = useState<any>(null);
  const [smartMatches, setSmartMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      if (!userId) return;
      try {
        setLoading(true);
        const userData = await getUser(userId);
        setUser(userData);
        
        // Load matches
        try {
          const matches = await getMatches(userId, 3);
          setSmartMatches(matches.map((m: any) => ({
            id: m.user.id,
            name: m.user.name,
            major: m.user.major || "Not specified",
            year: "Student",
            coursesOverlap: Math.round(m.score * 100),
            compatibility: Math.round(m.score * 100),
            sharedCourses: m.user.courses || []
          })));
        } catch (error) {
          console.error("Failed to load matches:", error);
        }
      } catch (error) {
        toast.error("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [userId]);

  const upcomingSessions = [
    {
      id: 1,
      course: "CS 3410 - Database Systems",
      time: "Today, 3:00 PM",
      location: "Library Room 204",
      members: 5,
      type: "In-Person"
    },
    {
      id: 2,
      course: "MATH 2345 - Calculus II",
      time: "Tomorrow, 5:30 PM",
      location: "Virtual (Zoom)",
      members: 8,
      type: "Virtual"
    },
    {
      id: 3,
      course: "ENG 1102 - Literature",
      time: "Thu, Nov 12, 2:00 PM",
      location: "Student Center 301",
      members: 4,
      type: "Hybrid"
    }
  ];

  const recommendedGroups = [
    {
      id: 1,
      name: "CS Study Squad",
      course: "CS 3410",
      members: 12,
      match: 95
    },
    {
      id: 2,
      name: "Math Wizards",
      course: "MATH 2345",
      members: 15,
      match: 88
    },
    {
      id: 3,
      name: "Engineering Excellence",
      course: "ENGR 2020",
      members: 10,
      match: 82
    }
  ];

  const tasks = [
    { id: 1, text: "Review Chapter 5 notes", course: "CS 3410", completed: false },
    { id: 2, text: "Complete practice problems", course: "MATH 2345", completed: true },
    { id: 3, text: "Prepare presentation slides", course: "ENG 1102", completed: false },
  ];

  const stats = [
    { label: "Study Sessions", value: "24", icon: Calendar, trend: "+12%" },
    { label: "Active Groups", value: "5", icon: Users, trend: "+2" },
    { label: "Study Hours", value: "48", icon: Clock, trend: "+8h" },
    { label: "Badges Earned", value: "7", icon: Award, trend: "+3" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen owl-bg">
      <div className="container mx-auto p-4 md:p-6 lg:p-8 space-y-6">
        {/* Header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <h1 className="text-3xl md:text-4xl mb-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
              Hi, {user?.name || 'there'}! 👋
            </h1>
            <p className="text-muted-foreground">Ready to make today productive?</p>
          </div>
          <Button 
            onClick={() => onNavigate('finder')}
            className="rounded-2xl gradient-gold gradient-gold-hover text-primary-foreground shadow-lg glow-gold-hover"
            size="lg"
          >
            <Plus className="mr-2 h-5 w-5" />
            Start a New Study Group
          </Button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="rounded-2xl hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-2xl md:text-3xl mb-1" style={{ fontFamily: 'var(--font-poppins)' }}>
                        {stat.value}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {stat.trend}
                      </Badge>
                    </div>
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Study Stats - NEW */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/20 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <CardTitle>Today's Study Stats</CardTitle>
                  </div>
                  <CardDescription>Your weekly study progress & motivational insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-background/60 rounded-xl backdrop-blur-sm">
                      <div className="text-3xl mb-1" style={{ fontFamily: 'var(--font-poppins)' }}>
                        9h
                      </div>
                      <p className="text-sm text-muted-foreground">This Week</p>
                      <Progress value={75} className="mt-2" />
                    </div>
                    <div className="text-center p-4 bg-background/60 rounded-xl backdrop-blur-sm">
                      <div className="text-3xl mb-1" style={{ fontFamily: 'var(--font-poppins)' }}>
                        24
                      </div>
                      <p className="text-sm text-muted-foreground">Total Sessions</p>
                      <Badge variant="secondary" className="mt-2">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +12%
                      </Badge>
                    </div>
                    <div className="text-center p-4 bg-background/60 rounded-xl backdrop-blur-sm">
                      <div className="text-3xl mb-1" style={{ fontFamily: 'var(--font-poppins)' }}>
                        7
                      </div>
                      <p className="text-sm text-muted-foreground">Day Streak 🔥</p>
                      <p className="text-xs text-muted-foreground mt-1">Keep it up!</p>
                    </div>
                  </div>
                  
                  {/* Weekly Trend Mini Chart */}
                  <div className="bg-background/60 rounded-xl p-4 backdrop-blur-sm">
                    <p className="text-sm mb-3">Weekly Study Hours Trend</p>
                    <div className="flex items-end justify-between h-24 gap-2">
                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => {
                        const heights = [60, 75, 85, 70, 80, 100, 90];
                        return (
                          <div key={index} className="flex-1 flex flex-col items-center gap-1">
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: `${heights[index]}%` }}
                              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                              className="w-full gradient-gold rounded-t-lg"
                            />
                            <span className="text-xs text-muted-foreground">{day}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Motivational Quote */}
                  <div className="mt-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
                    <p className="text-sm italic text-center">
                      "Success is the sum of small efforts repeated day in and day out." - Keep studying! 🦉
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Smart Matches - AI-Powered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="rounded-2xl border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Brain className="h-5 w-5 text-primary" />
                        Top Matches for You
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <Sparkles className="h-3 w-3" />
                        Powered by Scrappy, your AI study partner
                      </CardDescription>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => onNavigate('finder')}>
                      View All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {loading ? (
                    <div className="text-center py-8 text-muted-foreground">Loading matches...</div>
                  ) : smartMatches.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">No matches found. Update your profile to find study partners!</div>
                  ) : (
                    smartMatches.map((match, index) => (
                    <motion.div
                      key={match.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 rounded-xl border bg-card hover:shadow-lg transition-all cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-primary/20 text-primary">
                              {match.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="mb-0.5">{match.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {match.major} · {match.year}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-primary mb-1 flex items-center gap-1">
                            <Target className="h-4 w-4" />
                            {match.compatibility}%
                          </div>
                          <p className="text-xs text-muted-foreground">Match</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Course overlap:</span>
                          <Progress value={match.coursesOverlap} className="flex-1 h-2" />
                          <span className="text-sm">{match.coursesOverlap}%</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {match.sharedCourses.map((course, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="w-full mt-3 rounded-xl gradient-gold gradient-gold-hover shadow-md" size="sm">
                        Invite to Group
                      </Button>
                    </motion.div>
                    ))
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Upcoming Study Sessions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Card className="rounded-2xl hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Upcoming Study Sessions</CardTitle>
                      <CardDescription>Your scheduled group meetings</CardDescription>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => onNavigate('calendar')}>
                      View Calendar
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingSessions.map((session, index) => (
                    <motion.div
                      key={session.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 rounded-xl border bg-card hover:shadow-lg transition-all cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="mb-1">{session.course}</h4>
                          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {session.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {session.members} members
                            </span>
                          </div>
                        </div>
                        <Badge className={
                          session.type === 'Virtual' ? 'bg-blue-500' :
                          session.type === 'In-Person' ? 'bg-green-500' :
                          'bg-purple-500'
                        }>
                          {session.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{session.location}</p>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Recommended Groups */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <Card className="rounded-2xl hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Recommended Groups</CardTitle>
                      <CardDescription>Based on your courses and preferences</CardDescription>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => onNavigate('finder')}>
                      See More
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recommendedGroups.map((group) => (
                    <motion.div
                      key={group.id}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 rounded-xl border bg-card hover:shadow-md transition-all"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Users className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="mb-0.5">{group.name}</h4>
                            <p className="text-sm text-muted-foreground">{group.course}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-primary mb-1">{group.match}% Match</div>
                          <p className="text-xs text-muted-foreground">{group.members} members</p>
                        </div>
                      </div>
                      <Button className="w-full rounded-xl" variant="outline">
                        Join Group
                      </Button>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>Quick Access</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start rounded-xl" onClick={() => onNavigate('workspace')}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    My Courses
                  </Button>
                  <Button variant="ghost" className="w-full justify-start rounded-xl">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Messages
                  </Button>
                  <Button variant="ghost" className="w-full justify-start rounded-xl" onClick={() => onNavigate('calendar')}>
                    <Calendar className="mr-2 h-4 w-4" />
                    Group Calendar
                  </Button>
                  <Button variant="ghost" className="w-full justify-start rounded-xl" onClick={() => onNavigate('marketplace')}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Marketplace
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Shared To-Do */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>Group Tasks</CardTitle>
                  <CardDescription>Shared to-do items</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {tasks.map((task) => (
                    <div key={task.id} className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id={`task-${task.id}`}
                        checked={task.completed}
                        className="mt-1 h-4 w-4 rounded border-border accent-primary"
                        readOnly
                        aria-label={`Task: ${task.text} for ${task.course}`}
                      />
                      <div className="flex-1">
                        <p className={`text-sm ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                          {task.text}
                        </p>
                        <p className="text-xs text-muted-foreground">{task.course}</p>
                      </div>
                    </div>
                  ))}
                  <Button variant="ghost" className="w-full rounded-xl mt-2" size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Task
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Progress Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4>Weekly Goal</h4>
                      <p className="text-sm text-muted-foreground">12 study hours</p>
                    </div>
                  </div>
                  <Progress value={75} className="mb-2" />
                  <p className="text-sm text-muted-foreground">9 of 12 hours completed</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
