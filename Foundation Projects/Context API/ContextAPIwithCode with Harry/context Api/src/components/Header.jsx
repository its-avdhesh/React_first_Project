import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <div className="text-2xl font-bold">Logo</div>
        <div>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-200">Home</Link></li>  {/* ✅ Corrected */}
            <li><Link to="/about" className="hover:text-gray-200">About</Link></li>  {/* ✅ Fixed syntax */}
            <li><Link to="/contact" className="hover:text-gray-200">Contact</Link></li>  {/* ✅ Corrected */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
