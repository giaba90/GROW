'use client'

import { useState } from 'react'
import { Menu, Heart, Bookmark, Share2, ThumbsUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function SinglePostComponent() {
  const [post] = useState({
    id: 1,
    title: "Le ultime novità in AI",
    date: "2023-10-13",
    category: "AI",
    tags: ["Machine Learning", "Deep Learning", "Neural Networks"],
    image: "/placeholder.svg?height=400&width=800",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  })

  const categories = ["AI", "5G", "Cybersecurity", "IoT", "Cloud Computing"]

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">TechBlog</h1>
          <div className="flex items-center space-x-4">
            <Input type="search" placeholder="Cerca..." className="w-32 md:w-auto" />
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <nav className="hidden md:block mt-4">
          <ul className="flex space-x-4">
            {categories.map((category) => (
              <li key={category}>
                <Button variant="link" asChild>
                  <a href={`/category/${category.toLowerCase()}`}>
                    {category}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <Card>
          <CardHeader className="p-0">
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-t-lg" />
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="text-3xl mb-4">{post.title}</CardTitle>
            <div className="flex items-center space-x-4 text-muted-foreground mb-4">
              <span>{post.date}</span>
              <Badge variant="secondary">{post.category}</Badge>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
            <div className="flex space-x-4 mb-6">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Condividi
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4 mr-2" />
                Salva
              </Button>
              <Button variant="outline" size="sm">
                <ThumbsUp className="h-4 w-4 mr-2" />
                Mi piace
              </Button>
            </div>
            <div className="prose max-w-none">
              <p>{post.content}</p>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-secondary text-secondary-foreground p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 TechBlog. Tutti i diritti riservati.</p>
          <Button variant="link" asChild>
            <a href="/privacy-policy">
              Privacy Policy
            </a>
          </Button>
        </div>
      </footer>
    </div>
  )
}