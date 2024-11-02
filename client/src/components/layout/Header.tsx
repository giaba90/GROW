import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { X, AlignJustify } from 'lucide-react';
import { Menubar, MenubarMenu, MenubarContent, MenubarItem, MenubarTrigger } from "@/components/ui/menubar";
import Navbar from '@/components/ui/Navbar';
import { MenuItems } from '@/types/menu';
import { GET_MENU } from '@/graphql/queries';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuItems, setMenuItems] = useState<MenuItems[]>([]);

    const { loading, error, data } = useQuery(GET_MENU);

    useEffect(() => {
        if (data?.menu?.menuItems?.edges) {
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
                <h1 className="text-2xl font-bold">
                    <Link to="/">GROW</Link>🚀
                </h1>
                <div className="flex items-center space-x-4">
                    {/* Menu esteso per desktop */}
                    <nav className="hidden md:block">
                        <Navbar items={menuItems} />
                    </nav>

                    {/* Menu mobile */}
                    <nav className="block md:hidden">
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger onClick={toggleMenu}>
                                    {!isMenuOpen ? <AlignJustify /> : <X />}
                                </MenubarTrigger>
                                {isMenuOpen && (
                                    <MenubarContent>
                                        {menuItems.map((item) => (
                                            <MenubarItem key={item.id} asChild>
                                                <Link to={`/page/${item.uri}`}>{item.label}</Link>
                                            </MenubarItem>
                                        ))}
                                    </MenubarContent>
                                )}
                            </MenubarMenu>
                        </Menubar>
                    </nav>
                </div>
            </div>
        </header>
    );
}
