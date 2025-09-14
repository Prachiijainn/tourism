"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Mountain, MapPin, Calendar, Phone, Info, UserRound, TramFront } from "lucide-react"
import { supabase } from "@/lib/supabaseClient"
import { useEffect, useState } from "react"
import AuthForm from "./AuthForm"

interface NavigationProps {
  onLoginClick?: () => void
}

export function Navigation({ onLoginClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [showAuth, setShowAuth] = useState(false) // <-- ADDED: control popup

  const navItems = [
    { href: "/", label: "Home", icon: Mountain },
    { href: "/destinations", label: "Destinations", icon: MapPin },
    { href: "/planner", label: "Trip Planner", icon: Calendar },
    { href: "/trains", label: "Trains", icon: TramFront },
    { href: "/about", label: "About", icon: Info },
    { href: "/contact", label: "Contact", icon: Phone },
  ]

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  async function handleLogout() {
    await supabase.auth.signOut()
  }

  return (
    <nav className="fixed top-0 w-full bg-white backdrop-blur-sm border-b border-emerald-100 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-emerald-700">
  <div className="w-18 sm:w-20 md:w-20 lg:w-25">
    <img src="/logo.png" alt="Elephant" className="w-full h-auto" />
  </div>
            <span className="sm:block font-bold text-xl"> Jharkhand</span ><span className="m:block font-bold text-xl text-yellow-500"> भ्रमण </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
            {user ? (
              <button
                onClick={handleLogout}
                className="ml-4 flex items-center bg-transparent hover:bg-gray-100 p-2 rounded"
                title="Logout"
              >
                <UserRound className="h-6 w-6 text-red-600" />
              </button>
            ) : (
              <button
                onClick={onLoginClick}
                className="ml-4 flex items-center bg-transparent hover:bg-gray-100 p-2 rounded"
                title="Login"
              >
                <UserRound className="h-6 w-6 text-gray-700" />
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-emerald-100 py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
              {user ? (
                <button
                  onClick={() => {
                    handleLogout()
                    setIsOpen(false)
                  }}
                  className="flex items-center bg-transparent hover:bg-gray-100 p-2 rounded"
                  title="Logout"
                >
                  <UserRound className="h-6 w-6 text-red-600" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    onLoginClick?.()
                    setIsOpen(false)
                  }}
                  className="flex items-center bg-transparent hover:bg-gray-100 p-2 rounded"
                  title="Login"
                >
                  <UserRound className="h-6 w-6 text-gray-700" />
                </button>
              )}
              {/* Render AuthForm only when explicitly shown */}
              {showAuth && <AuthForm onSuccess={() => setShowAuth(false)} />}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
