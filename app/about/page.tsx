import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Heart, Target, Lightbulb, Users, Award, Briefcase, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function About() {
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
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Empowering Businesses Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Innovation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Building tomorrow's solutions through expertise, innovation, and trusted partnerships that drive meaningful results.
            </p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 px-6 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground">
              <div>
                <p className="text-3xl md:text-4xl font-bold">5+</p>
                <p className="text-sm opacity-80">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold">50+</p>
                <p className="text-sm opacity-80">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold">100+</p>
                <p className="text-sm opacity-80">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold">15+</p>
                <p className="text-sm opacity-80">Team Members</p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                Our Story
              </span>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                A Journey of Innovation and Excellence
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  Inzira Technology Solutions Ltd was founded with a bold vision: to empower businesses across Africa with 
                  world-class technology solutions. "Inzira" means "path" or "direction" in Kinyarwanda, reflecting our 
                  unwavering commitment to guiding organizations on their digital transformation journey.
                </p>
                <p>
                  We specialize in delivering enterprise-grade IT solutions that seamlessly combine innovation, reliability, 
                  and deep local expertise. Our team of experienced professionals works closely with clients to understand 
                  their unique challenges and deliver tailored solutions that drive measurable, lasting results.
                </p>
              </div>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
              >
                Work With Us <ArrowRight size={18} />
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden border border-border shadow-2xl shadow-primary/10">
              <img
                src="/enterprise-resource-planning-erp-system.jpg"
                alt="Inzira Tech Team"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 px-6 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                Purpose
              </span>
              <h2 className="text-4xl font-bold text-foreground">Mission & Vision</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-card border border-border rounded-3xl hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower organizations with innovative technology solutions that drive sustainable growth, 
                  improve operational efficiency, and create lasting value for all stakeholders.
                </p>
              </div>
              
              <div className="p-8 bg-card border border-border rounded-3xl hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                  <Lightbulb className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted technology partner of choice for businesses and institutions 
                  across Africa and beyond, setting the standard for excellence and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                What Drives Us
              </span>
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and how we serve our clients
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Innovation", 
                  desc: "We embrace new ideas and cutting-edge technologies to deliver solutions that keep our clients ahead of the curve", 
                  icon: Lightbulb,
                  color: "from-blue-500 to-cyan-500"
                },
                { 
                  title: "Integrity", 
                  desc: "We uphold the highest ethical standards in all our dealings, building trust through transparency and honesty", 
                  icon: Heart,
                  color: "from-rose-500 to-pink-500"
                },
                { 
                  title: "Excellence", 
                  desc: "We deliver quality in everything we do, continuously improving and exceeding expectations", 
                  icon: Award,
                  color: "from-amber-500 to-orange-500"
                },
              ].map((value, i) => {
                const Icon = value.icon
                return (
                  <div
                    key={i}
                    className="text-center p-8 rounded-3xl border border-border bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-24 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                Our Team
              </span>
              <h2 className="text-4xl font-bold text-foreground mb-4">Led by Experts</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our leadership team brings decades of combined experience in technology and business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Leadership", role: "Strategic Direction", icon: Briefcase },
                { name: "Engineering", role: "Technical Excellence", icon: Users },
                { name: "Delivery", role: "Project Success", icon: Award },
              ].map((team, i) => {
                const Icon = team.icon
                return (
                  <div key={i} className="p-8 bg-card border border-border rounded-3xl text-center hover:shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{team.name}</h3>
                    <p className="text-muted-foreground">{team.role}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all group"
            >
              Get in Touch <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
