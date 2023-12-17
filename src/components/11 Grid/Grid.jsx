import React from "react";

const Grid = () => {
  return (
    <div className="p-10">
      {/* Grid */}
      <div className="w-100 grid grid-cols-3 grid-rows-4 gap-4">
        <div className="bg-green-200 p-10">01</div>
        <div className="bg-green-200 p-10">02</div>
        <div className="bg-green-200 p-10">03</div>
        <div className="bg-green-200 p-10">04</div>
        <div className="bg-green-200 p-10">05</div>
        <div className="bg-green-200 p-10">06</div>
        <div className="bg-green-200 p-10">07</div>
        <div className="bg-green-200 p-10">08</div>
        <div className="bg-green-200 p-10">09</div>
      </div>
      {/* Grid Col and Row Span */}
      <div className="w-100 grid grid-cols-3 gap-4">
        <div className="bg-teal-200 p-10 row-span-2 col-span-2">01</div>
        <div className="bg-teal-200 p-10">02</div>
        <div className="bg-teal-200 p-10">03</div>
        <div className="bg-teal-200 p-10">04</div>
        <div className="bg-teal-200 p-10">05</div>
        <div className="bg-teal-200 p-10">06</div>
        <br />
        <br />
        <br />
        <br />
        <div className="bg-teal-200 p-10 col-span-3">08</div>
        <div className="bg-teal-200 p-10">09</div>
        <div className="bg-teal-200 p-10 col-span-2">10</div>
      </div>
    </div>
  );
};

export default Grid;
