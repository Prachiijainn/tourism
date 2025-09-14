"use client"
import { useState } from "react"
import { TrainFront, Search, MapPin, Clock, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const sampleTrains = [
  {
    name: "KRIYA YOGA EXP",
    number: "18615",
    from: "Kolkata (HWH)",
    to: "Ranchi (RNC)",
    departure: "08:30 AM",
    arrival: "12:45 PM",
    status: "On Time",
  },
  {
    name: "BBS BHN SPL",
    number: "02832",
    from: "Bhubaneswar",
    to: "Ranchi",
    departure: "10:00 AM",
    arrival: "01:30 PM",
    status: "Delayed",
  },
  {
    name: "HATIA EXPRESS",
    number: "12811",
    from: "Raipur Jn (R)",
    to: "Ranchi",
    departure: "06:15 AM",
    arrival: "09:00 AM",
    status: "On Time",
  },
  {
    name: "RNC JANSHATABDI",
    number: "12365",
    from: "Patna Jn (PNBE)",
    to: "Ranchi",
    departure: "06:15 AM",
    arrival: "09:00 AM",
    status: "On Time",
  },
]

function Trains() {
  const [search, setSearch] = useState("")

  const filteredTrains = sampleTrains.filter(
    train =>
      train.name.toLowerCase().includes(search.toLowerCase()) ||
      train.number.includes(search) ||
      train.from.toLowerCase().includes(search.toLowerCase()) ||
      train.to.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section className="min-h-screen bg-gradient-to-br pb-12">
      {/* Green Banner */}
      <div className="w-full bg-emerald-600 py-20 flex flex-col items-center justify-center">
        <h2 className="text-5xl mt-10 font-extrabold text-white mb-6 text-center">Track Trains in Jharkhand</h2>
        <p className="text-xl text-white/90 text-center max-w-2xl">
          Get live train status, schedules, and routes for all major trains to Jharkhand.
        </p>
      </div>

      {/* Hero */}
      <div className="max-w-3xl mx-auto text-center mb-12 px-4 mt-12">
       
      </div>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-10 px-4">
        <div className="flex items-center bg-white rounded-xl shadow-lg px-4 py-3 gap-2">
          <Search className="h-6 w-6 text-emerald-400" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by train name, number, or station..."
            className="flex-1 bg-transparent outline-none text-lg text-gray-800"
          />
        </div>
      </div>

      {/* Train Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 px-4">
        {filteredTrains.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 text-lg py-12">
            No trains found.
          </div>
        ) : (
          filteredTrains.map((train, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 flex flex-col gap-4 border border-emerald-100"
            >
              <div className="flex items-center gap-3">
                <TrainFront className="h-8 w-8 text-emerald-600" />
                <div>
                  <div className="text-xl font-bold text-gray-900">{train.name}</div>
                  <div className="text-sm text-gray-500">#{train.number}</div>
                </div>
              </div>
               <p>S M T W T F S</p>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span className="font-semibold">{train.from}</span>
                <ArrowRight className="h-4 w-4 mx-2 text-gray-400" />
                <span className="font-semibold">{train.to}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <Clock className="h-5 w-5 text-emerald-400" />
                <span>
                  <span className="font-semibold">Dep:</span> {train.departure}
                </span>
                <span>
                  <span className="font-semibold">Arr:</span> {train.arrival}
                </span>
              </div>
              <div className={`text-right font-semibold ${train.status === "On Time" ? "text-emerald-600" : "text-yellow-600"}`}>
                {train.status}
              </div>
            </div>
          ))
        )}
      </div>
      <p className="text-s text-black text-center ">
          THE DATA REPRESENTED IS ONLY DEMO 
        </p>
    </section>
  )
}

export default function TrainsPage() {
  return (
    <>
      <Navigation />
      <Trains />
      <Footer />
    </>
  )
}