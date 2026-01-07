"use client"
import { useState, useEffect } from "react"

const companies = [
  { name: "Rwanda ICT Chamber", initial: "RIC", color: "from-primary to-accent" },
  { name: "Bank of Kigali", initial: "BK", color: "from-blue-500 to-blue-600" },
  { name: "MTN Rwanda", initial: "MTN", color: "from-yellow-500 to-orange-500" },
  { name: "RwandAir", initial: "WB", color: "from-sky-500 to-blue-600" },
  { name: "Equity Bank", initial: "EB", color: "from-red-500 to-red-600" },
  { name: "BRD", initial: "BRD", color: "from-green-600 to-green-700" },
  { name: "Rwanda ICT Chamber", initial: "RIC", color: "from-primary to-accent" },
  { name: "Bank of Kigali", initial: "BK", color: "from-blue-500 to-blue-600" },
  { name: "MTN Rwanda", initial: "MTN", color: "from-yellow-500 to-orange-500" },
  { name: "RwandAir", initial: "WB", color: "from-sky-500 to-blue-600" },
]

export default function TrustedCompanies() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <div className="flex items-center justify-center gap-3 mb-10">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50"></div>
        <p className="text-center text-muted-foreground text-sm font-semibold uppercase tracking-widest">
          Trusted by Leading Companies
        </p>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50"></div>
      </div>
      <div className="relative w-full overflow-hidden">
        {/* Gradient edge overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex animate-scroll gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-36 h-24 bg-card border border-border rounded-2xl flex items-center justify-center hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 group"
            >
              <div className="text-center">
                <div className={`w-11 h-11 bg-gradient-to-br ${company.color} rounded-xl flex items-center justify-center mx-auto mb-2 shadow-md group-hover:scale-110 transition-transform`}>
                  <span className="text-xs font-bold text-white">{company.initial}</span>
                </div>
                <p className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-balance px-2">{company.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
