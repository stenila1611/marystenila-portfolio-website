"use client"

import { ExternalLink } from "lucide-react"

const stats = [
  { value: "3+", label: "Years at Esri India" },
  { value: "4+", label: "Production Projects" },
  { value: "9.36", label: "CGPA Gold Medal" },
  { value: "1", label: "App on Play Store", link: "https://play.google.com/store/apps/details?id=com.esriindia.ocwgis&pcampaignid=web_share" },
]

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          {/* Section Heading */}
          <div className="mb-8 sm:mb-12 text-center lg:text-left">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f1f5f9] mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              About Me
            </h2>
            <div className="w-10 h-[3px] bg-[#14b8a6] mx-auto lg:mx-0" />
          </div>

          <div className="grid lg:grid-cols-[40%_60%] gap-12 items-start">
            {/* Left - Decorative GIS Map Graphic */}
            <div className="relative hidden lg:block">
              <div className="aspect-square bg-[#111827] rounded-2xl p-8 border border-[#1e2d4a] overflow-hidden">
                {/* Abstract Map */}
                <svg viewBox="0 0 200 200" className="w-full h-full opacity-60">
                  {/* Grid lines */}
                  <line x1="0" y1="40" x2="200" y2="40" stroke="#14b8a6" strokeWidth="0.5" opacity="0.3" />
                  <line x1="0" y1="80" x2="200" y2="80" stroke="#14b8a6" strokeWidth="0.5" opacity="0.3" />
                  <line x1="0" y1="120" x2="200" y2="120" stroke="#14b8a6" strokeWidth="0.5" opacity="0.3" />
                  <line x1="0" y1="160" x2="200" y2="160" stroke="#14b8a6" strokeWidth="0.5" opacity="0.3" />
                  <line x1="40" y1="0" x2="40" y2="200" stroke="#14b8a6" strokeWidth="0.5" opacity="0.3" />
                  <line x1="80" y1="0" x2="80" y2="200" stroke="#14b8a6" strokeWidth="0.5" opacity="0.3" />
                  <line x1="120" y1="0" x2="120" y2="200" stroke="#14b8a6" strokeWidth="0.5" opacity="0.3" />
                  <line x1="160" y1="0" x2="160" y2="200" stroke="#14b8a6" strokeWidth="0.5" opacity="0.3" />
                  
                  {/* Abstract land masses */}
                  <path
                    d="M30 80 Q60 60 90 70 T140 65 T180 90 L180 130 Q150 150 100 140 T40 150 L30 80Z"
                    fill="#14b8a6"
                    fillOpacity="0.2"
                    stroke="#14b8a6"
                    strokeWidth="1"
                  />
                  <path
                    d="M60 120 Q80 110 100 115 T130 120"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="2"
                    strokeDasharray="4 2"
                  />
                  
                  {/* Location points */}
                  <circle cx="70" cy="90" r="4" fill="#14b8a6" />
                  <circle cx="120" cy="85" r="3" fill="#d97706" />
                  <circle cx="150" cy="100" r="3" fill="#2563eb" />
                  
                  {/* Coordinate labels */}
                  <text x="10" y="195" fill="#94a3b8" fontSize="8" fontFamily="monospace">12.9716° N</text>
                  <text x="130" y="195" fill="#94a3b8" fontSize="8" fontFamily="monospace">77.5946° E</text>
                </svg>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 text-[#14b8a6]/50 text-xs font-mono">
                  LAT: 12.97
                </div>
                <div className="absolute bottom-4 left-4 text-[#14b8a6]/50 text-xs font-mono">
                  LONG: 77.59
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <p className="text-[#14b8a6] italic text-base sm:text-lg">
                {"\""}Where geospatial intelligence meets production engineering.{"\""}
              </p>

              <p className="text-[#94a3b8] leading-relaxed text-sm sm:text-base">
                I{"'"}m a Software Engineer at Esri India — the world{"'"}s leading GIS platform company — where I build and modernize production-grade geospatial applications using C#, .NET WPF, .NET MAUI, and the full ArcGIS SDK ecosystem.
              </p>

              <p className="text-[#94a3b8] leading-relaxed text-sm sm:text-base">
                My work spans defense-grade surveillance systems at Bharat Electronics Limited (BEL), smart city infrastructure for Tata Steel, and{" "}
                <a 
                  href="https://play.google.com/store/apps/details?id=com.esriindia.ocwgis&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#14b8a6] hover:underline inline-flex items-center gap-1"
                >
                  OCWGIS
                  <ExternalLink size={12} />
                </a>
                {" "}— a published Android application live on Google Play Store. I sit at a rare intersection: deep GIS domain expertise combined with professional software engineering.
              </p>

              <p className="text-[#94a3b8] leading-relaxed text-sm sm:text-base">
                B.E. Gold Medalist with CGPA 9.36 from College of Engineering, Guindy — Anna University, Chennai. National competition winner at IIT Bombay{"'"}s AICTE Geospatial Marathon.
              </p>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12">
            {stats.map((stat, index) => {
              const content = (
                <>
                  <div
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#14b8a6] mb-1"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-[#94a3b8] flex items-center justify-center gap-1">
                    {stat.label}
                    {stat.link && <ExternalLink size={10} className="text-[#14b8a6] sm:w-3 sm:h-3" />}
                  </div>
                </>
              )
              
              return stat.link ? (
                <a
                  key={index}
                  href={stat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-4 sm:p-6 border border-[#1e2d4a] text-center hover:border-[#14b8a6]/50 active:scale-[0.98] transition-all"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={index}
                  className="glass rounded-xl p-4 sm:p-6 border border-[#1e2d4a] text-center"
                >
                  {content}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
