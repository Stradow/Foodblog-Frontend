import CoreConcept from '../components/CoreConcept';
//import posts from '../data/data';
import { getPosts } from '../data/posts';

const MainSection =() => {
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
        console.error("Error Found", error);
      }
    })();
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <main className="flex-grow bg-[#140524]">
      <section className="p-8 rounded-md">
        <ul className="list-none p-0 m-0 flex gap-8 flex-wrap justify-center">
          {posts.map(post => (
            <CoreConcept key={post.id} title={post.title} image={post.cover} content={post.content} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default MainSection;
