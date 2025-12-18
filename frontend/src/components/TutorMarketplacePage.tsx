import { useState } from "react";
import { Search, Filter, Star, Video, DollarSign, Clock, BookOpen, Award, Calendar, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface Tutor {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  reviews: number;
  subjects: string[];
  rate: number;
  availableNow: boolean;
  bio: string;
  totalSessions: number;
  responseTime: string;
  verified: boolean;
}

export function TutorMarketplacePage() {
  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  const tutors: Tutor[] = [
    {
      id: 1,
      name: "Sarah Chen",
      avatar: "SC",
      rating: 4.9,
      reviews: 127,
      subjects: ["CS 3410", "Data Structures", "Algorithms"],
      rate: 25,
      availableNow: true,
      bio: "PhD student in Computer Science with 5+ years of tutoring experience. I specialize in making complex algorithms easy to understand!",
      totalSessions: 340,
      responseTime: "~2 min",
      verified: true
    },
    {
      id: 2,
      name: "Marcus Johnson",
      avatar: "MJ",
      rating: 4.8,
      reviews: 98,
      subjects: ["Calculus II", "Linear Algebra", "Statistics"],
      rate: 30,
      availableNow: false,
      bio: "Mathematics professor's assistant. Passionate about helping students overcome math anxiety and build confidence.",
      totalSessions: 256,
      responseTime: "~5 min",
      verified: true
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      avatar: "ER",
      rating: 5.0,
      reviews: 84,
      subjects: ["Chemistry", "Organic Chemistry", "Biochemistry"],
      rate: 28,
      availableNow: true,
      bio: "Chemistry graduate student. I love making chemistry fun and relatable through real-world examples!",
      totalSessions: 189,
      responseTime: "~3 min",
      verified: true
    },
    {
      id: 4,
      name: "David Park",
      avatar: "DP",
      rating: 4.7,
      reviews: 156,
      subjects: ["Physics I", "Physics II", "Engineering"],
      rate: 27,
      availableNow: true,
      bio: "Engineering PhD candidate with a knack for breaking down complex physics concepts into simple terms.",
      totalSessions: 412,
      responseTime: "~4 min",
      verified: true
    },
    {
      id: 5,
      name: "Jessica Williams",
      avatar: "JW",
      rating: 4.9,
      reviews: 113,
      subjects: ["English", "Literature", "Writing"],
      rate: 22,
      availableNow: false,
      bio: "MFA in Creative Writing. I help students improve their writing skills and literary analysis abilities.",
      totalSessions: 278,
      responseTime: "~6 min",
      verified: true
    },
    {
      id: 6,
      name: "Ryan Thompson",
      avatar: "RT",
      rating: 4.6,
      reviews: 71,
      subjects: ["Economics", "Finance", "Accounting"],
      rate: 26,
      availableNow: true,
      bio: "Finance professional turned educator. Making economics accessible and interesting for all students!",
      totalSessions: 145,
      responseTime: "~5 min",
      verified: false
    }
  ];

  const handleBookSession = (tutor: Tutor) => {
    setSelectedTutor(tutor);
    setBookingOpen(true);
  };

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
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-orbitron)' }}>
              Peer Tutors
            </h1>
          </div>
          <p className="text-muted-foreground">Connect with top student tutors at KSU</p>
        </motion.div>

        {/* Search and Filters */}
        <Card className="rounded-2xl mb-6 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by subject, course, or tutor name..."
                  className="pl-10 rounded-xl"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[140px] rounded-xl">
                    <SelectValue placeholder="Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Subjects</SelectItem>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="math">Mathematics</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="all">
                  <SelectTrigger className="w-[140px] rounded-xl">
                    <SelectValue placeholder="Rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ratings</SelectItem>
                    <SelectItem value="5">5 Stars</SelectItem>
                    <SelectItem value="4">4+ Stars</SelectItem>
                    <SelectItem value="3">3+ Stars</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" className="rounded-xl">
                  <Filter className="h-4 w-4 mr-2" />
                  Available Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-muted-foreground">{tutors.length} tutors available</p>
        </div>

        {/* Tutors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.map((tutor) => (
            <motion.div
              key={tutor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: tutor.id * 0.1 }}
            >
              <Card className="rounded-2xl hover:shadow-xl transition-all hover:scale-[1.02] h-full flex flex-col">
                <CardContent className="p-6 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="bg-primary/10 text-primary text-lg">
                            {tutor.avatar}
                          </AvatarFallback>
                        </Avatar>
                        {tutor.availableNow && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg">{tutor.name}</h3>
                          {tutor.verified && (
                            <CheckCircle className="h-4 w-4 text-blue-500" />
                          )}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                          <span className="text-sm">{tutor.rating}</span>
                          <span className="text-xs text-muted-foreground">
                            ({tutor.reviews})
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subjects */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tutor.subjects.map((subject, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                    {tutor.bio}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="h-4 w-4" />
                      <span>{tutor.totalSessions} sessions</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{tutor.responseTime}</span>
                    </div>
                  </div>

                  {/* Rate & Book Button */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <span className="text-2xl">{tutor.rate}</span>
                      <span className="text-sm text-muted-foreground">/hour</span>
                    </div>
                    <Button
                      onClick={() => handleBookSession(tutor)}
                      className="rounded-xl gradient-gold gradient-gold-hover"
                      disabled={!tutor.availableNow}
                    >
                      {tutor.availableNow ? 'Book Now' : 'Schedule'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Booking Modal */}
        <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
          <DialogContent className="rounded-2xl max-w-md">
            <DialogHeader>
              <DialogTitle>Book a Session with {selectedTutor?.name}</DialogTitle>
              <DialogDescription>
                Schedule your tutoring session and we'll send you a confirmation
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 mt-4">
              {/* Tutor Info */}
              <div className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {selectedTutor?.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-semibold">{selectedTutor?.name}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>${selectedTutor?.rate}/hour</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                      {selectedTutor?.rating}
                    </div>
                  </div>
                </div>
              </div>

              {/* Session Details */}
              <div className="space-y-3">
                <div>
                  <Label>Select Subject</Label>
                  <Select>
                    <SelectTrigger className="rounded-xl mt-1">
                      <SelectValue placeholder="Choose a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedTutor?.subjects.map((subject, idx) => (
                        <SelectItem key={idx} value={subject}>
                          {subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Preferred Date & Time</Label>
                  <Input type="datetime-local" className="rounded-xl mt-1" />
                </div>

                <div>
                  <Label>Session Duration</Label>
                  <Select defaultValue="1">
                    <SelectTrigger className="rounded-xl mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0.5">30 minutes - ${(selectedTutor?.rate || 0) / 2}</SelectItem>
                      <SelectItem value="1">1 hour - ${selectedTutor?.rate}</SelectItem>
                      <SelectItem value="1.5">1.5 hours - ${(selectedTutor?.rate || 0) * 1.5}</SelectItem>
                      <SelectItem value="2">2 hours - ${(selectedTutor?.rate || 0) * 2}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Additional Notes (Optional)</Label>
                  <Textarea 
                    placeholder="Let the tutor know what you'd like to focus on..."
                    className="rounded-xl mt-1"
                    rows={3}
                  />
                </div>
              </div>

              {/* Payment Info */}
              <div className="p-4 bg-gradient-to-br from-primary/10 to-background rounded-xl border border-primary/20">
                <div className="flex items-start gap-2">
                  <Award className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">Use HivePoints for Discounts!</p>
                    <p className="text-xs text-muted-foreground">
                      Redeem 100 HivePoints for 10% off this session
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  className="flex-1 rounded-xl"
                  onClick={() => setBookingOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="flex-1 rounded-xl gradient-gold gradient-gold-hover"
                  onClick={() => {
                    setBookingOpen(false);
                    // Show success toast or confirmation
                  }}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Confirm Booking
                </Button>
              </div>

              <p className="text-xs text-center text-muted-foreground">
                Powered by Stripe • Secure payment processing
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
