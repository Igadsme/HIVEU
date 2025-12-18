import { useState } from "react";
import { Send, Mic, Paperclip, Image, Sparkles, BookOpen, FileQuestion, Lightbulb, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { OwlLogoIcon } from "./OwlIcon";

interface Message {
  id: number;
  type: 'user' | 'ai';
  content: string;
  timestamp: string;
}

export function HiveMindPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'ai',
      content: "Hi! I'm HiveMind, your AI study assistant powered by Scrappy! 🦉 Upload a question, share your notes, or ask me anything about your coursework. How can I help you study today?",
      timestamp: "Just now"
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [stepByStep, setStepByStep] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: inputText,
      timestamp: "Just now"
    };
    
    setMessages([...messages, userMessage]);
    setInputText("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        type: 'ai',
        content: stepByStep 
          ? "Let me break this down step-by-step:\n\n**Step 1:** First, identify the key concepts in the problem.\n\n**Step 2:** Apply the relevant formula or theorem.\n\n**Step 3:** Solve systematically, showing your work.\n\n**Step 4:** Verify your answer makes sense in context.\n\nWould you like me to generate practice problems on this topic?"
          : "Here's a concise explanation: The answer involves applying the fundamental principles we discussed. The key is to understand the relationship between the variables and solve accordingly. Need more details on any part?",
        timestamp: "Just now"
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 2000);
  };

  const generateQuiz = () => {
    setIsLoading(true);
    setTimeout(() => {
      const quizMessage: Message = {
        id: messages.length + 1,
        type: 'ai',
        content: "🎯 **Practice Quiz Generated!**\n\n**Question 1:** What is the time complexity of binary search?\na) O(n)\nb) O(log n)\nc) O(n²)\nd) O(1)\n\n**Question 2:** Explain the difference between stack and queue.\n\n**Question 3:** Write pseudocode for finding the maximum element in an array.\n\nTake your time! Reply with your answers and I'll provide feedback.",
        timestamp: "Just now"
      };
      setMessages(prev => [...prev, quizMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const quickActions = [
    { icon: FileQuestion, label: "Explain Concept", color: "bg-blue-500" },
    { icon: Lightbulb, label: "Study Tips", color: "bg-yellow-500" },
    { icon: BookOpen, label: "Summarize Notes", color: "bg-green-500" },
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
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-orbitron)' }}>
              HiveMind AI
            </h1>
          </div>
          <p className="text-muted-foreground">Your intelligent study companion</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Chat Area */}
          <div className="lg:col-span-2">
            <Card className="rounded-2xl shadow-lg h-[calc(100vh-250px)] flex flex-col">
              {/* Chat Header */}
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <OwlLogoIcon className="text-primary w-10 h-10" size={40} />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                    </div>
                    <div>
                      <CardTitle className="text-lg">HiveMind Assistant</CardTitle>
                      <p className="text-xs text-muted-foreground">Online • Ready to help</p>
                    </div>
                  </div>
                  
                  {/* Step-by-step toggle */}
                  <div className="flex items-center gap-2">
                    <Switch 
                      id="step-mode" 
                      checked={stepByStep}
                      onCheckedChange={setStepByStep}
                    />
                    <Label htmlFor="step-mode" className="text-sm cursor-pointer">
                      Step-by-Step
                    </Label>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex gap-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                        {message.type === 'ai' && (
                          <Avatar className="w-8 h-8 flex-shrink-0">
                            <AvatarFallback className="bg-primary/10 text-primary">
                              <Sparkles className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <div>
                          <div
                            className={`rounded-2xl p-4 ${
                              message.type === 'user'
                                ? 'gradient-gold text-primary-foreground'
                                : 'bg-secondary'
                            }`}
                          >
                            <p className="text-sm whitespace-pre-line">{message.content}</p>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1 px-2">
                            {message.timestamp}
                          </p>
                        </div>
                        {message.type === 'user' && (
                          <Avatar className="w-8 h-8 flex-shrink-0">
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              IM
                            </AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Loading Animation */}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="flex gap-3 max-w-[80%]">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          <Sparkles className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="rounded-2xl p-4 bg-secondary">
                        <div className="flex gap-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 bg-primary rounded-full"
                              animate={{
                                y: [0, -8, 0],
                              }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: i * 0.2,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </CardContent>

              {/* Input Area */}
              <div className="border-t p-4 space-y-3">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-xl"
                  >
                    <Paperclip className="h-4 w-4 mr-2" />
                    Upload File
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-xl"
                  >
                    <Image className="h-4 w-4 mr-2" />
                    Upload Image
                  </Button>
                </div>
                
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask a question or upload your problem..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="rounded-xl flex-1"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-xl"
                  >
                    <Mic className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={handleSendMessage}
                    className="rounded-xl gradient-gold gradient-gold-hover"
                    disabled={!inputText.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    className="w-full justify-start rounded-xl hover:bg-secondary"
                  >
                    <div className={`p-1.5 ${action.color} rounded-lg mr-3`}>
                      <action.icon className="h-4 w-4 text-white" />
                    </div>
                    {action.label}
                  </Button>
                ))}
                
                <Button
                  onClick={generateQuiz}
                  className="w-full rounded-xl gradient-gold gradient-gold-hover mt-4"
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate Practice Quiz
                </Button>
              </CardContent>
            </Card>

            {/* Study Tips */}
            <Card className="rounded-2xl shadow-lg bg-gradient-to-br from-primary/10 to-background">
              <CardHeader>
                <CardTitle className="text-lg">💡 Study Tip</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Use the "Step-by-Step" mode to get detailed explanations that help you understand the process, not just the answer!
                </p>
              </CardContent>
            </Card>

            {/* Recent Topics */}
            <Card className="rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Recent Topics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {['Data Structures', 'Calculus II', 'Chemistry'].map((topic, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-secondary hover:bg-secondary/80 cursor-pointer transition-colors"
                  >
                    <p className="text-sm">{topic}</p>
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
