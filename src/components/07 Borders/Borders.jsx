import React from "react";

const Borders = () => {
  return (
    <div className="p-10">
      <div>
        <h1 className="my-5">1. Border Width and Colors</h1>
        <div className="border-2 border-cyan-200 p-4">
          <div className="border-2 m-2 p-4">Border all around</div>
          <div className="border-2 border-amber-200 m-2 p-4">
            Colored Border
          </div>
          <div className="border-4 border-red-400 m-2 p-4">Border Width</div>
          <div className="border-x-4 border-purple-600 m-2 p-4">
            Border With X axis
          </div>
          <div className="border-y-4 border-orange-600 m-2 p-4">
            Border With Y axis
          </div>
          <div className="border-2 border-green-300 hover:border-l-4 m-2 p-4 cursor-pointer">
            Border Width changed with hover
          </div>
          <div className="border-2 border-blue-300 md:border-t-4 m-2 p-4">
            Border Width changed on medium screen
          </div>
        </div>
      </div>
      <div>
        <h1 className="my-5">2. Border Radius</h1>
        <div className="p-4 border-pink-700 border-2">
          <div className="bg-stone-400 flex justify-center items-center w-full h-12 rounded mb-4">
            <h1>Border rounded</h1>
          </div>
          <div className="bg-stone-500 flex justify-center items-center w-full h-12 rounded-md mb-4">
            <h1>Border rounded-medium</h1>
          </div>
          <div className="bg-stone-600 flex justify-center items-center w-full h-12 rounded-lg mb-4">
            <h1>Border rounded-large</h1>
          </div>
          <div className="bg-stone-700 flex justify-center items-center w-full h-12 rounded-full mb-4">
            <h1>Border rounded-full</h1>
          </div>
          <div className="bg-zinc-500 flex justify-center items-center w-full h-12 rounded-l-lg mb-4">
            <h1>Border rounded-left</h1>
          </div>
          <div className="bg-zinc-600 flex justify-center items-center w-full h-12 rounded-r-lg mb-4">
            <h1>Border rounded-right</h1>
          </div>
          <div className="bg-zinc-700 flex justify-center items-center w-full h-12 rounded-t-lg mb-4">
            <h1>Border rounded-top</h1>
          </div>
          <div className="bg-zinc-800 flex justify-center items-center w-full h-12 rounded-b-lg mb-4">
            <h1>Border rounded-bottom</h1>
          </div>
          <div className="bg-slate-500 flex justify-center items-center w-full h-12 rounded-tl-lg mb-4">
            <h1>Border rounded-top-left</h1>
          </div>
          <div className="bg-slate-600 flex justify-center items-center w-full h-12 rounded-tr-lg mb-4">
            <h1>Border rounded-top-right</h1>
          </div>
          <div className="bg-slate-700 flex justify-center items-center w-full h-12 rounded-br-lg mb-4">
            <h1>Border rounded-bottom-right</h1>
          </div>
          <div className="bg-slate-800 flex justify-center items-center w-full h-12 rounded-bl-lg mb-4">
            <h1>Border rounded-bottom-left</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Borders;
