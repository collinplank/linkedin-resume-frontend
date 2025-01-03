export function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold text-blue-700">
          <a href="#" className="hover:underline">
            Definitely Not LinkedIn
          </a>
        </div>
        <div className="space-x-6 text-gray-700">
          <a href="#" className="hover:text-blue-500 hover:underline text-lg">
            Home
          </a>
          <a href="#" className="hover:text-blue-500 hover:underline text-lg">
            Link
          </a>
        </div>
      </nav>
    </header>
  );
}
