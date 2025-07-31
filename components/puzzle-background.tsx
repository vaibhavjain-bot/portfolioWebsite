"use client"

import { motion } from "framer-motion"
import { Puzzle } from "lucide-react"

interface PuzzleBackgroundProps {
  scrollY: number
}

export default function PuzzleBackground({ scrollY }: PuzzleBackgroundProps) {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 20 + 10,
    duration: Math.random() * 20 + 10,
  }))

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Puzzle Pieces */}
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={`puzzle-${i}`}
          className="absolute opacity-10"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + (i % 2) * 80}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <Puzzle className="w-16 h-16 text-purple-400" />
        </motion.div>
      ))}
    </div>
  )
}
