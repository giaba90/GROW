import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

import React from "react";

export default function CommentButton() {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    function toggleSidebar() {
        setIsSidebarOpen(!isSidebarOpen);
    }

    function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        event.preventDefault();
        const textarea = document.querySelector('textarea');
        if (textarea) {
            console.log('Submitted content:', textarea.value);
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
        <h3 className="text-lg font-semibold p-4">Leave a comment</h3>
        <Textarea placeholder="Type your message here." />
        <Button onClick={handleSubmit} variant="outline" className="mt-4">
            Comment
        </Button>
    </div>;
}
