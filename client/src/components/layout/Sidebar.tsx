import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Mail, Facebook, Instagram, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GET_CATEGORIES } from '@/graphql/queries'
import { useQuery } from '@apollo/client';

// Define the Category type
type Category = {
    termTaxonomyId: string
    slug: string
    name: string
}

export default function Sidebar() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle newsletter subscription
        console.log('Subscribed:', email)
        setEmail('')
    }
    const { loading, error, data } = useQuery(GET_CATEGORIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;


    return (
        <aside className="w-full md:w-1/3 lg:w-1/4 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Cerca</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="flex items-center space-x-2">
                        <Input type="search" placeholder="Cerca..." />
                        <Button type="submit" size="icon">
                            <Search className="h-4 w-4" />
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Categorie</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                        {data.categories.nodes.map((category: Category) => (
                            <li key={category.termTaxonomyId}>
                                <Link to={`/category/${category.slug}`} className="text-gray-700 hover:underline">
                                    {category.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Newsletter</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-2">
                        <Input
                            type="email"
                            placeholder="La tua email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Button type="submit" className="w-full">
                            <Mail className="h-4 w-4 mr-2" />
                            Iscriviti
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Seguici</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-600 hover:text-blue-600">
                            <Facebook />
                        </a>

                        <a href="#" className="text-gray-600 hover:text-pink-600">
                            <Instagram className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-800">
                            <Linkedin className="h-6 w-6" />
                        </a>
                    </div>
                </CardContent>
            </Card>
        </aside>
    )
}