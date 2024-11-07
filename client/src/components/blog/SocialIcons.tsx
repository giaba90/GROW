import { Heart, MessageCircle, Share2 } from "lucide-react";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

export default function renderSocialIcons() {
    // Get the URL and title of the current page dynamically
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
    const title =
        typeof document !== "undefined"
            ? document.title
            : "Check out this awesome content!";

    return (
        <div className="share-buttons">
            <FacebookShareButton url={shareUrl}>
                Share on Facebook
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={title}>
                Share on Twitter
            </TwitterShareButton>
            <WhatsappShareButton url={shareUrl} title={title}>
                Share on WhatsApp
            </WhatsappShareButton>
        </div>

    );/*
    return (
        <div className="flex flex-row">
            <MessageCircle className="h-4 w-4 mr-2 hover:text-blue-500" />
            <Heart className="h-4 w-4 mr-2 hover:text-red-500" />
            <Share2 className="h-4 w-4 mr-2 hover:text-green-500" />
        </div>
    );*/
}
