import React from "react";
import {FcManager} from 'react-icons/fc'
import {BsCodeSquare} from 'react-icons/bs'

const Stats = () => {
  return (
    <div className="sm:w-[60vw] mx-auto w-[90vw]">
      <article className="p-6 bg-gray-900 border border-gray-800 rounded-lg my-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">My Clients</p>

            <p className="text-2xl font-medium text-white">200</p>
          </div>

          <span className="p-3 text-blue-400 rounded-full bg-blue-500/20">
          <FcManager/>
          </span>
        </div>

      </article>

      <article className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">Lines Of Code</p>

            <p className="text-2xl font-medium text-white">10'000</p>
          </div>

          <span className="p-3 text-blue-400 rounded-full bg-blue-500/20">
            <BsCodeSquare/>
          </span>
        </div>


      </article>
    </div>
  );
};

export default Stats;
