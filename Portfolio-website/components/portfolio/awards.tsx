"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ExternalLink } from "lucide-react"

const certificates = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01_technovator_award-SMzGKr2aqGuTyBAJhI0iCTGn1r6Fem.jpg",
    icon: "🏅",
    title: "Technovator Award — Esri India",
    desc: "Awarded by MD Agendra Kumar for technical proficiency in achieving key project milestones and resolving complex functionalities — Q2 FY25-26.",
    isGold: true,
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/02_pat_back_BSS-nSACR5CiwKsQGNs6hMOKUT4vQM8s7K.jpg",
    icon: "👍",
    title: "Pat on the Back — BEL BSS Project",
    desc: "Mary quickly grasps requirements and delivers output efficiently. Completed all assigned tasks within planned time frame for BEL-BSS project — Q4 FY23-24.",
    isGold: true,
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/03_pat_back_OCW-0ZYbnECppy5NBqmMJJ98wDRRNdzwQ8.jpg",
    icon: "👍",
    title: "Pat on the Back — OCW GIS Project",
    desc: "Stenila efficiently closed the mobile application in a remarkably short time. Her commendable efforts facilitated the timely closure of the OCW project — Q2 FY24-25.",
    isGold: true,
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11_first_rank-eFbTiAPX7vED0iwU7kSTqu0vFTFqVM.jpg",
    icon: "🥇",
    title: "University First Rank — Anna University",
    desc: "Certificate of Award for securing First Rank in B.E. Geo Informatics (FT) Degree Programme, Anna University, Chennai — April-May 2023.",
    isGold: true,
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12_degree_cert-aehtewBKKZscu0cKVnKqKClgkhdvuI.jpg",
    icon: "🎓",
    title: "B.E. Geoinformatics Degree — Anna University",
    desc: "Degree of Bachelor of Engineering in Geoinformatics with First Class with Distinction from College of Engineering, Guindy Campus — April 2023.",
    isGold: false,
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10_digital_earth_summit-iFrbapWdGcnPhB4lKX9i8teXmAgeSg.jpg",
    icon: "🏆",
    title: "Mrs. Anandavalli Sundaram Memorial Prize",
    desc: "Certificate of Merit for General Proficiency in Geo Informatics during the year 2022-23, Alumni Association College of Engineering Guindy.",
    isGold: true,
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14_ceg_merit_proficiency-7ROePxkktpaiKZ3OopXWGjwX6cjbno.jpg",
    icon: "🏆",
    title: "Alumni Association Endowment Award 2007 II",
    desc: "Certificate of Merit for Maximum Aggregate III year Geo Informatics during the year 2021-22, CEG Alumni Association.",
    isGold: false,
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/08_ceg_merit_2020-3Fk66TEkNhoqnbUb4DgRbajl1MAuem.jpg",
    icon: "🏆",
    title: "Arvind Nagalapadi Endowment II",
    desc: "Certificate of Merit for securing Max Aggregate II yr Geo Informatics during the year 2020-2021, CEG Alumni Association.",
    isGold: false,
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/07_world_space_week-oimPQDsja2IhWmVjgqEzMtQ698CRDa.jpg",
    icon: "🏆",
    title: "1943-1947 Golden Jubilee Endowment",
    desc: "Certificate of Merit for securing Max Aggregate II yr Geo Informatics during the year 2020-2021, CEG Alumni Association.",
    isGold: false,
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/06_ceg_merit_2022-XFtwxZyvELltSOPT9J35nFcGeyIsSM.jpg",
    icon: "🚀",
    title: "World Space Week 2022 — First Prize",
    desc: "Certificate of Achievement for securing First Prize in 'Space Quest' event conducted as part of World Space Week 2022, IRS Anna University.",
    isGold: true,
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/09_iot_world_record-qQVhToOXhdcRbcY2beubdPfCd6JeC7.jpg",
    icon: "🌐",
    title: "9th Digital Earth Summit 2022",
    desc: "Certificate of Appreciation for role as member of Inauguration & Valedictory Committee for the 9th Digital Earth Summit hosted by IRS, Anna University — Sept 2022.",
    isGold: false,
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/04_esri_pat_BSS-aok41jv55tg9aFu0jD6Uzz0dcwIkoD.jpg",
    icon: "💻",
    title: "Kurukshetra 2020 — Operating Systems Workshop",
    desc: "Certificate of Appreciation for distinguished performance in Operating Systems Workshop held during Kurukshetra 2020, CEG Anna University — Feb 2020.",
    isGold: false,
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/05_esri_pat_OCW-OU4KqHBPGa84GWftY5Xg6SFvg6ZjxP.jpg",
    icon: "🌍",
    title: "IoT Hackathon World Record",
    desc: "Record Achievement Certificate for 'World Biggest International Hands-On IoT & Ethical Hacking Workshop' by Wikitechy and Microsoft Research Community — Jan 2020.",
    isGold: true,
  },
]

