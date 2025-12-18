import { Heart } from "lucide-react";
import { OwlIcon } from "./OwlIcon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and Slogan */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
              <OwlIcon className="text-primary-foreground" size={24} />
            </div>
            <div>
              <p className="text-sm">
                <span className="font-medium" style={{ fontFamily: 'var(--font-orbitron)' }}>HiveU StudyMatch</span> 
                <span className="text-muted-foreground"> — Powered by Scrappy, the KSU Owl 🦉</span>
              </p>
              <p className="text-xs text-muted-foreground">Where students connect to succeed</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <button className="hover:text-foreground transition-colors">About</button>
            <button className="hover:text-foreground transition-colors">Privacy</button>
            <button className="hover:text-foreground transition-colors">Contact</button>
            <button className="hover:text-foreground transition-colors">Help</button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t text-center text-xs text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} HiveU StudyMatch. Made with <Heart className="h-3 w-3 text-destructive fill-destructive" /> for KSU students.
          </p>
          <p className="mt-1 text-xs opacity-75">
            Only verified Kennesaw State University students can join the HiveU network.
          </p>
        </div>
      </div>
    </footer>
  );
}
