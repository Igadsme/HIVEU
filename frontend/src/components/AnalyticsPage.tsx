import { TrendingUp, Clock, Users, Target, Calendar, Award, BarChart3, PieChart, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { motion } from "motion/react";
import { LineChart, Line, BarChart, Bar, PieChart as RechartsOieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export function AnalyticsPage() {
  const weeklyData = [
    { day: "Mon", hours: 4, sessions: 2 },
    { day: "Tue", hours: 6, sessions: 3 },
    { day: "Wed", hours: 8, sessions: 4 },
    { day: "Thu", hours: 5, sessions: 2 },
    { day: "Fri", hours: 7, sessions: 3 },
    { day: "Sat", hours: 10, sessions: 5 },
    { day: "Sun", hours: 8, sessions: 4 }
  ];

  const courseData = [
    { name: "CS 3410", hours: 18, color: "#3B82F6" },
    { name: "MATH 2345", hours: 15, color: "#8B5CF6" },
    { name: "ENG 1102", hours: 8, color: "#10B981" },
    { name: "PHYS 2211", hours: 7, color: "#F59E0B" }
  ];

  const studyPatterns = [
    { time: "Morning (8-12)", percentage: 25 },
    { time: "Afternoon (12-5)", percentage: 40 },
    { time: "Evening (5-9)", percentage: 30 },
    { time: "Night (9+)", percentage: 5 }
  ];

  const insights = [
    {
      title: "Peak Productivity",
      description: "You're most productive on Saturdays between 2-6 PM",
      icon: TrendingUp,
      color: "text-green-500"
    },
    {
      title: "Study Consistency",
      description: "You've maintained a 7-day study streak! Keep it up!",
      icon: Calendar,
      color: "text-blue-500"
    },
    {
      title: "Group Engagement",
      description: "You've helped 12 students this month - great teamwork!",
      icon: Users,
      color: "text-purple-500"
    },
    {
      title: "Goal Progress",
      description: "75% towards your weekly 12-hour study goal",
      icon: Target,
      color: "text-orange-500"
    }
  ];

  const COLORS = ['#FFC93C', '#3B82F6', '#8B5CF6', '#10B981'];

  return (
    <div className="min-h-screen owl-bg">
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="text-3xl md:text-4xl mb-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
            Study Analytics
          </h1>
          <p className="text-muted-foreground">
            Insights and trends to help you study smarter
          </p>
        </motion.div>

        {/* Overview Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
        >
          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Clock className="h-5 w-5 text-primary" />
                <Badge variant="secondary">This Week</Badge>
              </div>
              <div className="text-3xl mb-1" style={{ fontFamily: 'var(--font-poppins)' }}>
                48h
              </div>
              <p className="text-sm text-muted-foreground">Study Time</p>
              <div className="flex items-center gap-1 text-xs text-green-500 mt-2">
                <TrendingUp className="h-3 w-3" />
                <span>+12% from last week</span>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Users className="h-5 w-5 text-primary" />
                <Badge variant="secondary">Active</Badge>
              </div>
              <div className="text-3xl mb-1" style={{ fontFamily: 'var(--font-poppins)' }}>
                5
              </div>
              <p className="text-sm text-muted-foreground">Study Groups</p>
              <div className="flex items-center gap-1 text-xs text-blue-500 mt-2">
                <TrendingUp className="h-3 w-3" />
                <span>+2 new groups</span>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Target className="h-5 w-5 text-primary" />
                <Badge variant="secondary">Goal</Badge>
              </div>
              <div className="text-3xl mb-1" style={{ fontFamily: 'var(--font-poppins)' }}>
                75%
              </div>
              <p className="text-sm text-muted-foreground">Completion</p>
              <Progress value={75} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Award className="h-5 w-5 text-primary" />
                <Badge variant="secondary">Earned</Badge>
              </div>
              <div className="text-3xl mb-1" style={{ fontFamily: 'var(--font-poppins)' }}>
                7
              </div>
              <p className="text-sm text-muted-foreground">Badges</p>
              <div className="flex items-center gap-1 text-xs text-purple-500 mt-2">
                <TrendingUp className="h-3 w-3" />
                <span>+3 this month</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Charts Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Weekly Trend */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Weekly Study Hours
                </CardTitle>
                <CardDescription>Your study time distribution this week</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="hours" fill="#FFC93C" name="Study Hours" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Course Distribution */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-primary" />
                  Time by Course
                </CardTitle>
                <CardDescription>How you're distributing your study time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <ResponsiveContainer width="100%" height={250}>
                    <RechartsOieChart>
                      <Pie
                        data={courseData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={(entry) => entry.name}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="hours"
                      >
                        {courseData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartsOieChart>
                  </ResponsiveContainer>
                  
                  <div className="space-y-3">
                    {courseData.map((course, index) => (
                      <div key={course.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: COLORS[index] }}
                          />
                          <span className="text-sm">{course.name}</span>
                        </div>
                        <span className="text-sm font-semibold">{course.hours}h</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Study Patterns */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Study Time Preferences</CardTitle>
                <CardDescription>When you study most effectively</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {studyPatterns.map((pattern) => (
                  <div key={pattern.time}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">{pattern.time}</span>
                      <span className="text-sm font-semibold">{pattern.percentage}%</span>
                    </div>
                    <Progress value={pattern.percentage} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Insights Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* AI Insights - Powered by Scrappy */}
            <Card className="rounded-2xl border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  AI Insights
                </CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  Powered by Scrappy
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {insights.map((insight, index) => (
                  <motion.div
                    key={insight.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-4 rounded-xl bg-secondary/50"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg bg-background ${insight.color}`}>
                        <insight.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-1">{insight.title}</h4>
                        <p className="text-xs text-muted-foreground">{insight.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Improvement Suggestions */}
            <Card className="rounded-2xl gradient-gold text-primary-foreground">
              <CardContent className="p-6">
                <h4 className="mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Keep Improving!
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Study 3 more hours to reach your weekly goal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Join 2 more groups to unlock "Social Learner" badge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Continue your streak to reach 14 days!</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
