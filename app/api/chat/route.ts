import { streamChatResponse } from "@/lib/ai"
import type { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  try {
    if (!process.env.GROQ_API_KEY) {
      return new Response(
        JSON.stringify({
          error: "Groq API key not configured. Please set GROQ_API_KEY environment variable.",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      )
    }

    const { message, context } = await req.json()

    // Prepend a system instruction so responses are always in travel-guide format
    const systemPrompt = `
You are a Jharkhand Travel Itinerary Planner.

💡 Formatting Rules:
- Always start with: "Jharkhand Travel Itinerary"
- Use " Day X" headings (Day 1, Day 2, etc.)
- Inside each day, use clean formatting:
  - Use "Morning:", "Afternoon:", "Evening:", "Accommodation:", "Transportation:" as labels
  - DO NOT use "*" or raw Markdown stars for bullets
  - Instead, use line breaks or dashes (-) for lists
- At the end, always add:
  "💡Travel Tips"
- Keep it neat, aligned, and easy to read.
- Never stop mid-itinerary — always finish all days.
    `

    const result = streamChatResponse(message, {
      ...context,
      system: systemPrompt,
    })

    return result.toTextStreamResponse()
  } catch (error) {
    console.error("Chat API error:", error)
    return new Response(
      JSON.stringify({
        error: "Failed to process chat request. Please check your API key and try again.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    )
  }
}
