"use client"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HeritageSection } from "@/components/heritage-section"
import { Footer } from "@/components/footer"
import { ChatBot } from "@/components/chat-bot"
import AuthForm from "@/components/AuthForm"

export default function HomePage() {
  const [showAuth, setShowAuth] = useState(false)

  return (
    <>
      <main className="min-h-screen">
        <Navigation onLoginClick={() => setShowAuth(true)} />
        <HeroSection />
        <FeaturesSection />
        <HeritageSection />
        <ChatBot />
      </main>
      <Footer />

      {/* Modal for AuthForm */}
      {showAuth && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
          <div className="bg-transparent rounded-lg shadow-lg p-6 relative ">
            <button
              onClick={() => setShowAuth(false)}
              className="absolute top-2 right-2 text-red-500 text-2xl"
              aria-label="Close"
            >
              ×
            </button>
            <AuthForm />
          </div>
        </div>
      )}
    </>
  )
}
