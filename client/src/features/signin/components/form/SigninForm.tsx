import { Link } from "react-router-dom";
import useSigninForm from "../../hooks/useSigninForm";

export default function SigninForm() {
  const { formData, handleChange, handleSubmit } = useSigninForm();

  return (
    <div className="mt-8 bg-background-main flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-violet rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-cyan rounded-full blur-3xl opacity-10 animate-pulse"></div>

        <div className="bg-background-card backdrop-blur-xl border border-border-card rounded-2xl p-8 shadow-md relative overflow-hidden">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold text-accent-violet">
              Logio
            </h2>
            <p className="text-sm text-text-muted mt-2">
              Welcome back! Enter your credentials to continue tracking.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-text-muted"
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
                className="w-full px-4 py-3 bg-background-input border border-border-input rounded-xl text-text-primary placeholder-text-placeholder focus:outline-none focus:ring-2 focus:ring-accent-violet focus:border-transparent transition-all duration-200"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-xs font-semibold text-text-muted"
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
                className="w-full px-4 py-3 bg-background-input border border-border-input rounded-xl text-text-primary placeholder-text-placeholder focus:outline-none focus:ring-2 focus:ring-accent-violet focus:border-transparent transition-all duration-200"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-accent-violet hover:bg-accent-violet-hover text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-sm shadow-accent-violet/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-main focus:ring-accent-violet cursor-pointer text-center"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <span className="text-xs text-text-muted">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-xs text-accent-violet hover:underline font-bold"
              >
                Sign Up
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
