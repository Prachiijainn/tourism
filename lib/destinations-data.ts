export interface Destination {
  id: string
  name: string
  type: string
  district: string
  description: string
  highlights: string[]
  bestTime: string
  duration: string
  difficulty: "Easy" | "Moderate" | "Challenging"
  image: string
  gallery: string[]
  mapsUrl: string
  nearbyAttractions: string[]
  activities: string[]
  accommodation: string[]
  howToReach: {
    byAir: string
    byRail: string
    byRoad: string
  }
}

export const destinations: Destination[] = [
  {
    id: "hundru-falls",
    name: "Hundru Falls",
    type: "Waterfall",
    district: "Ranchi",
    description:
      "One of Jharkhand's most spectacular waterfalls, Hundru Falls cascades from a height of 98 meters, creating a breathtaking spectacle especially during monsoon season.",
    highlights: ["98-meter high waterfall", "Best in monsoon", "Spectacular drop", "Easy viewpoint access"],
    bestTime: "July to October",
    duration: "Half day",
    difficulty: "Easy",
    image: "/hundru-falls-jharkhand-waterfall-scenic.jpg",
    gallery: [
      "/hundru-falls-jharkhand-waterfall-scenic.jpg",
      "/hundru-falls-monsoon-view.jpg",
      "/hundru-falls-rainbow-mist.jpg",
    ],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hundru+Falls+Ranchi",
    nearbyAttractions: ["Dassam Falls", "Jonha Falls", "Rock Garden"],
    activities: ["Photography", "Nature walks", "Picnicking", "Trekking"],
    accommodation: ["Hotels in Ranchi", "Resorts near falls", "Homestays"],
    howToReach: {
      byAir: "Birsa Munda Airport, Ranchi (45 km)",
      byRail: "Ranchi Railway Station (45 km)",
      byRoad: "Well connected by road from Ranchi city",
    },
  },
  {
    id: "dassam-falls",
    name: "Dassam Falls",
    type: "Waterfall",
    district: "Ranchi",
    description:
      "Also known as Dassam Ghagh, this beautiful waterfall is formed by the Kanchi River and is surrounded by dense forests, making it a perfect spot for nature lovers.",
    highlights: ["Picturesque setting", "Surrounded by forests", "Short walks", "Natural pools"],
    bestTime: "July to December",
    duration: "Half day",
    difficulty: "Easy",
    image: "/dassam-falls-jharkhand-forest-waterfall.jpg",
    gallery: ["/dassam-falls-jharkhand-forest-waterfall.jpg", "/dassam-falls-natural-pool.jpg", "/dassam-falls-forest-trek.jpg"],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dassam+Falls+Ranchi",
    nearbyAttractions: ["Hundru Falls", "Taimara Falls", "Ranchi Lake"],
    activities: ["Swimming", "Photography", "Forest walks", "Bird watching"],
    accommodation: ["Ranchi city hotels", "Forest lodges", "Camping sites"],
    howToReach: {
      byAir: "Birsa Munda Airport, Ranchi (40 km)",
      byRail: "Ranchi Railway Station (40 km)",
      byRoad: "Accessible via Ranchi-Purulia highway",
    },
  },
  {
    id: "baidyanath-dham",
    name: "Baidyanath Dham",
    type: "Pilgrimage",
    district: "Deoghar",
    description:
      "One of the twelve Jyotirlingas, Baidyanath Dham is a sacred Hindu pilgrimage site dedicated to Lord Shiva, attracting millions of devotees annually.",
    highlights: ["One of 12 Jyotirlingas", "Vibrant festivals", "Historic temples", "Spiritual significance"],
    bestTime: "October to March",
    duration: "1-2 days",
    difficulty: "Easy",
    image: "/baidyanath-temple-deoghar-jharkhand-pilgrimage.jpg",
    gallery: [
      "/baidyanath-temple-deoghar-jharkhand-pilgrimage.jpg",
      "/baidyanath-temple-evening-aarti.jpg",
      "/deoghar-temple-complex-architecture.jpg",
    ],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Baidyanath+Dham+Deoghar",
    nearbyAttractions: ["Trikut Parvat", "Nandan Pahar", "Tapovan"],
    activities: ["Temple visits", "Spiritual ceremonies", "Ropeway ride", "Local shopping"],
    accommodation: ["Dharamshalas", "Hotels", "Guest houses", "Ashrams"],
    howToReach: {
      byAir: "Patna Airport (281 km) or Ranchi Airport (250 km)",
      byRail: "Jasidih Junction (7 km)",
      byRoad: "Well connected by NH-114A",
    },
  },
  {
    id: "netarhat",
    name: "Netarhat",
    type: "Hill Station",
    district: "Latehar",
    description:
      "Known as the 'Queen of Chotanagpur', Netarhat is a serene hill station famous for its sunrise and sunset points, offering panoramic views of the surrounding valleys.",
    highlights: ["Sunrise and sunset points", "Peaceful hill station", "Good for stargazing", "Cool climate"],
    bestTime: "October to April",
    duration: "2-3 days",
    difficulty: "Easy",
    image: "/netarhat-hills-sunrise-jharkhand-landscape.jpg",
    gallery: [
      "/netarhat-hills-sunrise-jharkhand-landscape.jpg",
      "/netarhat-sunset-point-jharkhand.jpg",
      "/netarhat-valley-view-hills.jpg",
    ],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Netarhat+Jharkhand",
    nearbyAttractions: ["Lower Ghaghri Falls", "Upper Ghaghri Falls", "Lodh Falls"],
    activities: ["Sunrise viewing", "Sunset photography", "Trekking", "Stargazing"],
    accommodation: ["Forest rest houses", "Hotels", "Resorts", "Camping"],
    howToReach: {
      byAir: "Ranchi Airport (156 km)",
      byRail: "Latehar Railway Station (60 km)",
      byRoad: "Connected via Ranchi-Latehar highway",
    },
  },
  {
    id: "betla-national-park",
    name: "Betla National Park",
    type: "Wildlife Sanctuary",
    district: "Palamu",
    description:
      "Part of the Palamu Tiger Reserve, Betla National Park is home to tigers, elephants, leopards, and various species of birds, offering excellent wildlife viewing opportunities.",
    highlights: ["Tigers & elephants", "Safari options", "Dense forests", "Rich biodiversity"],
    bestTime: "November to June",
    duration: "2-3 days",
    difficulty: "Moderate",
    image: "/betla-national-park-jharkhand-wildlife-forest.jpg",
    gallery: [
      "/betla-national-park-jharkhand-wildlife-forest.jpg",
      "/betla-national-park-tiger-safari.jpg",
      "/betla-park-elephant-herd-forest.jpg",
    ],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Betla+National+Park+Jharkhand",
    nearbyAttractions: ["Palamu Fort", "Kamaldah Lake", "Kechki"],
    activities: ["Wildlife safari", "Bird watching", "Photography", "Nature walks"],
    accommodation: ["Forest lodges", "Eco-resorts", "Guest houses", "Camping"],
    howToReach: {
      byAir: "Ranchi Airport (170 km)",
      byRail: "Daltonganj Railway Station (25 km)",
      byRoad: "NH-75 connects to major cities",
    },
  },
  {
    id: "parasnath-hill",
    name: "Parasnath Hill",
    type: "Pilgrimage & Trek",
    district: "Giridih",
    description:
      "The highest peak in Jharkhand, Parasnath Hill is a sacred Jain pilgrimage site with 24 temples dedicated to Jain Tirthankaras, offering challenging treks and scenic views.",
    highlights: ["Highest peak in Jharkhand", "Important Jain site", "Challenging treks", "Scenic views"],
    bestTime: "October to March",
    duration: "1-2 days",
    difficulty: "Challenging",
    image: "/parasnath-hill-jain-temples-jharkhand-peak.jpg",
    gallery: ["/parasnath-hill-jain-temples-jharkhand-peak.jpg", "/parasnath-hill-trek-path-pilgrims.jpg", "/parasnath-hill-summit-view-jharkhand.jpg"],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Parasnath+Hill+Giridih",
    nearbyAttractions: ["Madhuban", "Giridih town", "Usri Falls"],
    activities: ["Trekking", "Temple visits", "Pilgrimage", "Photography"],
    accommodation: ["Dharamshalas", "Hotels in Giridih", "Guest houses", "Ashrams"],
    howToReach: {
      byAir: "Ranchi Airport (150 km)",
      byRail: "Parasnath Railway Station (3 km)",
      byRoad: "Grand Trunk Road (NH-2)",
    },
  },
]

export const destinationTypes = ["All", "Waterfall", "Pilgrimage", "Hill Station", "Wildlife Sanctuary", "Trek"]

export const districts = ["All", "Ranchi", "Deoghar", "Latehar", "Palamu", "Giridih", "Dhanbad", "Jamshedpur", "Bokaro"]
