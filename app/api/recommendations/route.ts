import { generateTravelRecommendations } from "@/lib/ai"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    // Check if Groq API key is configured
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: "Groq API key not configured. Please set GROQ_API_KEY environment variable." }, 
        { status: 500 }
      )
    }

    const { preferences, duration, budget } = await req.json()

    const recommendations = await generateTravelRecommendations(preferences, duration, budget)

    return NextResponse.json({ recommendations })
  } catch (error) {
    console.error("Recommendations API error:", error)
    return NextResponse.json(
      { error: "Failed to generate recommendations. Please check your API key and try again." }, 
      { status: 500 }
    )
  }
}
