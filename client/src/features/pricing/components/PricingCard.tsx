import { Check } from "lucide-react";
import type { PricingPlan } from "../types/pricing.types";

interface PricingCardProps {
  plan: PricingPlan;
  onSelect?: (planId: string) => void;
}

export default function PricingCard({ plan, onSelect }: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between border backdrop-blur-xl transition-all duration-300 ${
        plan.isPopular
          ? "bg-background-card border-accent-violet shadow-md shadow-accent-violet/5 scale-100 lg:scale-[1.03] z-10"
          : plan.isComingSoon
          ? "bg-background-card/20 border-border-card/50 opacity-75"
          : "bg-background-card/40 border-border-card hover:border-border-input hover:bg-background-card/65"
      }`}
    >
      {plan.isPopular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent-violet text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          Most Popular
        </span>
      )}

      {plan.isComingSoon && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent-violet/20 border border-accent-violet/40 text-text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          Coming Soon
        </span>
      )}

      <div>
        <div className="mb-6">
          <h3 className="text-xl font-bold text-text-primary">{plan.name}</h3>
          <p className="text-sm text-text-muted mt-2 min-h-[40px]">
            {plan.description}
          </p>
        </div>

        <div className="flex items-baseline gap-1 mb-8">
          <span className="text-4xl font-extrabold text-text-primary">
            {plan.price}
          </span>
          <span className="text-xs font-semibold text-text-placeholder">
            {plan.billing}
          </span>
        </div>

        <div className="border-t border-border-card/50 my-6"></div>

        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check size={16} strokeWidth={1.5} className={`mt-0.5 shrink-0 ${plan.isPopular ? "text-accent-cyan" : "text-accent-violet"}`} />
              <span className="text-xs text-text-muted leading-tight">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <button
        disabled={plan.isComingSoon}
        onClick={() => !plan.isComingSoon && onSelect && onSelect(plan.id)}
        className={`w-full py-3 font-semibold rounded-xl transition-all duration-250 transform ${
          !plan.isComingSoon ? "active:scale-[0.98] cursor-pointer" : "cursor-not-allowed"
        } text-center text-xs sm:text-sm ${
          plan.isPopular
            ? "bg-accent-violet hover:bg-accent-violet-hover text-white shadow-sm shadow-accent-violet/10"
            : plan.isComingSoon
            ? "bg-background-input border border-border-card/50 text-text-placeholder opacity-60"
            : "bg-background-input hover:bg-background-card/50 border border-border-input text-text-primary"
        }`}
      >
        {plan.isComingSoon ? "Coming Soon" : plan.buttonText}
      </button>
    </div>
  );
}
