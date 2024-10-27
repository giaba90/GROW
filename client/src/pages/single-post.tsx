import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { GET_POST } from '@/graphql/queries';
import PostDetails from '@/components/blog/PostDetails';

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
      <main className="container mx-auto md:p-4">
        <PostDetails post={data.post} />
      </main>
      <Footer />
    </div>
  );
};

export default SinglePost;
