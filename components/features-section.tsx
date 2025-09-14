import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mountain, Compass, Camera, Users, Leaf, Star } from "lucide-react"

const features = [
  {
    icon: Mountain,
    title: "Scenic Waterfalls",
    description: "Discover breathtaking waterfalls like Hundru, Dassam, and Jonha Falls",
    color: "text-blue-600",
  },
  {
    icon: Compass,
    title: "AI Trip Planner",
    description: "Get personalized itineraries based on your preferences and budget",
    color: "text-emerald-600",
  },
  {
    icon: Camera,
    title: "Wildlife Sanctuaries",
    description: "Explore Betla National Park and spot tigers, elephants, and exotic birds",
    color: "text-orange-600",
  },
  {
    icon: Users,
    title: "Cultural Heritage",
    description: "Experience rich tribal culture and visit ancient temples and monuments",
    color: "text-purple-600",
  },
  {
    icon: Leaf,
    title: "Eco-Tourism",
    description: "Sustainable travel options that preserve Jharkhand's natural beauty",
    color: "text-green-600",
  },
  {
    icon: Star,
    title: "Local Experiences",
    description: "Authentic local guides and immersive cultural experiences",
    color: "text-yellow-600",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-balance">Why Choose Jharkhand Explorer?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            We make exploring Jharkhand's natural wonders and cultural treasures effortless and memorable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
