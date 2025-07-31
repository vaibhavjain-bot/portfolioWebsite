"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Code, Brain, Cloud, Palette, GitBranch } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Data Science & Analytics",
      icon: Database,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", level: 95 },
        { name: "Pandas", level: 92 },
        { name: "NumPy", level: 90 },
        { name: "Matplotlib/Seaborn", level: 88 },
        { name: "Plotly", level: 85 },
        { name: "Scikit-learn", level: 87 },
        { name: "TensorFlow", level: 80 },
        { name: "Statistical Analysis", level: 85 },
      ],
    },
    {
      title: "Full-Stack Development",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript/TypeScript", level: 92 },
        { name: "Node.js", level: 85 },
        { name: "Express", level: 82 },
        { name: "HTML5/CSS3", level: 88 },
        { name: "Next.js", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 78 },
      ],
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Deep Learning", level: 78 },
        { name: "NLP", level: 82 },
        { name: "Computer Vision", level: 75 },
        { name: "Time Series Analysis", level: 88 },
        { name: "Feature Engineering", level: 90 },
        { name: "Model Deployment", level: 80 },
        { name: "A/B Testing", level: 85 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "AWS", level: 75 },
        { name: "Docker", level: 80 },
        { name: "CI/CD", level: 78 },
        { name: "Vercel", level: 85 },
        { name: "Railway", level: 82 },
        { name: "GitHub Actions", level: 80 },
        { name: "Linux", level: 75 },
        { name: "API Design", level: 88 },
      ],
    },
    {
      title: "Design & UX",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "UI/UX Design", level: 82 },
        { name: "Figma", level: 80 },
        { name: "Responsive Design", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Design Systems", level: 85 },
        { name: "User Research", level: 78 },
        { name: "Prototyping", level: 80 },
        { name: "Accessibility", level: 85 },
      ],
    },
    {
      title: "Tools & Workflow",
      icon: GitBranch,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Git/GitHub", level: 92 },
        { name: "VS Code", level: 95 },
        { name: "Jupyter Notebooks", level: 90 },
        { name: "Postman", level: 85 },
        { name: "Slack/Discord", level: 88 },
        { name: "Notion", level: 85 },
        { name: "Agile/Scrum", level: 80 },
        { name: "Project Management", level: 82 },
      ],
    },
  ]

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-white tracking-wide">Skills & Expertise</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit spanning data science, full-stack development, and everything in between
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-lg">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          className="space-y-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            duration: 0.3,
                          }}
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                            <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                              {skill.level}%
                            </Badge>
                          </div>
                          <div className="w-full bg-slate-800 rounded-full h-1.5">
                            <motion.div
                              className={`h-1.5 rounded-full bg-gradient-to-r from-gray-600 to-gray-300`}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{
                                delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                                duration: 0.8,
                                ease: "easeOut",
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Summary Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">6+</div>
            <div className="text-sm text-gray-400">Skill Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">48</div>
            <div className="text-sm text-gray-400">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">3+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">20+</div>
            <div className="text-sm text-gray-400">Projects Completed</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
