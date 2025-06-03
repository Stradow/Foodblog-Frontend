import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {

  // move currPost state to MainLayout
  // useEffect(() => {
  //   let ignore = false;
  //   (async () => {
  //     try {
  //       const postData = await getPostById(postId);
  //       if (!ignore) {
  //         setCurrPost(postData);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();

  //   return () => {
  //     ignore = true;
  //   };
  // }, [postId]);
  return (
    <div className="fixed min-h-screen min-w-screen bg-[#F6F2ED] flex flex-col">
      <Header />
      <main className="flex">
        {/* pass it to outlet via outlet context */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
