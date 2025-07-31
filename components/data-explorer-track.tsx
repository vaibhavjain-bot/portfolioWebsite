"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, TrendingUp, Bot, BarChart3, Mic, FileText, Ship } from "lucide-react"

export default function DataExplorerTrack() {
  const projects = [
    {
      id: 1,
      name: "Finance Dashboard",
      problem: "Financial data is complex and overwhelming for average users",
      approach: "Interactive dashboard turning raw data into actionable insights",
      impact: "Reduced analysis time by 70% with intuitive visualizations",
      techStack: ["Python", "Jupyter", "Pandas", "Plotly"],
      icon: TrendingUp,
      code: `import plotly.express as px
import pandas as pd

# Create interactive financial dashboard
def create_dashboard(data):
    fig = px.line(data, x='date', y='price',
                  title='Stock Price Analysis')
    fig.update_layout(template='plotly_dark')
    return fig`,
      github: "https://github.com/username/finance-dash",
    },
    {
      id: 2,
      name: "ChatWithDiscordAI",
      problem: "Discord communities need intelligent, automated assistance",
      approach: "AI integration for seamless chat experiences",
      impact: "Improved community engagement by 45% with smart responses",
      techStack: ["Python", "Discord.py", "OpenAI", "AsyncIO"],
      icon: Bot,
      code: `import discord
from openai import OpenAI

class AIBot(discord.Client):
    async def on_message(self, message):
        if message.author == self.user:
            return
        
        response = await self.generate_response(
            message.content
        )
        await message.channel.send(response)`,
      github: "https://github.com/username/discord-ai",
    },
    {
      id: 3,
      name: "FBProphet Stock Model",
      problem: "Stock market uncertainty and prediction challenges",
      approach: "Facebook Prophet for time series forecasting",
      impact: "Achieved 78% accuracy in short-term predictions",
      techStack: ["Python", "Prophet", "Pandas", "NumPy"],
      icon: BarChart3,
      code: `from prophet import Prophet
import pandas as pd

# Time series forecasting
def predict_stock(data):
    model = Prophet(
        daily_seasonality=True,
        yearly_seasonality=True
    )
    model.fit(data)
    future = model.make_future_dataframe(
        periods=30
    )
    return model.predict(future)`,
      github: "https://github.com/username/prophet-model",
    },
    {
      id: 4,
      name: "OpenAI Whisper Transcriber",
      problem: "Video content is hard to search and summarize",
      approach: "Speech-to-text + AI summarization pipeline",
      impact: "Processed 1000+ hours of content with 95% accuracy",
      techStack: ["Python", "Whisper", "ChatGPT API", "FFmpeg"],
      icon: Mic,
      code: `import whisper
import openai

def transcribe_and_summarize(audio_file):
    # Transcribe audio
    model = whisper.load_model("base")
    result = model.transcribe(audio_file)
    
    # Summarize with GPT
    summary = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{
            "role": "user",
            "content": f"Summarize: {result['text']}"
        }]
    )
    return summary`,
      github: "https://github.com/username/whisper-transcriber",
    },
    {
      id: 5,
      name: "Text Embedding Generator",
      problem: "Traditional text analysis misses semantic meaning",
      approach: "Advanced embeddings for deeper text understanding",
      impact: "Improved text similarity detection by 60%",
      techStack: ["Python", "Transformers", "Sentence-BERT", "FAISS"],
      icon: FileText,
      code: `from sentence_transformers import SentenceTransformer
import numpy as np

# Generate semantic embeddings
model = SentenceTransformer(
    'all-MiniLM-L6-v2'
)

def generate_embeddings(texts):
    embeddings = model.encode(texts)
    return embeddings

def find_similar(query, corpus):
    similarities = model.similarity(query, corpus)
    return similarities.argsort()[::-1]`,
      github: "https://github.com/username/text-embeddings",
    },
    {
      id: 6,
      name: "Titanic Data Analysis",
      problem: "Historical datasets hold untold insights",
      approach: "Statistical analysis revealing human narratives",
      impact: "Uncovered survival patterns with 85% prediction accuracy",
      techStack: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
      icon: Ship,
      code: `import pandas as pd
import matplotlib.pyplot as plt
from sklearn.ensemble import RandomForestClassifier

# Analyze survival patterns
def analyze_titanic(data):
    # Feature engineering
    data['FamilySize'] = data['SibSp'] + data['Parch']
    data['IsAlone'] = (data['FamilySize'] == 0).astype(int)
    
    # Train model
    model = RandomForestClassifier()
    model.fit(X_train, y_train)
    
    return model.feature_importances_`,
      github: "https://github.com/username/titanic-analysis",
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
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-white tracking-wide">Data Explorer Track</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Watch as each project clicks into place, forming a complete picture of data-driven problem solving
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-r from-gray-900/80 to-black/80 border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Code Preview */}
                      <div className="bg-black/90 p-6 relative border-r border-gray-800">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <pre className="text-sm text-green-400 font-mono overflow-x-auto">
                          <code>{project.code}</code>
                        </pre>
                        <motion.div
                          className="absolute top-4 right-4 opacity-20"
                          animate={{ rotate: [0, 15, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <Icon className="w-8 h-8 text-purple-400" />
                        </motion.div>
                      </div>

                      {/* Project Details */}
                      <div className="p-6">
                        <CardHeader className="p-0 mb-4">
                          <CardTitle className="flex items-center gap-3 text-2xl">
                            <Icon className="w-6 h-6 text-purple-400" />
                            {project.name}
                          </CardTitle>
                        </CardHeader>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-red-400 mb-2">Problem:</h4>
                            <p className="text-gray-300">{project.problem}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-blue-400 mb-2">Approach:</h4>
                            <p className="text-gray-300">{project.approach}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-green-400 mb-2">Impact:</h4>
                            <p className="text-gray-300">{project.impact}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-purple-400 mb-2">Tech Stack:</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className="bg-gray-800/50 text-gray-300 border-gray-700"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-3 pt-4">
                            <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                              <Github className="w-4 h-4 mr-2" />
                              GitHub
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-gray-600 text-gray-300 hover:bg-gray-800/50 bg-transparent"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
