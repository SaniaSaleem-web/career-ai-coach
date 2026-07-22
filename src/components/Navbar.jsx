function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">CareerCoach AI</h1>
      <div className="space-x-6">
        <a href="#home" className="hover:text-blue-200">Home</a>
        <a href="#chat" className="hover:text-blue-200">Chat</a>
        <a href="#about" className="hover:text-blue-200">About</a>
      </div>
    </nav>
  );
}

export default Navbar;