import { Search, Filter, BookOpen, DollarSign, Users, Clock, Star, Plus, Tag } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { motion } from "motion/react";

export function MarketplacePage() {
  const listings = [
    {
      id: 1,
      title: "Database Systems Textbook (5th Edition)",
      course: "CS 3410",
      price: 45,
      condition: "Like New",
      seller: "Sarah K.",
      rating: 4.9,
      type: "textbook",
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Complete Calculus II Notes & Study Guide",
      course: "MATH 2345",
      price: 0,
      condition: "Digital",
      seller: "David M.",
      rating: 5.0,
      type: "notes",
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "1-on-1 Physics Tutoring Sessions",
      course: "PHYS 2211",
      price: 25,
      condition: "Per Hour",
      seller: "Emily J.",
      rating: 4.8,
      type: "tutoring",
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "Engineering Mechanics Textbook Bundle",
      course: "ENGR 2020",
      price: 60,
      condition: "Good",
      seller: "Michael T.",
      rating: 4.7,
      type: "textbook",
      posted: "1 day ago"
    },
    {
      id: 5,
      title: "Complete Data Structures Practice Problems",
      course: "CS 3305",
      price: 0,
      condition: "PDF",
      seller: "Alex L.",
      rating: 5.0,
      type: "notes",
      posted: "5 days ago"
    },
    {
      id: 6,
      title: "Chemistry Lab Equipment Kit",
      course: "CHEM 1211L",
      price: 30,
      condition: "Excellent",
      seller: "Ryan C.",
      rating: 4.6,
      type: "supplies",
      posted: "1 week ago"
    }
  ];

  const categories = [
    { name: "All Items", count: listings.length, icon: Tag },
    { name: "Textbooks", count: 2, icon: BookOpen },
    { name: "Notes & Study Guides", count: 2, icon: BookOpen },
    { name: "Tutoring Services", count: 1, icon: Users },
    { name: "Supplies", count: 1, icon: BookOpen }
  ];

  return (
    <div className="min-h-screen owl-bg">
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl mb-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
                Marketplace
              </h1>
              <p className="text-muted-foreground">
                Buy, sell, and exchange study materials with fellow students
              </p>
            </div>
            <Button className="rounded-2xl gradient-gold gradient-gold-hover shadow-lg glow-gold-hover" size="lg">
              <Plus className="mr-2 h-5 w-5" />
              Create Listing
            </Button>
          </div>

          {/* Search and Filters */}
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search for textbooks, notes, tutoring..."
                    className="pl-10 rounded-xl"
                  />
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[140px] rounded-xl">
                      <SelectValue placeholder="Course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Courses</SelectItem>
                      <SelectItem value="cs">Computer Science</SelectItem>
                      <SelectItem value="math">Mathematics</SelectItem>
                      <SelectItem value="eng">Engineering</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select defaultValue="all">
                    <SelectTrigger className="w-[140px] rounded-xl">
                      <SelectValue placeholder="Price" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      <SelectItem value="free">Free</SelectItem>
                      <SelectItem value="under25">Under $25</SelectItem>
                      <SelectItem value="under50">Under $50</SelectItem>
                      <SelectItem value="over50">$50+</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button variant="outline" size="icon" className="rounded-xl">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar - Categories */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category, index) => (
                  <motion.button
                    key={category.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-secondary/50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-2">
                      <category.icon className="h-4 w-4 text-primary" />
                      <span className="text-sm">{category.name}</span>
                    </div>
                    <Badge variant="secondary">{category.count}</Badge>
                  </motion.button>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="rounded-2xl mt-6">
              <CardHeader>
                <CardTitle>Marketplace Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-primary/10 rounded-xl">
                  <div className="text-3xl mb-1" style={{ fontFamily: 'var(--font-poppins)' }}>
                    247
                  </div>
                  <p className="text-sm text-muted-foreground">Active Listings</p>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-xl">
                  <div className="text-3xl mb-1" style={{ fontFamily: 'var(--font-poppins)' }}>
                    $1.2K
                  </div>
                  <p className="text-sm text-muted-foreground">Saved by Students</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content - Listings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="rounded-xl mb-6">
                <TabsTrigger value="all">All Items</TabsTrigger>
                <TabsTrigger value="free">Free Resources</TabsTrigger>
                <TabsTrigger value="selling">For Sale</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="grid md:grid-cols-2 gap-6">
                  {listings.map((listing, index) => (
                    <motion.div
                      key={listing.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <Card className="rounded-2xl hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer">
                        <CardContent className="p-6">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <Badge variant="secondary" className="mb-2">
                                {listing.course}
                              </Badge>
                              <h3 className="mb-2 line-clamp-2">{listing.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                Condition: {listing.condition}
                              </p>
                            </div>
                          </div>

                          {/* Price */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              {listing.price === 0 ? (
                                <Badge className="bg-green-500">FREE</Badge>
                              ) : (
                                <div className="flex items-center gap-1">
                                  <DollarSign className="h-5 w-5 text-primary" />
                                  <span className="text-2xl" style={{ fontFamily: 'var(--font-poppins)' }}>
                                    {listing.price}
                                  </span>
                                </div>
                              )}
                            </div>
                            <Badge
                              variant="outline"
                              className={
                                listing.type === "textbook"
                                  ? "border-blue-500 text-blue-500"
                                  : listing.type === "notes"
                                  ? "border-green-500 text-green-500"
                                  : listing.type === "tutoring"
                                  ? "border-purple-500 text-purple-500"
                                  : "border-orange-500 text-orange-500"
                              }
                            >
                              {listing.type}
                            </Badge>
                          </div>

                          {/* Seller Info */}
                          <div className="flex items-center justify-between pt-4 border-t">
                            <div className="flex items-center gap-2">
                              <Avatar className="w-8 h-8">
                                <AvatarFallback className="bg-primary/10 text-primary text-xs">
                                  {listing.seller
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm">{listing.seller}</p>
                                <div className="flex items-center gap-1">
                                  <Star className="h-3 w-3 fill-primary text-primary" />
                                  <span className="text-xs">{listing.rating}</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-muted-foreground flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {listing.posted}
                              </p>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-2 mt-4">
                            <Button className="flex-1 rounded-xl gradient-gold gradient-gold-hover shadow-md" size="sm">
                              {listing.price === 0 ? "Download" : listing.type === "tutoring" ? "Book Session" : "Buy Now"}
                            </Button>
                            <Button variant="outline" className="rounded-xl hover:bg-secondary" size="sm">
                              Details
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="free">
                <div className="text-center py-12">
                  <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="mb-2">Free Resources</h3>
                  <p className="text-muted-foreground">
                    Browse free study materials shared by students
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="selling">
                <div className="text-center py-12">
                  <DollarSign className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="mb-2">Items For Sale</h3>
                  <p className="text-muted-foreground">
                    Textbooks and supplies available for purchase
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="services">
                <div className="text-center py-12">
                  <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="mb-2">Tutoring Services</h3>
                  <p className="text-muted-foreground">
                    Find peer tutors for your courses
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
