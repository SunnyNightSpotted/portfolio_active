import { useState, FormEvent } from "react";
import SectionLabel from "@/components/SectionLabel";
import { contactContent, siteInfo } from "@/data/siteContent";
import { usePageTitle } from "@/hooks/usePageTitle";

const Contact = () => {
  usePageTitle("Contact");

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const data = await response.json();
      if (!data.success) throw new Error(data.message);
      setSubmitted(true);
      form.reset();
    } catch {
      alert(contactContent.errorMessage);
    } finally {
      setSending(false);
    }
  };

  const { form } = contactContent;

  return (
    <div className="max-w-5xl mx-auto px-6">
      <section className="pt-24 pb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{contactContent.pageTitle}</h1>
      </section>

      <section className="pb-24 pt-6">
        <SectionLabel label={contactContent.sectionLabel} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {contactContent.headline}
            </h2>
            <p className="text-body leading-relaxed mb-8">
              {contactContent.subtext}
            </p>

            <div className="space-y-4">
              <a
                href={siteInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${siteInfo.linkedInDisplay} (opens in new tab)`}
                className="flex items-center gap-3 text-primary hover:opacity-80 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-sm" aria-hidden="true">{siteInfo.linkedInDisplay}</span>
              </a>
              <a
                href={`mailto:${siteInfo.email}`}
                className="flex items-center gap-3 text-primary hover:opacity-80 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="text-sm">{siteInfo.email}</span>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <div className="py-12" role="status" aria-live="polite">
                <p className="text-lg font-semibold text-foreground mb-2">{form.successMessage}</p>
                <p className="text-body text-sm">{form.successSubtext}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="access_key" value="8a3bec86-9d7b-4d14-8390-211304254fcd" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                <div>
                  <label htmlFor="name" className="text-xs tracking-widest uppercase text-label font-medium block mb-2">
                    {form.nameLabel}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-label focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-primary transition-colors"
                    placeholder={form.namePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs tracking-widest uppercase text-label font-medium block mb-2">
                    {form.emailLabel}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-label focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-primary transition-colors"
                    placeholder={form.emailPlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-xs tracking-widest uppercase text-label font-medium block mb-2">
                    {form.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-label focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-primary transition-colors resize-none"
                    placeholder={form.messagePlaceholder}
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="bg-primary text-primary-foreground px-8 py-3 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {sending ? form.sendingText : form.submitText}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
