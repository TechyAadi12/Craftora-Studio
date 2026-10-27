export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const siteConfig = {
  name: "Craftora Studio",
  shortName: "Craftora",
  description: "Modern digital software services firm delivering production web apps, custom software, business automation, and curated developer projects.",
  url: "https://craftorastudio.com",
  ogImage: "https://craftorastudio.com/og-image.jpg",
  contactEmail: "pandeyaadi3112@gmail.com",
  office: "Lucknow, Uttar Pradesh",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/project-labs" },
    { label: "About Us", href: "/about" },
  ] as NavItem[],
  footerLinks: {
    services: [
      { label: "Website Development", href: "/services/website-development" },
      { label: "Custom Software", href: "/services/custom-software" },
      { label: "SaaS & Dashboards", href: "/services/saas-dashboards" },
      { label: "Business Automation", href: "/services/business-automation" },
      { label: "All Services Overview", href: "/services" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Request a Quote", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
    social: [
      { label: "GitHub", href: "https://github.com/TechyAadi12", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/roshan-pandey-7a6254259/", external: true },
      { label: "Instagram", href: "https://www.instagram.com/craftorastudio04/", external: true },
    ]
  }
};
