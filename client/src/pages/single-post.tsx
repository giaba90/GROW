import { useParams} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import PostDetails from '@/components/blog/PostDetails';
import { Button } from '@/components/ui/button';
import { MoveLeft } from 'lucide-react';
import { GET_POST } from '@/graphql/queries';


const Loading = () => <p>Loading...</p>;
const ErrorMessage = ({ message }: { message: string }) => <p>Error: {message}</p>;

const SinglePost: React.FC = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_POST, {
    variables: { id },
  });

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto p-4">
        <Button size="sm" variant="outline" onClick={() => window.history.back()} >
          <MoveLeft />  Torna indietro
        </Button>
        <PostDetails post={data.post} />
        <h3 className="text-xl md:text-2xl my-4">Potrebbe interessarti anche</h3>
      </main>
      <Footer />
    </div>
  );
};

export default SinglePost;
