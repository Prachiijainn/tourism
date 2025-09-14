"use client"
import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { Mail, Lock } from "lucide-react"
import { useRouter } from "next/navigation"

interface AuthFormProps {
  onSuccess?: () => void
}

export default function AuthForm({ onSuccess }: AuthFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
    } else {
      setEmail("")
      setPassword("")
      onSuccess?.() 
      router.replace("/") // 👈 Redirect to homepage
    }

    setLoading(false)
  }

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signUp({ email, password })

    if (error) {
      setError(error.message)
    } else {
      onSuccess?.() 
      router.replace("/") // 👈 Redirect after signup
    }

    setLoading(false)
  }

  return (
    <div className="max-w-xl mx-auto rounded-3xl shadow-2xl p-12 border-transparent bg-white/45 backdrop-blur-2xl"
         style={{
           borderImage: "linear-gradient(135deg, #34d399 0%, #60a5fa 100%) 1",
           boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
         }}>
      <h2 className="text-4xl font-extrabold mb-8 text-white text-center tracking-tight drop-shadow-lg">Welcome!</h2>
      <form className="space-y-7">
        <div className="relative">
          <Mail className="absolute left-4 top-4 h-6 w-6 text-emerald-400" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-14 pr-4 py-4 rounded-xl bg-white/40 text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-emerald-400 text-lg font-medium"
          />
        </div>
        <div className="relative">
          <Lock className="absolute left-4 top-4 h-6 w-6 text-blue-400" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-14 pr-4 py-4 rounded-xl bg-white/40 text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400 text-lg font-medium"
          />
        </div>

        {error && <p className="text-red-500 text-center text-base font-semibold">{error}</p>}

        <div className="flex gap-6 justify-center mt-6">
          <button
            onClick={handleLogin}
            disabled={loading}
            className="bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition-all duration-150 text-lg"
          >
            {loading ? "Loading..." : "Login"}
          </button>
          <button
            onClick={handleSignup}
            disabled={loading}
            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition-all duration-150 text-lg"
          >
            {loading ? "Loading..." : "Signup"}
          </button>
        </div>
      </form>
    </div>
  )
}
