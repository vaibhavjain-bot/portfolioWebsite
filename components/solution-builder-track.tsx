"use client"

import { useState } from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Users, Calendar, BarChart, Zap, Clock, Briefcase } from "lucide-react"

export default function SolutionBuilderTrack() {
  const heroProject = {
    name: "Interview Tracking App",
    problem: "Job hunting is chaotic and discouraging",
    solution: "Full-stack application for organized, confident job searching",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Vercel"],
    features: [
      "Application status tracking with visual pipeline",
      "Interview scheduling and preparation tools",
      "Company research database with notes",
      "Salary negotiation calculator",
      "Progress analytics and insights",
      "Email integration for automatic updates",
    ],
    architecture: [
      { layer: "Frontend", tech: "React + TypeScript", description: "Responsive UI with real-time updates" },
      { layer: "API", tech: "Node.js + Express", description: "RESTful API with authentication" },
      { layer: "Database", tech: "PostgreSQL", description: "Relational data with optimized queries" },
      { layer: "Deployment", tech: "Vercel + Railway", description: "CI/CD with automatic deployments" },
    ],
  }

  const futureApps = [
    {
      id: 1,
      name: "Productivity Command Center",
      description: "AI-powered task management with smart scheduling",
      status: "In Development",
      category: "Productivity",
      techStack: ["Next.js", "Prisma", "OpenAI"],
      icon: Zap,
    },
    {
      id: 2,
      name: "Analytics Dashboard Pro",
      description: "Real-time business metrics visualization platform",
      status: "Coming Soon",
      category: "Analytics",
      techStack: ["React", "D3.js", "WebSocket"],
      icon: BarChart,
    },
    {
      id: 3,
      name: "Team Collaboration Hub",
      description: "Seamless project management for remote teams",
      status: "Coming Soon",
      category: "Productivity",
      techStack: ["Vue.js", "Socket.io", "MongoDB"],
      icon: Users,
    },
    {
      id: 4,
      name: "Smart Calendar Assistant",
      description: "AI-driven scheduling with conflict resolution",
      status: "Coming Soon",
      category: "AI-Powered",
      techStack: ["React Native", "TensorFlow", "Firebase"],
      icon: Calendar,
    },
    {
      id: 5,
      name: "Time Tracking Optimizer",
      description: "Automated time tracking with productivity insights",
      status: "Coming Soon",
      category: "Productivity",
      techStack: ["Electron", "Python", "SQLite"],
      icon: Clock,
    },
    {
      id: 6,
      name: "Freelancer Business Suite",
      description: "Complete business management for freelancers",
      status: "Coming Soon",
      category: "Business",
      techStack: ["Next.js", "Stripe", "Supabase"],
      icon: Briefcase,
    },
  ]

  const categories = ["All", "Productivity", "Analytics", "AI-Powered", "Business", "Coming Soon"]
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredApps = futureApps.filter(
    (app) => activeFilter === "All" || app.category === activeFilter || app.status === activeFilter,
  )

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-white tracking-wide">Solution Builder Track</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Full-stack applications that solve real-world problems with elegant, scalable solutions
          </p>
        </motion.div>

        {/* Hero Project */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-gray-800/50 overflow-hidden">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-purple-300 mb-4">
                Featured Project: {heroProject.name}
              </CardTitle>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="font-semibold text-red-400 mb-2">Problem Statement:</h4>
                  <p className="text-gray-300 mb-4">{heroProject.problem}</p>
                  <h4 className="font-semibold text-green-400 mb-2">Solution Overview:</h4>
                  <p className="text-gray-300">{heroProject.solution}</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-6">
                  <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Briefcase className="w-8 h-8 text-purple-300" />
                      </div>
                      <p className="text-gray-400">Live Demo Preview</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" className="border-purple-500 text-purple-400 bg-transparent">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              {/* Architecture Diagram */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-6 text-center">System Architecture</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  {heroProject.architecture.map((layer, index) => (
                    <motion.div
                      key={layer.layer}
                      className="bg-slate-800/50 rounded-lg p-4 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h4 className="font-semibold text-purple-300 mb-2">{layer.layer}</h4>
                      <p className="text-sm text-blue-300 mb-2">{layer.tech}</p>
                      <p className="text-xs text-gray-400">{layer.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-6 text-center">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {heroProject.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {heroProject.techStack.map((tech) => (
                    <Badge key={tech} className="bg-purple-600/20 text-purple-300 border-purple-500/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Future Applications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-center mb-8">Future Applications</h3>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className={
                  activeFilter === category
                    ? "bg-white text-black hover:bg-gray-100"
                    : "border-gray-700 text-gray-300 hover:bg-gray-800/50 bg-transparent"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app, index) => {
              const Icon = app.icon
              return (
                <motion.div
                  key={app.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-900/30 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <Icon className="w-8 h-8 text-purple-400" />
                        <Badge
                          variant={app.status === "Live" ? "default" : "secondary"}
                          className={
                            app.status === "Live"
                              ? "bg-green-600 text-white"
                              : app.status === "In Development"
                                ? "bg-yellow-600 text-white"
                                : "bg-gray-600 text-white"
                          }
                        >
                          {app.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{app.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">{app.description}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {app.techStack.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs border-purple-500/30 text-purple-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          disabled={app.status === "Coming Soon"}
                          className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:opacity-50"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {app.status === "Coming Soon" ? "Coming Soon" : "View"}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          disabled={app.status === "Coming Soon"}
                          className="border-purple-500/30 text-purple-300 disabled:opacity-50 bg-transparent"
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
