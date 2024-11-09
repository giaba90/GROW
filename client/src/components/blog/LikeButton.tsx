import { Heart } from 'lucide-react';
import { useState } from 'react';

type LikeButtonProps = {
    initialLikes: number;
};

export default function LikeButton({ initialLikes }: LikeButtonProps) {
    const [likes, setLikes] = useState(initialLikes);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <a onClick={handleLike} className="flex flex-wrap items-baseline">
            <Heart className="h-4 w-4 mr-2 hover:text-red-500" />
            <span>{likes}</span>
        </a>
    );
}