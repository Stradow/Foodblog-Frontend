import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import MainLayout from './layout/MainLayout';
import MainSection from './pages/MainSection';
import PostDetailsPage from './pages/PostDetailsPage';
import EditForm from './components/EditForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainSection />} />
          <Route path="posts/:postId" element={<PostDetailsPage />} />
          <Route path="posts/:postId/edit" element={<EditForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
