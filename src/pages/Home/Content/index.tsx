import React from "react";
import { FaDownload } from "react-icons/fa";
import { ReactComponent as GroupsImage } from "../../../assets/img-1.svg";
import { ReactComponent as VoiceImage } from "../../../assets/img-2.svg";
import { ReactComponent as RolesImage } from "../../../assets/img-3.svg";
import ChillingImage from "../../../assets/img-4.svg";

function Content() {
  return (
    <>
      <div className="w-full bg-white">
        <div className="max-w-7xl m-auto h-screen grid grid-cols-12 items-center px-5 xl:px-0">
          <GroupsImage className="col-span-7" />
          <div className="col-span-9/4">
            <h2 className="text-5xl font-bold mb-6">
              Create an invite-only place where you belong
            </h2>
            <p className="text-xl">
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100">
        <div className="max-w-7xl m-auto h-screen grid grid-cols-12 items-center px-5 xl:px-0">
          <div className="col-span-1/4">
            <h2 className="text-5xl font-bold mb-6">
              Where hanging out is easy
            </h2>
            <p className="text-xl">
              Grab a seat in a voice channel when you’re free. Friends in your
              server can see you’re around and instantly pop in to talk without
              having to call.
            </p>
          </div>
          <VoiceImage className="col-span-6/7" />
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="max-w-7xl m-auto h-screen grid grid-cols-12 items-center px-5 xl:px-0">
          <RolesImage className="col-span-7" />
          <div className="col-span-9/4">
            <h2 className="text-5xl font-bold mb-6">From few to a fandom</h2>
            <p className="text-xl">
              Get any community running with moderation tools and custom member
              access. Give members special powers, set up private channels, and
              more.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100">
        <div className="max-w-7xl m-auto min-h-screen grid grid-cols-12 items-center py-[120px] px-5 xl:px-0">
          <div className="col-span-2/10 justify-self-center">
            <h2 className="text-5xl font-bold mb-8 text-center">
              RELIABLE TECH FOR STAYING CLOSE
            </h2>
            <p className="text-xl text-center">
              Low-latency voice and video feels like you’re in the same room.
              Wave hello over video, watch friends stream their games, or gather
              up and have a drawing session with screen share.
            </p>
          </div>
          <img
            src={ChillingImage}
            className="col-span-12 justify-self-center w-full mb-[75px]"
          />
          <div className="col-span-2/10 justify-self-center flex flex-col items-center">
            <h4 className="text-3xl font-bold text-center mb-6">
              Ready to start your journey?
            </h4>
            <button className="whitespace-nowrap flex items-center justify-center gap-3 block bg-primary text-white py-4 px-6 font-normal text-xl rounded-full duration-500 hover:shadow-custom">
              <FaDownload />
              Download for Mac
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
