import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
// import MainLayout from './layouts/MainLayout';
// import HomePage from './pages/HomePage';
import PostDetailsPage from "./pages/PostDetailsPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<MainLayout />}> */}
                {/* <Route index element={<HomePage />} /> */}
                <Route path="posts/:postId" element={<PostDetailsPage />} />
                {/* </Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
