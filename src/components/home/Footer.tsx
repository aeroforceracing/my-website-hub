import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-foreground font-black text-lg tracking-tight">
            AERO<span className="bg-clip-text text-transparent bg-gradient-brand">FORCE</span>
          </span>
          <span className="text-muted-foreground text-sm">|</span>
          <span className="text-muted-foreground text-sm">F1 in Schools</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/aeroforceracing/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-light hover:text-primary transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <span className="text-muted-foreground text-sm">© {new Date().getFullYear()} AeroForce Racing</span>
        </div>
      </div>
    </footer>
  );
}
