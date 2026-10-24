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
  contactEmail: "hello@craftorastudio.com",
  office: "San Francisco, CA & Remote Worldwide",
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
      { label: "GitHub", href: "https://github.com", external: true },
      { label: "LinkedIn", href: "https://linkedin.com", external: true },
      { label: "Twitter / X", href: "https://x.com", external: true },
    ]
  }
};
