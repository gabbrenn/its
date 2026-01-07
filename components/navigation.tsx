"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50 animate-slide-down">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Inzira Technology Solutions Ltd logo"
            width={350}
            height={75}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            href="/technologies"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Tech Stack
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 font-semibold text-sm"
        >
          Get Started
        </Link>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border animate-slide-down">
          <div className="px-6 py-4 space-y-4">
            <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link href="/services" className="block text-muted-foreground hover:text-primary transition-colors font-medium">
              Services
            </Link>
            <Link href="/projects" className="block text-muted-foreground hover:text-primary transition-colors font-medium">
              Projects
            </Link>
            <Link href="/technologies" className="block text-muted-foreground hover:text-primary transition-colors font-medium">
              Tech Stack
            </Link>
            <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors font-medium">
              Contact
            </Link>
            <Link
              href="/contact"
              className="block w-full px-4 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl hover:shadow-lg transition-all text-center font-semibold"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
