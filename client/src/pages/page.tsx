import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import PageDetails from '@/components/blog/PageDetails';
import { Button } from '@/components/ui/button';
import { MoveLeft } from 'lucide-react';
import { GET_PAGE } from '@/graphql/queries';

const Loading = () => <p>Loading...</p>;
const ErrorMessage = ({ message }: { message: string }) => <p>Error: {message}</p>;

const Page: React.FC = () => {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_PAGE, {
    variables: { slug },
  });

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1	container mx-auto p-4">
        <Button size="sm" variant="outline" onClick={() => window.history.back()} >
          <MoveLeft />  Torna indietro
        </Button>
        <PageDetails page={data.pageBy} />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
