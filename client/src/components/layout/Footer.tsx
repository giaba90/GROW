import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"

export default function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground p-4 mt-8">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 Grow. Tutti i diritti riservati.</p>
                <Button variant="link" asChild>
                    <Link to="/privacy-policy">
                        Privacy Policy
                    </Link>
                </Button>
            </div>
        </footer>
    )
}