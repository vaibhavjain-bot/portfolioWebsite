"use client"

import { motion, type MotionValue } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

interface PuzzleIntroProps {
  scale: MotionValue<number>
}

export default function PuzzleIntro({ scale }: PuzzleIntroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Create puzzle piece path
  const puzzlePath = `
    M 50 0
    C 60 0, 70 10, 70 20
    C 70 30, 80 30, 90 30
    C 100 30, 100 40, 100 50
    C 100 60, 90 70, 80 70
    C 70 70, 70 80, 70 90
    C 70 100, 60 100, 50 100
    C 40 100, 30 100, 30 90
    C 30 80, 20 80, 10 80
    C 0 80, 0 70, 0 60
    C 0 50, 0 40, 0 30
    C 0 20, 10 10, 20 10
    C 30 10, 30 0, 40 0
    Z
  `

  return (
    <div className="flex items-center justify-center min-h-screen relative overflow-hidden bg-black">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#374151" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Particles */}
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gray-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Main Puzzle Piece */}
      <motion.div
        className="relative"
        style={{ scale }}
        animate={{
          rotateY: mousePosition.x * 5,
          rotateX: -mousePosition.y * 5,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        {/* Subtle Glow Effect */}
        <motion.div
          className="absolute inset-0 blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <svg width="400" height="400" viewBox="0 0 100 100" className="w-full h-full">
            <path d={puzzlePath} fill="url(#puzzleGlow)" className="drop-shadow-xl" />
            <defs>
              <linearGradient id="puzzleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6b7280" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#9ca3af" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#d1d5db" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Main Puzzle Piece */}
        <motion.svg
          width="400"
          height="400"
          viewBox="0 0 100 100"
          className="relative z-10"
          animate={{
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <defs>
            <linearGradient id="puzzleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f9fafb" />
              <stop offset="25%" stopColor="#e5e7eb" />
              <stop offset="50%" stopColor="#d1d5db" />
              <stop offset="75%" stopColor="#9ca3af" />
              <stop offset="100%" stopColor="#6b7280" />
            </linearGradient>
            <filter id="innerShadow">
              <feOffset dx="0" dy="0" />
              <feGaussianBlur stdDeviation="2" result="offset-blur" />
              <feFlood floodColor="#000000" floodOpacity="0.2" />
              <feComposite in2="offset-blur" operator="in" />
            </filter>
          </defs>

          <motion.path
            d={puzzlePath}
            fill="url(#puzzleGradient)"
            stroke="#ffffff"
            strokeWidth="0.3"
            filter="url(#innerShadow)"
            className="drop-shadow-xl"
            animate={{
              fill: ["url(#puzzleGradient)", "#e5e7eb", "#d1d5db", "#9ca3af", "url(#puzzleGradient)"],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Inner Pattern */}
          <motion.circle
            cx="50"
            cy="50"
            r="12"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeOpacity="0.4"
            animate={{
              r: [12, 16, 12],
              strokeOpacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          <motion.circle
            cx="50"
            cy="50"
            r="6"
            fill="#ffffff"
            fillOpacity="0.6"
            animate={{
              scale: [1, 1.2, 1],
              fillOpacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </motion.svg>

        {/* Orbiting Elements */}
        {Array.from({ length: 4 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gray-300/30 rounded-full"
            style={{
              left: "50%",
              top: "50%",
              marginLeft: "-4px",
              marginTop: "-4px",
            }}
            animate={{
              rotate: [0, 360],
              x: Math.cos((i * Math.PI * 2) / 4) * 120,
              y: Math.sin((i * Math.PI * 2) / 4) * 120,
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-light mb-4 text-white tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Vaibhav Jain
        </motion.h1>
        <motion.p
          className="text-lg text-gray-400 mb-8 font-light tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Problem Solver • Data Explorer • Solution Builder
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.p
          className="text-gray-500 mb-4 text-sm font-light tracking-wide"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          Scroll to explore
        </motion.p>
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </motion.div>

      {/* Progress Indicator */}
      <motion.div
        className="fixed right-8 top-1/2 transform -translate-y-1/2 w-px h-32 bg-gray-800 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.div
          className="w-full bg-gradient-to-t from-gray-600 to-gray-300 rounded-full"
          initial={{ height: "0%" }}
          animate={{ height: "100%" }}
          transition={{ delay: 3, duration: 2, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  )
}
