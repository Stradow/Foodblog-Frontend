import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-[#4E4E4C] text-white">
      <div className=" mx-auto px-10 py-4 flex items-center max-w-[90rem] justify-between">
        <h1 className="text-2xl font-bold flex items-center gap-2">🍽️ Butter & Knife</h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link to="/">
                <button className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-700 transition">Home</button>
              </Link>
            </li>
            <li>
              <Link to="/create">
                <button className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-700 transition">Create Post</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
