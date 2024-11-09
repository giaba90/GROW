import React from "react";
import { MessageCircle } from "lucide-react";
import GenerateCommentForm from "./GenerateCommentForm";

export default function CommentButton({ postId }: { postId: string }): React.ReactElement {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    function toggleSidebar() {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div className="flex flex-row items-baseline">
            <MessageCircle onClick={toggleSidebar} className="h-4 w-4 mr-2 hover:text-blue-500" />
            {isSidebarOpen && (
                <GenerateCommentForm toggleSidebar={toggleSidebar} postId={postId} />
            )}
        </div>
    );
}






