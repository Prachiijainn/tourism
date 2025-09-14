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
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/10 rounded-3xl shadow-2xl p-0 sm:p-8 relative max-w-lg w-full mx-4">
            <button
              onClick={() => setShowAuth(false)}
              className="absolute top-4 right-6 text-red-500 text-3xl font-bold z-10"
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
