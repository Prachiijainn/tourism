"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Calendar } from "lucide-react"
import Link from "next/link"

const heroImages = [
  "/hundru-falls-jharkhand-waterfall-scenic.jpg",
  "/netarhat-hills-sunrise-jharkhand-landscape.jpg",
  "/betla-national-park-jharkhand-wildlife-forest.jpg",
  "/baidyanath-temple-deoghar-jharkhand-pilgrimage.jpg",
]

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Jharkhand landscape ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-balance">
          Discover the Heart of <span className="text-emerald-400 animate-pulse">Jharkhand</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-delay text-pretty">
          Explore pristine waterfalls, ancient temples, wildlife sanctuaries, and rich tribal culture in India's land of
          forests
        </p>

        {/* Quick Search */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 animate-slide-up">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search destinations, activities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-gray-300"
              />
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
              <Search className="h-4 w-4 mr-2" />
              Explore
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delay">
          <Link href="/destinations">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <MapPin className="h-5 w-5 mr-2" />
              View Destinations
            </Button>
          </Link>
          <Link href="/planner">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Plan Your Trip
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
