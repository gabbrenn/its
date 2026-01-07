import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Code, Smartphone, Briefcase, Cpu, Cloud, Zap, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description:
        "Custom applications and platforms built with modern technology stacks to meet your unique business requirements. From concept to deployment, we deliver scalable solutions.",
      features: ["Custom Web Applications", "Enterprise Software", "API Development", "System Integration"],
      image: "/enterprise-resource-planning-erp-system.jpg",
    },
    {
      icon: Smartphone,
      title: "Web & Mobile Applications",
      description:
        "User-centric web and mobile applications designed for performance, scalability, and seamless user experience across all devices and platforms.",
      features: ["iOS & Android Apps", "Progressive Web Apps", "Cross-Platform Development", "UI/UX Design"],
      image: "/digital-banking-platform-fintech.jpg",
    },
    {
      icon: Briefcase,
      title: "IT Consulting",
      description:
        "Strategic technology guidance and consulting services to optimize your digital operations, infrastructure, and drive business transformation.",
      features: ["Digital Strategy", "Technology Assessment", "Process Optimization", "Change Management"],
      image: "/education-management-system-elearning.jpg",
    },
    {
      icon: Cpu,
      title: "System Design & Integration",
      description:
        "Enterprise system architecture, integration, and optimization services for complex technology environments requiring seamless connectivity.",
      features: ["Enterprise Architecture", "Legacy Modernization", "Third-Party Integration", "Microservices"],
      image: "/supply-chain-logistics-optimization.jpg",
    },
    {
      icon: Cloud,
      title: "Cloud & Digital Solutions",
      description:
        "Cloud infrastructure, migration, and management services to enhance scalability, reduce operational costs, and improve business agility.",
      features: ["Cloud Migration", "AWS & Azure", "DevOps & CI/CD", "Infrastructure Management"],
      image: "/healthcare-management-patient-portal.jpg",
    },
    {
      icon: Zap,
      title: "AI & Automation",
      description:
        "Artificial intelligence and automation solutions to streamline processes, reduce manual work, and unlock new business opportunities.",
      features: ["Machine Learning", "Process Automation", "Chatbots & AI Assistants", "Predictive Analytics"],
      image: "/ecommerce-marketplace-platform.jpg",
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
              Our Services
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Technology Solutions That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Drive Results</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Comprehensive technology services tailored to your business needs, delivering innovation and excellence at every step.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, i) => {
                const Icon = service.icon
                return (
                  <div
                    key={i}
                    className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 animate-scale-in"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link 
                        href="/contact" 
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                      >
                        Learn More <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-24 px-6 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                How We Work
              </span>
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Approach</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We combine technical expertise with strategic thinking to deliver solutions that drive real business value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Discovery", desc: "Understanding your needs, goals, and challenges" },
                { step: "02", title: "Design", desc: "Crafting solutions that align with your vision" },
                { step: "03", title: "Development", desc: "Building with quality, security, and scalability" },
                { step: "04", title: "Delivery", desc: "Launching and supporting your success" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 group text-center"
                >
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Let's discuss your project and explore how we can help you achieve your technology goals.
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
