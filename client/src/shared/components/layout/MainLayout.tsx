import { Link, Outlet, useLocation } from "react-router-dom";
import LogioLogo from "../logo/LogioLogo";
import ThemeToggle from "../theme/ThemeToggle";

export default function MainLayout() {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/register" || location.pathname === "/signin";

  return (
    <div className="min-h-screen bg-background-main text-text-primary">
      <header className="fixed top-0 inset-x-0 bg-background-main/80 backdrop-blur-md border-b border-border-card/30 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2.5 no-underline group select-none"
          >
            <LogioLogo />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-medium text-text-muted hover:text-text-primary no-underline transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-text-muted hover:text-text-primary no-underline transition-colors"
            >
              About
            </Link>
            <Link
              to="/features"
              className="text-sm font-medium text-text-muted hover:text-text-primary no-underline transition-colors"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-sm font-medium text-text-muted hover:text-text-primary no-underline transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/contacts"
              className="text-sm font-medium text-text-muted hover:text-text-primary no-underline transition-colors"
            >
              Contacts
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            {!isAuthPage ? (
              <Link
                to="/register"
                className="px-4 py-2.5 bg-accent-violet/10 hover:bg-accent-violet/20 border border-border-card/85 text-text-primary text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer no-underline inline-block"
              >
                Sign Up
              </Link>
            ) : (
              <Link
                to="/"
                className="px-4 py-2.5 bg-background-card hover:bg-background-input/60 border border-border-card text-text-muted hover:text-text-primary text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer no-underline inline-block"
              >
                Back to Home
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}
