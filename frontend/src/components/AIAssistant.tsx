import { MessageCircle, X, Sparkles, FileText, Users, Calendar, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { OwlIcon } from "./OwlIcon";

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Scrappy, your AI study assistant! 🦉 I can help you find study groups, generate flashcards, summarize notes, and answer questions about your courses!",
      sender: "bot"
    }
  ]);

  const quickActions = [
    { icon: Users, label: "Find study groups", action: "suggest_groups" },
    { icon: FileText, label: "Generate flashcards", action: "flashcards" },
    { icon: FileText, label: "Summarize my notes", action: "summarize" },
    { icon: Calendar, label: "Review my schedule", action: "schedule" }
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const newUserMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user"
    };
    
    setMessages([...messages, newUserMessage]);
    setInputValue("");
    
    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "I'm analyzing your request... Based on your courses and preferences, I have some suggestions for you!",
        sender: "bot"
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickAction = (action: string, label: string) => {
    const newMessage = {
      id: messages.length + 1,
      text: label,
      sender: "user"
    };
    setMessages([...messages, newMessage]);
    
    setTimeout(() => {
      let response = "";
      switch(action) {
        case "suggest_groups":
          response = "I found 3 study groups that match your CS and Math courses! Check out 'CS Study Squad', 'Math Wizards', and 'Data Structures Deep Dive'. Would you like to see more details?";
          break;
        case "flashcards":
          response = "I can generate flashcards from your shared notes! Which topic would you like flashcards for? (e.g., SQL Joins, Calculus derivatives, etc.)";
          break;
        case "summarize":
          response = "I'll summarize your most recent notes from CS 3410 about Database Normalization. Key points: 1NF removes repeating groups, 2NF removes partial dependencies, 3NF removes transitive dependencies. Would you like a more detailed summary?";
          break;
        case "schedule":
          response = "You have 3 study sessions this week: CS 3410 today at 3 PM, Math 2345 tomorrow at 5:30 PM, and Physics on Thursday at 6 PM. You're on track with your 12-hour weekly goal!";
          break;
        default:
          response = "I'm here to help! What would you like to know?";
      }
      
      const botResponse = {
        id: messages.length + 2,
        text: response,
        sender: "bot"
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-16 w-16 rounded-full shadow-2xl gradient-gold hover:gradient-gold-hover text-primary-foreground p-0 glow-gold-hover border-2 border-primary-foreground/20"
          size="icon"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="h-7 w-7" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                className="relative"
              >
                <OwlIcon className="h-7 w-7" size={28} />
                <motion.span 
                  className="absolute -top-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50"
          >
            <Card className="w-[380px] md:w-[420px] h-[600px] shadow-2xl rounded-3xl flex flex-col overflow-hidden border-2 border-primary/20 glow-gold">
              {/* Header */}
              <div className="gradient-gold p-5 text-primary-foreground">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <OwlIcon className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold flex items-center gap-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
                      Scrappy AI
                      <Sparkles className="h-4 w-4" />
                    </h3>
                    <p className="text-xs opacity-90">Your Smart Study Assistant</p>
                  </div>
                  <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse" />
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary/10">
                <AnimatePresence>
                  {messages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                          message.sender === 'user'
                            ? 'gradient-gold text-primary-foreground ml-4'
                            : 'bg-card border shadow-sm'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {/* Quick Actions */}
                {messages.length === 1 && (
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="text-xs text-muted-foreground px-2">Quick actions:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {quickActions.map((action, index) => (
                        <motion.button
                          key={action.action}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 p-3 rounded-xl border bg-card hover:bg-secondary/50 transition-colors text-left"
                          onClick={() => handleQuickAction(action.action, action.label)}
                        >
                          <action.icon className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-xs">{action.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t bg-card">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask Scrappy anything..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSend();
                      }
                    }}
                  />
                  <Button 
                    size="icon" 
                    className="rounded-xl gradient-gold gradient-gold-hover h-11 w-11 shadow-md"
                    onClick={handleSend}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Powered by HiveU AI • Always learning to serve you better
                </p>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
