import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mountain, MapPin, Camera } from "lucide-react"
import Link from "next/link"

const heritagePlaces = [
	{ image: "/hundru-falls-jharkhand-waterfall-scenic.jpg", name: "Hundru Falls" },
	{ image: "/betla-national-park-jharkhand-wildlife-forest.jpg", name: "Betla National Park" },
	{ image: "/baidyanath-temple-deoghar-jharkhand-pilgrimage.jpg", name: "Baidyanath Temple" },
	{ image: "/netarhat-hills-sunrise-jharkhand-landscape.jpg", name: "Netarhat Hills" },
	{ image: "/dassam-falls-jharkhand-forest-waterfall.jpg", name: "Dassam Falls" },
	{ image: "/parasnath-hill-jain-temples-jharkhand-peak.jpg", name: "Parasnath Hill" },
]

export function HeritageSection() {
	return (
		<section className="py-20 bg-gradient-to-b from-gray-50 to-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-16">
					<div className="flex items-center justify-center gap-2 mb-4">
						<Mountain className="h-8 w-8 text-emerald-600" />
						<h2 className="text-4xl font-bold text-gray-900 text-balance">
							Famous Places & Heritage Sites
						</h2>
					</div>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
						Discover Jharkhand's most iconic destinations. From majestic
						waterfalls to sacred temples and pristine wildlife sanctuaries
					</p>
				</div>

				{/* Heritage Places Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
					{heritagePlaces.map((place, idx) => (
						<div
							key={idx}
							className="relative h-48 overflow-hidden rounded-xl shadow-lg group flex flex-col"
						>
							<img
								src={place.image}
								alt={place.name}
								className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
							/>
							<div className="bg-white/80 text-gray-900 text-center py-2 font-semibold text-lg rounded-b-xl absolute bottom-0 w-full">
								{place.name}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="w-full mt-16">
				<img
					src="/land.png"
					alt="Jharkhand landscape"
					className="w-full h-80 object-cover"
				/>
			</div>
			<div className="text-center mt-12">
				<Link href="/destinations">
					<div className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors group cursor-pointer">
						<Camera className="h-5 w-5 group-hover:scale-110 transition-transform" />
						Explore All Destinations
						<MapPin className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
					</div>
				</Link>
			</div>
		</section>
	)
}
