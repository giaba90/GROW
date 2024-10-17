import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"

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
                <div className="flex items-center space-x-4">
                    <Button size="icon">
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </div>
            <nav className="hidden md:block mt-4">
                <ul className="flex space-x-4">
                    {categories.map((category) => (
                        <li key={category.termTaxonomyId}>
                            <Button variant="link" asChild>
                                <Link to={`/category/${category.slug}`}>
                                    {category.name}
                                </Link>
                            </Button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
