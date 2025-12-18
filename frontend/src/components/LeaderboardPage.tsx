import { Trophy, Medal, Award, TrendingUp, Users, Clock, Target, Crown, Flame } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { motion } from "motion/react";
import { OwlIcon } from "./CoreUI";

export function LeaderboardPage() {
  const topStudents = [
    {
      rank: 1,
      name: "Sarah Martinez",
      major: "Computer Science",
      studyHours: 156,
      groupsJoined: 12,
      sessionsHosted: 8,
      streak: 24,
      level: "Master Scholar"
    },
    {
      rank: 2,
      name: "David Kim",
      major: "Software Engineering",
      studyHours: 142,
      groupsJoined: 10,
      sessionsHosted: 6,
      streak: 18,
      level: "Expert"
    },
    {
      rank: 3,
      name: "Emily Johnson",
      major: "Data Science",
      studyHours: 138,
      groupsJoined: 11,
      sessionsHosted: 7,
      streak: 21,
      level: "Expert"
    },
    {
      rank: 4,
      name: "Michael Torres",
      major: "Computer Science",
      studyHours: 125,
      groupsJoined: 9,
      sessionsHosted: 5,
      streak: 15,
      level: "Advanced"
    },
    {
      rank: 5,
      name: "Alex Lee",
      major: "Information Technology",
      studyHours: 118,
      groupsJoined: 8,
      sessionsHosted: 4,
      streak: 12,
      level: "Advanced"
    },
    {
      rank: 6,
      name: "Imani Johnson (You)",
      major: "Computer Science",
      studyHours: 48,
      groupsJoined: 5,
      sessionsHosted: 2,
      streak: 7,
      level: "Intermediate",
      isCurrentUser: true
    }
  ];

  const achievements = [
    { icon: "🎓", name: "Dedicated Scholar", count: 45 },
    { icon: "🦉", name: "Night Owl", count: 32 },
    { icon: "🏆", name: "Group Leader", count: 28 },
    { icon: "📅", name: "Consistent", count: 51 },
    { icon: "🤝", name: "Team Player", count: 38 },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Medal className="h-6 w-6 text-amber-600" />;
      default:
        return <span className="text-lg">{rank}</span>;
    }
  };

  return (
    <div className="min-h-screen owl-bg">
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <Trophy className="h-10 w-10 text-primary" />
            <h1 className="text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-orbitron)' }}>
              Leaderboard
            </h1>
          </div>
          <p className="text-muted-foreground">
            See how you rank among KSU's top students
          </p>

          {/* Filters */}
          <div className="flex gap-4 mt-6">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px] rounded-xl">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Students</SelectItem>
                <SelectItem value="major">By Major</SelectItem>
                <SelectItem value="dorm">By Dorm</SelectItem>
                <SelectItem value="year">By Year</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="hours">
              <SelectTrigger className="w-[180px] rounded-xl">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hours">Total Study Hours</SelectItem>
                <SelectItem value="groups">Groups Joined</SelectItem>
                <SelectItem value="hosted">Sessions Hosted</SelectItem>
                <SelectItem value="streak">Current Streak</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Leaderboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Tabs defaultValue="overall" className="w-full">
              <TabsList className="rounded-xl mb-6">
                <TabsTrigger value="overall">Overall</TabsTrigger>
                <TabsTrigger value="week">This Week</TabsTrigger>
                <TabsTrigger value="month">This Month</TabsTrigger>
              </TabsList>

              <TabsContent value="overall" className="space-y-4">
                {/* Top 3 Podium */}
                <Card className="rounded-2xl gradient-gold p-6 text-primary-foreground mb-6 shadow-2xl glow-gold">
                  <div className="grid grid-cols-3 gap-4 items-end">
                    {/* 2nd Place */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-center"
                    >
                      <Avatar className="w-16 h-16 mx-auto mb-2 border-4 border-gray-400">
                        <AvatarFallback className="bg-white text-gray-700 text-lg">
                          DK
                        </AvatarFallback>
                      </Avatar>
                      <Medal className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="font-semibold">{topStudents[1].name}</p>
                      <p className="text-sm opacity-90">{topStudents[1].studyHours}h</p>
                    </motion.div>

                    {/* 1st Place */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-center"
                    >
                      <Avatar className="w-20 h-20 mx-auto mb-2 border-4 border-yellow-500 ring-4 ring-yellow-500/20">
                        <AvatarFallback className="bg-white text-yellow-600 text-xl">
                          SM
                        </AvatarFallback>
                      </Avatar>
                      <Crown className="h-10 w-10 text-yellow-500 mx-auto mb-2" />
                      <p className="font-semibold text-lg">{topStudents[0].name}</p>
                      <p className="opacity-90">{topStudents[0].studyHours}h</p>
                      <Badge className="mt-2 bg-yellow-500 text-yellow-900">
                        {topStudents[0].level}
                      </Badge>
                    </motion.div>

                    {/* 3rd Place */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-center"
                    >
                      <Avatar className="w-16 h-16 mx-auto mb-2 border-4 border-amber-600">
                        <AvatarFallback className="bg-white text-amber-700 text-lg">
                          EJ
                        </AvatarFallback>
                      </Avatar>
                      <Medal className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                      <p className="font-semibold">{topStudents[2].name}</p>
                      <p className="text-sm opacity-90">{topStudents[2].studyHours}h</p>
                    </motion.div>
                  </div>
                </Card>

                {/* Rest of Leaderboard */}
                {topStudents.slice(3).map((student, index) => (
                  <motion.div
                    key={student.rank}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <Card
                      className={`rounded-2xl ${
                        student.isCurrentUser
                          ? "border-2 border-primary bg-primary/5"
                          : ""
                      }`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          {/* Rank */}
                          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary text-foreground font-semibold">
                            {getRankIcon(student.rank)}
                          </div>

                          {/* Avatar & Info */}
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-primary/10 text-primary">
                              {student.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>

                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4>{student.name}</h4>
                              {student.isCurrentUser && (
                                <Badge className="gradient-gold text-xs">You</Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {student.major}
                            </p>
                          </div>

                          {/* Stats */}
                          <div className="text-right space-y-1">
                            <div className="flex items-center gap-2 text-sm">
                              <Clock className="h-4 w-4 text-primary" />
                              <span className="font-semibold">{student.studyHours}h</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Flame className="h-4 w-4 text-orange-500" />
                              <span>{student.streak} day streak</span>
                            </div>
                          </div>

                          {/* Level Badge */}
                          <Badge variant="secondary" className="hidden md:block">
                            {student.level}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="week">
                <div className="text-center py-12">
                  <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="mb-2">This Week's Top Performers</h3>
                  <p className="text-muted-foreground">
                    See who's leading this week
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="month">
                <div className="text-center py-12">
                  <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="mb-2">This Month's Champions</h3>
                  <p className="text-muted-foreground">
                    Monthly leaderboard rankings
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Sidebar - Achievements & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Your Rank Card */}
            <Card className="rounded-2xl border-primary/50 bg-gradient-to-br from-primary/10 to-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Your Rank
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-5xl mb-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
                    #6
                  </div>
                  <p className="text-muted-foreground">out of 247 students</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Study Hours:</span>
                    <span className="font-semibold">48h</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Current Streak:</span>
                    <span className="flex items-center gap-1">
                      <Flame className="h-4 w-4 text-orange-500" />
                      7 days
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Groups:</span>
                    <span className="font-semibold">5</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Popular Achievements */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Popular Achievements</CardTitle>
                <CardDescription>Most earned badges</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.name}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-xl bg-secondary/50"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{achievement.icon}</span>
                      <span className="text-sm">{achievement.name}</span>
                    </div>
                    <Badge variant="secondary">{achievement.count}</Badge>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Motivation Card */}
            <Card className="rounded-2xl gradient-gold text-primary-foreground shadow-lg glow-gold-hover">
              <CardContent className="p-6 text-center">
                <OwlIcon className="mx-auto mb-3" size={40} />
                <h4 className="mb-2">Keep Going!</h4>
                <p className="text-sm opacity-90 mb-4">
                  You're only 5 study hours away from climbing to rank #5!
                </p>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <TrendingUp className="h-4 w-4" />
                  <span>+20% this week</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}