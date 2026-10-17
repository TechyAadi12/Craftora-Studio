import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { servicesData } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = "2026-10-15T00:00:00.000Z";

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/services",
    "/project-labs",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/services") || route.startsWith("/project-labs") ? 0.9 : 0.7,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map(service => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
