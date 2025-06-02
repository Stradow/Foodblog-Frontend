function Header() {
  return (
    <header className="bg-[#1a1a2e] text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          🍽️Food Blog
        </h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <button className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-700 transition">
                Home
              </button>
            </li>
            <li>
              <button className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-700 transition">
                Create Post
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
