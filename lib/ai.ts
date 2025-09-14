import { generateText, streamText } from "ai"
import { groq } from "@ai-sdk/groq"

// Initialize Groq model with API key from environment variables
const model = groq("llama-3.1-8b-instant", {
  apiKey: process.env.GROQ_API_KEY,
})

const JHARKHAND_SYSTEM_PROMPT = `You are an expert travel guide for Jharkhand, India. You have extensive knowledge about:

MAJOR DESTINATIONS:
- Ranchi (capital city, Tagore Hill, Rock Garden, Jagannath Temple)
- Jamshedpur (Tata Steel city, Jubilee Park, Dalma Wildlife Sanctuary)
- Dhanbad (coal capital, Maithon Dam, Topchanchi Lake)
- Bokaro (steel city, City Park, Garga Dam)
- Deoghar (Baidyanath Temple, one of 12 Jyotirlingas)
- Hazaribagh (National Park, Canary Hill, Hazaribagh Lake)

NATURAL ATTRACTIONS:
- Betla National Park (tigers, elephants, wildlife safari)
- Dalma Wildlife Sanctuary (elephants, leopards)
- Netarhat (Queen of Chotanagpur, sunrise/sunset point)
- Hundru Falls (98m waterfall near Ranchi)
- Jonha Falls (Gautamdhara Falls)
- Dassam Falls (39m waterfall)
- Hirni Falls
- Patratu Valley (scenic valley and dam)

CULTURAL & RELIGIOUS SITES:
- Baidyanath Dham (Deoghar) - major pilgrimage site
- Parasnath Hill - Jain pilgrimage site
- Rajrappa Temple (Chhinnamasta Devi)
- Jagannath Temple (Ranchi)
- Sun Temple (Bundu)

TRIBAL CULTURE:
- Rich tribal heritage (Santhal, Munda, Oraon, Ho tribes)
- Traditional festivals (Sarhul, Karma, Sohrai)
- Tribal art and crafts
- Folk music and dance

PRACTICAL INFO:
- Best time: October to March
- Languages: Hindi, English, local tribal languages
- Transportation: Well connected by rail, road, and air
- Local cuisine: Litti chokha, Dhuska, Rugra, Bamboo shoot curry

Always provide specific, actionable advice with local insights and cultural context.`

export async function generateTravelRecommendations(preferences: string, duration: string, budget: string) {
  const { text } = await generateText({
    model,
    system: JHARKHAND_SYSTEM_PROMPT,
    prompt: `Create a detailed travel itinerary for Jharkhand based on these preferences:
    - Travel preferences: ${preferences}
    - Duration: ${duration}
    - Budget: ${budget}
    
    Include specific places, activities, accommodation suggestions, local food recommendations, and practical travel tips. Format the response in a structured way with day-by-day breakdown. Include estimated costs and transportation details.`,
  })

  return text
}

export async function generateChatResponse(message: string, context?: string) {
  const { text } = await generateText({
    model,
    system: JHARKHAND_SYSTEM_PROMPT,
    prompt: `User message: ${message}
    ${context ? `Context: ${context}` : ""}
    
    Provide a helpful, friendly response about Jharkhand travel. Be specific with place names, distances, timings, and practical tips.`,
  })

  return text
}

export function streamChatResponse(message: string, context?: string) {
  return streamText({
    model,
    system: JHARKHAND_SYSTEM_PROMPT,
    prompt: `User message: ${message}
    ${context ? `Context: ${context}` : ""}
    
    Provide a helpful, friendly response about Jharkhand travel. Be specific with place names, distances, timings, and practical tips.`,
  })
}
