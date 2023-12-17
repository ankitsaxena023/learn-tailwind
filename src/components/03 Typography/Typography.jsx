import React from "react";

const Typography = () => {
  return (
    <div>
      <div>
        <h1>1.Font Size</h1>
        <div className="bg-teal-100 p-5 mb-5">
          <p className="text-xs">Tailwind is awesome</p>
          <p className="text-sm">Tailwind is awesome</p>
          <p className="text-base">Tailwind is awesome</p>
          <p className="text-lg">Tailwind is awesome</p>
          <p className="text-xl">Tailwind is awesome</p>
          <p className="text-2xl">Tailwind is awesome</p>
          <p className="text-3xl">Tailwind is awesome</p>
          <p className="text-4xl">Tailwind is awesome</p>
          <p className="text-5xl">Tailwind is awesome</p>
          <p className="text-6xl">Tailwind is awesome</p>
          <p className="text-7xl">Tailwind is awesome</p>
          <p className="text-8xl">Tailwind is awesome</p>
          <p className="text-9xl">Tailwind is awesome</p>
        </div>
      </div>
      <div>
        <h1>2.Font Family</h1>
        <div className="container bg-indigo-200 p-10 mb-10">
          <p className="font-sans">Tailwind is Awesome</p>
          <p className="font-serif">Tailwind is Awesome</p>
          <p className="font-mono">Tailwind is Awesome</p>
        </div>
      </div>
      <div>
        <h1>3.Font Weight</h1>
        <div className="container bg-orange-200 p-10 mb-10">
          <p className="font-light">Tailwind is Awesome</p>
          <p className="font-normal">Tailwind is Awesome</p>
          <p className="font-medium">Tailwind is Awesome</p>
          <p className="font-semibold">Tailwind is Awesome</p>
          <p className="font-bold">Tailwind is Awesome</p>
        </div>
      </div>
      <div>
        <h1>4.Letter Spacing</h1>
        <div className="container bg-red-200 p-10 mb-10">
          <p className="tracking-tighter">Tailwind is Awesome</p>
          <p className="tracking-tight">Tailwind is Awesome</p>
          <p className="tracking-normal">Tailwind is Awesome</p>
          <p className="tracking-wide">Tailwind is Awesome</p>
          <p className="tracking-wider">Tailwind is Awesome</p>
          <p className="tracking-widest">Tailwind is Awesome</p>
        </div>
      </div>
      <div>
        <h1>5.Text Alignment</h1>
        <div className="container bg-emerald-200 p-10 mb-10">
          <p className="text-left">
            Tailwind is Awesome Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illo nostrum non aspernatur deserunt aliquam a
            delectus, odit officiis ex possimus.
          </p>
          <br />
          <p className="text-right">
            Tailwind is Awesome Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Ullam est ducimus corrupti placeat alias nihil,
            fugit deserunt voluptas asperiores aliquam.
          </p>
          <br />
          <p className="text-center">
            Tailwind is Awesome Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Quae eius rem animi temporibus quibusdam provident
            est explicabo recusandae doloremque officia.
          </p>
          <br />
          <p className="text-justify">
            Tailwind is Awesome Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Natus sit possimus rerum voluptatum quaerat magni
            ab dignissimos sequi, ea necessitatibus!
          </p>
        </div>
      </div>
      <div>
        <h1>6.Text Decoration</h1>
        <div className="container bg-sky-200 p-10 mb-10">
          <p className="underline decoration-2">Tailwind is Awesome</p>
          <p className="overline decoration-3">Tailwind is Awesome</p>
          <p className="line-through decoration-4">Tailwind is Awesome</p>
        </div>

        <div>a.Decoration Style</div>
        <div className="container bg-cyan-200 p-10 mb-10">
          <p className="underline decoration-solid decoration-4">
            Tailwind is Awesome
          </p>
          <p className="underline decoration-double">Tailwind is Awesome</p>
          <p className="underline decoration-dotted">Tailwind is Awesome</p>
          <p className="underline decoration-dashed">Tailwind is Awesome</p>
          <p className="underline decoration-wavy">Tailwind is Awesome</p>
        </div>

        <div>b.Decoration Offset</div>
        <div className="container bg-indigo-200 p-10 mb-10">
          <p className="underline underline-offset-1">Tailwind is Awesome</p>
          <p className="underline underline-offset-2">Tailwind is Awesome</p>
          <p className="underline underline-offset-3">Tailwind is Awesome</p>
          <p className="underline underline-offset-4">Tailwind is Awesome</p>
          <p className="underline underline-offset-8">Tailwind is Awesome</p>
        </div>
      </div>

      <div>7.Text Transform</div>
      <div className="container bg-purple-200 p-10 mb-10">
        <p className="uppercase">Tailwind is Awesome</p>
        <p className="lowercase">Tailwind is Awesome</p>
        <p className="capitalize">Tailwind is Awesome</p>
      </div>
    </div>
  );
};

export default Typography;
