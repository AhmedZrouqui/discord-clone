import React from "react";

function Header() {
  return (
    <div className="w-full h-screen bg-primary">
      <div className="flex justify-between max-w-7xl m-auto text-white py-4 items-center">
        <div>
          <h2 className="text-2xl font-bold cursor-pointer">Discord</h2>
        </div>
        <nav>
          <ul className="flex gap-8 font-bold">
            <li className="cursor-pointer duration-300 underline-offset-4 hover:underline ease-in-out">
              Download
            </li>
            <li className="cursor-pointer duration-300 underline-offset-4 hover:underline ease-in-out">
              Nitro
            </li>
            <li className="cursor-pointer duration-300 underline-offset-4 hover:underline ease-in-out">
              Discover
            </li>
            <li className="cursor-pointer duration-300 underline-offset-4 hover:underline ease-in-out">
              Safety
            </li>
            <li className="cursor-pointer duration-300 underline-offset-4 hover:underline ease-in-out">
              Support
            </li>
            <li className="cursor-pointer duration-300 underline-offset-4 hover:underline ease-in-out">
              Blog
            </li>
            <li className="cursor-pointer duration-300 underline-offset-4 hover:underline ease-in-out">
              Careers
            </li>
          </ul>
        </nav>
        <button
          className="whitespace-nowrap bg-white text-gray-900 px-4 py-2 rounded-full duration-500 hover:text-primary hover:shadow-xl
        "
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
