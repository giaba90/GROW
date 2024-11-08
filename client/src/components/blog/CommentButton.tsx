import { MessageCircle } from "lucide-react";
import React from "react";

export default function CommentButton() {
    return (
        <div className="flex flex-row items-baseline">
            <MessageCircle className="h-4 w-4 mr-2 hover:text-blue-500" />

        </div>
    );
}