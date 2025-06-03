import CoreConcept from '../components/CoreConcept';
import { useState, useEffect } from 'react';
//import posts from '../data/data';
import { getPosts } from '../data/posts';
import { Link } from 'react-router';

const MainSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        const allPosts = await getPosts();
        if (!ignore) {
          setPosts(allPosts);
        }
      } catch (error) {
        console.error('Error Found', error);
      }
    })();
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <main className="flex bg-[#F6F2ED] gap-10 py-7 px-10 max-w-[90rem] mx-auto h-[87vh]">
      <section className="flex border-y-10 border-[#FEFCF9] px-10 py-7 w-3/4 bg-[#FEFCF9]  overflow-y-auto rounded-3xl">
        <ul className=" grid grid-cols-2 gap-5 justify-center ">
          {posts.map(post => (
            <Link key={post.id} to={`/posts/${post.id}`}>
              <CoreConcept title={post.title} image={post.cover} content={post.content} />
            </Link>
          ))}
        </ul>
      </section>
      <section className="w-1/3">
        <div className="p-8 mb-10 bg-[#FEFCF9] rounded-3xl flex-1">
          <div className="w-full ">
            <h2 class="text-2xl font-bold text-gray-900 mb-1">About</h2>

            <p class="text-gray-700 mb-6">
              <b>Butter & Knife</b> is a collective of chefs, writers, and food photographers dedicated to sharing food
              from around the globe.
            </p>

            <div class="mb-6">
              <h3 class="font-semibold text-gray-900 mb-2">Our Principles:</h3>
              <ul class="list-disc pl-5 space-y-1 text-gray-700">
                <li>Every recipe is tested at least 12 times</li>
                <li>We prioritize sustainable, local sourcing</li>
                <li>Clear instructions with step-by-step visuals</li>
              </ul>
            </div>

            <div class="border-t border-black pt-6">
              <h3 class="font-semibold text-gray-900 mb-1">Connect With Us:</h3>
              <div class="flex gap-4">
                <a href="#" class="text-blue-600 hover:underline">
                  Instagram
                </a>
                <a href="#" class="text-blue-600 hover:underline">
                  Twitter
                </a>
                <a href="#" class="text-blue-600 hover:underline">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
        <Link to={`/create`}>
          <button>
            <div className="p-8 bg-[#FEFCF9] rounded-3xl flex-1  text-black text-2xl/7 font-bold hover:cursor-pointer hover:bg-[#A6A6A5] hover:text-white duration-400">
              <div className="w-full h-full mb-7">
                <img
                  src="https://img.icons8.com/?size=1000&id=oqWjYJSQSZAj&format=png&color=DE3031"
                  className="w-[35%] mx-auto"
                  alt=""
                />
                Press here to <br /> create a post
              </div>
            </div>
          </button>
        </Link>
      </section>
    </main>
  );
};

export default MainSection;
