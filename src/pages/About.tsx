import SectionLabel from "@/components/SectionLabel";
import { aboutContent } from "@/data/siteContent";
import { Download } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";

const About = () => {
  usePageTitle("About");

  return (
    <div className="max-w-5xl mx-auto px-6">
      <section className="pt-24 pb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{aboutContent.pageTitle}</h1>
      </section>

      <div className="pb-12 space-y-0">
        {aboutContent.sections.map((section, i) => (
          <section key={i} className="py-14 first:pt-6">
            <SectionLabel label={section.label} />
            <div className="max-w-3xl">
              <h2
                className={`text-2xl md:text-3xl font-bold leading-snug mb-4 ${
                  section.accent ? "text-primary" : "text-foreground"
                }`}
              >
                {section.headline}
              </h2>
              <p className="text-base text-body leading-relaxed">{section.body}</p>
            </div>
          </section>
        ))}

        {/* Skills */}
        <section className="py-14">
          <SectionLabel label={aboutContent.skills.label} />
          <div className="max-w-3xl space-y-6">
            {aboutContent.skills.groups.map((group) => (
              <div key={group.groupLabel}>
                <h3 className="text-lg font-semibold uppercase tracking-wider text-foreground mb-2">
                  {group.groupLabel}
                </h3>
                <p className="text-base text-body leading-relaxed">
                  {group.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Personal */}
        <section className="py-14">
          <SectionLabel label={aboutContent.personal.label} />
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4 text-foreground">
              {aboutContent.personal.headline}
            </h2>
            <p className="text-base text-body leading-relaxed">{aboutContent.personal.body}</p>
          </div>
        </section>
      </div>

      {/* Resume Download */}
      <section className="pb-24">
        <SectionLabel label={aboutContent.resumeButton.sectionLabel} />
        <div className="max-w-3xl">
          <p className="text-body leading-relaxed mb-6">{aboutContent.resumeButton.description}</p>
          <a
            href={aboutContent.resumeButton.href}
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            {aboutContent.resumeButton.text}
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
