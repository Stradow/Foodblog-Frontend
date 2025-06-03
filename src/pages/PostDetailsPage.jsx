import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { getPostById, deletePost } from '../data/posts';
import posts from '../data/data';

const PostDetailsPage = () => {
  const [currPost, setCurrPost] = useState({});
  const { postId } = useParams();
  // const navigate = useNavigate();
  console.log(postId);
  const { title, content, cover } = currPost;

  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        const postData = await getPostById(postId);
        if (!ignore) {
          setCurrPost(postData);
        }
      } catch (error) {
        console.error(error);
      }
    })();

    return () => {
      ignore = true;
    };
  }, [postId]);

  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={cover} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold max-w-xl">{title}</h1>
          <p className="py-6 max-w-xl">{content}</p>
          <div className="flex gap-2">
            <button onClick={deletePost} className="btn btn-primary">
              Delete
            </button>
            <Link to={`/posts/${postId}/edit`}>
              <button className="btn btn-success">Edit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsPage;
