import React,{useState} from "react";

const App= () => {
  return (
    <nav className="bg-green-100 shadow-md">
      <div className="  px-4 py-3 flex justify-between">
        <div className="text-2xl font-bold text-blue-600">MyLogo</div>
        <ul className="flex space-x-6 text-gray-700 ">
          <li>
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default App;
