'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function ArchiveComponent() {
  const [archivedPosts] = useState([
    { id: 1, title: "Le ultime novità in AI", image: "/placeholder.svg?height=150&width=200" },
    { id: 2, title: "5G: Il futuro della connettività", image: "/placeholder.svg?height=150&width=200" },
    { id: 3, title: "Cybersecurity nel 2023", image: "/placeholder.svg?height=150&width=200" },
    { id: 4, title: "L'ascesa dell'IoT", image: "/placeholder.svg?height=150&width=200" },
    { id: 5, title: "Cloud Computing: Tendenze del 2023", image: "/placeholder.svg?height=150&width=200" },
    { id: 6, title: "Blockchain oltre le criptovalute", image: "/placeholder.svg?height=150&width=200" },
  ])

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
        <h2 className="text-3xl font-bold mb-8 text-center">Archivio Articoli</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {archivedPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <a href={`/post/${post.id}`}>
                <CardHeader className="p-0">
                  <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle>{post.title}</CardTitle>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
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