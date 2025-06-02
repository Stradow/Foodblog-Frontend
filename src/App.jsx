import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
// import MainLayout from './layouts/MainLayout';
import PostDetailsPage from "./pages/PostDetailsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";

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
