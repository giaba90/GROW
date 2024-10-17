import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@/components/ui/menubar"

type HeaderProps = {
    categories: {
        termTaxonomyId: string;
        name: string;
        slug: string;
    }[];
}

export default function Header({ categories }: HeaderProps) {
    return (
        <header className="bg-primary text-primary-foreground p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold"><Link to="/">GROW</Link></h1>
                <div className="flex items-center space-x-4 md:hidden">
                    {/* Mostra il pulsante menu solo su mobile */}
                    <Button size="icon">
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </div>
            {/* Menu mostrato solo su mobile */}
            <nav className="block md:hidden mt-4">
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>Categories</MenubarTrigger>
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
        </header>
    )
}
