import { useState } from "react";
import { Award, TrendingUp, Gift, Star, Trophy, Zap, Clock, Target, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface LeaderboardUser {
  rank: number;
  name: string;
  avatar: string;
  points: number;
  level: number;
  badge: string;
}

interface Reward {
  id: number;
  title: string;
  description: string;
  cost: number;
  icon: any;
  category: 'ai' | 'tutor' | 'premium';
  available: boolean;
}

export function HivePointsPage() {
  const currentUser = {
    name: "Imani Johnson",
    points: 2340,
    level: 8,
    nextLevel: 2500,
    prevLevel: 2000,
  };

  const progressPercent = ((currentUser.points - currentUser.prevLevel) / (currentUser.nextLevel - currentUser.prevLevel)) * 100;

  const leaderboard: LeaderboardUser[] = [
    { rank: 1, name: "Sarah Chen", avatar: "SC", points: 4890, level: 12, badge: "🏆 Champion" },
    { rank: 2, name: "Marcus Johnson", avatar: "MJ", points: 4250, level: 11, badge: "🥈 Master" },
    { rank: 3, name: "Emily Rodriguez", avatar: "ER", points: 3920, level: 10, badge: "🥉 Expert" },
    { rank: 4, name: "David Park", avatar: "DP", points: 3640, level: 10, badge: "⭐ Pro" },
    { rank: 5, name: "Jessica Williams", avatar: "JW", points: 3180, level: 9, badge: "⭐ Pro" },
    { rank: 6, name: "Ryan Thompson", avatar: "RT", points: 2870, level: 9, badge: "⭐ Pro" },
    { rank: 7, name: "Imani Johnson", avatar: "IJ", points: 2340, level: 8, badge: "💫 Rising" },
    { rank: 8, name: "Taylor Davis", avatar: "TD", points: 2120, level: 8, badge: "💫 Rising" },
  ];

  const rewards: Reward[] = [
    {
      id: 1,
      title: "50 AI Tokens",
      description: "Extra HiveMind AI questions",
      cost: 100,
      icon: Zap,
      category: 'ai',
      available: true
    },
    {
      id: 2,
      title: "10% Tutor Discount",
      description: "One tutoring session",
      cost: 150,
      icon: Award,
      category: 'tutor',
      available: true
    },
    {
      id: 3,
      title: "100 AI Tokens",
      description: "Extended AI access",
      cost: 180,
      icon: Zap,
      category: 'ai',
      available: true
    },
    {
      id: 4,
      title: "Premium Badge",
      description: "Show off your status",
      cost: 200,
      icon: Star,
      category: 'premium',
      available: true
    },
    {
      id: 5,
      title: "25% Tutor Discount",
      description: "One tutoring session",
      cost: 300,
      icon: Award,
      category: 'tutor',
      available: true
    },
    {
      id: 6,
      title: "Unlimited AI (1 week)",
      description: "Ask anything, anytime",
      cost: 500,
      icon: Zap,
      category: 'ai',
      available: true
    },
  ];

  const recentActivity = [
    { action: "Uploaded study notes", points: 50, time: "2 hours ago" },
    { action: "Completed study session", points: 25, time: "Yesterday" },
    { action: "Helped a peer", points: 30, time: "2 days ago" },
    { action: "Daily login streak (7 days)", points: 100, time: "3 days ago" },
  ];

  return (
    <div className="min-h-screen owl-bg">
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        {/* Header */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Trophy className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-orbitron)' }}>
              HivePoints
            </h1>
          </div>
          <p className="text-muted-foreground">Your rewards and achievements</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Points Overview Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="rounded-2xl shadow-lg bg-gradient-to-br from-primary/20 via-primary/10 to-background border-2 border-primary/30">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* Honey Jar Animation */}
                    <div className="relative">
                      <motion.div
                        className="w-32 h-32 relative"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                      >
                        {/* Jar Container */}
                        <div className="absolute inset-0 border-4 border-primary rounded-xl opacity-30"></div>
                        
                        {/* Honey Fill */}
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 gradient-gold rounded-b-xl"
                          initial={{ height: "0%" }}
                          animate={{ height: `${progressPercent}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                        
                        {/* Level Badge */}
                        <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold border-4 border-background shadow-lg">
                          {currentUser.level}
                        </div>
                      </motion.div>
                    </div>

                    {/* Points Info */}
                    <div className="flex-1 text-center md:text-left">
                      <h2 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                        {currentUser.points.toLocaleString()} Points
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        Level {currentUser.level} • {currentUser.nextLevel - currentUser.points} points to Level {currentUser.level + 1}
                      </p>
                      
                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <Progress value={progressPercent} className="h-3" />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>{currentUser.prevLevel}</span>
                          <span>{currentUser.nextLevel}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Earn Points */}
            <Card className="rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Ways to Earn Points
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { action: "Upload study materials", points: 50 },
                  { action: "Complete a study session", points: 25 },
                  { action: "Help a peer", points: 30 },
                  { action: "Maintain login streak", points: 10 },
                  { action: "Join a new study group", points: 40 },
                  { action: "Achieve weekly study goal", points: 100 },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <span className="text-sm">{item.action}</span>
                    <Badge className="gradient-gold">+{item.points} pts</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Rewards Catalog */}
            <Card className="rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-primary" />
                  Redeem Rewards
                </CardTitle>
                <CardDescription>
                  Use your HivePoints for AI tokens, tutor discounts, and more
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all">
                  <TabsList className="mb-4">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="ai">AI Tokens</TabsTrigger>
                    <TabsTrigger value="tutor">Tutor Discounts</TabsTrigger>
                    <TabsTrigger value="premium">Premium</TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="space-y-3">
                    {rewards.map((reward) => (
                      <div
                        key={reward.id}
                        className="flex items-center gap-4 p-4 rounded-xl border hover:border-primary/50 transition-colors"
                      >
                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                          <reward.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{reward.title}</h4>
                          <p className="text-sm text-muted-foreground">{reward.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary mb-2">{reward.cost} pts</p>
                          <Button
                            size="sm"
                            className="rounded-xl gradient-gold gradient-gold-hover"
                            disabled={currentUser.points < reward.cost}
                          >
                            Redeem
                          </Button>
                        </div>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="ai" className="space-y-3">
                    {rewards.filter(r => r.category === 'ai').map((reward) => (
                      <div
                        key={reward.id}
                        className="flex items-center gap-4 p-4 rounded-xl border hover:border-primary/50 transition-colors"
                      >
                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                          <reward.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{reward.title}</h4>
                          <p className="text-sm text-muted-foreground">{reward.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary mb-2">{reward.cost} pts</p>
                          <Button
                            size="sm"
                            className="rounded-xl gradient-gold gradient-gold-hover"
                            disabled={currentUser.points < reward.cost}
                          >
                            Redeem
                          </Button>
                        </div>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="tutor" className="space-y-3">
                    {rewards.filter(r => r.category === 'tutor').map((reward) => (
                      <div
                        key={reward.id}
                        className="flex items-center gap-4 p-4 rounded-xl border hover:border-primary/50 transition-colors"
                      >
                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                          <reward.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{reward.title}</h4>
                          <p className="text-sm text-muted-foreground">{reward.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary mb-2">{reward.cost} pts</p>
                          <Button
                            size="sm"
                            className="rounded-xl gradient-gold gradient-gold-hover"
                            disabled={currentUser.points < reward.cost}
                          >
                            Redeem
                          </Button>
                        </div>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="premium" className="space-y-3">
                    {rewards.filter(r => r.category === 'premium').map((reward) => (
                      <div
                        key={reward.id}
                        className="flex items-center gap-4 p-4 rounded-xl border hover:border-primary/50 transition-colors"
                      >
                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                          <reward.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{reward.title}</h4>
                          <p className="text-sm text-muted-foreground">{reward.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary mb-2">{reward.cost} pts</p>
                          <Button
                            size="sm"
                            className="rounded-xl gradient-gold gradient-gold-hover"
                            disabled={currentUser.points < reward.cost}
                          >
                            Redeem
                          </Button>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Leaderboard */}
            <Card className="rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Leaderboard
                </CardTitle>
                <CardDescription>Top students this month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {leaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                      user.rank === 7 
                        ? 'bg-primary/10 border-2 border-primary/30' 
                        : 'bg-secondary hover:bg-secondary/80'
                    }`}
                  >
                    <div className="w-8 text-center font-bold text-primary">
                      {user.rank <= 3 ? ['🥇', '🥈', '🥉'][user.rank - 1] : user.rank}
                    </div>
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {user.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold truncate text-sm">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.badge}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-sm">{user.points.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Level {user.level}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentActivity.map((activity, idx) => (
                  <div key={idx} className="flex items-start gap-3 pb-3 border-b last:border-0">
                    <div className="p-2 bg-primary/10 rounded-lg mt-1">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">{activity.action}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                    <Badge className="gradient-gold">+{activity.points}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
