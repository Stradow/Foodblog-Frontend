import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import MainLayout from './layout/MainLayout';
import MainSection from './pages/MainSection';
import PostDetailsPage from './pages/PostDetailsPage';
import EditForm from './components/EditForm';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/posts" element={<MainLayout />}>
          <Route index element={<MainSection />} />
          <Route path="posts/:postId" element={<PostDetailsPage />} />
          <Route path="posts/:postId/edit" element={<EditForm />} />
          <Route path="create" element={<CreatePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
