import { Search, Filter, MapPin, Video, Home, Calendar as CalIcon, Clock, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Slider } from "./ui/slider";
import { motion } from "motion/react";

export function StudyGroupFinder() {
  const studyGroups = [
    { id: 1, name: "CS 3410 – Database Study Crew", course: "Database Systems", courseCode: "CS 3410", schedule: "T/Th 3PM", members: 5, maxMembers: 8, type: "Hybrid", studyStyle: "Collaborative", location: "Library Study Room 204", description: "Focus on SQL queries and database design. We meet twice a week and work on practice problems together.", avatars: ["JD", "SK", "MT", "AL", "RC"] },
    { id: 2, name: "Calculus Conquerors", course: "Calculus II", courseCode: "MATH 2345", schedule: "M/W/F 5PM", members: 12, maxMembers: 15, type: "Virtual", studyStyle: "Visual", location: "Zoom", description: "Interactive problem-solving sessions with whiteboard explanations. Great for visual learners!", avatars: ["DW", "KL", "NP", "BH"] },
    { id: 3, name: "Physics Problem Solvers", course: "Physics I", courseCode: "PHYS 2211", schedule: "T/Th 6PM", members: 8, maxMembers: 10, type: "In-Person", studyStyle: "Practice-focused", location: "Engineering Building 102", description: "Work through difficult physics problems together. Bring your homework questions!", avatars: ["TY", "HG", "QZ", "LM"] },
    { id: 4, name: "Data Structures Deep Dive", course: "Data Structures", courseCode: "CS 3305", schedule: "W/F 4PM", members: 6, maxMembers: 8, type: "Hybrid", studyStyle: "Coding", location: "Student Center 301", description: "Code together, review algorithms, and prepare for exams. All skill levels welcome!", avatars: ["MW", "JK", "FP", "VS"] },
    { id: 5, name: "Chemistry Lab Group", course: "Chemistry I Lab", courseCode: "CHEM 1211L", schedule: "Th 2PM", members: 4, maxMembers: 6, type: "In-Person", studyStyle: "Hands-on", location: "Science Building Lab 3", description: "Pre-lab prep and post-lab analysis. Help each other understand lab reports.", avatars: ["RB", "CN", "DP"] },
    { id: 6, name: "English Lit Discussion", course: "World Literature", courseCode: "ENG 2130", schedule: "M 7PM", members: 7, maxMembers: 10, type: "Virtual", studyStyle: "Discussion", location: "Discord", description: "Deep dive into course readings and prepare for essays together.", avatars: ["SM", "TL", "KR", "AW"] }
  ];

  return (
    <div className="min-h-screen owl-bg">
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl mb-2" style={{ fontFamily: 'var(--font-orbitron)' }}>Find Your Study Group</h1>
          <p className="text-muted-foreground">Discover and join groups that match your schedule and learning style</p>
        </div>

        <Card className="rounded-2xl mb-6 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by course name, code, or keyword..." className="pl-10 rounded-xl" />
              </div>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[140px] rounded-xl">
                    <SelectValue placeholder="Study Style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Styles</SelectItem>
                    <SelectItem value="collaborative">Collaborative</SelectItem>
                    <SelectItem value="visual">Visual</SelectItem>
                    <SelectItem value="solo">Solo Focus</SelectItem>
                    <SelectItem value="discussion">Discussion</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="all">
                  <SelectTrigger className="w-[140px] rounded-xl">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="virtual">Virtual</SelectItem>
                    <SelectItem value="in-person">In-Person</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-xl">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Advanced Filters</SheetTitle>
                    </SheetHeader>
                    <div className="space-y-6 mt-6">
                      <div className="space-y-2">
                        <Label>Time Availability</Label>
                        <Select>
                          <SelectTrigger className="rounded-xl">
                            <SelectValue placeholder="Any time" />
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
                        <Label>Days of Week</Label>
                        <div className="grid grid-cols-4 gap-2">
                          {['M', 'T', 'W', 'Th', 'F', 'Sa', 'Su'].map((day) => (
                            <Button key={day} variant="outline" size="sm" className="rounded-lg">{day}</Button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Group Size (Max Members)</Label>
                        <Slider defaultValue={[10]} max={20} step={1} className="mt-2" />
                        <p className="text-sm text-muted-foreground">Up to 10 members</p>
                      </div>
                      <div className="space-y-2">
                        <Label>Distance (for in-person)</Label>
                        <Slider defaultValue={[5]} max={10} step={1} className="mt-2" />
                        <p className="text-sm text-muted-foreground">Within 5 miles</p>
                      </div>
                      <Button className="w-full rounded-xl gradient-gold gradient-gold-hover shadow-md">Apply Filters</Button>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="list" className="mb-6">
          <TabsList className="rounded-xl">
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="map">Map View</TabsTrigger>
          </TabsList>

          <TabsContent value="list" className="mt-6">
            <div className="mb-4">
              <p className="text-muted-foreground">{studyGroups.length} groups found</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {studyGroups.map((group) => (
                <Card key={group.id} className="rounded-2xl hover:shadow-xl transition-all hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">{group.courseCode}</Badge>
                          <Badge className={group.type === 'Virtual' ? 'bg-blue-500' : group.type === 'In-Person' ? 'bg-green-500' : 'bg-purple-500'}>
                            {group.type === 'Virtual' ? <Video className="h-3 w-3 mr-1" /> : group.type === 'In-Person' ? <Home className="h-3 w-3 mr-1" /> : <CalIcon className="h-3 w-3 mr-1" />}
                            {group.type}
                          </Badge>
                        </div>
                        <h3 className="mb-1">{group.name}</h3>
                        <p className="text-sm text-muted-foreground">{group.course}</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {group.schedule}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {group.members}/{group.maxMembers}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">{group.location}</span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{group.description}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">{group.studyStyle}</Badge>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex -space-x-2">
                        {group.avatars.map((initials, idx) => (
                          <Avatar key={idx} className="w-8 h-8 border-2 border-background">
                            <AvatarFallback className="bg-primary/10 text-primary text-xs">{initials}</AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">+{group.members - group.avatars.length} more</span>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 rounded-xl gradient-gold gradient-gold-hover shadow-md">Join Group</Button>
                      <Button variant="outline" className="rounded-xl hover:bg-secondary">Info</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="map" className="mt-6">
            <Card className="rounded-2xl h-[600px] overflow-hidden">
              <CardContent className="p-0 h-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-secondary/10">
                  <svg className="w-full h-full opacity-20" viewBox="0 0 800 600" fill="none">
                    <path d="M100 100 L700 100 L700 500 L100 500 Z" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M400 100 L400 500" stroke="currentColor" strokeWidth="1" />
                    <path d="M100 300 L700 300" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>

                {[
                  { x: "25%", y: "30%", group: "CS Study Squad", time: "Today 3PM" },
                  { x: "45%", y: "45%", group: "Math Wizards", time: "Tomorrow 5:30PM" },
                  { x: "65%", y: "35%", group: "Physics Group", time: "Thu 6PM" },
                  { x: "35%", y: "60%", group: "Data Structures", time: "Wed 4PM" }
                ].map((pin, index) => (
                  <motion.div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{ left: pin.x, top: pin.y }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.2, type: "spring" }}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center shadow-2xl glow-gold-hover">
                      <MapPin className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="bg-card border rounded-xl p-3 shadow-xl whitespace-nowrap">
                        <p className="font-semibold text-sm">{pin.group}</p>
                        <p className="text-xs text-muted-foreground">{pin.time}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 border shadow-lg">
                  <h4 className="text-sm font-semibold mb-2">KSU Campus Map</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 gradient-gold rounded-full" />
                      <span>Active Study Spots</span>
                    </div>
                    <p className="text-muted-foreground">Hover over pins for details</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
