"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { TripPlannerForm, type TripPlannerData } from "@/components/trip-planner-form"
import { ItineraryDisplay } from "@/components/itinerary-display"
import { ChatBot } from "@/components/chat-bot"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, MapPin, Calendar, ArrowLeft } from "lucide-react"

export default function PlannerPage() {
  const [itinerary, setItinerary] = useState<string>("")
  const [preferences, setPreferences] = useState<TripPlannerData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string>("")

  const handleFormSubmit = async (data: TripPlannerData) => {
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/recommendations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          preferences: `Interests: ${data.interests.join(", ")}. Group: ${data.groupSize}. Additional preferences: ${
            data.preferences || "None"
          }`,
          duration: data.duration,
          budget: data.budget,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate itinerary")
      }

      const result = await response.json()
      setItinerary(result.recommendations)
      setPreferences(data)
    } catch (err) {
      setError("Failed to generate itinerary. Please try again.")
      console.error("Error generating itinerary:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleStartOver = () => {
    setItinerary("")
    setPreferences(null)
    setError("")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-emerald-600 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">AI Trip Planner</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto text-pretty">
            Get personalized itineraries powered by AI, tailored to your interests, budget, and travel style
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!itinerary ? (
            <div className="space-y-12">
              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card className="text-center">
                  <CardHeader>
                    <Sparkles className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                    <CardTitle>AI-Powered</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Advanced AI analyzes your preferences to create the perfect Jharkhand itinerary
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <MapPin className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                    <CardTitle>Personalized</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Customized recommendations based on your interests, budget, and group size
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Calendar className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                    <CardTitle>Detailed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Day-by-day itineraries with activities, accommodations, and travel tips
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Form */}
              <TripPlannerForm onSubmit={handleFormSubmit} isLoading={isLoading} />

              {/* Error Display */}
              {error && (
                <Card className="max-w-2xl mx-auto border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <p className="text-red-600 text-center">{error}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              {/* Back Button */}
              <Button onClick={handleStartOver} variant="outline" className="mb-6 bg-transparent">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Plan Another Trip
              </Button>

              {/* Itinerary Display */}
              {preferences && <ItineraryDisplay itinerary={itinerary} preferences={preferences} />}
            </div>
          )}
        </div>
      </section>

      <ChatBot />
    </div>
  )
}
