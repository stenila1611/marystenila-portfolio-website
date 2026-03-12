"use client"

import Image from "next/image"
import { MapPin, Download } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0f1e]"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          {/* Coordinate grid lines */}
          <svg className="w-full h-full animate-drift" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#14b8a6" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        {/* Mobile: Stack with photo first, Desktop: Side by side */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left w-full">
            {/* Overline */}
            <p
              className="text-[#14b8a6] text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium animate-fade-in-up flex flex-wrap items-center justify-center lg:justify-start gap-x-2 sm:gap-x-3 gap-y-1"
              style={{ animationDelay: "0ms" }}
            >
              <span>GIS Software Engineer</span>
              <span className="w-1 h-1 rounded-full bg-[#14b8a6] hidden sm:block" />
              <span className="sm:hidden">|</span>
              <span>.NET Developer</span>
              <span className="w-1 h-1 rounded-full bg-[#14b8a6] hidden sm:block" />
              <span className="sm:hidden">|</span>
              <span>Bangalore, India</span>
            </p>

            {/* Name */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#f1f5f9] tracking-tight animate-blur-in"
              style={{ fontFamily: "var(--font-syne)", letterSpacing: "-1px", animationDelay: "0ms" }}
            >
              MARY<br className="sm:hidden" /> STENILA
            </h1>

            {/* Taglines */}
            <div className="space-y-2 animate-fade-in-left" style={{ animationDelay: "200ms" }}>
              <p className="text-lg sm:text-xl md:text-2xl text-[#14b8a6] font-medium text-balance">
                I build the software that makes maps intelligent.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-[#94a3b8]">
                Production .NET applications | ArcGIS SDK | 3+ years at Esri India
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 animate-fade-in-up justify-center lg:justify-start" style={{ animationDelay: "300ms" }}>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-[#14b8a6] text-[#0a0f1e] font-semibold rounded-lg hover:bg-[#14b8a6]/90 transition-colors text-sm sm:text-base"
              >
                <MapPin size={18} />
                View My Work
              </a>
              <a
            
                href="https://drive.google.com/uc?export=download&id=1BAti1ncR4RdOPaqLwOOpHqB9yIey05Br"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 border-2 border-[#14b8a6] text-[#14b8a6] font-semibold rounded-lg hover:bg-[#14b8a6]/10 transition-colors text-sm sm:text-base"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            {/* Stat Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4 animate-fade-in-up justify-center lg:justify-start" style={{ animationDelay: "400ms" }}>
              <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#d97706]/20 text-[#d97706] text-[10px] sm:text-xs font-medium rounded-full">
                <span>🏅</span> Gold Medalist — CEG Anna University
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#14b8a6]/20 text-[#14b8a6] text-[10px] sm:text-xs font-medium rounded-full">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Esri India
              </span>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div className="relative flex justify-center animate-fade-in-right mb-4 lg:mb-0" style={{ animationDelay: "300ms" }}>
            {/* Floating Decorative Elements - Hidden on small mobile */}
            <div className="absolute -top-4 -right-4 text-[#14b8a6]/30 text-xs font-mono animate-float hidden sm:block">
              12.97°N
            </div>
            <div className="absolute -bottom-4 -left-4 text-[#14b8a6]/30 text-xs font-mono animate-float hidden sm:block" style={{ animationDelay: "1s" }}>
              77.59°E
            </div>
            
            {/* Map Pin Decorations - Hidden on small mobile */}
            <div className="absolute top-10 -left-8 text-[#14b8a6]/40 animate-float hidden md:block" style={{ animationDelay: "0.5s" }}>
              <MapPin size={20} />
            </div>
            <div className="absolute bottom-20 -right-6 text-[#14b8a6]/40 animate-float hidden md:block" style={{ animationDelay: "1.5s" }}>
              <MapPin size={16} />
            </div>

            {/* Grid Dots - Hidden on mobile */}
            <div className="absolute inset-0 opacity-20 hidden md:block">
              <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-[#14b8a6]" />
              <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-[#14b8a6]" />
              <div className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full bg-[#14b8a6]" />
            </div>

            {/* Profile Photo Container */}
            <div className="relative">
              <div
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-[#111827] overflow-hidden"
                style={{
                  boxShadow: "0 0 0 3px #14b8a6, 0 0 30px rgba(20, 184, 166, 0.3)",
                }}
              >
                <Image
                  src="/images/mary-stenila.jpg"
                  alt="Mary Stenila - GIS Software Engineer"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 rounded-full border-2 border-[#14b8a6]/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-[#14b8a6] animate-pulse" />
        </div>
      </div>
    </section>
  )
}
