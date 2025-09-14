import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Calendar, Star } from "lucide-react"
import Link from "next/link"
import type { Destination } from "@/lib/destinations-data"

interface DestinationCardProps {
  destination: Destination
}

export function DestinationCard({ destination }: DestinationCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800"
      case "Moderate":
        return "bg-yellow-100 text-yellow-800"
      case "Challenging":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={destination.image || "/placeholder.svg"}
          alt={destination.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-white/90 text-gray-900">
            {destination.type}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge className={getDifficultyColor(destination.difficulty)}>{destination.difficulty}</Badge>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
            {destination.name}
          </h3>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm text-gray-600">4.5</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{destination.district} District</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{destination.description}</p>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{destination.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{destination.bestTime}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {destination.highlights.slice(0, 2).map((highlight, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {highlight}
            </Badge>
          ))}
          {destination.highlights.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{destination.highlights.length - 2} more
            </Badge>
          )}
        </div>

        <div className="flex gap-2">
          <Link href={`/destinations/${destination.id}`} className="flex-1">
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">View Details</Button>
          </Link>
          <Button variant="outline" size="icon" asChild>
            <a href={destination.mapsUrl} target="_blank" rel="noopener noreferrer">
              <MapPin className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
