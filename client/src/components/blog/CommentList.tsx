import { GET_COMMENTS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import React from "react";

export function CommentList({ postId }: { postId: string; }): React.ReactElement {
    const { loading, error, data } = useQuery(GET_COMMENTS, {
        variables: { postId: parseInt(postId) },
    });

    if (loading) return <p>Loading comments...</p>;
    if (error) return <p>Error loading comments: {error.message}</p>;

    return (
        <div className="mt-4"><hr />
            <h3 className="text-lg font-semibold mt-4">Commenti</h3>
            {data && data.comments && data.comments.length > 0 ? (
                data.comments.map((comment: any) => (
                    <div key={comment.id} className="border-b border-gray-200 py-2">
                        <p className="font-semibold">{comment.author}</p>
                        <p>{comment.content}</p>
                    </div>
                ))
            ) : (
                <p>No comments available.</p>
            )}
        </div>
    );
}
