import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { ChatBot } from "@/components/chat-bot"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Clock, Calendar, Star, Camera, Plane, Train, Car, Bed, Activity, NavigationIcon } from "lucide-react"
import { destinations } from "@/lib/destinations-data"

interface DestinationPageProps {
  params: {
    id: string
  }
}

export default function DestinationPage({ params }: DestinationPageProps) {
  const destination = destinations.find((d) => d.id === params.id)

  if (!destination) {
    notFound()
  }

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
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 mt-16 overflow-hidden">
        <img
          src={destination.image || "/placeholder.svg"}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">{destination.name}</h1>
            <div className="flex items-center justify-center gap-4 text-lg">
              <Badge variant="secondary" className="bg-white/20 text-white">
                {destination.type}
              </Badge>
              <div className="flex items-center gap-1">
                <MapPin className="h-5 w-5" />
                <span>{destination.district} District</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  <TabsTrigger value="activities">Activities</TabsTrigger>
                  <TabsTrigger value="travel">Travel Info</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>About {destination.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed">{destination.description}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Highlights</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {destination.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Nearby Attractions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {destination.nearbyAttractions.map((attraction, index) => (
                          <Badge key={index} variant="outline">
                            {attraction}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="gallery" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {destination.gallery.map((image, index) => (
                      <div key={index} className="relative overflow-hidden rounded-lg">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${destination.name} ${index + 1}`}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="activities" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Activity className="h-5 w-5" />
                        Things to Do
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {destination.activities.map((activity, index) => (
                          <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                            <Camera className="h-4 w-4 text-emerald-600" />
                            <span className="text-gray-700">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="travel" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <NavigationIcon className="h-5 w-5" />
                        How to Reach
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Plane className="h-5 w-5 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">By Air</h4>
                          <p className="text-gray-600">{destination.howToReach.byAir}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Train className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">By Rail</h4>
                          <p className="text-gray-600">{destination.howToReach.byRail}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Car className="h-5 w-5 text-orange-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">By Road</h4>
                          <p className="text-gray-600">{destination.howToReach.byRoad}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Bed className="h-5 w-5" />
                        Accommodation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {destination.accommodation.map((option, index) => (
                          <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                            <Bed className="h-4 w-4 text-emerald-600" />
                            <span className="text-gray-700">{option}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Difficulty</span>
                    <Badge className={getDifficultyColor(destination.difficulty)}>{destination.difficulty}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{destination.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Best Time</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{destination.bestTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-current text-yellow-500" />
                      <span>4.5/5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 mb-3" asChild>
                    <a href={destination.mapsUrl} target="_blank" rel="noopener noreferrer">
                      <MapPin className="h-4 w-4 mr-2" />
                      View on Maps
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Add to Trip Plan
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <ChatBot />
    </div>
  )
}
