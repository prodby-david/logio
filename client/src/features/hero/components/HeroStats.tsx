import type { StatItem } from "../types/hero.types";

const mockStats: StatItem[] = [
  { label: "OJT Hours Tracked", value: "184,200+" },
  { label: "Active OJT Students", value: "8,500+" },
  { label: "Approval Rate", value: "99.8%" },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-lg mt-8">
      {mockStats.map((stat, i) => (
        <div
          key={i}
          className="flex flex-col p-4 rounded-2xl bg-background-card/30 border border-border-card/50 backdrop-blur-sm relative overflow-hidden group hover:border-border-input/30 transition-all duration-300"
        >
          <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-accent-emerald/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <span className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
            {stat.value}
          </span>
          <span className="text-[10px] sm:text-xs font-medium text-text-muted mt-1 uppercase tracking-wider">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
