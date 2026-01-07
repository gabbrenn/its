import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ExternalLink, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      name: "Enterprise Resource Planning System",
      description:
        "Comprehensive ERP solution for a leading manufacturing company, streamlining operations across departments and improving efficiency by 40%.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      client: "Manufacturing Sector",
      image: "/enterprise-resource-planning-erp-system.jpg",
      results: ["40% efficiency increase", "Real-time reporting", "Unified operations"],
    },
    {
      name: "Digital Banking Platform",
      description:
        "Full-featured mobile and web banking platform enabling secure financial transactions, serving over 100,000 active users.",
      technologies: ["Next.js", "TypeScript", "Spring Boot", "Microservices"],
      client: "Financial Services",
      image: "/digital-banking-platform-fintech.jpg",
      results: ["100K+ active users", "99.9% uptime", "PCI DSS compliant"],
    },
    {
      name: "Education Management System",
      description:
        "Integrated platform for student management, course delivery, and performance tracking for educational institutions across the region.",
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
      client: "Education Sector",
      image: "/education-management-system-elearning.jpg",
      results: ["50+ institutions", "Enhanced learning", "Real-time analytics"],
    },
    {
      name: "Supply Chain Optimization",
      description:
        "AI-powered logistics and inventory management system reducing costs by 25% and improving delivery efficiency across multiple warehouses.",
      technologies: ["Python", "Machine Learning", "React", "PostgreSQL"],
      client: "Logistics & Supply Chain",
      image: "/supply-chain-logistics-optimization.jpg",
      results: ["25% cost reduction", "AI-powered insights", "Predictive analytics"],
    },
    {
      name: "Healthcare Management Portal",
      description:
        "HIPAA-compliant patient management and telehealth platform for medical institutions, enabling remote consultations and secure health records.",
      technologies: ["Next.js", "Blockchain", "Node.js", "AWS"],
      client: "Healthcare",
      image: "/healthcare-management-patient-portal.jpg",
      results: ["HIPAA compliant", "Telehealth enabled", "Secure records"],
    },
    {
      name: "E-Commerce Marketplace",
      description:
        "Scalable multi-vendor marketplace with advanced payment integration and analytics dashboard, processing thousands of transactions daily.",
      technologies: ["Next.js", "React", "Stripe", "PostgreSQL"],
      client: "Retail & E-Commerce",
      image: "/ecommerce-marketplace-platform.jpg",
      results: ["Multi-vendor support", "Payment integration", "Real-time analytics"],
    },
  ]

  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-primary/10 via-background to-accent/5 relative overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
              Our Portfolio
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Projects That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Make Impact</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Discover how we've helped organizations across diverse industries achieve their technology goals and drive meaningful results.
            </p>
          </div>
        </section>
        
        {/* Stats */}
        <section className="py-12 px-6 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground">
              <div>
                <p className="text-3xl md:text-4xl font-bold">50+</p>
                <p className="text-sm opacity-80">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold">6+</p>
                <p className="text-sm opacity-80">Industries Served</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold">98%</p>
                <p className="text-sm opacity-80">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold">10+</p>
                <p className="text-sm opacity-80">Countries Reached</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium">
                        {project.client}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                    
                    {/* Results */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-foreground mb-3">Key Results</p>
                      <div className="flex flex-wrap gap-2">
                        {project.results.map((result, j) => (
                          <span key={j} className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                            <CheckCircle className="w-3 h-3" /> {result}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Technologies */}
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-3">Technologies Used</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, j) => (
                          <span
                            key={j}
                            className="px-3 py-1.5 bg-muted text-foreground text-xs font-medium rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">Have a Project in Mind?</h2>
            <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our expertise and proven track record.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all group"
            >
              Start Your Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
