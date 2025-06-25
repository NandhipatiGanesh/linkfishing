import { Pencil1Icon, ReloadIcon } from "@radix-ui/react-icons";

import React from "react";

const ChatUIUserResultLayout = () => {
  return (
    <div className="min-h-screen bg-[#F5F6FA] flex flex-col justify-between">
      {/* Main Section */}
      <div className="w-full p-4 sm:p-6 flex flex-col items-center">
        {/* Question Section */}
        <div className="relative w-full max-w-[940px] flex items-start space-x-4">
          {/* User Avatar (Outside Card) */}
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden shadow-md">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Question Card */}
          <div className="flex-1 bg-white shadow-lg rounded-[14px] p-4">
            <div className="flex items-center justify-between">
              {/* Question Text */}
              <p className="text-[#1B2559]-500 font-medium  font-['Plus Jakarta Sans']">
                The advantages of Artificial Intelligence
              </p>
              {/* Edit Icon */}
              <Pencil1Icon className="text-gray-400 hover:text-gray-600 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Answer Section */}
        <div className="relative w-full max-w-[940px] flex items-start mt-6 space-x-4">
          {/* Answer Logo (Outside Card) */}
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden shadow-md">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRRy13MyeQ9a5Txx3-D8MG40xztFfUsI4lnvNU8LPxqARV8AANe"
              alt="Answer Logo"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Answer Card */}
          <div className="flex-1 bg-white shadow-md rounded-[14px] p-6 text-[#1B2559] space-y-4">
            <p className="text-md leading-[28px] text-[#718096]-500  font-['Plus Jakarta Sans']">
              Artificial Intelligence (AI) offers numerous advantages and has
              the potential to revolutionize various aspects of our lives. Here
              are some key advantages of AI:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-md leading-[28px] text-[#718096]-500  font-['Plus Jakarta Sans']">
              <li>
                <strong>Automation:</strong> AI can automate repetitive and
                mundane tasks, saving time and effort for humans. It can handle
                large volumes of data, perform complex calculations, and execute
                tasks with precision and consistency.
              </li>
              <li>
                <strong>Decision-making:</strong> AI systems can analyze vast
                amounts of data, identify patterns, and make informed decisions
                based on that analysis.
              </li>
              <li>
                <strong>Improved accuracy:</strong> AI algorithms can achieve
                high levels of accuracy and precision in tasks such as image
                recognition, natural language processing, and data analysis.
              </li>
              <li>
                <strong>Continuous operation:</strong> AI systems can work
                tirelessly without the need for breaks, resulting in
                uninterrupted 24/7 operations.
              </li>
            </ol>
          </div>
        </div>

        {/* Regenerate Button */}
        <div
          className="w-[218px] h-[54px] mt-6 flex flex-row items-center gap-[10px] 
          border border-[#E2E8F0] rounded-[45px] 
          font-['Plus Jakarta Sans'] text-[14px] font-semibold leading-[16px] px-4"
        >
          {/* Icon */}
          <ReloadIcon className="w-[16px] h-[16px] text-[#1B2559]" />

          {/* Button */}
          <button className="flex-1 h-full flex justify-start items-center rounded-[45px] text-[#1B2559] hover:bg-gray-100 focus:ring-2 focus:ring-[#E2E8F0]">
            Regenerate Response
          </button>
        </div>

        {/* Input and Button Section */}
        <div className="w-full flex flex-col items-center justify-center py-6">
          <div className="flex flex-col sm:flex-row items-center w-[90%] max-w-[900px] space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Input */}
            <input
              type="text"
              placeholder="The advantages of Artificial Intelligence"
              className="flex-1 h-[50px] rounded-full border border-gray-200 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#6A5AE0] w-full sm:w-auto"
            />
            {/* Submit Button */}
            <button className="w-full sm:w-[192px] h-[54px] bg-gradient-to-r from-[#4A25E1] to-[#7B5AFF] rounded-full text-white font-semibold shadow-[0px_21px_27px_-10px_rgba(96,60,255,0.48)] hover:opacity-90 transition">
              Submit
            </button>
          </div>
          {/* Informational Note */}
          <div className="mt-2 text-xs text-gray-500 text-center">
            Free Research Preview. ChatGPT may produce inaccurate information
            about people, places, or facts.{" "}
            <span className="font-semibold underline cursor-pointer hover:text-gray-700">
              ChatGPT May 12 Version
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUIUserResultLayout;
