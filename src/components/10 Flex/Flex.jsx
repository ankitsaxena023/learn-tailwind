import React from "react";

const Flex = () => {
  return (
    <div className="p-10 m-10">
      <div>
        <h1 className="my-5">1. Display Flex</h1>
        <div className="border">
          <ul className="flex">
            <li className="bg-teal-100 m-5 p-5">01</li>
            <li className="bg-teal-100 m-5 p-5">02</li>
            <li className="bg-teal-100 m-5 p-5">03</li>
            <li className="bg-teal-100 m-5 p-5">04</li>
            <li className="bg-teal-100 m-5 p-5">05</li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="my-5">2. Flex Direction</h1>
        <div className="border">
          <ul className="flex flex-col">
            <li className="bg-teal-100 m-5 p-5">01</li>
            <li className="bg-teal-100 m-5 p-5">02</li>
            <li className="bg-teal-100 m-5 p-5">03</li>
            <li className="bg-teal-100 m-5 p-5">04</li>
            <li className="bg-teal-100 m-5 p-5">05</li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="my-5">3. Justify Content</h1>
        <div className="border">
          <ul className="flex   justify-center">
            <li className="bg-teal-100 m-5 p-5">01</li>
            <li className="bg-teal-100 m-5 p-5">02</li>
            <li className="bg-teal-100 m-5 p-5">03</li>
            <li className="bg-teal-100 m-5 p-5">04</li>
            <li className="bg-teal-100 m-5 p-5">05</li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="my-5">4. Order</h1>
        <div className="border">
          <ul className="flex justify-center">
            <li className="bg-teal-100 m-5 p-5 order-5">01</li>
            <li className="bg-teal-100 m-5 p-5 order-4">02</li>
            <li className="bg-teal-100 m-5 p-5">03</li>
            <li className="bg-teal-100 m-5 p-5">04</li>
            <li className="bg-teal-100 m-5 p-5 order-6">05</li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="my-5">5. Grow and Shrink</h1>
        <div className="border">
          <ul className="flex w-100">
            <li className="bg-teal-100 m-3 p-5 w-64 flex-none">01</li>
            <li className="bg-teal-100 m-3 p-5 w-64 flex-initial">02</li>
            <li className="bg-teal-100 m-3 p-5 w-64 flex-auto">03</li>
            <li className="bg-teal-100 m-3 p-5 w-64 flex-1">04</li>
            <li className="bg-teal-100 m-3 p-5 w-64">05</li>
            <li className="bg-teal-100 m-3 p-5 w-64">06</li>
            <li className="bg-teal-100 m-3 p-5 w-64">07</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Flex;
