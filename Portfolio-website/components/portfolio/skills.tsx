"use client"

const skillGroups = [
  {
    label: "Languages",
    color: "#2563eb",
    skills: ["C#", "Java"],
  },
  {
    label: "Frameworks & Platforms",
    color: "#14b8a6",
    skills: [".NET WPF", ".NET MAUI", "JavaFX", "WinForms"],
  },
  {
    label: "GIS Technologies",
    color: "#059669",
    skills: [
      "ArcGIS Platform",
      "ArcGIS Runtime SDK",
      "ArcGIS Pro",
      "ArcGIS Online",
      "ArcGIS Dashboards",
      "ArcGIS Web AppBuilder",
    ],
  },
  {
    label: "SDKs & APIs",
    color: "#7c3aed",
    skills: [
      "ArcGIS SDK for .NET (WPF, MAUI)",
      "ArcGIS SDK for Java",
      "ArcGIS SDK for JavaScript",
      "Google Maps API",
      "REST APIs",
      "OAuth 2.0",
    ],
  },
  {
    label: "Tools & DevOps",
    color: "#d97706",
    skills: ["Visual Studio", "Eclipse", "Postman", "Git", "GitHub", "SVN", "Google Play Console"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          {/* Section Heading */}
          <div className="mb-8 sm:mb-12 text-center lg:text-left">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f1f5f9] mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Skills & Tech
            </h2>
            <div className="w-10 h-[3px] bg-[#14b8a6] mx-auto lg:mx-0" />
          </div>

          {/* Skill Groups */}
          <div className="space-y-6 sm:space-y-8">
            {skillGroups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="animate-fade-in-up"
                style={{ animationDelay: `${groupIndex * 100}ms` }}
              >
                <h3
                  className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 text-center lg:text-left"
                  style={{ color: group.color }}
                >
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                  {group.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="skill-pill px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-mono cursor-default transition-all duration-300"
                      style={{
                        backgroundColor: `${group.color}15`,
                        color: group.color,
                        border: `1px solid ${group.color}30`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 20px ${group.color}40`
                        e.currentTarget.style.backgroundColor = `${group.color}25`
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none"
                        e.currentTarget.style.backgroundColor = `${group.color}15`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
