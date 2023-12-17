import React from "react";

const Color = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl mb-4">1. Colors with different Shades</h1>
        <p className="text-violet-200 text-2xl">Tailwind</p>
        <p className="text-violet-300 text-2xl">Tailwind</p>
        <p className="text-violet-400 text-2xl">Tailwind</p>
        <p className="text-violet-500 text-2xl">Tailwind</p>
        <p className="text-violet-600 text-2xl">Tailwind</p>
        <p className="text-violet-700 text-2xl">Tailwind</p>
        <p className="text-violet-800 text-2xl">Tailwind</p>
      </div>
      <hr />
      <div>
        <h1 className="text-3xl mt-4">2. Background Colors</h1>
        <p className="bg-green-500 text-white text-2xl">Tailwind</p>
        <p className="bg-red-500 text-white text-2xl">Tailwind</p>
        <p className="bg-teal-500 text-white text-2xl">Tailwind</p>
        <p className="bg-slate-500 text-white text-2xl">Tailwind</p>
      </div>
      <div>
        <h1 className="text-3xl mt-4">3. Text Decoration</h1>
        <p className="line-through text-2xl">Tailwind</p>
        <p className="underline text-2xl">Tailwind</p>
        <p className="underline decoration-violet-400 text-2xl">Tailwind</p>
        <p className="overline decoration-blue-400 text-2xl">Tailwind</p>
      </div>
      <div>
        {/* Input checkbox tick color */}
        <h1 className="text-3xl mt-4">
          4. Accent Colors (Input checkbox tick color)
        </h1>
        <input type="checkbox" checked />
        <input type="checkbox" className=" accent-yellow-600" checked />
        <input type="checkbox" className=" accent-red-600" checked />
        <input type="checkbox" className=" accent-teal-600" checked />
      </div>
      <div>
        {/* If you want to provide your own colors */}
        <h1 className="text-3xl mt-4">4. Arbitrary Colors (Your own colors)</h1>
        <p className="text-[#ab5489]">Tailwind</p>
        <p className="text-[#065535]">Tailwind</p>
        <p className="text-[#cc0000]">Tailwind</p>
        <p className="text-[#420420]">Tailwind</p>
      </div>
    </div>
  );
};

export default Color;
