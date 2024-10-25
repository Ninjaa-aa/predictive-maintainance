// components/hero-content.tsx
export function HeroContent() {
    const features = [
      "Real-time equipment health monitoring",
      "AI-driven failure prediction algorithms",
      "IoT sensor integration for data collection",
      "Customizable maintenance schedules"
    ]
  
    return (
      <>
        {/* Hero Text Container */}
        <div className="mb-4 space-y-4">
          <h1 className="text-5xl lg:text-7xl font-bold text-red-600 leading-tight">
            <span className="inline-block">
              Predictive Maintenance
            </span>
          </h1>
  
          <div className="text-5xl lg:text-7xl font-bold text-red-600">
            <span className="inline-block">
              Solutions
            </span>
          </div>
        </div>
        
        <p className="leading-normal text-xl mb-8 text-gray-900 font-medium">
          Revolutionizing Industry with Advanced AI and IoT Integration
        </p>
  
        <ul className="list-none mb-8 text-gray-900 space-y-4">
          {features.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
  
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-full py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition duration-300 ease-in-out">
          Explore Solutions
        </button>
      </>
    )
  }