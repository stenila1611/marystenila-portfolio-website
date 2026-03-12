"use client"

import { ExternalLink } from "lucide-react"

const projects = [
  {
    featured: true,
    color: "#059669",
    title: "Battlefield Surveillance System (BSS)",
    label: "NATIONAL DEFENSE · FEATURED PROJECT",
    client: "Bharat Electronics Limited (BEL), Ghaziabad",
    tags: ["JavaFX", "ArcGIS Runtime SDK", "Java", "Windows Desktop"],
    description:
      "Led end-to-end migration of mission-critical GIS desktop application powering India's national defense surveillance infrastructure. Modernized from Java Swing → JavaFX and ArcGIS Core → ArcGIS Runtime, integrating 2 major modules. Improved UI responsiveness and ensured full Windows 10/11 compatibility for field deployment.",
  },
  {
    featured: false,
    color: "#14b8a6",
    title: "OCWGIS — Mobile GIS Application",
    label: "LIVE ON GOOGLE PLAY STORE",
    client: "Enterprise GIS Mobile Application",
    tags: [".NET MAUI", "C#", "ArcGIS SDK", "Google Maps API", "OAuth 2.0", "Android"],
    description:
      "Designed and developed 8+ key features for a production GIS Android app. Photo geotagging, location-based search, Google Maps routing, OAuth authentication APIs, and multiple performance optimizations.",
    link: "View on Play Store →",
  },
  {
    featured: false,
    color: "#d97706",
    title: "Jamshedpur Smart City Story Map",
    label: "",
    client: "Tata Steel — Smart City Initiative",
    tags: ["ArcGIS Online", "ArcGIS Story Maps", "ArcGIS Dashboards"],
    description:
      "Interactive geospatial story map for Tata Steel's Jamshedpur smart city project — enabling data-driven spatial storytelling across infrastructure and operations for senior leadership.",
  },
  {
    featured: false,
    color: "#2563eb",
    title: "BEL Bangalore GIS Defense Support",
    label: "",
    client: "Bharat Electronics Limited, Bangalore",
    tags: [".NET WPF", "C#", "ArcGIS SDK", "Geodatabase"],
    description:
      "GIS + .NET WPF development for BEL Bangalore defense project — geodatabase transaction handling, layer management tools, style file integration, and local server-based GIS utilities.",
  },
  {
    featured: false,
    color: "#7c3aed",
    title: "Crime Hotspot & Routing Analysis",
    label: "",
    client: "Internship Project — Esri India",
    tags: ["ArcGIS Web AppBuilder", "ArcGIS Pro", "JavaScript"],
    description:
      "Spatial analytics web app for crime pattern analysis and route optimization — enabling location intelligence for law enforcement scenarios.",
  },
]

export default function Projects() {
  const featuredProject = projects.find((p) => p.featured)
  const regularProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-16 sm:py-24 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          {/* Section Heading */}
          <div className="mb-8 sm:mb-12 text-center lg:text-left">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f1f5f9] mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Projects
            </h2>
            <div className="w-10 h-[3px] bg-[#14b8a6] mx-auto lg:mx-0" />
          </div>

          {/* Featured Project */}
          {featuredProject && (
            <div
              className="project-card group bg-[#111827] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-[#1e2d4a] mb-6 sm:mb-8 relative overflow-hidden"
            >
              {/* Hover border accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0 group-hover:h-[3px] transition-all duration-300"
                style={{ backgroundColor: featuredProject.color }}
              />

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span
                  className="px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-full"
                  style={{
                    backgroundColor: `${featuredProject.color}20`,
                    color: featuredProject.color,
                  }}
                >
                  {featuredProject.label}
                </span>
              </div>

              <h3
                className="text-xl sm:text-2xl md:text-3xl font-bold text-[#f1f5f9] mb-2"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {featuredProject.title}
              </h3>
              <p className="text-[#94a3b8] text-xs sm:text-sm mb-3 sm:mb-4">{featuredProject.client}</p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {featuredProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-[#1e2d4a] text-[#94a3b8] text-[10px] sm:text-xs font-mono rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-[#94a3b8] leading-relaxed text-sm sm:text-base">{featuredProject.description}</p>
            </div>
          )}

          {/* Regular Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {regularProjects.map((project, index) => (
              <div
                key={index}
                className="project-card group bg-[#111827] rounded-xl p-4 sm:p-6 border border-[#1e2d4a] relative overflow-hidden"
              >
                {/* Hover border accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-0 group-hover:h-[3px] transition-all duration-300"
                  style={{ backgroundColor: project.color }}
                />

                {project.label && (
                  <span
                    className="inline-block px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold rounded-full mb-2 sm:mb-3"
                    style={{
                      backgroundColor: `${project.color}20`,
                      color: project.color,
                    }}
                  >
                    {project.label}
                  </span>
                )}

                <h3
                  className="text-lg sm:text-xl font-bold text-[#f1f5f9] mb-2"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {project.title}
                </h3>
                <p className="text-[#94a3b8] text-xs sm:text-sm mb-2 sm:mb-3">{project.client}</p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-1.5 sm:px-2 py-0.5 bg-[#1e2d4a] text-[#94a3b8] text-[10px] sm:text-xs font-mono rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-[#94a3b8] text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{project.description}</p>

                {project.link && (
                  <a
                    href="https://play.google.com/store/apps/details?id=com.esriindia.ocwgis&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium transition-colors"
                    style={{ color: project.color }}
                  >
                    {project.link}
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
