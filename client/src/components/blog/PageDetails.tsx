import { Page } from '@/types/page';

type PageDetailsProps = {
    page: Page;
};

export default function PageDetails({ page }: PageDetailsProps) {
    const { title, content } = page;

    return (
        <>
            <h2 className="text-2xl md:text-4xl my-4"> {title} </h2>
            <div className="prose max-w-none mt-4 mb-4" dangerouslySetInnerHTML={
                { __html: content }
            } />

        </>
    );
}