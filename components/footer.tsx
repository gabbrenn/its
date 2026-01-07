import Link from "next/link"
import Image from "next/image"
import { Mail, Linkedin, Twitter, Github, Phone, MapPin, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-secondary via-secondary to-primary/90 text-secondary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-secondary-foreground/70">Get the latest insights on technology trends and solutions</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-secondary-foreground placeholder:text-secondary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-colors flex items-center gap-2">
                Subscribe <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Inzira Technology Solutions Ltd logo"
                width={200}
                height={50}
                className="h-8 w-auto brightness-0 invert"
                priority
              />
            </div>
            <p className="text-secondary-foreground/70 mb-6 leading-relaxed">
              Empowering businesses with innovative technology solutions that drive growth and digital transformation.
            </p>
            <div className="flex gap-3">
              <a href="mailto:info@inzira.tech" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Mail size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-secondary-foreground/70 hover:text-accent transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-secondary-foreground/70 hover:text-accent transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-secondary-foreground/70 hover:text-accent transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/technologies" className="text-secondary-foreground/70 hover:text-accent transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Technologies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-foreground/70 hover:text-accent transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services" className="text-secondary-foreground/70 hover:text-accent transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-secondary-foreground/70 hover:text-accent transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-secondary-foreground/70 hover:text-accent transition-colors">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-secondary-foreground/70 hover:text-accent transition-colors">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-secondary-foreground/70 hover:text-accent transition-colors">
                  Data Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/70">Kigali, Rwanda</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:info@inzira.tech" className="text-secondary-foreground/70 hover:text-accent transition-colors">
                  info@inzira.tech
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <a href="tel:+250788000000" className="text-secondary-foreground/70 hover:text-accent transition-colors">
                  +250 788 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/60">
            &copy; {new Date().getFullYear()} Inzira Technology Solutions Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-secondary-foreground/60">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
