import useRegisterForm from "../../hooks/useRegisterForm";

export default function RegisterForm() {
  const { formData, handleChange, handleSubmit } = useRegisterForm();

  return (
    <div className="min-h-screen bg-background-main flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-indigo rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-emerald rounded-full blur-3xl opacity-30 animate-pulse"></div>

        <div className="bg-background-card backdrop-blur-xl border border-border-card rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold text-text-primary tracking-tight bg-gradient-to-r from-accent-indigo to-accent-emerald bg-clip-text text-transparent">
              Logio
            </h2>
            <p className="text-sm text-text-muted mt-2">
              Track your OJT hours and manage your training logs seamlessly.
            </p>
          </div>

          <button
            type="button"
            className="w-full py-3 bg-background-input border border-border-input hover:bg-background-card/50 text-text-primary font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>

          <div className="relative flex items-center justify-center my-6">
            <div className="absolute inset-x-0 border-t border-border-card/50"></div>
            <span className="relative px-3 bg-background-card text-xs text-text-placeholder uppercase font-bold tracking-wider">
              Or continue with email
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-xs font-semibold text-text-muted uppercase tracking-wider"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background-input border border-border-input rounded-xl text-text-primary placeholder-text-placeholder focus:outline-none focus:ring-2 focus:ring-accent-indigo focus:border-transparent transition-all duration-200"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-text-muted uppercase tracking-wider"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background-input border border-border-input rounded-xl text-text-primary placeholder-text-placeholder focus:outline-none focus:ring-2 focus:ring-accent-indigo focus:border-transparent transition-all duration-200"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-xs font-semibold text-text-muted uppercase tracking-wider"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background-input border border-border-input rounded-xl text-text-primary placeholder-text-placeholder focus:outline-none focus:ring-2 focus:ring-accent-indigo focus:border-transparent transition-all duration-200"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-accent-indigo to-accent-emerald hover:from-accent-indigo-hover hover:to-accent-emerald-hover text-text-primary font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-accent-indigo/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-main focus:ring-accent-indigo"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
