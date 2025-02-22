"use client"

import { motion } from 'framer-motion';

interface State {
  name: string;
  abbreviation: string;
  isActive: boolean;
  coordinates: {
    x: number;
    y: number;
  };
}

const states: State[] = [
  {
    name: "California",
    abbreviation: "CA",
    isActive: true,
    coordinates: { x: 10, y: 40 }
  },
  {
    name: "Texas",
    abbreviation: "TX",
    isActive: true,
    coordinates: { x: 38, y: 65 }
  },
  {
    name: "Oklahoma",
    abbreviation: "OK",
    isActive: true,
    coordinates: { x: 38, y: 52 }
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
    isActive: true,
    coordinates: { x: 82, y: 37 }
  }
];

export default function InvestmentMap() {
  return (
    <div className="relative py-16 overflow-hidden bg-white/50 dark:bg-gray-900/50">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" />
      <div className="absolute inset-0 opacity-30 mix-blend-soft-light" style={{ backgroundImage: `url('/images/noise.png')`, backgroundRepeat: 'repeat' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Investment Locations
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Explore our current investment opportunities across the United States
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Map Container */}
          <div className="relative aspect-[16/9] w-full">
            {/* Map Background */}
            <div className="absolute inset-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
              <svg
                viewBox="0 0 1000 600"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Base US Map Outline */}
                <path
                  d="M 200,150 
                     C 300,130 400,120 500,120 
                     C 600,120 700,130 800,150 
                     L 750,200 
                     C 650,180 550,170 450,170 
                     C 350,170 250,180 200,200 
                     L 150,300 
                     C 250,320 350,330 450,330 
                     C 550,330 650,320 750,300"
                  strokeWidth="4"
                  stroke="currentColor"
                  className="text-gray-300 dark:text-gray-600"
                />

                {/* California */}
                <path
                  d="M 100,150 
                     C 110,180 120,210 130,240 
                     L 120,270 
                     L 110,300"
                  strokeWidth="4"
                  stroke="currentColor"
                  className="text-blue-200 dark:text-blue-800"
                  fill="currentColor"
                  fillOpacity="0.1"
                />

                {/* Texas */}
                <path
                  d="M 380,250 
                     L 430,250 
                     L 460,280 
                     L 450,320 
                     L 400,340 
                     L 360,330 
                     L 350,290 
                     Z"
                  strokeWidth="4"
                  stroke="currentColor"
                  className="text-blue-200 dark:text-blue-800"
                  fill="currentColor"
                  fillOpacity="0.1"
                />

                {/* Oklahoma */}
                <path
                  d="M 380,230 
                     L 450,230 
                     L 450,250 
                     L 380,250 
                     Z"
                  strokeWidth="4"
                  stroke="currentColor"
                  className="text-blue-200 dark:text-blue-800"
                  fill="currentColor"
                  fillOpacity="0.1"
                />

                {/* New Jersey */}
                <path
                  d="M 820,170 
                     L 830,165 
                     L 840,170 
                     L 835,180 
                     L 825,175 
                     Z"
                  strokeWidth="4"
                  stroke="currentColor"
                  className="text-blue-200 dark:text-blue-800"
                  fill="currentColor"
                  fillOpacity="0.1"
                />
              </svg>
            </div>

            {/* Map Points */}
            {states.map((state) => (
              <motion.div
                key={state.abbreviation}
                className="absolute"
                style={{
                  left: `${state.coordinates.x}%`,
                  top: `${state.coordinates.y}%`
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: Math.random() * 0.5 }}
              >
                {/* Pulse Animation */}
                <div className="absolute -inset-4">
                  <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-lg animate-pulse" />
                </div>

                {/* Location Point */}
                <div className="relative group">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 ring-4 ring-white/30 dark:ring-gray-800/30" />
                  
                  {/* Tooltip */}
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {state.name}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {states.map((state) => (
              <motion.div
                key={state.abbreviation}
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                <span className="text-sm text-gray-600 dark:text-gray-400">{state.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
