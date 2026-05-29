import { Link, Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <div className="min-h-screen bg-background-main text-text-primary">
      <header className="fixed top-0 inset-x-0 bg-background-main/80 backdrop-blur-md border-b border-border-card/30 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2.5 no-underline group select-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-indigo to-accent-emerald flex items-center justify-center shadow-lg shadow-accent-indigo/25">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="w-5 h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <span className="text-2xl font-black text-text-primary tracking-tight">
              Logio
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <span className="text-sm font-medium text-text-muted hover:text-text-primary cursor-pointer transition-colors">
              Features
            </span>
            <span className="text-sm font-medium text-text-muted hover:text-text-primary cursor-pointer transition-colors">
              Partnerships
            </span>
            <span className="text-sm font-medium text-text-muted hover:text-text-primary cursor-pointer transition-colors">
              Pricing
            </span>
          </nav>

          <div>
            {isLanding ? (
              <Link
                to="/register"
                className="px-4 py-2.5 bg-gradient-to-r from-accent-indigo/10 to-accent-emerald/10 hover:from-accent-indigo/20 hover:to-accent-emerald/20 border border-border-card/85 text-text-primary text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer no-underline inline-block"
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
