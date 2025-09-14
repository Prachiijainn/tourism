import { Navigation } from "@/components/navigation"
import { ChatBot } from "@/components/chat-bot"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mountain, Users, Sparkles, Heart, Award, Globe, TreePine, Camera } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Priya Sharma",
      role: "Founder & Travel Expert",
      description:
        "Born in Ranchi, Priya has explored every corner of Jharkhand and is passionate about sustainable tourism.",
      image: "/team-priya-jharkhand-travel-expert.jpg",
    },
    {
      name: "Rajesh Kumar",
      role: "Local Guide Coordinator",
      description: "Connects travelers with authentic local experiences and manages our network of certified guides.",
      image: "/team-rajesh-local-guide-coordinator.jpg",
    },
    {
      name: "Anita Devi",
      role: "Cultural Heritage Specialist",
      description: "Expert in tribal culture and traditions, ensuring respectful and educational cultural exchanges.",
      image: "/team-anita-cultural-heritage-specialist.jpg",
    },
  ]

  const values = [
    {
      icon: TreePine,
      title: "Sustainable Tourism",
      description: "We promote eco-friendly travel that preserves Jharkhand's natural beauty for future generations.",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "We work with local communities to ensure tourism benefits everyone, not just visitors.",
    },
    {
      icon: Heart,
      title: "Authentic Experiences",
      description: "We connect you with genuine local culture, traditions, and hidden gems off the beaten path.",
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "Our AI-powered recommendations and local expertise ensure exceptional travel experiences.",
    },
  ]

  const achievements = [
    { number: "10,000+", label: "Happy Travelers" },
    { number: "50+", label: "Destinations Covered" },
    { number: "200+", label: "Local Partners" },
    { number: "4.8/5", label: "Average Rating" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-emerald-600 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">About Jharkhand Explorer</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto text-pretty">
            Your trusted companion for discovering the natural wonders and cultural treasures of Jharkhand
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Jharkhand Explorer was born from a deep love for the "Land of Forests" and a desire to share its hidden
                treasures with the world. We believe that travel should be transformative, sustainable, and respectful
                of local communities and environments.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our AI-powered platform combines cutting-edge technology with local expertise to create personalized
                travel experiences that showcase the best of Jharkhand's waterfalls, wildlife, temples, and tribal
                culture.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-emerald-100 text-emerald-800 px-3 py-1">
                  <Sparkles className="h-4 w-4 mr-1" />
                  AI-Powered
                </Badge>
                <Badge className="bg-emerald-100 text-emerald-800 px-3 py-1">
                  <Globe className="h-4 w-4 mr-1" />
                  Sustainable
                </Badge>
                <Badge className="bg-emerald-100 text-emerald-800 px-3 py-1">
                  <Mountain className="h-4 w-4 mr-1" />
                  Authentic
                </Badge>
              </div>
            </div>
            <div className="relative">
              <img
                src="/jharkhand-landscape-mission-about.jpg"
                alt="Jharkhand landscape"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from AI recommendations to local partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Local experts passionate about sharing Jharkhand's beauty with the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-emerald-600 font-semibold">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Numbers that reflect our commitment to exceptional travel experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-emerald-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/ai-technology-travel-planning.jpg"
                alt="AI Technology"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Powered by AI Technology</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our advanced AI system analyzes your preferences, travel style, and interests to create personalized
                itineraries that match your perfect Jharkhand adventure. From budget considerations to activity
                preferences, our AI ensures every recommendation is tailored just for you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Personalized itinerary generation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Camera className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Smart destination recommendations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">24/7 AI travel assistant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ChatBot />
    </div>
  )
}
