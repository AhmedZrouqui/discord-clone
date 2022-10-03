import React from "react";
import { FaDiscord } from "react-icons/fa";

function Header() {
  return (
    <div className="w-full h-screen bg-primary">
      <div className="max-w-7xl m-auto px-5 xl:px-0 h-full">
        <div className="flex justify-between text-white py-4 items-center font-medium">
          <div className="flex gap-2 items-center">
            <FaDiscord className="text-4xl" />
            <h2 className="text-2xl font-bold cursor-pointer"> Discord</h2>
          </div>
          <nav>
            <ul className="hidden gap-8 lg:flex">
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
          <div className="flex items-center gap-4">
            <button
              className="whitespace-nowrap block bg-white text-gray-900 px-4 py-2 font-medium text-sm rounded-full duration-500 hover:text-primary hover:shadow-custom
        "
            >
              Login
            </button>
            <div className="flex lg:hidden">M</div>
          </div>
        </div>
        <div className="mt-[150px] text-white flex flex-col justify-center lg:items-center">
          <h1 className="text-5xl font-bold uppercase mb-4">
            imagine a place...
          </h1>
          <p className="lg:text-center lg:max-w-4xl text-xl">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community.
            <br /> Where just you and a handful of friends can spend time
            together. A place that makes it easy to talk every day and hang out
            more often.
          </p>
          <div className="flex gap-6 mt-8">
            <button className="whitespace-nowrap block bg-white text-gray-900 px-6 py-4 font-medium text-xl rounded-full duration-500 hover:text-primary hover:shadow-custom">
              Download for Mac
            </button>
            <button className="whitespace-nowrap block bg-offBlack text-white px-6 py-4 font-medium text-xl rounded-full duration-500 hover:shadow-custom">
              Open Discord in your browser
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
