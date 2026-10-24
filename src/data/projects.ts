export interface ProjectItem {
  title: string;
  description: string;
  liveDemoUrl: string;
  githubUrl: string;
  image?: string;
  imageAlt?: string;
  category: string;
  technologies: string[];
}

export const projectsData: ProjectItem[] = [
  {
    title: "Moneta Expense Tracker",
    description:
      "A personal finance dashboard for tracking income, expenses, budgets, and spending insights.",
    liveDemoUrl: "https://moneta-expense-tracker-chi.vercel.app/",
    githubUrl: "https://github.com/TechyAadi12/Expense-Tracker",
    image: "/Expense%20Tracker%20Dashboard%20Showcase.png",
    imageAlt: "Moneta expense tracker dashboard on desktop and mobile",
    category: "Finance",
    technologies: ["Dashboard", "Personal finance"],
  },
  {
    title: "Tic Tac Toe",
    description:
      "A colorful, modern take on the classic game, with a polished interface for quick matches.",
    liveDemoUrl: "https://tic-tac-toe-rose-ten-32.vercel.app/",
    githubUrl: "https://github.com/TechyAadi12/Tic-Tac-Toe-Game",
    image: "/Neon%20Tic%20Tac%20Toe%20Game%20Banner.png",
    imageAlt: "Neon Tic Tac Toe game board",
    category: "Game",
    technologies: ["Two-player", "Interactive"],
  },
  {
    title: "Daylight To-Do",
    description:
      "A lightweight task manager for organizing daily plans and keeping important tasks in view.",
    liveDemoUrl: "https://daylight-to-do.vercel.app/",
    githubUrl: "https://github.com/TechyAadi12/To-do-App",
    image: "/Modern%20To-Do%20App%20Dashboard%20Banner.png",
    imageAlt: "To-do app dashboard on desktop and mobile",
    category: "Productivity",
    technologies: ["Task management", "Productivity"],
  },
  {
    title: "Pandey Auto Centre",
    description:
      "An automotive storefront for exploring car and bike parts, accessories, and vehicle essentials.",
    liveDemoUrl: "https://pandey-auto-centre.vercel.app/",
    githubUrl: "https://github.com/TechyAadi12/Pandey-Auto-Centre",
    image: "/Pandey%20Auto%20Center%20Showcase.png",
    imageAlt: "Pandey Auto Centre automotive storefront on desktop and mobile",
    category: "E-commerce",
    technologies: ["Automotive", "Online store"],
  },
  {
    title: "G-India Mart",
    description:
      "A construction marketplace connecting builders with materials, trusted sellers, and fast delivery.",
    liveDemoUrl: "https://g-india-mart.vercel.app/",
    githubUrl: "https://github.com/TechyAadi12/g-india-mart",
    image: "/G-India%20Mart%20Construction%20Marketplace.png",
    imageAlt: "G-India Mart construction marketplace on mobile",
    category: "Marketplace",
    technologies: ["Construction", "Online marketplace"],
  },
  {
    title: "Travel Agency",
    description:
      "A travel experience for discovering destinations, tour packages, stays, and flights.",
    liveDemoUrl: "https://tarvel-agency.vercel.app/",
    githubUrl: "https://github.com/TechyAadi12/Tarvel-Agency",
    image: "/Explore%2C%20Plan%2C%20Travel%2C%20Repeat.png",
    imageAlt: "Travel agency destinations and trip-planning showcase",
    category: "Travel",
    technologies: ["Travel", "Booking"],
  },
  {
    title: "FreshMart Grocery",
    description:
      "A fresh-food shopping experience featuring grocery categories, product offers, and delivery.",
    liveDemoUrl: "https://grocery-website-gules-chi.vercel.app/",
    githubUrl: "https://github.com/TechyAadi12/Grocery-Website",
    image: "/FreshMart%20Grocery%20E-Commerce%20Showcase.png",
    imageAlt: "FreshMart grocery e-commerce storefront on desktop and mobile",
    category: "E-commerce",
    technologies: ["Groceries", "Online store"],
  },
];
