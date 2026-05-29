export default function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-background-card/60 border border-border-card backdrop-blur-md shadow-lg hover:border-border-input/50 transition-all duration-300 group cursor-pointer">
      <span className="flex h-2 w-2 relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald"></span>
      </span>
      
      <span className="text-xs font-medium text-text-muted flex items-center gap-1.5">
        <span className="text-text-primary bg-accent-indigo/25 px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider">
          New
        </span>
        Auto-export timesheets to PDF & Excel
      </span>

      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 16 16" 
        fill="currentColor" 
        className="w-3.5 h-3.5 text-text-placeholder group-hover:text-text-muted group-hover:translate-x-0.5 transition-all duration-300"
      >
        <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.72 4.53a.75.75 0 1 1 1.06-1.06l4.03 4.03a.75.75 0 0 1 0 1.06l-4.03 4.03a.75.75 0 1 1-1.06-1.06l2.72-2.72H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
      </svg>
    </div>
  );
}
