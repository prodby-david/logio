import { ArrowRight } from "lucide-react";

export default function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-background-card/60 border border-border-card backdrop-blur-md shadow-sm hover:border-border-input/50 transition-all duration-300 group cursor-pointer">
      <span className="flex h-2 w-2 relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
      </span>
      
      <span className="text-xs font-medium text-text-muted flex items-center gap-1.5">
        <span className="text-text-primary bg-accent-violet/25 px-2 py-0.5 rounded-full text-xs font-bold">
          New
        </span>
        Auto-export timesheets to PDF & Excel
      </span>

      <ArrowRight size={14} strokeWidth={1.5} className="text-text-placeholder group-hover:text-text-muted group-hover:translate-x-0.5 transition-all duration-300" />
    </div>
  );
}
