import React from "react";

const PositionDisplay = () => {
  return (
    <div>
      <div>
        <h1 className="mb-3">1. Position</h1>
        <div className="bg-green-200 mb-4 w-1/2 relative h-48">
          <h1>relative</h1>
          <div className="bg-green-600 absolute p-4 left-0 top-0">absolute</div>
        </div>

        <div className="bg-green-200 mb-4 w-1/2 relative h-48">
          <h1>relative</h1>
          <div className="bg-green-600 absolute p-4 right-0 top-0">
            absolute
          </div>
        </div>

        <div className="bg-green-200 mb-4 w-1/2 relative h-48">
          <h1>relative</h1>
          <div className="bg-green-600 absolute p-4 left-0 bottom-0">
            absolute
          </div>
        </div>

        <div className="bg-green-200 mb-4 w-1/2 relative h-48">
          <h1>relative</h1>
          <div className="bg-green-600 absolute p-4 right-0 bottom-0">
            absolute
          </div>
        </div>
      </div>
      <h1 className="fixed right-2 bottom-2 bg-green-600 px-2 cursor-pointer">
        fixed
      </h1>
      <div>
        <h1 className="mb-3">2. Display</h1>
        <div className="bg-indigo-200 mb-10 p-10 w-160">
          <span className="inline w-40 h-40 bg-rose-500">
            a. This is inline display and it'll wrap normally and you can't set
            width and height. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Magnam, quae? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Obcaecati dolorum quaerat facere atque
            maiores esse explicabo iure tenetur similique laborum!
          </span>
          (Hello World)
          <span className="inline-block bg-rose-500 h-24">
            b. This is display inline-block and it'll not extend beyond it's
            parent and you can set width and height to it. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Delectus, vitae.
          </span>
          (hello world)
          <span className="block">
            c. This is display block and it'll start from a new line
          </span>
          (Hello world)
          <span className="hidden">
            d. This is display hidden and it'll not display anything due to
            hidden
          </span>
        </div>
      </div>
    </div>
  );
};

export default PositionDisplay;
