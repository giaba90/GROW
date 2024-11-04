import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../pages/homepage';
import Archive from '../pages/archive';
import SinglePost from '../pages/single-post';
import Page from '@/pages/page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/archive/:slug" element={<Archive />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/page/:slug" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;