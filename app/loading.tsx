"use client"
import { useState, useEffect } from "react"

export default function Loading() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    // Force loader to stay for at least 2 seconds
    const timer = setTimeout(() => setShow(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null // Hide loader after time

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent z-50">
      <img 
        src="/logo.png" 
        alt="Loading Jharkhand..." 
        className="w-40 h-40 animate-pulse" 
      />
    </div>
  )
}