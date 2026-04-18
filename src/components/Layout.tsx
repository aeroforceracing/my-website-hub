import { Link, useLocation } from "react-router-dom";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { to: "/", label: "Home" },
  { to: "/actions", label: "Actions" },
];

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-background/85 backdrop-blur-xl border-b border-border/60">
        <Link to="/" className="text-foreground font-black text-lg tracking-tight">
          AERO
          <span className="bg-clip-text text-transparent bg-gradient-brand">FORCE</span>
        </Link>

        <div className="flex items-center gap-6">
          {navItems.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm font-medium transition-colors duration-200 ${
                  active ? "text-primary" : "text-brand-light hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="pt-16">{children}</div>
    </div>
  );
}
