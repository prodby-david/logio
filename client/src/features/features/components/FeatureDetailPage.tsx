import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, BarChart2, Download, Target, ShieldCheck, History, Check } from "lucide-react";

interface FeatureDetail {
  title: string;
  description: string;
  iconName: string;
  benefits: string[];
}

const featureDetails: Record<string, FeatureDetail> = {
  "live-clock": {
    title: "Live Session Tracker",
    description: "Start, pause, and log your hours in real-time with one simple click. Logio's background timers make sure you never lose track of your progress.",
    iconName: "clock",
    benefits: [
      "Instant timer controls directly on the dashboard",
      "Dynamic browser tab titles displaying live ticking state",
      "Resilient background timers that persist through reload",
      "Manual adjustment options for missed sessions"
    ]
  },
  "visual-goals": {
    title: "Dynamic Milestones",
    description: "Define custom targets and monitor your milestone hours as you work. Beautiful visual progression widgets keep you motivated.",
    iconName: "target",
    benefits: [
      "Set individual milestone targets per project",
      "Real-time visual percentage calculations",
      "Polished transition animations on completion",
      "Historical achievements logged permanently"
    ]
  },
  "exports": {
    title: "Flexible Exporters",
    description: "Compile and download your logged sheets in Excel, CSV, or PDF formats in seconds. Ready to send straight to your client or manager.",
    iconName: "export",
    benefits: [
      "Generate clean timesheets instantly",
      "Support for multiple popular formats",
      "Filtering parameters to export selected dates",
      "Print-optimized layouts for PDF reports"
    ]
  },
  "history-logs": {
    title: "Historical Time Logs",
    description: "Access and review your entire history of clocked hours. Search, filter, and modify descriptions effortlessly.",
    iconName: "history",
    benefits: [
      "Centralized log table containing all logs",
      "Multi-field filtering by date and task descriptions",
      "Seamless log modification and deletion options",
      "Quick summary calculations for filtered records"
    ]
  },
  "analytics": {
    title: "Productivity Insights",
    description: "Detailed analytics displaying where your hours are spent. Clean visual cards present high-level statistics of your routines.",
    iconName: "chart",
    benefits: [
      "High-level routine breakdowns in real-time",
      "Calculated completion metrics of daily target goals",
      "Weekly and monthly hours comparison views",
      "Identify times of peak focus and performance"
    ]
  },
  "security": {
    title: "Secure Verification",
    description: "Cryptographically verifiable logs protect your records and guarantee accuracy for supervisors or client compliance audits.",
    iconName: "security",
    benefits: [
      "Tamper-proof time logs with secure hashes",
      "Supervisor audit trail view parameters",
      "Encrypted cloud backups for maximum safety",
      "GDPR and privacy compliance by default"
    ]
  }
};

export default function FeatureDetailPage() {
  const { featureId } = useParams<{ featureId: string }>();
  const feature = featureId ? featureDetails[featureId] : null;

  if (!feature) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-8 text-center bg-background-main">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Feature not found</h2>
        <Link to="/features" className="text-sm font-semibold text-accent-cyan hover:underline">
          Back to Features
        </Link>
      </div>
    );
  }

  const getIcon = () => {
    switch (feature.iconName) {
      case "clock":
        return <Clock size={40} strokeWidth={1.5} />;
      case "chart":
        return <BarChart2 size={40} strokeWidth={1.5} />;
      case "export":
        return <Download size={40} strokeWidth={1.5} />;
      case "target":
        return <Target size={40} strokeWidth={1.5} />;
      case "security":
        return <ShieldCheck size={40} strokeWidth={1.5} />;
      case "history":
        return <History size={40} strokeWidth={1.5} />;
      default:
        return <Clock size={40} strokeWidth={1.5} />;
    }
  };

  return (
    <div className="min-h-screen bg-background-main py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-[20%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-accent-violet/2 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-accent-cyan/2 blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link
          to="/features"
          className="inline-flex items-center gap-2 text-sm text-text-placeholder hover:text-text-primary transition-colors no-underline mb-8"
        >
          <ArrowLeft size={16} strokeWidth={1.5} />
          Back to Features
        </Link>

        <div className="bg-background-card backdrop-blur-xl border border-border-card rounded-2xl p-8 sm:p-12 shadow-md flex flex-col gap-8">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-accent-violet/10 border border-accent-violet/25 flex items-center justify-center text-accent-cyan">
              {getIcon()}
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-accent-violet">
                {feature.title}
              </h1>
              <span className="text-xs text-text-placeholder font-medium">Logio Core Feature</span>
            </div>
          </div>

          <div className="border-t border-border-card/50"></div>

          <div className="flex flex-col gap-6">
            <h2 className="text-lg font-bold text-text-primary">Overview</h2>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              {feature.description}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-lg font-bold text-text-primary">Key Capabilities</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {feature.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 bg-background-input/20 border border-border-card/30 p-4 rounded-xl">
                  <Check size={16} strokeWidth={1.5} className="text-accent-cyan mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-text-muted leading-tight">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-border-card/50 my-4"></div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-background-input/30 border border-border-card p-6 sm:p-8 rounded-2xl">
            <div className="flex flex-col gap-1.5 text-center sm:text-left">
              <h3 className="text-base font-bold text-text-primary">Ready to get started?</h3>
              <p className="text-xs text-text-muted">Set up your workspace and take control of your time in minutes.</p>
            </div>
            <Link
              to="/register"
              className="px-6 py-3 bg-accent-violet hover:bg-accent-violet-hover text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-sm shadow-accent-violet/10 no-underline inline-block w-full sm:w-auto text-center"
            >
              Sign Up Free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
