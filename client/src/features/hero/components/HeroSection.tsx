import HeroBadge from "./HeroBadge";
import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";
import HeroMockup from "./HeroMockup";

interface HeroSectionProps {
  onStartClick?: () => void;
}

export default function HeroSection({ onStartClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen bg-background-main flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-[10%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-accent-indigo/15 blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-accent-emerald/10 blur-[120px] pointer-events-none animate-pulse"></div>
      
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        <div className="lg:col-span-6 flex flex-col items-start gap-6">
          <HeroBadge />
          <HeroContent onStartClick={onStartClick} />
          <HeroStats />
        </div>
        
        <div className="lg:col-span-6 w-full flex items-center justify-center">
          <div className="relative w-full max-w-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-indigo/10 to-accent-emerald/10 rounded-2xl blur-2xl transform scale-[1.02] -z-10"></div>
            <HeroMockup />
          </div>
        </div>
        
      </div>
    </section>
  );
}
