"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GoogleMaps } from "@/components/google-maps"
import { MapPin, Clock, Star, Download, Share, Calendar, DollarSign } from "lucide-react"
import ReactMarkdown from "react-markdown"
import removeMd from "remove-markdown"

interface ItineraryDisplayProps {
  itinerary: string
  preferences: {
    duration: string
    budget: string
    groupSize: string
    interests: string[]
  }
}

export function ItineraryDisplay({ itinerary, preferences }: ItineraryDisplayProps) {

const handleDownload = () => {
  const plainText = removeMd(itinerary) // remove **, ##, etc.
  const element = document.createElement("a")
  const file = new Blob([plainText], { type: "text/plain" })
  element.href = URL.createObjectURL(file)
  element.download = "jharkhand-itinerary.txt"
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}


  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Jharkhand Travel Itinerary",
          text: itinerary,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      navigator.clipboard.writeText(itinerary)
      alert("Itinerary copied to clipboard!")
    }
  }

  return (
    <div className="space-y-6">
      {/* Trip Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-emerald-600" />
            Your Personalized Jharkhand Itinerary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gray-500" />
              <span className="text-sm">{preferences.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-gray-500" />
              <span className="text-sm capitalize">{preferences.budget}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span className="text-sm capitalize">{preferences.groupSize}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-500" />
              <span className="text-sm">AI Generated</span>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold mb-2">Your Interests:</h4>
            <div className="flex flex-wrap gap-2">
              {preferences.interests.map((interest, index) => (
                <Badge key={index} variant="secondary">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={handleDownload} variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button onClick={handleShare} variant="outline" size="sm">
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Google Maps */}
      <GoogleMaps />

      {/* Detailed Itinerary */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Itinerary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed">
            <ReactMarkdown>{itinerary}</ReactMarkdown>
          </div>
        </CardContent>
      </Card>

      {/* Travel Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Travel Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-start gap-2">
              <Star className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>Book accommodations in advance, especially during peak season (October–March).</span>
            </div>
            <div className="flex items-start gap-2">
              <Star className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>Carry rain gear if traveling during monsoon for the best waterfall experience.</span>
            </div>
            <div className="flex items-start gap-2">
              <Star className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>Respect local tribal customs and ask permission before photographing people.</span>
            </div>
            <div className="flex items-start gap-2">
              <Star className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>Hire local guides for wildlife parks and treks for safety and better experience.</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
