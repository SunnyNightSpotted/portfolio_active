// ─── Site-wide ───
export const siteInfo = {
  name: "Stephanie Yoo",
  navName: "Stephanie Yoo",
  role: "UX/UI Designer",
  location: "Berlin, Germany",
  email: "stephyoo@proton.me",
  linkedIn: "https://linkedin.com/in/yoostephanie",
  linkedInDisplay: "linkedin.com/in/yoostephanie",
  formspreeId: "YOUR_FORM_ID",
};

// ─── Home page ───
export const heroContent = {
  roleLabel: "UX/UI Designer",
  headline: "Stephanie Yoo",
  intro: "I design interfaces the way I'd want to be treated: thoughtfully, without unnecessary friction. Fueled by empathy, refined aesthetics, and a belief that people are always worth designing for.",
};

export const homeLabels = {
  selectedWork: "Selected Work",
};

// ─── About page ───
export const aboutContent = {
  pageTitle: "About",
  sections: [
    {
      label: "Who I Am",
      headline: "A designer who took the scenic route and brought every lesson with her.",
      body: "I'm Stephanie Yoo, a UX/UI designer with over a decade of experience working across industries, formats, and team structures. My path into UX wasn't a straight line. It started in interior design and moved through freelance work, account management, and physical experience design before I found where I do my best work: leading digital product design at scale. That non-traditional background is a feature, not a bug. It's why I can walk into something unfamiliar, get oriented fast, and start making useful things.",
      accent: false,
    },
    {
      label: "What I Do",
      headline: "Strategy and craft under one roof, from research to launched product.",
      body: "I lead and ship. I managed a pod of UX designers and researchers delivering mobile digital experiences for one of the most recognized brands in the world, across 40+ global markets. I own design systems, build starter templates that save my team setup time, and collaborate across strategy, UI, motion, copy, accessibility, and dev. I also haven't disappeared into management. I'm in Figma every day, just as comfortable building a component library as presenting design direction to stakeholders.",
      accent: true,
    },
    {
      label: "My Approach",
      headline: "Stay curious. Read the room. Raise the bar.",
      body: "I'm not precious about process. I have methods I trust (research, wireframing, prototyping, testing) and I flex them based on the project, the timeline, and the team. The bar doesn't move though: clear, functional, built around what users actually need. I've also folded AI tools like Claude into my daily work to move faster through research, content strategy, and iteration.",
      accent: false,
    },
  ],
  skills: {
    label: "Tools & Skills",
    groups: [
      {
        groupLabel: "Tech & Methods",
        items: ["Figma", "Adobe XD", "Adobe InDesign", "Adobe Photoshop", "Prototyping", "Wireframing", "User Research", "Usability Testing", "Design Systems", "Component Libraries", "Agile/Scrum", "Claude", "Trello", "Google Workspace"],
      },
      {
        groupLabel: "Soft Skills",
        items: ["Empathy", "Strategy & Leadership", "Cross-functional Collaboration", "Stakeholder Management", "Mentorship", "Problem Solving", "Time Management"],
      },
    ],
  },
  personal: {
    label: "The Rest of It",
    headline: "The off-clock version",
    body: "Servant to two cats. Chronic hobby collector. Possessor of an (un)reasonable amount of yarn.",
  },
  resumeButton: {
    sectionLabel: "Resume",
    description: "Want a closer look at my experience? Download my resume below.",
    text: "Download Resume (PDF)",
    href: "/resume_stephanieyoo.pdf",
  },
};

// ─── Contact page ───
export const contactContent = {
  pageTitle: "Contact",
  sectionLabel: "Get in Touch",
  headline: "Let's work together.",
  subtext: "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out.",
  form: {
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell me about your project...",
    submitText: "Send Message",
    sendingText: "Sending...",
    successMessage: "Message sent!",
    successSubtext: "Thanks for reaching out. I'll get back to you soon.",
  },
  errorMessage: "Something went wrong. Please try again.",
};

// ─── Case study pages ───
export const caseStudyLabels = {
  projectDetailsLabel: "Project Details",
  roleLabel: "Role",
  clientLabel: "Client",
  agencyLabel: "Agency",
  timelineLabel: "Timeline",
  scopeLabel: "Scope",
  teamLabel: "Team",
  platformLabel: "Platform",
  overviewLabel: "Overview",
  nextProjectText: "Next Project",
  notFoundTitle: "Project not found",
  backToHomeText: "← Back to home",
};

// ─── Footer ───
export const footerContent = {
  quote: "",
  quoteAttribution: "",
  copyright: `© ${new Date().getFullYear()} Stephanie Yoo. All rights reserved.`,
  resumeLabel: "Resume",
  resumeHref: "/resume_stephanieyoo.pdf",
  linkedInLabel: "LinkedIn",
  emailLabel: "Email",
};

// ─── Navigation ───
export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];
