import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-64 h-screen flex flex-col justify-between px-6 bg-amber-100">
      <div>logo</div>

      <nav className="space-x-4 text-green-500">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-300">
          About
        </Link>
      </nav>
    </div>
  );
};

export default Header;
