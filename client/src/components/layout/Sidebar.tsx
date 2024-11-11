import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GET_CATEGORIES } from '@/graphql/queries';
import { useQuery } from '@apollo/client';
import { Category } from '@/types/Category';

export default function Sidebar() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Subscribed:', email);
        setEmail('');
    };

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
                        <Button type="submit">
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
                            category.name !== "Senza categoria" && (
                                <li key={category.id}>
                                    <Link to={`/archive/${category.slug}`} className="text-gray-700 hover:underline">
                                        {category.name} <Badge>{category.count}</Badge>
                                    </Link>
                                </li>
                            )
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
                        <SocialLink href="https://www.facebook.com/barrancagianluca" icon={Facebook} hoverColor="hover:text-blue-600" />
                        <SocialLink href="#" icon={Instagram} hoverColor="hover:text-pink-600" />
                        <SocialLink href="https://www.linkedin.com/in/gianluca-barranca/" icon={Linkedin} hoverColor="hover:text-blue-800" />
                    </div>
                </CardContent>
            </Card>
        </aside>
    );
}

function SocialLink({ href, icon: Icon, hoverColor }: { href: string, icon: React.ComponentType<{ className?: string }>, hoverColor: string }) {
    return (
        <a href={href} className={`text-gray-600 ${hoverColor}`}>
            <Icon className="h-6 w-6" />
        </a>
    );
}