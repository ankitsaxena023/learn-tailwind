import React from "react";

const TransformTransitionAnimation = () => {
  return (
    <div className="p-10 w-full bg-stone-900 h-full text-white">
      <div>
        <h1>1. No Transition</h1>
        <button className="px-5 py-2 rounded-full text-white bg-indigo-500 hover:bg-indigo-700 mb-5">
          Click Me
        </button>
      </div>
      <div>
        <h1>2. Transition</h1>
        <button className="px-5 py-2 rounded-full transition text-white mb-5 bg-indigo-500 hover:bg-indigo-700 duration-300 ease-in-out delay-100">
          With Transition
        </button>
        <p>
          a. Transition Property b. Transition Duration c. Transition timing
          Function d.Transition Delay
        </p>
      </div>
      <div>
        <h1>3. Transition & Transform</h1>
        <button className="px-5 py-2 rounded-full transition text-white mb-5 bg-indigo-500 hover:bg-teal-700 hover:translate-y-1 hover:scale-110 duration-300 ease-in-out delay-100">
          With Transition
        </button>
      </div>
      <div>
        <h1>4. Animation</h1>
        <p className="text-center mt-4">Spin</p>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center bg-teal-500 rounded-full w-24 h-24 animate-spin">
            <h1>spin</h1>
          </div>
        </div>
        <p className="text-center mt-4">Ping</p>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center bg-teal-500 rounded-full w-12 h-12 mt-5">
            <div className="w-12 h-12 bg-teal-800 rounded-full  animate-ping"></div>
          </div>
        </div>
        <p className="text-center mt-6">Pulse</p>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center bg-teal-500 rounded-full w-12 h-12">
            <div className="w-12 h-12 bg-teal-800 rounded-full  animate-pulse"></div>
          </div>
        </div>
        <p className="text-center my-5">Bounce</p>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center bg-teal-500 rounded-full w-12 h-12 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default TransformTransitionAnimation;
