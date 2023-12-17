import React from "react";

const ContainerSpacing = () => {
  return (
    <div>
      <div>
        <h1>1. Margin</h1>
        <div className="m-5 bg-yellow-800">Margin All Around</div>
        <div className="my-4 bg-yellow-200">Margin from Y axis</div>
        <div className="mx-4 bg-yellow-300">Margin from X axis</div>
        <div className="mt-6 bg-yellow-400">Margin Top</div>
        <div className="mb-3 bg-yellow-500">Margin Bottom</div>
        <div className="ml-5 bg-yellow-600">Margin Left</div>
        <div className="mr-4 bg-yellow-700">Margin Right</div>
      </div>
      <div>
        <h1>2. Arbitrary Spacing</h1>
        <div className="m-[14px]">margin with choice(in px)</div>
      </div>
      <div>
        <h1>3. Padding</h1>
        <div className="p-4 bg-violet-800">Padding All Around</div>
        <div className="py-5 bg-violet-200">Padding from Y axis</div>
        <div className="px-5 bg-violet-300">Padding from X axis</div>
        <div className="pt-6 bg-violet-400">Padding Top</div>
        <div className="pb-6 bg-violet-500">Padding Bottom</div>
        <div className="pl-5 bg-violet-600">Padding Left</div>
        <div className="pr-5 bg-violet-700">Padding Right</div>
        <div className="pb-[50px] bg-violet-900">Padding with own choice</div>
      </div>
      <div>
        <h1>4. Space Between X</h1>
        <div className="flex space-x-4">
          <div className="p-4 bg-teal-100">01</div>
          <div className="p-4 bg-teal-200">02</div>
          <div className="p-4 bg-teal-300">03</div>
        </div>
      </div>
      <div>
        <h1>5. Space Between Y</h1>
        <div className="flex flex-col space-y-2">
          <div className="p-4 bg-teal-100">01</div>
          <div className="p-4 bg-teal-200">02</div>
          <div className="p-4 bg-teal-300">03</div>
        </div>
      </div>
    </div>
  );
};

export default ContainerSpacing;
