import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HeritageSection } from "@/components/heritage-section"
import { Footer } from "@/components/footer"
import { ChatBot } from "@/components/chat-bot"

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen">
        <Navigation />
        <HeroSection />
        <FeaturesSection />
        <HeritageSection />
        <ChatBot />
      </main>
      <Footer />
    </>
  )
}
