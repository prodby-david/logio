import { Check } from "lucide-react";
import useContactsForm from "../hooks/useContactsForm";

export default function ContactsForm() {
  const { formData, isSubmitted, handleChange, handleSubmit, setIsSubmitted } = useContactsForm();

  return (
    <div className="w-full max-w-2xl mx-auto bg-background-card border border-border-card rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-violet rounded-full blur-3xl opacity-5"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-cyan rounded-full blur-3xl opacity-5"></div>

      {isSubmitted ? (
        <div className="text-center py-12 flex flex-col items-center gap-4 relative z-10">
          <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/25 rounded-full flex items-center justify-center text-emerald-400">
            <Check size={28} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-bold text-text-primary">Inquiry Submitted!</h3>
          <p className="text-sm text-text-muted max-w-sm">
            Thank you for reaching out. Our team will get in touch with you shortly.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-6 px-6 py-2.5 bg-background-input border border-border-input hover:bg-background-card/50 text-text-primary font-semibold text-sm rounded-xl transition-all duration-250 cursor-pointer"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-extrabold text-text-primary tracking-tight">
              Contact Logio
            </h3>
            <p className="text-sm text-text-muted mt-2">
              Empower your students, employees, or team members with centralized hour-tracking control.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="organization" className="block text-xs font-semibold text-text-muted">
                Organization Name
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
                placeholder="Apex University"
                className="w-full px-4 py-3 bg-background-input border border-border-input rounded-xl text-text-primary placeholder-text-placeholder focus:outline-none focus:ring-2 focus:ring-accent-violet focus:border-transparent transition-all duration-200"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contactName" className="block text-xs font-semibold text-text-muted">
                Contact Person
              </label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                required
                placeholder="Jane Doe"
                className="w-full px-4 py-3 bg-background-input border border-border-input rounded-xl text-text-primary placeholder-text-placeholder focus:outline-none focus:ring-2 focus:ring-accent-violet focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="contactEmail" className="block text-xs font-semibold text-text-muted">
              Email Address
            </label>
            <input
              type="email"
              id="contactEmail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="contact@apex.edu"
              className="w-full px-4 py-3 bg-background-input border border-border-input rounded-xl text-text-primary placeholder-text-placeholder focus:outline-none focus:ring-2 focus:ring-accent-violet focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-xs font-semibold text-text-muted">
              Inquiry Details
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Describe your tracking goals, target number of seats, or specialized requirements..."
              className="w-full px-4 py-3 bg-background-input border border-border-input rounded-xl text-text-primary placeholder-text-placeholder focus:outline-none focus:ring-2 focus:ring-accent-violet focus:border-transparent transition-all duration-200 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-accent-violet hover:bg-accent-violet-hover text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] shadow-sm shadow-accent-violet/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-main focus:ring-accent-violet cursor-pointer text-center"
          >
            Submit Contact Request
          </button>
        </form>
      )}
    </div>
  );
}
