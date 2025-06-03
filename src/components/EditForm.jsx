import { useState, useEffect } from 'react';
import { updatePost } from '../data/posts';
import { useParams } from 'react-router';
import { getPostById } from '../data/posts';

const EditForm = () => {
  const {postId} = useParams();
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

  // const handleImageChange = (e) => {
  //     const file = e.target.files[0];
  //     if (file) {
  //         const imgUrl = URL.createObjectURL(file);
  //         setForm((prev) => ({ ...prev, imgUrl }));
  //     }
  // };

  const handleSubmit = async e => {
    e.preventDefault();
    try  {
      await updatePost(postId, form);

    } catch (error) {
      console.error(error);
    }

    setForm({
      imgUrl: '',
      title: '',
      content: ''
    });
  };

  return (
    <section className="max-w-3xl ml-5">
      <h2 className="mb-4 mt-4 font-bold">YOU CAN EDIT THE POST HERE:</h2>
      <form onSubmit={handleSubmit} id="edit-form" className="flex flex-col gap-4 w-3/4">
        <label className="w-full flex gap-2 items-baseline">
          <span className="text-l">Author:</span>
          <input
            value={form.author}
            onChange={handleChange}
            name="author"
            type="text"
            placeholder="Edit title..."
            className="bg-inherit border-solid border-2 border-slate-700 rounded-lg p-2 grow"
          />
        </label>
        <label className="w-full flex gap-2 items-baseline">
          <span className="text-l">Title:</span>
          <input
            value={form.title}
            onChange={handleChange}
            name="title"
            type="text"
            placeholder="Edit title..."
            className="bg-inherit border-solid border-2 border-slate-700 rounded-lg p-2 grow"
          />
        </label>
        <label className="w-full flex gap-2 items-baseline">
          <span className="text-l">Content:</span>
          <input
            value={form.content}
            onChange={handleChange}
            name="content"
            type="text"
            placeholder="Edit content..."
            className="bg-inherit border-solid border-2 border-slate-700 rounded-lg p-2 grow"
          />
        </label>
        <label className="w-full flex gap-2 items-baseline">
          <span className="text-l">Cover:</span>
          <input
            value={form.cover}
            onChange={handleChange}
            name="cover"
            type="text"
            placeholder="Edit content..."
            className="bg-inherit border-solid border-2 border-slate-700 rounded-lg p-2 grow"
          />
        </label>
        {/* <label className="w-full flex gap-2 items-baseline">
                    <span className="text-xl">Image:</span>
                    <input
                        onChange={handleImageChange}
                        name="imgUrl"
                        accept="image/*"
                        type="file"
                        className="bg-inherit border-solid border-2 border-slate-700 rounded-lg p-2 grow"
                    />
                </label>
                {form.imgUrl && (
                    <img
                        src={form.imgUrl}
                        alt="Preview"
                        className="w-40 h-40 object-cover"
                    />
                )} */}
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
