import { FileText, Upload, Video, Plus, Check, Circle, User, MoreVertical, Download } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

export function GroupWorkspace() {
  const groups = [
    {
      id: 1,
      name: "CS 3410 – Database Study Crew",
      course: "CS 3410",
      members: 5,
      active: true
    },
    {
      id: 2,
      name: "Calculus Conquerors",
      course: "MATH 2345",
      members: 12,
      active: false
    }
  ];

  const todos = [
    { id: 1, text: "Review SQL JOIN operations", completed: false, assignee: "You" },
    { id: 2, text: "Complete practice problems 1-10", completed: true, assignee: "Sarah K." },
    { id: 3, text: "Prepare presentation on normalization", completed: false, assignee: "Michael T." },
    { id: 4, text: "Study ER diagrams", completed: false, assignee: "Everyone" },
  ];

  const notes = [
    {
      id: 1,
      title: "Week 5 - SQL Joins Explained",
      author: "Sarah K.",
      date: "Nov 7, 2025",
      preview: "INNER JOIN returns records that have matching values in both tables..."
    },
    {
      id: 2,
      title: "Database Normalization Guide",
      author: "Michael T.",
      date: "Nov 5, 2025",
      preview: "1NF, 2NF, 3NF and BCNF - A comprehensive guide with examples..."
    },
    {
      id: 3,
      title: "Practice Exam Solutions",
      author: "You",
      date: "Nov 4, 2025",
      preview: "Solutions to midterm practice problems with detailed explanations..."
    }
  ];

  const files = [
    {
      id: 1,
      name: "Chapter5_Slides.pdf",
      size: "2.4 MB",
      uploadedBy: "Sarah K.",
      date: "Nov 7, 2025"
    },
    {
      id: 2,
      name: "SQL_Practice_Problems.docx",
      size: "145 KB",
      uploadedBy: "Michael T.",
      date: "Nov 6, 2025"
    },
    {
      id: 3,
      name: "ER_Diagram_Examples.png",
      size: "856 KB",
      uploadedBy: "Alex L.",
      date: "Nov 5, 2025"
    }
  ];

  const members = [
    { initials: "IJ", name: "Imani Johnson", status: "online", role: "Admin" },
    { initials: "SK", name: "Sarah Kim", status: "online", role: "Member" },
    { initials: "MT", name: "Michael Torres", status: "away", role: "Member" },
    { initials: "AL", name: "Alex Lee", status: "offline", role: "Member" },
    { initials: "RC", name: "Ryan Chen", status: "offline", role: "Member" },
  ];

  return (
    <div className="min-h-screen owl-bg">
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        {/* Header with Group Selector */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <select className="px-4 py-2 rounded-xl border bg-card">
              {groups.map(group => (
                <option key={group.id}>{group.name}</option>
              ))}
            </select>
            <Badge variant={groups[0].active ? "default" : "secondary"}>
              {groups[0].active ? "Active" : "Inactive"}
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl mb-2">Group Workspace</h1>
          <p className="text-muted-foreground">Collaborate, share, and succeed together</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs for different sections */}
            <Tabs defaultValue="tasks" className="w-full">
              <TabsList className="rounded-xl w-full justify-start overflow-x-auto">
                <TabsTrigger value="tasks">Tasks</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
                <TabsTrigger value="files">Files</TabsTrigger>
                <TabsTrigger value="meeting">Meeting</TabsTrigger>
              </TabsList>

              {/* Tasks Tab */}
              <TabsContent value="tasks" className="space-y-4 mt-6">
                <Card className="rounded-2xl">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Group To-Do List</CardTitle>
                        <CardDescription>Track shared tasks and assignments</CardDescription>
                      </div>
                      <Button size="sm" className="rounded-xl gradient-gold gradient-gold-hover shadow-md">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Task
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {todos.map((todo) => (
                      <div
                        key={todo.id}
                        className="flex items-start gap-3 p-3 rounded-xl border bg-card hover:shadow-sm transition-shadow"
                      >
                        <button className="mt-0.5">
                          {todo.completed ? (
                            <Check className="h-5 w-5 text-primary" />
                          ) : (
                            <Circle className="h-5 w-5 text-muted-foreground" />
                          )}
                        </button>
                        <div className="flex-1">
                          <p className={`${todo.completed ? 'line-through text-muted-foreground' : ''}`}>
                            {todo.text}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">Assigned to: {todo.assignee}</p>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Reassign</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    ))}

                    {/* Add new task input */}
                    <div className="flex gap-2 mt-4">
                      <Input placeholder="Add a new task..." className="rounded-xl" />
                      <Button size="icon" className="rounded-xl bg-primary">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Notes Tab */}
              <TabsContent value="notes" className="space-y-4 mt-6">
                <Card className="rounded-2xl">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Shared Notes</CardTitle>
                        <CardDescription>Collaborative study notes</CardDescription>
                      </div>
                      <Button size="sm" className="rounded-xl gradient-gold gradient-gold-hover shadow-md">
                        <Plus className="mr-2 h-4 w-4" />
                        New Note
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {notes.map((note) => (
                      <div
                        key={note.id}
                        className="p-4 rounded-xl border bg-card hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-primary" />
                            <h4>{note.title}</h4>
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Download</DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {note.preview}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>By {note.author}</span>
                          <span>•</span>
                          <span>{note.date}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Note Editor */}
                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle>Quick Note</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Input placeholder="Note title..." className="rounded-xl" />
                    <Textarea 
                      placeholder="Start typing your notes here..."
                      rows={6}
                      className="rounded-xl"
                    />
                    <Button className="rounded-xl bg-primary">Save Note</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Files Tab */}
              <TabsContent value="files" className="space-y-4 mt-6">
                <Card className="rounded-2xl">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Shared Files</CardTitle>
                        <CardDescription>PDFs, slides, and documents</CardDescription>
                      </div>
                      <Button size="sm" className="rounded-xl gradient-gold gradient-gold-hover shadow-md">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {files.map((file) => (
                      <div
                        key={file.id}
                        className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:shadow-sm transition-shadow"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="truncate">{file.name}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <span>{file.size}</span>
                            <span>•</span>
                            <span>{file.uploadedBy}</span>
                            <span>•</span>
                            <span>{file.date}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="rounded-xl">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}

                    {/* Upload Area */}
                    <div className="border-2 border-dashed rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Drag and drop files here or click to browse
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Meeting Tab */}
              <TabsContent value="meeting" className="space-y-4 mt-6">
                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle>Video Meeting</CardTitle>
                    <CardDescription>Join or start a study session</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video bg-secondary/20 rounded-xl flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                          <Video className="h-10 w-10 text-primary" />
                        </div>
                        <div>
                          <h3>No active meeting</h3>
                          <p className="text-muted-foreground text-sm">
                            Start a video call to collaborate with your group
                          </p>
                        </div>
                        <div className="flex gap-2 justify-center">
                          <Button className="rounded-xl gradient-gold gradient-gold-hover shadow-lg">
                            <Video className="mr-2 h-4 w-4" />
                            Start Meeting
                          </Button>
                          <Button variant="outline" className="rounded-xl hover:bg-secondary">
                            Join with Link
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Meeting Link */}
                    <div className="p-4 bg-secondary/50 rounded-xl">
                      <p className="text-sm mb-2">Share meeting link:</p>
                      <div className="flex gap-2">
                        <Input
                          value="https://hiveu.app/meet/cs3410-study"
                          readOnly
                          className="rounded-xl bg-background"
                        />
                        <Button variant="outline" className="rounded-xl">Copy</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar - Members */}
          <div className="space-y-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Members ({members.length})</CardTitle>
                  <Button size="sm" variant="outline" className="rounded-xl">
                    <Plus className="mr-2 h-4 w-4" />
                    Add
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {members.map((member, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors">
                    <div className="relative">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background ${
                        member.status === 'online' ? 'bg-green-500' :
                        member.status === 'away' ? 'bg-yellow-500' :
                        'bg-gray-400'
                      }`}></span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm truncate">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start rounded-xl">
                  <Video className="mr-2 h-4 w-4" />
                  Schedule Meeting
                </Button>
                <Button variant="outline" className="w-full justify-start rounded-xl">
                  <User className="mr-2 h-4 w-4" />
                  Invite Members
                </Button>
                <Button variant="outline" className="w-full justify-start rounded-xl">
                  <FileText className="mr-2 h-4 w-4" />
                  Export Notes
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
