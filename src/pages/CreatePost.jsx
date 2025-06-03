function CreatePost() {
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Post</h2>

      <form className="space-y-6">
        {/* Image upload placeholder */}
        <label className="flex flex-col items-center justify-center border border-gray-300 border-dashed rounded-lg h-40 cursor-pointer hover:bg-gray-50 transition">
          <span className="text-4xl text-gray-400">+</span>
          <p className="text-gray-500 text-sm">Upload an image</p>
        </label>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Enter the title..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
          <textarea
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            rows={4}
            placeholder="Write your content..."
          />
        </div>
        <button
          type="button"
          className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
