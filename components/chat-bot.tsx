"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Send, X, Bot, User, MapPin, Calendar, Star, Sparkles } from "lucide-react"



const quickQuestions = [
  "Best time to visit Jharkhand?",
  "Top waterfalls to see?",
  "Wildlife safari options?",
  "Budget travel tips?",
  "How to reach Ranchi?",
  "Temple pilgrimage sites?",
]

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [showQuickQuestions, setShowQuickQuestions] = useState(true)
  const [messages, setMessages] = useState<Array<{id: string, role: string, content: string}>>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!input.trim()) return

    const userMessage = {
      id: Date.now().toString(),
      role: "user",
      content: input
    }
    
    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setShowQuickQuestions(false)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      })

      if (!response.ok) {
        throw new Error("API request failed")
      }

      const reader = response.body?.getReader()
      if (reader) {
        let botMessage = ""
        const botMessageId = (Date.now() + 1).toString()
        
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          
          const chunk = new TextDecoder().decode(value)
          botMessage += chunk
          
          // Update the bot message in real-time
          setMessages(prev => {
            const filtered = prev.filter(msg => msg.id !== botMessageId)
            return [...filtered, { id: botMessageId, role: "assistant", content: botMessage }]
          })
        }
      }
    } catch (error) {
      console.error("Chat error:", error)
      const errorMessage = {
        id: Date.now().toString(),
        role: "assistant",
        content: "Sorry, I'm having trouble connecting. Please make sure you have set up your Groq API key in the .env.local file."
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickQuestion = (question: string) => {
    setInput(question)
    setShowQuickQuestions(false)
    // Trigger submit after setting input
    setTimeout(() => {
      const fakeEvent = { preventDefault: () => {} } as React.FormEvent
      handleSubmit(fakeEvent)
    }, 100)
  }

  const resetChat = () => {
    setMessages([])
    setShowQuickQuestions(true)
    setInput("")
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-emerald-600 hover:bg-emerald-700 shadow-lg animate-pulse hover:animate-none transition-all"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-40 w-80 h-[500px] shadow-xl border-emerald-200 flex flex-col">
          <CardHeader className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Bot className="h-4 w-4" />
              Jharkhand Travel Assistant
              <Sparkles className="h-3 w-3 ml-auto animate-pulse" />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex flex-col h-full">
            <ScrollArea className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4 min-h-0 break-words">
                {messages.length === 0 && showQuickQuestions && (
                  <div className="space-y-4">
                    <div className="text-center text-muted-foreground text-sm">
                      <Bot className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
                      Hi! I'm your Jharkhand travel assistant. Ask me anything about places to visit, travel tips, or
                      try these quick questions:
                    </div>
                    <div className="space-y-2">
                      {quickQuestions.map((question, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="w-full text-left justify-start text-xs h-auto py-2 px-3 hover:bg-emerald-50 hover:border-emerald-200 bg-transparent"
                          onClick={() => handleQuickQuestion(question)}
                        >
                          {question}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`flex items-start gap-2 max-w-[85%] min-w-0 ${
                        message.role === "user" ? "flex-row-reverse" : "flex-row"
                      }`}
                    >
                      <div className="flex-shrink-0">
                        {message.role === "user" ? (
                          <User className="h-6 w-6 p-1 bg-blue-100 text-blue-600 rounded-full" />
                        ) : (
                          <Bot className="h-6 w-6 p-1 bg-emerald-100 text-emerald-600 rounded-full" />
                        )}
                      </div>
                      <div
                        className={`rounded-lg p-3 text-sm break-words min-w-0 flex-1 ${
                          message.role === "user"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-900 border border-gray-200"
                        }`}
                      >
                        <div className="prose prose-sm max-w-none">
  <ReactMarkdown remarkPlugins={[remarkGfm]}>
    {message.content}
  </ReactMarkdown>
</div>
                      </div>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex gap-2 justify-start">
                    <Bot className="h-6 w-6 p-1 bg-emerald-100 text-emerald-600 rounded-full flex-shrink-0" />
                    <div className="bg-gray-100 border border-gray-200 rounded-lg p-3 text-sm">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                {messages.length > 0 && (
                  <div className="flex justify-center pt-2">
                    <Button variant="ghost" size="sm" onClick={resetChat} className="text-xs text-gray-500">
                      Ask another question
                    </Button>
                  </div>
                )}
              </div>
            </ScrollArea>

            <form onSubmit={handleSubmit} className="p-4 border-t bg-gray-50">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask about Jharkhand..."
                  className="flex-1 text-sm"
                  disabled={isLoading}
                />
                <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex gap-1 mt-2">
                <Badge variant="outline" className="text-xs">
                  <MapPin className="h-3 w-3 mr-1" />
                  Places
                </Badge>
                <Badge variant="outline" className="text-xs">
                  <Calendar className="h-3 w-3 mr-1" />
                  Planning
                </Badge>
                <Badge variant="outline" className="text-xs">
                  <Star className="h-3 w-3 mr-1" />
                  Tips
                </Badge>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  )
}
