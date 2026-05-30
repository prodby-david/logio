import ContactsForm from "./ContactsForm";

export default function ContactsSection() {
  return (
    <section id="contacts" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background-main overflow-hidden border-t border-border-card/30">
      <div className="absolute top-[30%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-accent-violet/2 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[30rem] h-[30rem] rounded-full bg-accent-cyan/2 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
          <span className="text-xs font-bold text-accent-cyan px-3 py-1 rounded-full bg-accent-cyan/10 self-center">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary tracking-tight">
            Get in touch with our team.
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            Have questions about our time-tracking platform, need support, or want to explore customized solutions for your organization? Send us a message and we will reply as soon as possible.
          </p>
        </div>
        
        <div className="mt-8">
          <ContactsForm />
        </div>
      </div>
    </section>
  );
}
