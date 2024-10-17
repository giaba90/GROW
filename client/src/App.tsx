import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Homepage from './components/homepage';
import Archive from './components/archive';
import SinglePost from './components/single-post';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql', // Sostituisci con l'URL del tuo endpoint GraphQL di WordPress
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/post/:id" element={<SinglePost />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;