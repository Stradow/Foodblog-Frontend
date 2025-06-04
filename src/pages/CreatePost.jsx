import { useState } from 'react';
import { useNavigate } from 'react-router';

function CreatePost() {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [cover, setCover] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    const newPost = {
      author,
      title,
      content,
      cover
    };

    try {
      const res = await fetch('https://foodblog-backend-dwk1.onrender.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      });

      if (!res.ok) throw new Error('Failed to create post');
      const data = await res.json();
      alert('Post succesfully created!');
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white w-1/3 rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Post</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
          <input
            type="text"
            value={cover}
            onChange={e => setCover(e.target.value)}
            className="w-full border text-black border-gray-300 rounded-md px-4 py-2"
            placeholder="Paste image URL"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
          <input
            type="text"
            value={author}
            onChange={e => setAuthor(e.target.value)}
            className="w-full border text-black border-gray-300 rounded-md px-4 py-2"
            placeholder="Name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full border text-black border-gray-300 rounded-md px-4 py-2"
            placeholder="Enter the title"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Content</label>
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            className="w-full border text-black border-gray-300 rounded-md px-4 py-2"
            placeholder="Write your content"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition cursor-pointer"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
