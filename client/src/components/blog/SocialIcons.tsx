import { Heart, MessageCircle, Share2 } from "lucide-react";

export default function renderSocialIcons() {
    return (
        <div className="flex flex-row">
            <MessageCircle className="h-4 w-4 mr-2 hover:text-blue-500" />
            <Heart className="h-4 w-4 mr-2 hover:text-red-500" />
            <Share2 className="h-4 w-4 mr-2 hover:text-green-500" />
        </div>
    );
}
