import { Link } from 'react-router-dom'
import { Menubar, MenubarMenu, MenubarContent, MenubarItem, MenubarTrigger } from "@/components/ui/menubar"
import { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'

const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      nodes {
        id
        name
        slug
      }
    }
  }
`;

interface Category {
    id: string;
    name: string;
    slug: string;
}

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);

    const { loading, error, data } = useQuery(GET_CATEGORIES);

    useEffect(() => {
        if (data) {
            setCategories(data.categories.nodes);
        }
    }, [data]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-primary text-primary-foreground p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold"><Link to="/">GROW</Link>🚀</h1>
                <div className="flex items-center space-x-4 md:hidden">
                    {/* Menu mostrato solo su mobile */}
                    <nav className="block md:hidden">
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger onClick={toggleMenu}>
                                    {isMenuOpen ? 'Close' : 'Menu'}
                                </MenubarTrigger>
                                <MenubarContent>
                                    {categories.map((category) => (
                                        <MenubarItem key={category.id} asChild>
                                            <Link to={`/category/${category.slug}`}>
                                                {category.name}
                                            </Link>
                                        </MenubarItem>
                                    ))}
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </nav>
                </div>
            </div>
        </header>
    )
}
