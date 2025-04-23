import Link from "next/link"
import Image from "next/image"
import { Heart, ChevronRight, Star, Users, MessageCircle, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="h-8 w-8 text-pink-500 animate-pulse" />
          <span className="text-2xl font-bold tracking-wider bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            NEON<span className="text-white">LOVE</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-gray-300 hover:text-pink-400 transition">
            Features
          </Link>
          <Link href="#testimonials" className="text-gray-300 hover:text-pink-400 transition">
            Testimonials
          </Link>
          <Link href="#" className="text-gray-300 hover:text-pink-400 transition">
            About
          </Link>
          <Button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white border-0 shadow-[0_0_15px_rgba(236,72,153,0.5)]">
            Sign Up
          </Button>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <span className="sr-only">Open menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-wider">
            <span className="block bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
              FIND YOUR PERFECT
            </span>
            <span className="block text-white">MATCH IN THE</span>
            <span className="block bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
              DIGITAL AGE
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-xl">
            Experience dating like it's 1985 - with a digital twist. Neon lights, radical connections, and totally
            awesome people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-blue-500 text-white border-0 text-lg px-8 shadow-[0_0_20px_rgba(236,72,153,0.6)] hover:shadow-[0_0_30px_rgba(236,72,153,0.8)] transition-shadow"
            >
              Start Matching Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-500 text-blue-400 hover:text-blue-300 hover:border-blue-400 text-lg px-8"
            >
              Learn More <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="w-full h-[400px] md:h-[500px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-lg blur-3xl"></div>
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Dating app interface"
              width={500}
              height={500}
              className="relative z-10 mx-auto"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-md rounded-full bg-pink-500/20 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-md rounded-full bg-blue-500/20 blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
              TOTALLY RADICAL FEATURES
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10 text-pink-500" />,
                title: "Smart Matching",
                description:
                  "Our AI finds your perfect match based on your radical taste in music, movies, and fashion.",
              },
              {
                icon: <MessageCircle className="h-10 w-10 text-blue-500" />,
                title: "Retro Chat",
                description: "Send messages with nostalgic 80s slang suggestions and custom neon stickers.",
              },
              {
                icon: <Zap className="h-10 w-10 text-pink-500" />,
                title: "Neon Boost",
                description: "Get a temporary profile boost with our signature neon glow to stand out from the crowd.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-950 p-8 rounded-lg border border-gray-800 hover:border-pink-500/50 transition-all duration-300 group"
              >
                <div className="mb-4 p-3 rounded-full bg-gray-800 w-fit group-hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-shadow">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-pink-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
              WHAT OUR USERS SAY
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "DiscoDebbie",
                text: "Found my dance partner for life! The 80s mixer event was totally tubular!",
              },
              { name: "NeonNick", text: "The profile customization is rad! Love adding my favorite synth tracks." },
              {
                name: "AerobicAnnie",
                text: "Met my boyfriend at a virtual 80s workout class. Now we're a power couple!",
              },
              { name: "RetroRandy", text: "The throwback filters make my profile pics look totally bodacious!" },
              { name: "SynthiaStar", text: "The mixtape feature is like, so awesome! Sharing music sealed the deal." },
              { name: "MulletMike", text: "Business in the front, party in the profile. Found my perfect match!" },
              { name: "GlowstickGloria", text: "The neon chat themes make messaging so much more exciting!" },
              {
                name: "BoomboxBobby",
                text: "Dropped my virtual mixtape and found someone who appreciates good tunes.",
              },
              { name: "VHSVicky", text: "The video date feature is like having my own Max Headroom moment. Rad!" },
              { name: "PacManPete", text: "The arcade game ice-breakers are a genius way to start conversations!" },
              { name: "CassetteCarla", text: "Rewinding through profiles until I found my perfect match. Worth it!" },
              { name: "FluorescentFred", text: "My profile is brighter than my future, and that's saying something!" },
              { name: "WalkmanWendy", text: "The voice message feature is like sending a personal mixtape. Love it!" },
              { name: "PixelPaul", text: "The 8-bit profile games helped me stand out. High score in love!" },
              { name: "LegwarmersLisa", text: "From matching sweatbands to matching hearts. Thanks NeonLove!" },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">
                      {testimonial.name}
                    </h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-pink-500" fill="#ec4899" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-400">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-950">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="block bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
                READY TO FIND YOUR
              </span>
              <span className="block text-white">RADICAL ROMANCE?</span>
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of singles looking for love in the most awesome decade-inspired dating app.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-blue-500 text-white border-0 text-lg px-10 py-6 shadow-[0_0_20px_rgba(236,72,153,0.6)] hover:shadow-[0_0_30px_rgba(236,72,153,0.8)] transition-shadow"
            >
              Start Your 80s Love Story
            </Button>
            <p className="text-gray-400 text-sm">
              No credit card required. Free to join. Neon sunglasses not included.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Heart className="h-6 w-6 text-pink-500" />
              <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
                NEON<span className="text-white">LOVE</span>
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
              <Link href="#" className="text-gray-400 hover:text-pink-400 transition">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-400 transition">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-400 transition">
                Contact Us
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-400 transition">
                Help Center
              </Link>
            </div>
            <div className="flex gap-4">
              {["facebook", "twitter", "instagram", "tiktok"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-pink-500 hover:text-pink-500 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {social === "facebook" && (
                      <>
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </>
                    )}
                    {social === "twitter" && (
                      <>
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </>
                    )}
                    {social === "instagram" && (
                      <>
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </>
                    )}
                    {social === "tiktok" && (
                      <>
                        <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                        <path d="M16 8v8" />
                        <path d="M12 16v-8" />
                        <path d="M20 12a8 8 0 0 0-8-8" />
                      </>
                    )}
                  </svg>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} NeonLove. All rights reserved. Stay rad!</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
