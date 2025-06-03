import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="fixed min-h-screen min-w-screen bg-[#F6F2ED] flex flex-col">
      <Header />
      <main className="flex">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
