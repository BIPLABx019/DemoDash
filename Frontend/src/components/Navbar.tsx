import React from "react";
import { MoveUpRight } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="h-12 bg-transparent w-[86%] flex justify-between mt-6 ml-40 items-center">
      <div>
        <h1 className="text-5xl ">Savero</h1>
      </div>
      <div className="flex">
        <div>
          <button className="text-3xl ml-6 mr-6 mt-4 bg-[#FF5722] px-2 py-1 flex items-center">
            <div className="mr-2 ml-2">
            LOG IN / SIGNUP
            </div>
            <MoveUpRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
