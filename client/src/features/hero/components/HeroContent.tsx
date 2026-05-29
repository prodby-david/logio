interface HeroContentProps {
  onStartClick?: () => void;
}

export default function HeroContent({ onStartClick }: HeroContentProps) {
  return (
    <div className="flex flex-col items-start text-left max-w-2xl">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.1] mb-6">
        Clock In.
        <br />
        Log Hours.
        <br />
        <span className="bg-gradient-to-r from-accent-indigo to-accent-emerald bg-clip-text text-transparent">
          Graduate.
        </span>
      </h1>
      
      <p className="text-base sm:text-lg text-text-muted mb-8 leading-relaxed max-w-lg">
        Logio is the ultimate OJT time tracker built specifically for students. 
        Track your training hours with a single tap, generate coordinator-ready 
        timesheets, and focus on what matters most—your learning.
      </p>
      
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
        <button
          onClick={onStartClick}
          className="px-8 py-4 bg-gradient-to-r from-accent-indigo to-accent-emerald hover:from-accent-indigo-hover hover:to-accent-emerald-hover text-text-primary font-semibold rounded-xl shadow-lg shadow-accent-indigo/25 hover:shadow-accent-emerald/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer"
        >
          Start Tracking for Free
        </button>
        
        <button className="px-6 py-4 bg-background-card hover:bg-background-input/60 border border-border-card text-text-muted hover:text-text-primary font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor" 
            className="w-5 h-5 text-accent-emerald"
          >
            <path d="M6.3 2.841A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.269l9.324-5.89a1.5 1.5 0 0 0 0-2.538L6.3 2.84Z" />
          </svg>
          Watch Demo
        </button>
      </div>
    </div>
  );
}
