import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookSquare,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-darker">
      <div className="max-w-7xl m-auto py-24 px-5 xl:px-0">
        <div className="w-full grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 pb-8 mb-8 border-b-[1px] border-primary">
          <div className="flex flex-col gap-5 col-span-12 mb-8 lg:mb-0 lg:col-span-3 row-end-2">
            <h3 className="text-primary text-4xl font-bold">IMAGINE A PLACE</h3>
            <div className="flex gap-4 text-gray-100 text-2xl">
              <FaTwitter />
              <FaInstagram />
              <FaFacebookSquare />
              <FaYoutube />
            </div>
          </div>
          <div className="spacer col-span-1 row-end-2"></div>
          <div className="col-span-6 md:col-span-2">
            <div className="text-primary text-md mb-3">Primary</div>
            <ul className="text-white text-md">
              <li className="mb-2">Download</li>
              <li className="mb-2">Nitro</li>
              <li className="mb-6 lg:mb-0">Status</li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="text-primary text-md mb-3">Company</div>
            <ul className="text-white text-md">
              <li className="mb-2">About</li>
              <li className="mb-2">Jobs</li>
              <li className="mb-2">Branding</li>
              <li className="mb-6 lg:mb-0">Newsroom</li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="text-primary text-md mb-3">Resources</div>
            <ul className="text-white text-md">
              <li className="mb-2">College</li>
              <li className="mb-2">Support</li>
              <li className="mb-2">Safety</li>
              <li className="mb-2">Blog</li>
              <li className="mb-2">Feedback</li>
              <li className="mb-2">Developers</li>
              <li className="mb-6 lg:mb-0">StreamKit</li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="text-primary text-md mb-3">Policies</div>
            <ul className="text-white text-md">
              <li className="mb-2">Terms</li>
              <li className="mb-2">Privacy</li>
              <li className="mb-2">Cookie Settings</li>
              <li className="mb-2">Guidelines</li>
              <li className="mb-2">Acknowledgements</li>
              <li className="mb-2">Licenses</li>
              <li className="mb-6 lg:mb-0">Moderation</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-3 text-white">
            <FaDiscord className="text-3xl" />
            <h4 className="text-xl font-medium">Discord</h4>
          </div>
          <button
            className="whitespace-nowrap block text-gray-100 px-4 py-2 font-medium text-sm rounded-full duration-500 bg-primary hover:shadow-custom
        "
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
