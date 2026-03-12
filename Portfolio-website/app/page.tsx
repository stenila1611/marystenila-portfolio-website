"use client"

import Navbar from "@/components/portfolio/navbar"
import Hero from "@/components/portfolio/hero"
import About from "@/components/portfolio/about"
import Experience from "@/components/portfolio/experience"
import Projects from "@/components/portfolio/projects"
import Skills from "@/components/portfolio/skills"
import Awards from "@/components/portfolio/awards"
import Contact from "@/components/portfolio/contact"
import ScrollProgress from "@/components/portfolio/scroll-progress"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // IntersectionObserver for scroll-triggered section animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-[#0a0f1e]">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Awards />
      <Contact />
      <footer className="py-8 text-center text-[#94a3b8] text-sm border-t border-[#1e2d4a]">
        <p>Mary Stenila · GIS Software Engineer · Esri India · Gold Medalist · © 2025</p>
      </footer>
    </main>
  )
}
