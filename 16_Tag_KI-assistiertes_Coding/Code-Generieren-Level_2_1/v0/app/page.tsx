"use client"

import { useState, useEffect } from "react"
import { Heart, ChevronDown, Star, Users, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToTestimonials = () => {
    document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-950 to-gray-950"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/30 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full filter blur-3xl"></div>
        </div>

        <nav className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-4 sm:p-6">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-pink-500 filter drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
            <span className="ml-2 text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 filter drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">
              NeonMatch
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#features" className="text-gray-300 hover:text-pink-400 transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-pink-400 transition-colors">
              Testimonials
            </a>
            <a href="#download" className="text-gray-300 hover:text-pink-400 transition-colors">
              Download
            </a>
          </div>
          <Button className="bg-transparent border border-pink-500 text-pink-500 hover:bg-pink-500/10 shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all">
            Sign In
          </Button>
        </nav>

        <div
          className={`z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 filter drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
              Find Your Radical Match
            </span>
            <br />
            <span className="text-white filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">in the Digital Age</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience dating like it's 1985. Totally tubular connections with bodacious people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="text-lg px-8 py-6 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white shadow-[0_0_20px_rgba(236,72,153,0.7)] hover:shadow-[0_0_25px_rgba(236,72,153,0.9)] transition-all">
              Start Matching Now
            </Button>
            <Button
              variant="outline"
              className="text-lg px-8 py-6 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_20px_rgba(34,211,238,0.7)] transition-all"
              onClick={scrollToTestimonials}
            >
              See Success Stories
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto z-10 relative">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 filter drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">
            Totally Rad Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-pink-500/30 shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all">
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(236,72,153,0.5)]">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Radical Matching</h3>
              <p className="text-gray-300">
                Our gnarly algorithm finds your perfect match based on your totally tubular personality.
              </p>
            </div>

            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                <MessageSquare className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Bodacious Chat</h3>
              <p className="text-gray-300">
                Send messages that would make even Max Headroom jealous with our awesome chat system.
              </p>
            </div>

            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                <Star className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Righteous Events</h3>
              <p className="text-gray-300">
                Join local events and meetups that are totally to the max with other rad singles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500/20 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto z-10 relative">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 filter drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">
            Totally Awesome Success Stories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              name="DiscoDebbie"
              quote="Like, totally found my soulmate! We bonded over our love for Cyndi Lauper and neon leg warmers!"
              image="/placeholder.svg?height=80&width=80"
            />
            <TestimonialCard
              name="RadicalRandy"
              quote="This app is, like, so tubular! Met my girlfriend at an 80s themed roller disco event. Gnarly!"
              image="/placeholder.svg?height=80&width=80"
            />
            <TestimonialCard
              name="SynthwaveSally"
              quote="NeonMatch is, like, totally the best! Found my boyfriend who shares my passion for keytar solos!"
              image="/placeholder.svg?height=80&width=80"
            />
            <TestimonialCard
              name="ArcadeBilly"
              quote="Met my match at a Pac-Man tournament organized through the app. Now we're high score partners for life!"
              image="/placeholder.svg?height=80&width=80"
            />
            <TestimonialCard
              name="BreakdanceBetty"
              quote="Found my radical dude who can do the worm as good as me! Thanks NeonMatch for the bodacious connection!"
              image="/placeholder.svg?height=80&width=80"
            />
            <TestimonialCard
              name="MulletMike"
              quote="Business in the front, party in the back, and love all around! This app is totally righteous!"
              image="/placeholder.svg?height=80&width=80"
            />
            <TestimonialCard
              name="ValleyGirlVicky"
              quote="Oh my gosh! Like, totally found the most awesome guy ever! He even has a DeLorean! As if!"
              image="/placeholder.svg?height=80&width=80"
            />
            <TestimonialCard
              name="BoomboxBarry"
              quote="Found someone who appreciates my mixtapes! Our first date was exchanging cassettes. Rad!"
              image="/placeholder.svg?height=80&width=80"
            />
            <TestimonialCard
              name="NeonNancy"
              quote="The algorithm is, like, totally psychic! Found my perfect match who loves neon as much as me!"
              image="/placeholder.svg?height=80&width=80"
            />
            <TestimonialCard
              name="TubularTom"
              quote="Dude! This app is like, totally awesome! Found my bodacious babe who loves surfing and Van Halen!"
              image="/placeholder.svg?height=80&width=80"
            />
            <TestimonialCard
              name="AerobicAnnie"
              quote="Met my swolemate who loves Jane Fonda workouts as much as I do! We're getting physical together!"
              image="/placeholder.svg?height=80&width=80"
            />
            <TestimonialCard
              name="HairMetalHarry"
              quote="Found a babe who digs my epic guitar solos and doesn't mind my teased hair! Rock on, NeonMatch!"
              image="/placeholder.svg?height=80&width=80"
            />
            <TestimonialCard
              name="RollerbladeRita"
              quote="Zoomed right into love! Found my skating partner who loves neon wheels as much as I do!"
              image="/placeholder.svg?height=80&width=80"
            />
            <TestimonialCard
              name="CassetteCarl"
              quote="Found someone who appreciates my extensive tape collection! Our love is recorded on both sides!"
              image="/placeholder.svg?height=80&width=80"
            />
            <TestimonialCard
              name="FerrisWheelerWendy"
              quote="Life moves pretty fast, but NeonMatch helped me slow down and find my perfect match! Totally rad!"
              image="/placeholder.svg?height=80&width=80"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/20 to-gray-950"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center z-10 relative">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 filter drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">
            Ready to Find Your Radical Match?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Don't be a total dweeb! Download NeonMatch now and start your bodacious journey to finding love in the most
            awesome decade style!
          </p>
          <Button className="text-lg px-10 py-7 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white shadow-[0_0_20px_rgba(236,72,153,0.7)] hover:shadow-[0_0_25px_rgba(236,72,153,0.9)] transition-all">
            Download Now & Get Matching
          </Button>
          <p className="mt-4 text-gray-400">Available on iOS and Android. Like, totally free!</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Heart className="h-6 w-6 text-pink-500 filter drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
            <span className="ml-2 text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
              NeonMatch
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
              About
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
              Contact
            </a>
          </div>
          <div className="text-gray-400 text-sm">© {new Date().getFullYear()} NeonMatch. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

interface TestimonialCardProps {
  name: string
  quote: string
  image: string
}

function TestimonialCard({ name, quote, image }: TestimonialCardProps) {
  return (
    <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-pink-500/20 hover:border-pink-500/40 shadow-[0_0_10px_rgba(236,72,153,0.2)] hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]">
          <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
            {name}
          </h3>
          <div className="flex">
            <Star className="h-4 w-4 text-pink-500" />
            <Star className="h-4 w-4 text-pink-500" />
            <Star className="h-4 w-4 text-pink-500" />
            <Star className="h-4 w-4 text-pink-500" />
            <Star className="h-4 w-4 text-pink-500" />
          </div>
        </div>
      </div>
      <p className="text-gray-300 italic">"{quote}"</p>
    </div>
  )
}
