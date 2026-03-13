"use client"

const experiences = [
  {
    isCurrent: true,
    company: "Esri India, Bangalore",
    role: "Software Engineer",
    period: "June 2023 – Present",
    note: "The world's leading Geographic Information System (GIS) platform company, operating in 180+ countries.",
    bullets: [
      "Developed an interactive Story Map for Jamshedpur for Tata Steel, using ArcGIS tools for geospatial visualization and data-driven storytelling.",
      "Led migration of a large-scale GIS desktop application from Java Swing to JavaFX and from ArcGIS Core to ArcGIS Runtime, integrating two modules for the BEL Ghaziabad defense project – Battlefield Surveillance System (BSS). Improved UI responsiveness, system compatibility, and long-term maintainability.",
      "Designed and developed key features for a GIS-based Android application OCWGIS using .NET MAUI (published on Google Play Store). Implemented functionalities including photo geotagging, location-based search, feature search, authentication APIs, routing tools with Google Maps integration, and multiple performance-related bug fixes.",⁠
      "Provided GIS and .NET WPF development support for BEL Bangalore – Shakti Project (Defense Domain | GIS & .NET WPF).",
      "Designed and delivered defense-specific GIS tools including Crest Check (natural, user-defined, safe corridor crests), Color Elevation, Gun Density, Gun Status Editor, Diagrammatic Fire Plan, MFDT, LOS Profile Graph, and enhanced Coordinate Converter using .NET WPF and ArcGIS.",
      "Built reusable modules for Identify, User Layer, and Spatial Feature Query tools, along with standalone classes for GPK services and graphic overlay management, reducing code repetition and improving maintainability.",
      "Resolved critical technical challenges including WPF–WinForms rendering conflicts, 3D visualization performance bottlenecks, thread management issues, mosaic dataset generation, and improved docking/window management.",
      "Implemented Log4Net GIS logging, optimized 2D–3D rendering pipelines, captured client requirements and UI workflows, conducted unit testing across analysis modules, and provided post-deployment support; received Technovator Award for contributions to the Shakti project.",
⁠      "Presented a developer session on 'Native Maps SDK: Advancements in 3D Visualization', covering 3D GIS layers including I3S Scene Layers, Integrated Mesh, and 3D Tiles, along with surface placement, filtering, and spatial analysis capabilities.",
    ],
  },
  {
    isCurrent: false,
    company: "Esri India, Bangalore",
    role: "Software Engineering Intern",
    period: "Jan 2023 – May 2023",
    note: "Offered full-time role at completion.",
    bullets: [
      "Built Crime Hotspot & Routing Analysis web app using ArcGIS Web AppBuilder + ArcGIS Pro.",
      "Hands-on with .NET WPF, WinForms, ArcGIS SDK for JavaScript, ArcGIS SDK for .NET WPF.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          {/* Section Heading */}
          <div className="mb-8 sm:mb-12 text-center lg:text-left">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f1f5f9] mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Work Experience
            </h2>
            <div className="w-10 h-[3px] bg-[#14b8a6] mx-auto lg:mx-0" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-3 sm:left-4 md:left-8 top-0 bottom-0 w-0.5 bg-[#14b8a6]/30" />

            <div className="space-y-8 sm:space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-10 sm:pl-12 md:pl-20">
                  {/* Timeline Dot */}
                  <div className="absolute left-1 sm:left-2 md:left-6 top-1">
                    {exp.isCurrent ? (
                      <div className="relative">
                        <div className="w-4 h-4 rounded-full bg-[#14b8a6]" />
                        <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#14b8a6] animate-ping-slow" />
                      </div>
                    ) : (
                      <div className="w-4 h-4 rounded-full bg-[#1e2d4a] border-2 border-[#14b8a6]" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="bg-[#0a0f1e] rounded-xl p-4 sm:p-6 border border-[#1e2d4a]">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      {exp.isCurrent && (
                        <span className="px-2 sm:px-2.5 py-0.5 bg-[#14b8a6]/20 text-[#14b8a6] text-[10px] sm:text-xs font-medium rounded-full">
                          Current
                        </span>
                      )}
                      <span className="text-[#94a3b8] text-xs sm:text-sm">{exp.period}</span>
                    </div>

                    <h3
                      className="text-lg sm:text-xl font-bold text-[#f1f5f9] mb-1"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {exp.role}
                    </h3>
                    <p className="text-[#14b8a6] font-medium mb-1 sm:mb-2 text-sm sm:text-base">{exp.company}</p>
                    <p className="text-[#94a3b8] text-xs sm:text-sm italic mb-3 sm:mb-4">{exp.note}</p>

                    <ul className="space-y-2 sm:space-y-3">
                      {exp.bullets.map((bullet, bIndex) => (
                        <li key={bIndex} className="flex gap-2 sm:gap-3 text-[#94a3b8] text-xs sm:text-sm leading-relaxed">
                          <span className="text-[#14b8a6] mt-1 flex-shrink-0">→</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
