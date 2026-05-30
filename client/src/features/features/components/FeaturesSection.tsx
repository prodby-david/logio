import type { FeatureItem } from "../types/features.types";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  const features: FeatureItem[] = [
    {
      id: "live-clock",
      title: "Live Session Tracker",
      description: "Clock in and out of your tasks with a single click. Keep a live running tally of your hours with visual feedback.",
      iconName: "clock",
    },
    {
      id: "visual-goals",
      title: "Dynamic Milestones",
      description: "Set target milestone hours for specific tasks, projects, or credentials. Track your progress with animated progress bars.",
      iconName: "target",
    },
    {
      id: "exports",
      title: "Flexible Exporters",
      description: "Generate professionally formatted timesheets. Export your logs to PDF, Excel, or CSV formats instantly.",
      iconName: "export",
    },
    {
      id: "history-logs",
      title: "Historical Time Logs",
      description: "Browse, filter, and review all your previous clock-in sessions. Edit task descriptions and manage your log entries effortlessly.",
      iconName: "history",
    },
    {
      id: "analytics",
      title: "Productivity Insights",
      description: "Gain deeper insights into where your hours are spent. Clean visual stats tell you exactly how close you are to your goals.",
      iconName: "chart",
    },
    {
      id: "security",
      title: "Secure Verification",
      description: "Keep your data protected. All logs are cryptographically verifiable for managers, coordinators, or personal records.",
      iconName: "security",
    },
  ];

  return (
    <section id="features" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background-main overflow-hidden border-t border-border-card/30">
      <div className="absolute top-[20%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-accent-violet/2 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-accent-cyan/2 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
          <span className="text-xs font-bold text-accent-violet px-3 py-1 rounded-full bg-accent-violet/10 self-center">
            Powerful Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary">
            Everything you need to master your time.
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            Logio gives you the exact tools to map out, log, and verify your productivity hours. Keep track of what matters, on any project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
