import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="flex flex-col items-start text-left max-w-2xl">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary leading-[1.1] mb-6">
        Clock In.
        <br />
        Track Time.
        <br />
        <span className="text-accent-violet">
          Achieve.
        </span>
      </h1>

      <p className="text-base sm:text-lg text-text-muted mb-8 leading-relaxed max-w-lg">
        Logio is the ultimate time tracker built to help you reach your goals.
        Track your hours on any project, set your target milestones, generate
        professional timesheets, and focus on what matters most—your progress.
      </p>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
        <Link
          to="/register"
          className="px-8 py-4 bg-accent-violet hover:bg-accent-violet-hover text-white font-semibold rounded-xl shadow-sm shadow-accent-violet/10 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer no-underline inline-block"
        >
          Start Tracking for Free
        </Link>

        <Link
          to="/features"
          className="px-6 py-4 bg-background-card hover:bg-background-input/60 border border-border-card text-text-muted hover:text-text-primary font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer no-underline inline-block"
        >
          <span className="flex items-center gap-2">
            <span>See How It Works</span>
            <ArrowUpRight size={18} strokeWidth={1.5} className="text-accent-cyan" />
          </span>
        </Link>
      </div>
    </div>
  );
}
