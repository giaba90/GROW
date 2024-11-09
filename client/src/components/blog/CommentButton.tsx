import React from "react";
import { MessageCircle } from "lucide-react";
import GenerateCommentForm from "./GenerateCommentForm";
import { GET_POST_COMMENT_COUNT } from "@/graphql/queries";
import { useQuery } from "@apollo/client";

export default function CommentButton({ postId }: { postId: string }): React.ReactElement {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const { loading, error, data } = useQuery(GET_POST_COMMENT_COUNT, {
        variables: { postId },
    });

    function toggleSidebar() {
        setIsSidebarOpen(!isSidebarOpen);
    }

    if (loading) return <p>Caricamento commenti...</p>;
    if (error) return <p>Errore nel caricamento dei commenti: {error.message}</p>;

    return (
        <div className="flex flex-row items-baseline">
            <span className="mr-2">{data?.post.commentCount}</span>
            <MessageCircle onClick={toggleSidebar} className="h-4 w-4 mr-2 hover:text-blue-500" />
            {isSidebarOpen && (
                <GenerateCommentForm toggleSidebar={toggleSidebar} postId={postId} />
            )}
        </div>
    );
}






