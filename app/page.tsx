"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import HeroSection from "@/components/hero-section"
import DataExplorerTrack from "@/components/data-explorer-track"
import SolutionBuilderTrack from "@/components/solution-builder-track"
import InteractivePlayground from "@/components/interactive-playground"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import PuzzleIntro from "@/components/puzzle-intro"

export default function Portfolio() {
  const [activeTrack, setActiveTrack] = useState<"hero" | "data" | "solution" | "playground" | "skills" | "contact">(
    "hero",
  )
  const [showMainContent, setShowMainContent] = useState(false)
  const { scrollY } = useScroll()

  // Transform values for the puzzle intro
  const puzzleScale = useTransform(scrollY, [0, 300], [1, 0.3])
  const puzzleOpacity = useTransform(scrollY, [200, 400], [1, 0])
  const contentOpacity = useTransform(scrollY, [300, 500], [0, 1])

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      if (latest > 400 && !showMainContent) {
        setShowMainContent(true)
      }
    })

    return () => unsubscribe()
  }, [scrollY, showMainContent])

  return (
    <div className="relative">
      {/* Puzzle Intro - Full Screen */}
      <motion.div className="fixed inset-0 z-50 bg-black" style={{ opacity: puzzleOpacity }} initial={{ opacity: 1 }}>
        <PuzzleIntro scale={puzzleScale} />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-x-hidden"
        style={{ opacity: contentOpacity }}
        initial={{ opacity: 0 }}
      >
        {showMainContent && <Navigation activeTrack={activeTrack} setActiveTrack={setActiveTrack} />}

        <main className="relative z-10">
          {/* Add spacer for scroll trigger */}
          <div className="h-screen" />

          <HeroSection setActiveTrack={setActiveTrack} />

          <AnimatePresence mode="wait">
            {activeTrack === "data" && (
              <motion.div
                key="data-track"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <DataExplorerTrack />
              </motion.div>
            )}

            {activeTrack === "solution" && (
              <motion.div
                key="solution-track"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <SolutionBuilderTrack />
              </motion.div>
            )}
          </AnimatePresence>

          {(activeTrack === "playground" || activeTrack === "hero") && <InteractivePlayground />}

          {(activeTrack === "skills" || activeTrack === "hero") && <SkillsSection />}

          {(activeTrack === "contact" || activeTrack === "hero") && <ContactSection />}
        </main>
      </motion.div>
    </div>
  )
}
