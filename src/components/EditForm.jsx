import { useState } from "react";
import { updatePost } from "../data/posts";

const EditForm = () => {
    const [form, setForm] = useState({
        imgUrl: "",
        title: "",
        content: "",
    });

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const imgUrl = URL.createObjectURL(file);
    //         setForm((prev) => ({ ...prev, imgUrl }));
    //     }
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        updatePost(form.imgUrl, form.title, form.content);

        setForm({
            imgUrl: "",
            title: "",
            content: "",
        });
    };

    return (
        <section>
            <h2>Edit Form:</h2>
            <form
                onSubmit={handleSubmit}
                id="edit-form"
                className="flex flex-col gap-4 w-3/4"
            >
                <label className="w-full flex gap-2 items-baseline">
                    <span className="text-xl">Title:</span>
                    <input
                        value={form.title}
                        onChange={handleChange}
                        name="title"
                        type="text"
                        placeholder="Title of the post"
                        className="bg-inherit border-solid border-2 border-slate-700 rounded-lg p-2 grow"
                    />
                </label>
                <label className="w-full flex gap-2 items-baseline">
                    <span className="text-xl">Content:</span>
                    <input
                        value={form.content}
                        onChange={handleChange}
                        name="content"
                        type="text"
                        placeholder="Content of the post"
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
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </section>
    );
};

export default EditForm;
