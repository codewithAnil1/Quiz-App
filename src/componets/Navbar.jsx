import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky bg-gray-800 p-4 flex justify-between">
      <Link to="/" className="text-white font-bold">
        Home
      </Link>
    </nav>
  );
};

export default Navbar;
