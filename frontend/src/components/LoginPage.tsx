import { Mail, ArrowRight, Users, Shield, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { OwlLogoIcon, OwlIcon } from "./CoreUI";
import { motion } from "motion/react";
import { useState } from "react";
import { signup, login } from "../api";
import { useAuth } from "../store";
import { toast } from "sonner";

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setAuth } = useAuth();

  const handleSignIn = async () => {
    if (!signinEmail || !signinPassword) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true);
    try {
      const result = await login(signinEmail, signinPassword);
      setAuth(result.token, result.user.id);
      toast.success("Welcome back!");
      onLogin();
    } catch (error: any) {
      toast.error(error.response?.data?.detail || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async () => {
    if (!signupName || !signupEmail || !signupPassword || !signupConfirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }
    if (signupPassword !== signupConfirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setLoading(true);
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/5a113d7d-86fc-4902-bcc8-994e001f59ce',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LoginPage.tsx:47',message:'handleSignUp called',data:{email:signupEmail,name:signupName},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{}); // #endregion
    try {
      const user = await signup({
        email: signupEmail,
        name: signupName,
        courses: [],
        availability: [],
        study_styles: [],
        mode: "hybrid"
      });
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/5a113d7d-86fc-4902-bcc8-994e001f59ce',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LoginPage.tsx:66',message:'signup success in component',data:{userId:user.id},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{}); // #endregion
      setAuth("mock-token", user.id);
      toast.success("Account created successfully!");
      onLogin();
    } catch (error: any) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/5a113d7d-86fc-4902-bcc8-994e001f59ce',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LoginPage.tsx:70',message:'signup error in component',data:{error:error.message,response:error.response?.data,status:error.response?.status},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{}); // #endregion
      toast.error(error.response?.data?.detail || error.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex owl-bg">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 gradient-gold p-12 items-center justify-center relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        <div className="relative z-10 max-w-lg">
          <motion.img
            src="https://images.unsplash.com/photo-1625111380820-9a371d413cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzYyNjM0Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Students studying together"
            className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <OwlIcon className="text-ksu-black" size={32} />
              <h2 className="text-3xl text-ksu-black" style={{ fontFamily: 'var(--font-orbitron)' }}>
                Study Smarter, Together
              </h2>
            </div>
            <p className="text-ksu-black/80">
              Join thousands of KSU students collaborating and succeeding
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Badge className="bg-white/20 text-ksu-black border-ksu-black/20">
                <GraduationCap className="h-3 w-3 mr-1" />
                Verified KSU Students Only
              </Badge>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Login/Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Logo for mobile */}
          <motion.div 
            className="text-center lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <OwlLogoIcon className="text-primary" size={48} />
              <div>
                <h1 className="text-2xl" style={{ fontFamily: 'var(--font-orbitron)' }}>HiveU</h1>
                <p className="text-xs text-muted-foreground -mt-1">StudyMatch</p>
              </div>
            </div>
          </motion.div>

          {/* Welcome Text */}
          <motion.div 
            className="text-center space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-3xl" style={{ fontFamily: 'var(--font-orbitron)' }}>Welcome to HiveU</h2>
              <OwlIcon className="text-primary" size={32} />
            </div>
            <p className="text-muted-foreground">Your Campus Study Network</p>
            <Badge variant="secondary" className="mt-2">
              <Shield className="h-3 w-3 mr-1" />
              Only verified KSU students can sign up
            </Badge>
          </motion.div>

          {/* Tabs for Login/Signup */}
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="signin" className="space-y-4 mt-6">
              <Card className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signin-email" className="flex items-center gap-2">
                    KSU Email
                    <Badge variant="outline" className="text-xs">
                      .edu required
                    </Badge>
                  </Label>
                  <Input
                    id="signin-email"
                    type="email"
                    placeholder="your.name@students.kennesaw.edu"
                    className="rounded-xl"
                    value={signinEmail}
                    onChange={(e) => setSigninEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signin-password">Password</Label>
                  <Input
                    id="signin-password"
                    type="password"
                    placeholder="••••••••"
                    className="rounded-xl"
                    value={signinPassword}
                    onChange={(e) => setSigninPassword(e.target.value)}
                  />
                </div>
                <button className="text-sm text-primary hover:underline">
                  Forgot password?
                </button>
                <Button 
                  onClick={handleSignIn}
                  disabled={loading}
                  className="w-full rounded-xl gradient-gold gradient-gold-hover text-primary-foreground"
                >
                  {loading ? "Signing in..." : "Sign In"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <Button
                onClick={onLogin}
                variant="outline"
                className="w-full rounded-xl hover:bg-primary/10"
              >
                <Shield className="mr-2 h-4 w-4" />
                Verify with KSU Email
              </Button>

              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  Two-step verification: Email + Student ID
                </p>
              </div>
            </TabsContent>

            <TabsContent value="signup" className="space-y-4 mt-6">
              <Card className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Full Name</Label>
                  <Input
                    id="signup-name"
                    type="text"
                    placeholder="Imani Johnson"
                    className="rounded-xl"
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">KSU Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="your.name@students.kennesaw.edu"
                    className="rounded-xl"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    className="rounded-xl"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-confirm">Confirm Password</Label>
                  <Input
                    id="signup-confirm"
                    type="password"
                    placeholder="••••••••"
                    className="rounded-xl"
                    value={signupConfirmPassword}
                    onChange={(e) => setSignupConfirmPassword(e.target.value)}
                  />
                </div>
                <Button 
                  onClick={handleSignUp}
                  disabled={loading}
                  className="w-full rounded-xl gradient-gold gradient-gold-hover text-primary-foreground"
                >
                  {loading ? "Creating account..." : "Create Account"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>

              <p className="text-xs text-center text-muted-foreground">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
