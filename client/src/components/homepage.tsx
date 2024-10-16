'use client'

import { useState } from 'react'
import { Menu, Search, ChevronRight } from 'lucide-react'
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"

export function HomepageComponent() {
  const [blogPosts] = useState([
    { id: 1, title: "Le ultime novità in AI", date: "2023-10-13", summary: "Scopri le innovazioni più recenti nel campo dell'intelligenza artificiale.", image: "/placeholder.svg?height=200&width=300" },
    { id: 2, title: "5G: Il futuro della connettività", date: "2023-10-12", summary: "Esploriamo l'impatto del 5G sulle tecnologie future.", image: "/placeholder.svg?height=200&width=300" },
    { id: 3, title: "Cybersecurity nel 2023", date: "2023-10-11", summary: "Le minacce e le soluzioni più importanti per la sicurezza online.", image: "/placeholder.svg?height=200&width=300" },
  ])

  const categories = ["AI", "5G", "Cybersecurity", "IoT", "Cloud Computing"]

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Grow</h1>
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">{post.title}</CardTitle>
                <p className="text-muted-foreground text-sm mb-2">{post.date}</p>
                <p className="text-card-foreground">{post.summary}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" asChild className="p-0">
                  <a href={`/post/${post.id}`} className="flex items-center">
                    Leggi di più <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-secondary text-secondary-foreground p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Grow. Tutti i diritti riservati.</p>
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