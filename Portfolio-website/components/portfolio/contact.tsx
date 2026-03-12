"use client"

import { Mail, Phone, MapPin, Linkedin, Smartphone, ExternalLink } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "stenila1611@gmail.com",
    href: "mailto:stenila1611@gmail.com",
    isExternal: false,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7825067138",
    href: "tel:+917825067138",
    isExternal: false,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
    href: "https://maps.google.com/?q=Bangalore,India",
    isExternal: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/mary-stenila-60625a246/",
    isExternal: true,
  },
  {
    icon: Smartphone,
    label: "Play Store",
    value: "OCWGIS App",
    href: "https://play.google.com/store/apps/details?id=com.esriindia.ocwgis&pcampaignid=web_share",
    isExternal: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#111827]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          {/* Contact Card */}
          <div
            className="bg-[#0a0f1e] rounded-2xl p-6 sm:p-8 md:p-12 border border-[#1e2d4a] text-center"
            style={{ boxShadow: "0 0 60px rgba(20, 184, 166, 0.15)" }}
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f1f5f9] mb-3 sm:mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Let{"'"}s Build Something
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8] mb-6 sm:mb-8 max-w-md mx-auto">
              Open to GIS Software Engineer and .NET Developer roles. Available for senior opportunities in Bangalore and remote positions.
            </p>

            {/* Contact Items */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                const isMailOrPhone = item.label === "Email" || item.label === "Phone"
                
                return (
                  <a
                    key={index}
                    href={item.href}
                    target={item.isExternal ? "_blank" : "_self"}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-center sm:justify-start gap-2 px-4 py-3 sm:p-0 bg-[#1e2d4a]/50 sm:bg-transparent rounded-lg sm:rounded-none hover:bg-[#1e2d4a] sm:hover:bg-transparent transition-colors group"
                  >
                    <Icon size={18} className="text-[#14b8a6] shrink-0" />
                    <span className="text-[#94a3b8] group-hover:text-[#14b8a6] transition-colors text-sm">
                      {item.value}
                    </span>
                    {item.isExternal && (
                      <ExternalLink size={12} className="text-[#14b8a6] opacity-50 shrink-0" />
                    )}
                    {isMailOrPhone && !item.isExternal && (
                      <ExternalLink size={12} className="text-[#14b8a6] opacity-50 shrink-0 sm:hidden" />
                    )}
                  </a>
                )
              })}
            </div>

            {/* CTA Button */}
            <a
              href="mailto:stenila1611@gmail.com?subject=Hello%20Mary&body=Hi%20Mary,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ABest%20regards"
              target="_self"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#14b8a6] text-[#0a0f1e] font-semibold rounded-lg hover:bg-[#14b8a6]/90 active:scale-[0.98] transition-all text-sm sm:text-base"
            >
              <Mail size={18} />
              Send a Message
            </a>
            
            {/* Alternative contact note */}
            <p className="mt-4 text-xs text-[#94a3b8]/70">
              Or reach out directly at{" "}
              <a href="mailto:stenila1611@gmail.com" className="text-[#14b8a6] hover:underline">
                stenila1611@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
