"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, Sparkles, Users, Calendar, DollarSign, MapPin } from "lucide-react"

interface TripPlannerFormProps {
  onSubmit: (data: TripPlannerData) => void
  isLoading: boolean
}

export interface TripPlannerData {
  duration: string
  budget: string
  groupSize: string
  interests: string[]
  preferences: string
  startDate: string
}

const interestOptions = [
  "Waterfalls & Nature",
  "Wildlife & Safari",
  "Temples & Pilgrimage",
  "Adventure & Trekking",
  "Photography",
  "Cultural Experiences",
  "Hill Stations",
  "Historical Sites",
]

const budgetOptions = [
  { value: "budget", label: "Budget (₹2,000-5,000 per person)" },
  { value: "mid-range", label: "Mid-range (₹5,000-10,000 per person)" },
  { value: "luxury", label: "Luxury (₹10,000+ per person)" },
]

export function TripPlannerForm({ onSubmit, isLoading }: TripPlannerFormProps) {
  const [formData, setFormData] = useState<TripPlannerData>({
    duration: "",
    budget: "",
    groupSize: "",
    interests: [],
    preferences: "",
    startDate: "",
  })

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const isFormValid = formData.duration && formData.budget && formData.groupSize && formData.interests.length > 0

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Sparkles className="h-6 w-6 text-emerald-600" />
          Trip Planner
        </CardTitle>
        <p className="text-gray-600">
          Tell us your preferences and our AI will create a personalized itinerary for your Jharkhand adventure
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Duration */}
          <div className="space-y-2">
            <Label htmlFor="duration" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Trip Duration
            </Label>
            <Select value={formData.duration} onValueChange={(value) => setFormData({ ...formData, duration: value })}>
              <SelectTrigger>
                <SelectValue placeholder="How long is your trip?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-2 days">1-2 days (Weekend getaway)</SelectItem>
                <SelectItem value="3-4 days">3-4 days (Short trip)</SelectItem>
                <SelectItem value="5-7 days">5-7 days (Week-long adventure)</SelectItem>
                <SelectItem value="8+ days">8+ days (Extended exploration)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Budget */}
          <div className="space-y-2">
            <Label htmlFor="budget" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Budget Range
            </Label>
            <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select your budget range" />
              </SelectTrigger>
              <SelectContent>
                {budgetOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Group Size */}
          <div className="space-y-2">
            <Label htmlFor="groupSize" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Group Size
            </Label>
            <Select
              value={formData.groupSize}
              onValueChange={(value) => setFormData({ ...formData, groupSize: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="How many people?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="solo">Solo traveler</SelectItem>
                <SelectItem value="couple">Couple (2 people)</SelectItem>
                <SelectItem value="small-group">Small group (3-5 people)</SelectItem>
                <SelectItem value="large-group">Large group (6+ people)</SelectItem>
                <SelectItem value="family">Family with children</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Start Date */}
          <div className="space-y-2">
            <Label htmlFor="startDate" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Preferred Start Date
            </Label>
            <Input
              type="date"
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          {/* Interests */}
          <div className="space-y-3">
            <Label>What interests you most? (Select multiple)</Label>
            <div className="grid grid-cols-2 gap-2">
              {interestOptions.map((interest) => (
                <Badge
                  key={interest}
                  variant={formData.interests.includes(interest) ? "default" : "outline"}
                  className={`cursor-pointer p-2 text-center transition-colors ${
                    formData.interests.includes(interest)
                      ? "bg-emerald-600 hover:bg-emerald-700"
                      : "hover:bg-emerald-50"
                  }`}
                  onClick={() => handleInterestToggle(interest)}
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>

          {/* Additional Preferences */}
          <div className="space-y-2">
            <Label htmlFor="preferences">Additional Preferences (Optional)</Label>
            <Textarea
              placeholder="Any specific requirements, accessibility needs, or special interests? e.g., vegetarian food, photography spots, adventure activities..."
              value={formData.preferences}
              onChange={(e) => setFormData({ ...formData, preferences: e.target.value })}
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700"
            disabled={!isFormValid || isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Creating Your Itinerary...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" />
                Generate AI Itinerary
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
