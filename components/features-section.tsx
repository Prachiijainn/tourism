import Image from "next/image"

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image 
              src="/map.png" 
              alt="Jharkhand Map" 
              width={800}
              height={800}
              className="rounded-xl shadow-lg"
            />
          </div>
          
          {/* Right Side - Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Explore JHARKHAND
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Jharkhand is a land of stunning waterfalls, lush forests, rich 
              mineral resources, and vibrant tribal culture. With Jharkhand भ्रमण , 
              we make your journey seamless by offering curated experiences 
              that connect you to the state’s natural beauty and cultural heritage.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
