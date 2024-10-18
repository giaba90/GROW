import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Menubar, MenubarMenu, MenubarContent, MenubarItem, MenubarTrigger } from "@/components/ui/menubar"
import { useState } from 'react'

type HeaderProps = {
    categories: {
        termTaxonomyId: string;
        name: string;
        slug: string;
    }[];
}

export default function Header({ categories }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                                        <MenubarItem key={category.termTaxonomyId} asChild>
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
