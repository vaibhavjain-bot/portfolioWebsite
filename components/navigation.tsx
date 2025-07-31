"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, Database, Code, Gamepad2, Award, Mail } from "lucide-react"

interface NavigationProps {
  activeTrack: string
  setActiveTrack: (track: "hero" | "data" | "solution" | "playground" | "skills" | "contact") => void
}

export default function Navigation({ activeTrack, setActiveTrack }: NavigationProps) {
  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "data", label: "Data Explorer", icon: Database },
    { id: "solution", label: "Solution Builder", icon: Code },
    { id: "playground", label: "Playground", icon: Gamepad2 },
    { id: "skills", label: "Skills", icon: Award },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  return (
    <motion.nav
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/40 backdrop-blur-md rounded-full px-6 py-3 border border-gray-800/50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      <div className="flex space-x-2">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Button
              key={item.id}
              variant={activeTrack === item.id ? "default" : "ghost"}
              size="sm"
              className={`relative ${
                activeTrack === item.id
                  ? "bg-white text-black hover:bg-gray-100"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50"
              }`}
              onClick={() => setActiveTrack(item.id as any)}
            >
              <Icon className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline font-medium">{item.label}</span>
            </Button>
          )
        })}
      </div>
    </motion.nav>
  )
}
