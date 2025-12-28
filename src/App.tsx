import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PostDetails from './pages/PostDetails';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/post/:id" element={<PostDetails />} />
  <Route path="*" element={<div>404 - Page Not Found</div>} /> 
</Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;