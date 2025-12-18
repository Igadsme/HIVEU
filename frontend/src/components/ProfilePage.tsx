import { Mail, Edit, MapPin, Calendar, Award, BookOpen, Users, Clock, Trophy, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function ProfilePage() {
  const badges = [
    { id: 1, name: "Early Bird", icon: "🌅", description: "Joined 5 morning sessions", earned: true },
    { id: 2, name: "Team Player", icon: "🤝", description: "Helped 10 students", earned: true },
    { id: 3, name: "Consistent", icon: "📅", description: "7-day study streak", earned: true },
    { id: 4, name: "Note Master", icon: "📝", description: "Shared 20 notes", earned: true },
    { id: 5, name: "Group Leader", icon: "👑", description: "Led 5 study groups", earned: true },
    { id: 6, name: "Night Owl", icon: "🦉", description: "Study after 9 PM", earned: true },
    { id: 7, name: "Explorer", icon: "🗺️", description: "Join 10 different groups", earned: true },
    { id: 8, name: "Dedicated", icon: "💪", description: "50 study hours", earned: false },
  ];

  const courses = [
    { code: "CS 3410", name: "Database Systems", credits: 3 },
    { code: "MATH 2345", name: "Calculus II", credits: 4 },
    { code: "ENG 1102", name: "English Composition II", credits: 3 },
    { code: "PHYS 2211", name: "Physics I", credits: 4 },
  ];

  const recentActivity = [
    { action: "Joined", group: "CS 3410 Study Crew", time: "2 hours ago" },
    { action: "Completed", group: "Math practice session", time: "Yesterday" },
    { action: "Shared notes", group: "Database Systems", time: "2 days ago" },
    { action: "Hosted", group: "Physics Problem Solvers", time: "3 days ago" },
  ];

  const stats = [
    { label: "Study Sessions", value: "24", icon: Calendar },
    { label: "Groups Joined", value: "8", icon: Users },
    { label: "Total Hours", value: "48", icon: Clock },
    { label: "Badges Earned", value: "7", icon: Trophy },
  ];

  return (
    <div className="min-h-screen owl-bg">
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        <h1 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'var(--font-orbitron)' }}>My Profile</h1>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Profile Info */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center mb-6">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                      IJ
                    </AvatarFallback>
                  </Avatar>
                  <h2 className="text-2xl mb-1">Imani Johnson</h2>
                  <p className="text-muted-foreground mb-4">Computer Science Major</p>
                  <Badge variant="secondary">Junior · Class of 2026</Badge>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>ijohnson@students.kennesaw.edu</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Kennesaw State University</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Joined September 2025</span>
                  </div>
                </div>

                <div className="space-y-2 mt-6">
                  <Button className="w-full rounded-xl gradient-gold gradient-gold-hover text-primary-foreground shadow-md">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" className="w-full rounded-xl">
                    <Users className="mr-2 h-4 w-4" />
                    Find New Study Partners
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>My Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-secondary/50">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <stat.icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm">{stat.label}</span>
                    </div>
                    <span className="font-medium">{stat.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6 space-y-2">
                <Button variant="outline" className="w-full justify-start rounded-xl">
                  <Users className="mr-2 h-4 w-4" />
                  Connect with Students
                </Button>
                <Button variant="outline" className="w-full justify-start rounded-xl">
                  <BookOpen className="mr-2 h-4 w-4" />
                  My Study Resources
                </Button>
                <Button variant="outline" className="w-full justify-start rounded-xl">
                  <Star className="mr-2 h-4 w-4" />
                  Saved Groups
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="preferences" className="w-full">
              <TabsList className="rounded-xl w-full justify-start overflow-x-auto">
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
                <TabsTrigger value="courses">My Courses</TabsTrigger>
                <TabsTrigger value="badges">Badges</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>

              {/* Preferences Tab */}
              <TabsContent value="preferences" className="mt-6">
                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle>Study Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label>Preferred Study Method</Label>
                      <Select defaultValue="collaborative">
                        <SelectTrigger className="rounded-xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="collaborative">Collaborative</SelectItem>
                          <SelectItem value="visual">Visual Learning</SelectItem>
                          <SelectItem value="discussion">Discussion-based</SelectItem>
                          <SelectItem value="solo">Solo with Group Support</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Best Study Time</Label>
                      <Select defaultValue="afternoon">
                        <SelectTrigger className="rounded-xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (8AM-12PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12PM-5PM)</SelectItem>
                          <SelectItem value="evening">Evening (5PM-9PM)</SelectItem>
                          <SelectItem value="night">Night (9PM+)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Preferred Location</Label>
                      <Select defaultValue="library">
                        <SelectTrigger className="rounded-xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="library">Library</SelectItem>
                          <SelectItem value="student-center">Student Center</SelectItem>
                          <SelectItem value="virtual">Virtual Only</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Group Size Preference</Label>
                      <Select defaultValue="medium">
                        <SelectTrigger className="rounded-xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small (2-5 people)</SelectItem>
                          <SelectItem value="medium">Medium (6-10 people)</SelectItem>
                          <SelectItem value="large">Large (11+ people)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button className="w-full rounded-xl bg-primary">
                      Save Preferences
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Courses Tab */}
              <TabsContent value="courses" className="mt-6">
                <Card className="rounded-2xl">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Current Courses</CardTitle>
                      <Button size="sm" variant="outline" className="rounded-xl">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {courses.map((course) => (
                      <div
                        key={course.code}
                        className="flex items-center justify-between p-4 rounded-xl border bg-card"
                      >
                        <div>
                          <h4>{course.code}</h4>
                          <p className="text-sm text-muted-foreground">{course.name}</p>
                        </div>
                        <Badge variant="secondary">{course.credits} credits</Badge>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full rounded-xl mt-4">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Add Course
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Badges Tab */}
              <TabsContent value="badges" className="mt-6">
                <Card className="rounded-2xl shadow-lg">
                  <CardHeader>
                    <CardTitle>Achievements & Badges</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {badges.filter(b => b.earned).length} of {badges.length} earned — Keep collecting! 🦉
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {badges.map((badge) => (
                        <div
                          key={badge.id}
                          className={`p-4 rounded-xl border text-center transition-all ${
                            badge.earned
                              ? 'bg-card hover:shadow-md'
                              : 'bg-secondary/20 opacity-50'
                          }`}
                        >
                          <div className="text-4xl mb-2">{badge.icon}</div>
                          <h4 className="text-sm mb-1">{badge.name}</h4>
                          <p className="text-xs text-muted-foreground">{badge.description}</p>
                          {badge.earned && (
                            <Badge className="mt-2 bg-primary" variant="default">
                              Earned
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Activity Tab */}
              <TabsContent value="activity" className="mt-6">
                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentActivity.map((activity, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 p-4 rounded-xl border bg-card"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Award className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p>
                            <span className="font-medium">{activity.action}</span> {activity.group}
                          </p>
                          <p className="text-sm text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
