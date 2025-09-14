import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mountain, MapPin, Camera, Star, Clock, Users } from "lucide-react"
import Link from "next/link"

const heritagePlaces = [
  {
    id: "hundru-falls",
    name: "Hundru Falls",
    type: "Waterfall",
    location: "Ranchi",
    image: "/hundru-falls-jharkhand-waterfall-scenic.jpg",
    description: "One of the highest waterfalls in Jharkhand, cascading 98 meters down rocky cliffs",
    highlights: ["Scenic Views", "Photography", "Nature Trek"],
    rating: 4.8,
    visitors: "High",
    bestTime: "Monsoon"
  },
  {
    id: "betla-national-park",
    name: "Betla National Park",
    type: "Wildlife Sanctuary",
    location: "Palamu",
    image: "/betla-national-park-jharkhand-wildlife-forest.jpg",
    description: "Home to tigers, elephants, and diverse wildlife in pristine forest landscapes",
    highlights: ["Wildlife Safari", "Tiger Spotting", "Nature Photography"],
    rating: 4.9,
    visitors: "Medium",
    bestTime: "Winter"
  },
  {
    id: "baidyanath-temple",
    name: "Baidyanath Temple",
    type: "Religious Site",
    location: "Deoghar",
    image: "/baidyanath-temple-deoghar-jharkhand-pilgrimage.jpg",
    description: "One of the 12 Jyotirlingas, a sacred pilgrimage destination for devotees",
    highlights: ["Pilgrimage", "Spiritual Experience", "Architecture"],
    rating: 4.7,
    visitors: "Very High",
    bestTime: "All Year"
  },
  {
    id: "netarhat",
    name: "Netarhat",
    type: "Hill Station",
    location: "Latehar",
    image: "/netarhat-hills-sunrise-jharkhand-landscape.jpg",
    description: "Queen of Chotanagpur, famous for breathtaking sunrise and sunset views",
    highlights: ["Sunrise Views", "Cool Climate", "Scenic Beauty"],
    rating: 4.6,
    visitors: "Medium",
    bestTime: "Winter"
  },
  {
    id: "dassam-falls",
    name: "Dassam Falls",
    type: "Waterfall",
    location: "Ranchi",
    image: "/dassam-falls-jharkhand-forest-waterfall.jpg",
    description: "A spectacular 39-meter waterfall surrounded by lush green forests",
    highlights: ["Waterfall", "Forest Trek", "Natural Pool"],
    rating: 4.5,
    visitors: "High",
    bestTime: "Monsoon"
  },
  {
    id: "parasnath-hill",
    name: "Parasnath Hill",
    type: "Religious Site",
    location: "Giridih",
    image: "/parasnath-hill-jain-temples-jharkhand-peak.jpg",
    description: "Sacred Jain pilgrimage site with ancient temples atop the highest peak",
    highlights: ["Jain Temples", "Trekking", "Spiritual Journey"],
    rating: 4.4,
    visitors: "Medium",
    bestTime: "Winter"
  }
]

export function HeritageSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mountain className="h-8 w-8 text-emerald-600" />
            <h2 className="text-4xl font-bold text-gray-900 text-balance">
              Famous Places & Heritage Sites
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Discover Jharkhand's most iconic destinations, from majestic waterfalls to sacred temples and pristine wildlife sanctuaries
          </p>
        </div>

        {/* Heritage Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {heritagePlaces.map((place) => (
            <Card key={place.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-emerald-600 text-white">
                    {place.type}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span className="text-white text-xs font-medium">{place.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-1">{place.name}</h3>
                  <div className="flex items-center gap-1 text-white/90 text-sm">
                    <MapPin className="h-3 w-3" />
                    <span>{place.location}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {place.description}
                </p>
                
                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {place.highlights.map((highlight, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
                
                {/* Info Row */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{place.visitors}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{place.bestTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link href="/destinations">
            <div className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors group">
              <Camera className="h-5 w-5 group-hover:scale-110 transition-transform" />
              Explore All Destinations
              <MapPin className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
