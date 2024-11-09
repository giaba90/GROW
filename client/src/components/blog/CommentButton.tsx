import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React from "react";
import { useMutation } from '@apollo/client';
import { CREATE_COMMENT } from "@/graphql/mutations";

export default function CommentButton({ postId }: { postId: string }): React.ReactElement {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const [createComment, { loading, error, data }] = useMutation(CREATE_COMMENT);

    function toggleSidebar() {
        setIsSidebarOpen(!isSidebarOpen);
    }

    function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        event.preventDefault();
        const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
        const authorInput = document.querySelector('input[name="authorName"]') as HTMLInputElement;
        if (textarea && authorInput) {
            createComment({ variables: { postId: parseInt(postId), content: textarea.value, author: authorInput.value } })
                .then(response => {
                    console.log('Commento creato:', response.data);
                })
                .catch(err => {
                    console.error('Errore nella creazione del commento:', err);
                });

        }
        setIsSidebarOpen(false);
    }

    return (
        <div className="flex flex-row items-baseline">
            <MessageCircle onClick={toggleSidebar} className="h-4 w-4 mr-2 hover:text-blue-500" />
            {isSidebarOpen && (
                generateCommentForm(toggleSidebar, handleSubmit)
            )}
        </div>
    );
}

function generateCommentForm(toggleSidebar: () => void, handleSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void): React.ReactNode {
    return <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-4">
        <a onClick={toggleSidebar} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
            &times;
        </a>
        <h3 className="text-lg font-semibold p-4">Lascia un commento</h3>
        <Input type="text" name="authorName" placeholder="Il tuo nome" />
        <Textarea placeholder="Scrivi il tuo messaggio qui." className="mt-4" />
        <Button onClick={handleSubmit} variant="outline" className="mt-4">
            Commenta
        </Button>
    </div>;
}
