"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Play, Code, BarChart3, Activity, Zap } from "lucide-react"

export default function InteractivePlayground() {
  const [activeCode, setActiveCode] = useState(`# Interactive Data Visualization
import matplotlib.pyplot as plt
import numpy as np

# Generate sample data
x = np.linspace(0, 10, 100)
y = np.sin(x) * np.exp(-x/10)

# Create the plot
plt.figure(figsize=(10, 6))
plt.plot(x, y, 'b-', linewidth=2, label='Damped Sine Wave')
plt.xlabel('Time')
plt.ylabel('Amplitude')
plt.title('Interactive Data Visualization')
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()

print("Visualization created successfully!")`)

  const [output, setOutput] = useState("")

  const codeExamples = [
    {
      id: "visualization",
      name: "Data Visualization",
      code: `# Interactive Data Visualization
import matplotlib.pyplot as plt
import numpy as np

# Generate sample data
x = np.linspace(0, 10, 100)
y = np.sin(x) * np.exp(-x/10)

# Create the plot
plt.figure(figsize=(10, 6))
plt.plot(x, y, 'b-', linewidth=2, label='Damped Sine Wave')
plt.xlabel('Time')
plt.ylabel('Amplitude')
plt.title('Interactive Data Visualization')
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()

print("Visualization created successfully!")`,
    },
    {
      id: "ml",
      name: "Machine Learning",
      code: `# Simple ML Model
from sklearn.linear_model import LinearRegression
import numpy as np

# Generate sample data
X = np.random.randn(100, 1)
y = 2 * X.flatten() + 1 + np.random.randn(100) * 0.1

# Train model
model = LinearRegression()
model.fit(X, y)

# Make predictions
predictions = model.predict(X)
score = model.score(X, y)

print(f"Model R² Score: {score:.3f}")
print(f"Coefficient: {model.coef_[0]:.3f}")
print(f"Intercept: {model.intercept_:.3f}")`,
    },
    {
      id: "api",
      name: "API Integration",
      code: `# API Data Fetching
import requests
import json

def fetch_github_stats(username):
    url = f"https://api.github.com/users/{username}"
    
    try:
        response = requests.get(url)
        data = response.json()
        
        stats = {
            'name': data.get('name', 'N/A'),
            'public_repos': data.get('public_repos', 0),
            'followers': data.get('followers', 0),
            'following': data.get('following', 0)
        }
        
        return stats
    except Exception as e:
        return f"Error: {e}"

# Example usage
result = fetch_github_stats("octocat")
print(json.dumps(result, indent=2))`,
    },
  ]

  const runCode = () => {
    setOutput(
      "Running code...\n\n✅ Code executed successfully!\n📊 Visualization created\n🎯 Results computed\n\nOutput: Sample data processed and visualized.",
    )
  }

  const skillsData = [
    { skill: "Python", level: 95 },
    { skill: "JavaScript", level: 90 },
    { skill: "React", level: 88 },
    { skill: "Data Science", level: 92 },
    { skill: "Machine Learning", level: 85 },
    { skill: "Node.js", level: 82 },
  ]

  const githubActivity = [
    { day: "Mon", commits: 12 },
    { day: "Tue", commits: 8 },
    { day: "Wed", commits: 15 },
    { day: "Thu", commits: 6 },
    { day: "Fri", commits: 20 },
    { day: "Sat", commits: 4 },
    { day: "Sun", commits: 9 },
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
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-white tracking-wide">Interactive Playground</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore live code examples, visualizations, and interactive demonstrations
          </p>
        </motion.div>

        <Tabs defaultValue="code-editor" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-900/50 border border-gray-800">
            <TabsTrigger value="code-editor" className="data-[state=active]:bg-white data-[state=active]:text-black">
              <Code className="w-4 h-4 mr-2" />
              Code Editor
            </TabsTrigger>
            <TabsTrigger value="visualization" className="data-[state=active]:bg-purple-600">
              <BarChart3 className="w-4 h-4 mr-2" />
              Data Viz
            </TabsTrigger>
            <TabsTrigger value="github-activity" className="data-[state=active]:bg-purple-600">
              <Activity className="w-4 h-4 mr-2" />
              GitHub Activity
            </TabsTrigger>
            <TabsTrigger value="skills-radar" className="data-[state=active]:bg-purple-600">
              <Zap className="w-4 h-4 mr-2" />
              Skills Radar
            </TabsTrigger>
          </TabsList>

          <TabsContent value="code-editor" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Code Editor</span>
                    <div className="flex gap-2">
                      {codeExamples.map((example) => (
                        <Button
                          key={example.id}
                          size="sm"
                          variant="outline"
                          onClick={() => setActiveCode(example.code)}
                          className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
                        >
                          {example.name}
                        </Button>
                      ))}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-black rounded-lg p-4 mb-4 border border-gray-800">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-sm text-gray-400 ml-2">playground.py</span>
                    </div>
                    <pre className="text-sm text-green-400 font-mono overflow-x-auto max-h-80">
                      <code>{activeCode}</code>
                    </pre>
                  </div>
                  <Button onClick={runCode} className="bg-green-600 hover:bg-green-700">
                    <Play className="w-4 h-4 mr-2" />
                    Run Code
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700">
                <CardHeader>
                  <CardTitle>Output</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-950 rounded-lg p-4 min-h-80">
                    <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap">
                      {output || "Click 'Run Code' to see output..."}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="visualization" className="mt-8">
            <Card className="bg-slate-900/50 border-slate-700">
              <CardHeader>
                <CardTitle>Live Data Visualization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-950 rounded-lg p-6 mb-4">
                  <div className="grid grid-cols-7 gap-2 h-64">
                    {githubActivity.map((day, index) => (
                      <motion.div
                        key={day.day}
                        className="flex flex-col items-center justify-end"
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <motion.div
                          className="bg-gradient-to-t from-purple-600 to-blue-500 rounded-t w-full mb-2"
                          style={{ height: `${(day.commits / 20) * 200}px` }}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                        />
                        <span className="text-xs text-gray-400">{day.day}</span>
                        <span className="text-xs text-purple-300">{day.commits}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <p className="text-center text-gray-400">Weekly commit activity visualization</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="github-activity" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-green-900/30 to-green-800/30 border-green-500/30">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">150+</div>
                  <div className="text-sm text-gray-300">Total Repositories</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 border-blue-500/30">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">2.5k+</div>
                  <div className="text-sm text-gray-300">Total Commits</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 border-purple-500/30">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">45</div>
                  <div className="text-sm text-gray-300">Contributions This Week</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-pink-900/30 to-pink-800/30 border-pink-500/30">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">12</div>
                  <div className="text-sm text-gray-300">Active Projects</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="skills-radar" className="mt-8">
            <Card className="bg-slate-900/50 border-slate-700">
              <CardHeader>
                <CardTitle>Skills & Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {skillsData.map((skill, index) => (
                    <motion.div
                      key={skill.skill}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-300">{skill.skill}</span>
                        <Badge variant="outline" className="border-purple-500/30 text-purple-300">
                          {skill.level}%
                        </Badge>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
