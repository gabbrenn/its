import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import TechCarousel from "@/components/tech-carousel"
import TrustedCompanies from "@/components/trusted-companies"
import Link from "next/link"
import { ArrowRight, Zap, Lock, Cpu, LineChart, Users, Award, Globe, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        <section className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 flex items-center justify-center px-6 relative overflow-hidden mt-[-80px] pt-32">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/tech-background-circuit-board.jpg')" }}
          ></div>

          {/* Animated background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,139,34,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,139,34,.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40 animate-fade-in"></div>
          
          {/* Gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="text-left">
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs md:text-sm font-semibold text-primary animate-slide-up">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Enterprise Technology Partner
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight animate-slide-up"
                style={{ animationDelay: "100ms" }}
              >
                Transform Your Business with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Innovative Technology
                </span>
              </h1>

              <p
                className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl text-pretty leading-relaxed animate-slide-up"
                style={{ animationDelay: "200ms" }}
              >
                Enterprise-grade software solutions, cloud infrastructure, and digital transformation services 
                that drive growth and operational excellence for ambitious organizations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "300ms" }}>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 font-semibold flex items-center justify-center gap-2 group text-sm md:text-base"
                >
                  Start Your Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/projects"
                  className="px-8 py-3.5 border-2 border-primary/30 text-foreground rounded-xl hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 font-semibold text-sm md:text-base"
                >
                  View Our Work
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-10 flex items-center gap-6 animate-slide-up" style={{ animationDelay: "400ms" }}>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">ISO Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">24/7 Support</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div
                className="relative w-full aspect-square rounded-3xl overflow-hidden animate-scale-in shadow-2xl shadow-primary/20"
                style={{ animationDelay: "400ms" }}
              >
                <img src="/tech-background-circuit-board.jpg" alt="Technology Solutions" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                
                {/* Floating stats card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-background/90 backdrop-blur-md rounded-2xl border border-border shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">50+</p>
                      <p className="text-xs text-muted-foreground">Projects</p>
                    </div>
                    <div className="w-px h-10 bg-border"></div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">98%</p>
                      <p className="text-xs text-muted-foreground">Satisfaction</p>
                    </div>
                    <div className="w-px h-10 bg-border"></div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">5+</p>
                      <p className="text-xs text-muted-foreground">Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-primary to-accent relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Users, value: "100+", label: "Happy Clients" },
                { icon: Award, value: "50+", label: "Projects Delivered" },
                { icon: Globe, value: "10+", label: "Countries Served" },
                { icon: CheckCircle, value: "99%", label: "Success Rate" },
              ].map((stat, i) => {
                const Icon = stat.icon
                return (
                  <div key={i} className="text-center text-primary-foreground">
                    <Icon className="w-8 h-8 mx-auto mb-3 opacity-90" />
                    <p className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
                    <p className="text-sm opacity-80">{stat.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Trusted Companies Section */}
        <section className="py-20 px-6 bg-background border-y border-border">
          <div className="max-w-6xl mx-auto">
            <TrustedCompanies />
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                What We Offer
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive technology solutions designed to solve your toughest business challenges
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Cpu,
                  title: "Software Development",
                  desc: "Custom applications built with modern technologies and best practices for scalability and performance",
                },
                {
                  icon: Zap,
                  title: "IT Consulting",
                  desc: "Strategic guidance for digital transformation, technology optimization, and business process improvement",
                },
                {
                  icon: Lock,
                  title: "Cloud Solutions",
                  desc: "Scalable infrastructure, seamless migration services, and enterprise-grade security implementations",
                },
                {
                  icon: LineChart,
                  title: "Data & Analytics",
                  desc: "Advanced analytics, business intelligence, and data-driven insights to power informed decisions",
                },
              ].map((service, i) => {
                const Icon = service.icon
                return (
                  <div
                    key={i}
                    className="p-8 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 group animate-scale-in"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  </div>
                )
              })}
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 text-primary font-semibold hover:bg-primary/5 rounded-xl transition-colors"
              >
                View All Services <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                Technologies
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Technology Stack</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We leverage industry-leading technologies to build robust, scalable solutions
              </p>
            </div>

            <TechCarousel />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                Why Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Inzira Tech</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Partner with a team that delivers excellence, innovation, and measurable results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Expert Team", desc: "Seasoned professionals with proven industry expertise", icon: "👨‍💻" },
                { title: "Quality First", desc: "Rigorous testing and best practices on every project", icon: "✨" },
                { title: "Scalable Solutions", desc: "Architecture designed to grow with your business", icon: "🚀" },
                { title: "Security Focused", desc: "Enterprise-grade security and compliance standards", icon: "🔒" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 bg-card border border-border rounded-2xl text-center hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 animate-fade-in group"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve your technology goals and drive meaningful growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-xl hover:bg-white/90 transition-all duration-300 font-semibold shadow-lg shadow-black/10 group"
              >
                Start Your Journey <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-primary-foreground rounded-xl hover:bg-white/10 transition-all duration-300 font-semibold"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
