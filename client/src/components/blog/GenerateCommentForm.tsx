import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { CommentList } from "./CommentList";

export function GenerateCommentForm({ toggleSidebar, handleSubmit, postId }: { toggleSidebar: () => void; handleSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; postId: string; }): React.ReactNode {
    return <>
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
    </>;


}