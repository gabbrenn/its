import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowRight, Shield, Zap, TrendingUp, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Technologies() {
  const categories = [
    {
      name: "Frontend Development",
      description: "Modern, responsive user interfaces",
      tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
      image: "/tech-background-circuit-board.jpg",
      icon: "⚛️",
    },
    {
      name: "Backend Development",
      description: "Scalable server-side solutions",
      tools: ["Node.js", "Python", "Java", "Go", ".NET"],
      image: "/enterprise-resource-planning-erp-system.jpg",
      icon: "⚙️",
    },
    {
      name: "Cloud & DevOps",
      description: "Modern infrastructure management",
      tools: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
      image: "/digital-banking-platform-fintech.jpg",
      icon: "☁️",
    },
    {
      name: "AI & Machine Learning",
      description: "Intelligent automation solutions",
      tools: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Computer Vision"],
      image: "/education-management-system-elearning.jpg",
      icon: "🧠",
    },
    {
      name: "Mobile Development",
      description: "Native & cross-platform apps",
      tools: ["React Native", "Flutter", "Swift", "Kotlin", "iOS/Android"],
      image: "/supply-chain-logistics-optimization.jpg",
      icon: "📱",
    },
    {
      name: "Database & Storage",
      description: "Reliable data management",
      tools: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Firebase"],
      image: "/healthcare-management-patient-portal.jpg",
      icon: "🗄️",
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
              Tech Stack
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Built With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Modern Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              We leverage industry-leading technologies and frameworks to build robust, scalable, and secure solutions that stand the test of time.
            </p>
          </div>
        </section>

        {/* Technologies Grid */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, i) => (
                <div
                  key={i}
                  className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div>
                        <span className="text-3xl mb-2 block">{category.icon}</span>
                        <h3 className="text-xl font-bold text-white">{category.name}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                    <ul className="space-y-2">
                      {category.tools.map((tool, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-foreground text-sm font-medium">{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Approach */}
        <section className="py-24 px-6 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                Our Standards
              </span>
              <h2 className="text-4xl font-bold text-foreground mb-4">Technical Excellence</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every solution we build adheres to the highest standards of quality, security, and performance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  title: "Scalability", 
                  desc: "Systems designed to grow seamlessly with your business without performance degradation",
                  icon: TrendingUp,
                  color: "from-blue-500 to-cyan-500"
                },
                { 
                  title: "Security", 
                  desc: "Enterprise-grade security practices and compliance with industry standards",
                  icon: Shield,
                  color: "from-green-500 to-emerald-500"
                },
                { 
                  title: "Performance", 
                  desc: "Optimized architectures for speed, reliability, and exceptional user experience",
                  icon: Zap,
                  color: "from-amber-500 to-orange-500"
                },
                { 
                  title: "Quality", 
                  desc: "Rigorous testing, code reviews, and continuous integration for reliability",
                  icon: CheckCircle,
                  color: "from-purple-500 to-pink-500"
                },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="p-8 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 text-center group"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        
        {/* Partners/Certifications */}
        <section className="py-20 px-6 bg-background border-y border-border">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-muted-foreground mb-8">Certified Partners & Expertise</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {["AWS Partner", "Microsoft Partner", "Google Cloud", "ISO 27001", "GDPR Compliant"].map((partner, i) => (
                <div key={i} className="px-6 py-3 bg-card border border-border rounded-xl text-foreground font-medium hover:border-primary/30 transition-colors">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">Ready to Build Something Great?</h2>
            <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Let's leverage cutting-edge technology to bring your vision to life.
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
