import { useState, useEffect } from 'react';
import { updatePost } from '../data/posts';
import { useParams } from 'react-router';
import { getPostById } from '../data/posts';

const EditForm = () => {
  const { postId } = useParams();
  const [form, setForm] = useState({
    author: '',
    title: '',
    content: '',
    cover: ''
  });

  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        const postData = await getPostById(postId);
        if (!ignore) {
          setForm(postData);
        }
      } catch (error) {
        console.error(error);
      }
    })();

    return () => {
      ignore = true;
    };
  }, [postId]);

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await updatePost(postId, form);
    } catch (error) {
      console.error(error);
    }

    setForm({
      author: '',
      title: '',
      content: '',
      cover: ''
    });
  };

  return (
    <section className="max-w-3xl mx-auto mt-5 flex flex-col justify-center px-4 py-5">
      <h2 className="mb-4 mt-4 font-bold text-gray-900">YOU CAN EDIT THE POST HERE:</h2>
      <br />
      <form onSubmit={handleSubmit} id="edit-form" className="flex flex-col gap-4 w-full max-w-lg">
        <label className="w-120 flex gap-2 items-baseline">
          <span className="text-gray-900 text-l w-16">Author:</span>
          <input
            value={form.author}
            onChange={handleChange}
            name="author"
            type="text"
            placeholder="Edit title..."
            className="text-gray-900 bg-inherit border-solid border-2 border-slate-700 rounded-lg p-2 grow"
          />
        </label>
        <label className="w-120 flex gap-2 items-baseline">
          <span className="text-gray-900 text-l w-16">Title:</span>
          <input
            value={form.title}
            onChange={handleChange}
            name="title"
            type="text"
            placeholder="Edit title..."
            className="text-gray-900 bg-inherit border-solid border-2 border-slate-700 rounded-lg p-2 grow"
          />
        </label>
        <label className="w-120 flex gap-2 items-baseline">
          <span className="text-gray-900 text-l w-16">Content:</span>
          <input
            value={form.content}
            onChange={handleChange}
            name="content"
            type="text"
            placeholder="Edit content..."
            className="text-gray-900 bg-inherit border-solid border-2 border-slate-700 rounded-lg p-2 grow"
          />
        </label>
        <label className="w-120 flex gap-2 items-baseline">
          <span className="text-gray-900 text-l w-16">Cover:</span>
          <input
            value={form.cover}
            onChange={handleChange}
            name="cover"
            type="text"
            placeholder="Edit content..."
            className=" text-gray-900 bg-inherit border-solid border-2 border-slate-700 rounded-lg p-2 grow"
          />
        </label>
        <div className="flex justify-center">
          <button type="submit" className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-700 transition cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditForm;
