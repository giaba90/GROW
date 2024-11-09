import { GET_COMMENTS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { cp } from "fs";
import React from "react";

const CommentList: React.FC<{ postId: string }> = ({ postId }) => {
    const { loading, error, data } = useQuery(GET_COMMENTS, {
        variables: { postId: parseInt(postId) },
    });

    if (loading) return <p>Loading comments...</p>;
    if (error) return <p>Error loading comments: {error.message}</p>;

    return (
        <div className="mt-4">
            <hr />
            <h3 className="text-lg font-semibold mt-4">Commenti</h3>
            {data && data.post.comments && data.post.comments.nodes.length > 0 ? (
                data.post.comments.nodes.map((comment: any) => (
                    <div key={comment.id} className="border-b border-gray-200 py-2">
                        <span className="font-semibold">{comment.author.node.name} <i>ha scritto:</i></span>
                        <div className="prose max-w-none mt-4 mb-4 text-justify" dangerouslySetInnerHTML={
                            { __html: comment.content }
                        } />
                    </div>
                ))
            ) : (
                <p>No comments available.</p>
            )}
        </div>
    );
};

export default CommentList;
