import { useState } from "react";
import { Upload, FileText, FileImage, FileCode, Download, Eye, Star, Filter, Search, Plus, Award } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface StudyMaterial {
  id: number;
  title: string;
  type: 'pdf' | 'notes' | 'quiz' | 'image';
  course: string;
  professor: string;
  semester: string;
  uploadedBy: string;
  uploadDate: string;
  downloads: number;
  rating: number;
  size: string;
  preview?: string;
}

export function StudyVaultPage() {
  const [uploadOpen, setUploadOpen] = useState(false);

  const materials: StudyMaterial[] = [
    {
      id: 1,
      title: "Database Systems - Chapter 5 Notes",
      type: 'pdf',
      course: "CS 3410",
      professor: "Dr. Smith",
      semester: "Fall 2024",
      uploadedBy: "Sarah M.",
      uploadDate: "2 days ago",
      downloads: 47,
      rating: 4.8,
      size: "2.4 MB",
      preview: "Comprehensive notes covering relational database concepts..."
    },
    {
      id: 2,
      title: "Calculus II Formula Sheet",
      type: 'notes',
      course: "MATH 2345",
      professor: "Prof. Johnson",
      semester: "Fall 2024",
      uploadedBy: "David K.",
      uploadDate: "5 days ago",
      downloads: 89,
      rating: 5.0,
      size: "856 KB",
      preview: "All essential formulas for integration and series..."
    },
    {
      id: 3,
      title: "Data Structures Practice Quiz",
      type: 'quiz',
      course: "CS 3305",
      professor: "Dr. Williams",
      semester: "Fall 2024",
      uploadedBy: "Emily R.",
      uploadDate: "1 week ago",
      downloads: 62,
      rating: 4.6,
      size: "124 KB",
      preview: "20 questions covering arrays, linked lists, and trees..."
    },
    {
      id: 4,
      title: "Chemistry Lab Report Example",
      type: 'pdf',
      course: "CHEM 1211L",
      professor: "Dr. Brown",
      semester: "Fall 2024",
      uploadedBy: "Marcus J.",
      uploadDate: "3 days ago",
      downloads: 34,
      rating: 4.9,
      size: "1.8 MB",
      preview: "Well-formatted lab report with all required sections..."
    },
    {
      id: 5,
      title: "Physics Problem Solutions",
      type: 'notes',
      course: "PHYS 2211",
      professor: "Prof. Davis",
      semester: "Fall 2024",
      uploadedBy: "Jessica W.",
      uploadDate: "1 day ago",
      downloads: 56,
      rating: 4.7,
      size: "3.1 MB",
      preview: "Step-by-step solutions to challenging physics problems..."
    },
    {
      id: 6,
      title: "Algorithm Flowcharts",
      type: 'image',
      course: "CS 3305",
      professor: "Dr. Williams",
      semester: "Fall 2024",
      uploadedBy: "Ryan T.",
      uploadDate: "4 days ago",
      downloads: 41,
      rating: 4.5,
      size: "672 KB",
      preview: "Visual flowcharts for common algorithms..."
    }
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="h-8 w-8" />;
      case 'image':
        return <FileImage className="h-8 w-8" />;
      case 'quiz':
        return <FileCode className="h-8 w-8" />;
      default:
        return <FileText className="h-8 w-8" />;
    }
  };

  const getFileColor = (type: string) => {
    switch (type) {
      case 'pdf':
        return 'bg-red-500';
      case 'image':
        return 'bg-blue-500';
      case 'quiz':
        return 'bg-green-500';
      default:
        return 'bg-purple-500';
    }
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-xl">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-orbitron)' }}>
                  Study Vault
                </h1>
              </div>
              <p className="text-muted-foreground">Your digital library of study materials</p>
            </div>
            
            <Dialog open={uploadOpen} onOpenChange={setUploadOpen}>
              <DialogTrigger asChild>
                <Button className="rounded-2xl gradient-gold gradient-gold-hover shadow-lg">
                  <Upload className="mr-2 h-5 w-5" />
                  Upload Notes
                </Button>
              </DialogTrigger>
              <DialogContent className="rounded-2xl max-w-md">
                <DialogHeader>
                  <DialogTitle>Upload Study Material</DialogTitle>
                  <DialogDescription>
                    Share your notes and earn HivePoints!
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4 mt-4">
                  {/* Upload Area */}
                  <div className="border-2 border-dashed border-primary/30 rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload className="h-12 w-12 text-primary mx-auto mb-3" />
                    <p className="font-semibold mb-1">Click to upload or drag and drop</p>
                    <p className="text-sm text-muted-foreground">PDF, DOC, JPG, PNG up to 10MB</p>
                  </div>

                  {/* Details */}
                  <div className="space-y-3">
                    <div>
                      <Label>Title</Label>
                      <Input placeholder="e.g., Chapter 5 Study Notes" className="rounded-xl mt-1" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label>Course</Label>
                        <Input placeholder="e.g., CS 3410" className="rounded-xl mt-1" />
                      </div>
                      <div>
                        <Label>Type</Label>
                        <Select defaultValue="notes">
                          <SelectTrigger className="rounded-xl mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="notes">Notes</SelectItem>
                            <SelectItem value="pdf">PDF</SelectItem>
                            <SelectItem value="quiz">Quiz</SelectItem>
                            <SelectItem value="image">Image</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label>Professor</Label>
                      <Input placeholder="e.g., Dr. Smith" className="rounded-xl mt-1" />
                    </div>

                    <div>
                      <Label>Description (Optional)</Label>
                      <Textarea 
                        placeholder="Brief description of the content..."
                        className="rounded-xl mt-1"
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Reward Info */}
                  <div className="p-4 bg-gradient-to-br from-primary/10 to-background rounded-xl border border-primary/20">
                    <div className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold">Earn HivePoints!</p>
                        <p className="text-xs text-muted-foreground">
                          +50 points for uploading • +5 points per download
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      className="flex-1 rounded-xl"
                      onClick={() => setUploadOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="flex-1 rounded-xl gradient-gold gradient-gold-hover"
                      onClick={() => {
                        setUploadOpen(false);
                        // Handle upload
                      }}
                    >
                      Upload
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <Card className="rounded-2xl mb-6 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search materials by title, course, or professor..."
                  className="pl-10 rounded-xl"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[140px] rounded-xl">
                    <SelectValue placeholder="Course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Courses</SelectItem>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="math">Mathematics</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="all">
                  <SelectTrigger className="w-[140px] rounded-xl">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="pdf">PDFs</SelectItem>
                    <SelectItem value="notes">Notes</SelectItem>
                    <SelectItem value="quiz">Quizzes</SelectItem>
                    <SelectItem value="image">Images</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="recent">
                  <SelectTrigger className="w-[140px] rounded-xl">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card className="rounded-xl">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">{materials.length}</p>
              <p className="text-sm text-muted-foreground">Materials</p>
            </CardContent>
          </Card>
          <Card className="rounded-xl">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">329</p>
              <p className="text-sm text-muted-foreground">Downloads</p>
            </CardContent>
          </Card>
          <Card className="rounded-xl">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">4.8</p>
              <p className="text-sm text-muted-foreground">Avg Rating</p>
            </CardContent>
          </Card>
          <Card className="rounded-xl">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">12</p>
              <p className="text-sm text-muted-foreground">Courses</p>
            </CardContent>
          </Card>
        </div>

        {/* Materials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material) => (
            <motion.div
              key={material.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: material.id * 0.05 }}
            >
              <Card className="rounded-2xl hover:shadow-xl transition-all hover:scale-[1.02] h-full flex flex-col">
                <CardContent className="p-6 flex-1 flex flex-col">
                  {/* File Icon */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 ${getFileColor(material.type)} rounded-xl text-white flex-shrink-0`}>
                      {getFileIcon(material.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg mb-1 line-clamp-2">{material.title}</h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="secondary" className="text-xs">
                          {material.course}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {material.type.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 mb-4 text-sm text-muted-foreground flex-1">
                    <p><strong>Professor:</strong> {material.professor}</p>
                    <p><strong>Semester:</strong> {material.semester}</p>
                    <p className="line-clamp-2">{material.preview}</p>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground pb-4 mb-4 border-b">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        <span>{material.downloads}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        <span>{material.rating}</span>
                      </div>
                    </div>
                    <span>{material.size}</span>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-6 h-6">
                        <AvatarFallback className="bg-primary/10 text-primary text-xs">
                          {material.uploadedBy.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-xs text-muted-foreground">{material.uploadedBy}</p>
                        <p className="text-xs text-muted-foreground">{material.uploadDate}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="rounded-xl h-9 w-9">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button className="rounded-xl gradient-gold gradient-gold-hover h-9 px-3">
                        <Download className="h-4 w-4 mr-1" />
                        Get
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
