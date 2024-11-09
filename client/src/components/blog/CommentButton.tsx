import React from "react";
import { MessageCircle } from "lucide-react";
import { useMutation } from '@apollo/client';
import { CREATE_COMMENT } from "@/graphql/mutations";
import { GenerateCommentForm } from "./GenerateCommentForm";

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
                GenerateCommentForm({ toggleSidebar, handleSubmit, postId })
            )}
        </div>
    );
}






