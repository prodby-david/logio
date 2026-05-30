import { Clock, BarChart2, Download, Target, ShieldCheck, History } from "lucide-react";
import type { FeatureItem } from "../types/features.types";

interface FeatureCardProps {
  feature: FeatureItem;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const getIcon = () => {
    switch (feature.iconName) {
      case "clock":
        return <Clock size={24} strokeWidth={1.5} />;
      case "chart":
        return <BarChart2 size={24} strokeWidth={1.5} />;
      case "export":
        return <Download size={24} strokeWidth={1.5} />;
      case "target":
        return <Target size={24} strokeWidth={1.5} />;
      case "security":
        return <ShieldCheck size={24} strokeWidth={1.5} />;
      case "history":
        return <History size={24} strokeWidth={1.5} />;
    }
  };

  return (
    <div
      className="flex flex-col p-6 rounded-2xl bg-background-card/30 border border-border-card/50 backdrop-blur-sm relative overflow-hidden group hover:border-accent-violet/30 transition-all duration-300 text-left"
    >
      <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-accent-violet/3 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="w-12 h-12 rounded-xl bg-accent-violet/10 border border-accent-violet/25 flex items-center justify-center text-accent-cyan mb-5 group-hover:scale-110 transition-transform duration-300">
        {getIcon()}
      </div>

      <h3 className="text-lg font-bold text-text-primary mb-2">
        {feature.title}
      </h3>
      <p className="text-xs text-text-muted leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}
