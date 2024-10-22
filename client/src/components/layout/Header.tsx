import { Link } from 'react-router-dom'
import { Menubar, MenubarMenu, MenubarContent, MenubarItem, MenubarTrigger } from "@/components/ui/menubar"
import { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import { X, AlignJustify } from 'lucide-react';

const GET_MENU = gql`
query GetMenu {
  menu(id: "menu-principale", idType: SLUG) {
    menuItems {
      edges {
        node {
            id
            label
            uri
        }
      }
    }
  }
}
`;

interface MenuItems {
    id: string;
    label: string;
    uri: string;
}

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [MenuItems, setMenuItems] = useState<MenuItems[]>([]);

    const { loading, error, data } = useQuery(GET_MENU);

    useEffect(() => {
        if (data) {
            setMenuItems(data.menu.menuItems.edges.map((edge: { node: MenuItems }) => edge.node));
        }
    }, [data]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

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
                                    {!isMenuOpen ? <AlignJustify /> : <X />}
                                </MenubarTrigger>
                                <MenubarContent>
                                    {MenuItems.map((item) => (
                                        <MenubarItem key={item.id} asChild>
                                            <Link to={item.uri}>
                                                {item.label}
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
