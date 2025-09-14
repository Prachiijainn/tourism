"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, ExternalLink, Info } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface GoogleMapsProps {
  locations?: Array<{
    name: string
    lat: number
    lng: number
    description?: string
  }>
  center?: { lat: number; lng: number }
  zoom?: number
}

// Default Jharkhand locations
const defaultLocations = [
  { name: "Ranchi", lat: 23.3441, lng: 85.3096, description: "Capital city of Jharkhand" },
  { name: "Hundru Falls", lat: 23.2676, lng: 85.5947, description: "98m high waterfall" },
  { name: "Betla National Park", lat: 23.8833, lng: 84.1833, description: "Wildlife sanctuary" },
  { name: "Netarhat", lat: 23.4667, lng: 84.2667, description: "Queen of Chotanagpur" },
  { name: "Deoghar", lat: 24.4833, lng: 86.7, description: "Baidyanath Temple" },
  { name: "Jamshedpur", lat: 22.8046, lng: 86.2029, description: "Steel city" },
]

export function GoogleMaps({ locations = defaultLocations, center, zoom = 8 }: GoogleMapsProps) {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null)

  // Default center to Ranchi if not provided
  const mapCenter = center || { lat: 23.3441, lng: 85.3096 }

  const handleGetDirections = (location: { lat: number; lng: number; name: string }) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}&destination_place_id=${encodeURIComponent(location.name)}`
    window.open(url, "_blank")
  }

  const handleViewOnMaps = (location: { lat: number; lng: number; name: string }) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`
    window.open(url, "_blank")
  }

  const handleViewAllOnMaps = () => {
    // Create a Google Maps URL with multiple waypoints
    const waypoints = locations.map((loc) => `${loc.lat},${loc.lng}`).join("|")
    const url = `https://www.google.com/maps/dir/${waypoints}`
    window.open(url, "_blank")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-emerald-600" />
          Jharkhand Destinations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Alert className="mb-4">
          <Info className="h-4 w-4" />
          <AlertDescription>Click on any location below to view it on Google Maps or get directions.</AlertDescription>
        </Alert>

        <div className="space-y-3">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`p-4 border rounded-lg transition-colors cursor-pointer hover:bg-emerald-50 hover:border-emerald-200 ${
                selectedLocation === index ? "bg-emerald-50 border-emerald-200" : "bg-white"
              }`}
              onClick={() => setSelectedLocation(selectedLocation === index ? null : index)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{location.name}</h3>
                  {location.description && <p className="text-sm text-gray-600 mb-2">{location.description}</p>}
                  <div className="text-xs text-gray-500">
                    Coordinates: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                  </div>
                </div>
                <MapPin className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
              </div>

              {selectedLocation === index && (
                <div className="mt-3 pt-3 border-t border-gray-200 flex gap-2">
                  <Button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleViewOnMaps(location)
                    }}
                    variant="outline"
                    size="sm"
                    className="text-xs"
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    View on Maps
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleGetDirections(location)
                    }}
                    variant="outline"
                    size="sm"
                    className="text-xs"
                  >
                    <Navigation className="h-3 w-3 mr-1" />
                    Get Directions
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <Button onClick={handleViewAllOnMaps} className="w-full bg-emerald-600 hover:bg-emerald-700">
            <MapPin className="h-4 w-4 mr-2" />
            View All Locations on Google Maps
          </Button>
        </div>

        <div className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
          <div className="text-sm text-emerald-800">
            <strong>Interactive Experience:</strong> This component provides direct links to Google Maps for the best
            navigation experience without requiring any API setup.
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
