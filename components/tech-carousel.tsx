"use client"
import { useState, useEffect } from "react"

interface Technology {
  name: string
  icon: string
  category: string
}

const technologies: Technology[] = [
  { name: "Docker", icon: "🐳", category: "DevOps" },
  { name: "Azure", icon: "☁️", category: "Cloud" },
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "Next.js", icon: "▲", category: "Framework" },
  { name: "Python", icon: "🐍", category: "Backend" },
  { name: "PostgreSQL", icon: "🐘", category: "Database" },
  { name: "Kubernetes", icon: "☸️", category: "DevOps" },
  { name: "AWS", icon: "🌐", category: "Cloud" },
  { name: "TypeScript", icon: "📘", category: "Language" },
  { name: "Node.js", icon: "💚", category: "Backend" },
  { name: "MongoDB", icon: "🍃", category: "Database" },
  { name: "TensorFlow", icon: "🧠", category: "AI/ML" },
]

export default function TechCarousel() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const duplicatedTechs = [...technologies, ...technologies]

  return (
    <div className={`relative w-full overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex gap-6 animate-scroll py-4">
        {duplicatedTechs.map((tech, index) => (
          <div
            key={index}
            className="flex-shrink-0 group"
          >
            <div className="w-36 p-6 bg-card border border-border rounded-2xl hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-3 text-center group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <p className="text-sm font-semibold text-foreground text-center mb-1">
                {tech.name}
              </p>
              <p className="text-xs text-primary text-center font-medium">
                {tech.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