const onlineCertifications = [
  {
    icon: "📜",
    title: "Foundational C# with Microsoft",
    desc: "Microsoft-certified proficiency in C#, object-oriented programming, and .NET development.",
    link: "https://drive.google.com/file/d/1KdMJTZaBWHQij2EmsjXhDCe9HnptqBNw/view?usp=sharing",
  },
  {
    icon: "📜",
    title: "C# Ultimate Guide — Beginner to Advanced",
    desc: "Mastered C# from fundamentals to advanced concepts including OOP, design patterns, and best practices — Web Academy course by mentor Harsha Vardhan.",
    link: "https://www.udemy.com/certificate/UC-590470a5-5004-4745-ad36-801806137934/",
  },
]

export default function Awards() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  return (
    <section id="awards" className="py-16 sm:py-24 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <div className="mb-8 sm:mb-12 text-center lg:text-left">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f1f5f9] mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Awards & Certifications
            </h2>
            <div className="w-10 h-[3px] bg-[#14b8a6] mx-auto lg:mx-0" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-[#111827] rounded-xl overflow-hidden border border-[#1e2d4a] group hover:border-[#14b8a6]/50 active:scale-[0.98] transition-all duration-300"
              >
                <div
                  className="relative h-36 sm:h-44 overflow-hidden cursor-pointer"
                  onClick={() => setLightboxImage(cert.image)}
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent opacity-60" />
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#14b8a6] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-3 sm:p-4">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className={`text-xl sm:text-2xl flex-shrink-0 ${cert.isGold ? "animate-pulse" : ""}`}>
                      {cert.icon}
                    </span>
                    <div>
                      <h3
                        className="text-xs sm:text-sm font-bold text-[#f1f5f9] mb-1 line-clamp-2"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        {cert.title}
                      </h3>
                      <p className="text-[#94a3b8] text-[10px] sm:text-xs leading-relaxed line-clamp-3">
                        {cert.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3
            className="text-lg sm:text-xl font-bold text-[#f1f5f9] mb-4 sm:mb-6 text-center lg:text-left"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Online Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {onlineCertifications.map((cert, index) => (
              
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#111827] rounded-xl p-4 sm:p-6 border border-[#1e2d4a] hover:border-[#14b8a6]/50 active:scale-[0.98] transition-all group"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-2xl sm:text-3xl flex-shrink-0">{cert.icon}</span>
                  <div>
                    <h4
                      className="text-base sm:text-lg font-bold text-[#f1f5f9] mb-1 sm:mb-2 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {cert.title}
                      <ExternalLink size={14} className="text-[#14b8a6] group-hover:translate-x-1 transition-transform" />
                    </h4>
                    <p className="text-[#94a3b8] text-xs sm:text-sm leading-relaxed">{cert.desc}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white hover:text-[#14b8a6] transition-colors z-50 p-2 bg-black/50 rounded-full"
            aria-label="Close lightbox"
          >
            <X size={24} className="sm:w-8 sm:h-8" />
          </button>
          <div
            className="relative max-w-4xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage}
              alt="Certificate"
              width={1200}
              height={800}
              className="object-contain w-full h-full max-h-[85vh]"
            />
          </div>
        </div>
      )}
    </section>
  )
}
