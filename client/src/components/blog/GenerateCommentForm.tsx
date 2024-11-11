import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useMutation } from '@apollo/client';
import { CREATE_COMMENT } from "@/graphql/mutations";
import React from 'react';
import CommentList from "./CommentList";

const GenerateCommentForm: React.FC<{ toggleSidebar: () => void; postId: string }> = ({ toggleSidebar, postId }) => {
    const [createComment] = useMutation(CREATE_COMMENT);

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        event.preventDefault();
        const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
        const authorInput = document.querySelector('input[name="authorName"]') as HTMLInputElement;
        if (textarea && authorInput) {
            createComment({ variables: { postId: parseInt(postId), content: textarea.value, authorName: authorInput.value } })
                .then(response => {
                    console.log('Commento creato:', response.data);
                })
                .catch(err => {
                    console.error('Errore nella creazione del commento:', err);
                });
        }
    };

    return (
        <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-4">
            <a onClick={toggleSidebar} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
                &times;
            </a>
            <h3 className="text-lg font-semibold p-4">Lascia un commento</h3>
            <Input type="text" name="authorName" placeholder="Il tuo nome" />
            <Textarea placeholder="Scrivi il tuo messaggio qui." className="mt-4" />
            <Button onClick={handleSubmit} variant="outline" className="mt-4">
                Commenta
            </Button>
            <CommentList postId={postId} />
        </div>
    );
};

export default GenerateCommentForm;