export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Nabazza</div>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-700 hover:text-gray-900">Home</a></li>
          <li><a href="#" className="text-gray-700 hover:text-gray-900">About</a></li>
          <li><a href="#" className="text-gray-700 hover:text-gray-900">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
