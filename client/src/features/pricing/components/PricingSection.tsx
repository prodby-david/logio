import type { PricingPlan } from "../types/pricing.types";
import PricingCard from "./PricingCard";

export default function PricingSection() {
  const plans: PricingPlan[] = [
    {
      id: "personal",
      name: "Personal",
      price: "₱0",
      billing: "/ forever",
      description: "Perfect for individuals starting to build consistency and time tracking habits.",
      features: [
        "1 active tracker at a time",
        "Set daily milestone goals",
        "Basic stopwatch and session timer",
        "Export timesheets to PDF",
        "7-day history log view"
      ],
      buttonText: "Start Tracking Free"
    },
    {
      id: "pro",
      name: "Professional",
      price: "₱399",
      billing: "/ month",
      description: "For users looking to optimize daily routines and manage multiple tasks.",
      features: [
        "Up to 5 active trackers at a time",
        "Advanced milestone dashboard analytics",
        "Export to Excel, CSV & PDF",
        "30-day history log view",
        "Custom desktop notifications"
      ],
      isPopular: true,
      buttonText: "Upgrade to Pro"
    },
    {
      id: "vip",
      name: "VIP Access",
      price: "₱799",
      billing: "/ month",
      description: "For users seeking custom automated workflows and personal AI coaching support.",
      features: [
        "Up to 10 active trackers at a time",
        "AI focus assistant chatbot",
        "Unlimited history archives",
        "Custom goals & priority alerts",
        "Priority developer support"
      ],
      buttonText: "Get VIP Access",
      isComingSoon: true
    }
  ];

  const handlePlanSelect = (planId: string) => {
    window.location.href = "/register";
  };

  return (
    <section id="pricing" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background-main overflow-hidden border-t border-border-card/30">
      <div className="absolute top-[20%] left-[-10%] w-[30rem] h-[30rem] rounded-full bg-accent-violet/2 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-accent-cyan/2 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
          <span className="text-xs font-bold text-accent-violet px-3 py-1 rounded-full bg-accent-violet/10 self-center">
            Logio Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary">
            Plans built to scale with your progress.
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            Start tracking for free today, or upgrade to access advanced dashboard analytics, custom compliance exporters, and centralized management tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto w-full">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} onSelect={handlePlanSelect} />
          ))}
        </div>
      </div>
    </section>
  );
}
