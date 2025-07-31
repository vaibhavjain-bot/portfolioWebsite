"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Database, Code, Puzzle } from "lucide-react"

interface HeroSectionProps {
  setActiveTrack: (track: "hero" | "data" | "solution" | "playground" | "skills" | "contact") => void
}

export default function HeroSection({ setActiveTrack }: HeroSectionProps) {
  const puzzlePieces = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
    delay: Math.random() * 2,
    scale: 0.3 + Math.random() * 0.4,
  }))

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#374151" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      {/* Floating Puzzle Pieces */}
      {puzzlePieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute opacity-5"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            scale: piece.scale,
          }}
          animate={{
            rotate: [piece.rotation, piece.rotation + 360],
            y: [0, -15, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 12 + Math.random() * 4,
            delay: piece.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Puzzle className="w-6 h-6 text-gray-400" />
        </motion.div>
      ))}

      <div className="text-center z-10 max-w-5xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="inline-block p-6 rounded-full bg-gradient-to-r from-gray-800/30 to-gray-700/30 mb-8 border border-gray-700/30"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <Puzzle className="w-12 h-12 text-gray-300" />
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 text-white leading-tight tracking-wide"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Welcome to My Universe
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-6 text-gray-400 font-light tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Turning Complex Problems into Elegant Solutions
        </motion.p>

        <motion.p
          className="text-lg mb-16 text-gray-500 max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          Where Data Meets Design - An all-around problem solver bridging the gap between analytical insights and
          user-centered solutions. Every challenge is just a puzzle waiting to be solved.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 px-10 py-6 text-lg font-medium group transform hover:scale-105 transition-all duration-300 shadow-xl border-0"
            onClick={() => setActiveTrack("data")}
          >
            <Database className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Data Explorer Track
          </Button>

          <Button
            size="lg"
            className="bg-transparent border border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 px-10 py-6 text-lg font-medium group transform hover:scale-105 transition-all duration-300"
            onClick={() => setActiveTrack("solution")}
          >
            <Code className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Solution Builder Track
          </Button>
        </motion.div>

        {/* Minimalist Puzzle Assembly Animation */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="relative">
            {Array.from({ length: 4 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${(i % 2) * 20}px`,
                  top: `${Math.floor(i / 2) * 20}px`,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 8,
                  delay: i * 0.3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Puzzle className="w-4 h-4 text-gray-600/40" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
