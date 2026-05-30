import { creator } from "../constants/TeamMember";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background-main overflow-hidden border-t border-border-card/30"
    >
      <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-accent-violet/2 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-accent-cyan/2 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
          <span className="text-xs font-bold text-accent-cyan px-3 py-1 rounded-full bg-accent-cyan/10 self-center">
            About the Project
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary">
            Our story, our mission, our creator.
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            Logio was built to make time tracking clean, simple, and visually
            elegant. Built for professionals, freelancers, and learners to track
            progress with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mt-4">
          <div className="p-8 rounded-2xl bg-background-card/25 border border-border-card/45 backdrop-blur-sm flex flex-col justify-center gap-4">
            <h3 className="text-xl font-bold text-text-primary">Our Story</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Logio was born out of frustration with complex, cluttered project
              management tools that hid basic time-tracking functionality behind
              dozens of options. I wanted a clean, single-purpose application to
              start focus sessions, monitor milestones, and export clean logs.
              What began as a personal tool quickly evolved into a dedicated
              platform built for remote professionals, freelancers, and learners
              alike.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-background-card/25 border border-border-card/45 backdrop-blur-sm flex flex-col justify-center gap-4">
            <h3 className="text-xl font-bold text-text-primary">Our Mission</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              The mission is to empower individuals to track their time with
              total clarity. I believe that capturing your work shouldn't feel
              like a chore. By focusing on premium dark aesthetics, smooth
              transitions, and intuitive widgets, we ensure logging hours feels
              rewarding. I am committed to keeping Logio simple,
              privacy-focused, and open to builders everywhere.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-text-primary mb-8">
            Behind the Project
          </h3>
          <div className="flex justify-center max-w-md mx-auto">
            <div className="flex flex-col items-center p-8 rounded-2xl bg-background-card/30 border border-border-card/40 hover:border-accent-violet/30 hover:bg-background-card/45 transition-all duration-300 group w-full">
              <div className="w-20 h-20 rounded-full bg-accent-violet flex items-center justify-center text-white text-2xl font-black mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300">
                {creator.initials}
              </div>
              <h4 className="text-lg font-bold text-text-primary">
                {creator.name}
              </h4>
              <p className="text-xs text-text-muted mt-1 font-semibold">
                {creator.role}
              </p>
              <p className="text-xs text-text-placeholder mt-3 max-w-xs leading-relaxed">
                Building utility tools to make daily workflows simpler, cleaner,
                and more visual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
