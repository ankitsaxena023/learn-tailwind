import React from "react";

const Sizing = () => {
  return (
    <div>
      <div>
        <h1>1. Width</h1>
        <div className="bg-teal-100 p-5">
          <div className="bg-red-600 m-1 w-0">0</div>
          <div className="bg-red-600 m-1 w-1">1</div>
          <div className="bg-red-600 m-1 w-1.5">1.5</div>
          <div className="bg-red-600 m-1 w-2">2</div>
          <div className="bg-red-600 m-1 w-3">3</div>
          <div className="bg-red-600 m-1 w-5">5</div>
          <div className="bg-red-600 m-1 w-7">7</div>
          <div className="bg-red-600 m-1 w-9">9</div>
          <div className="bg-red-600 m-1 w-10">10</div>
          <div className="bg-red-600 m-1 w-12">12</div>
          <div className="bg-red-600 m-1 w-14">14</div>
          <div className="bg-red-600 m-1 w-16">16</div>
          <div className="bg-red-600 m-1 w-20">20</div>
          <div className="bg-red-600 m-1 w-24">24</div>
          <div className="bg-red-600 m-1 w-28">28</div>
          <div className="bg-red-600 m-1 w-32">32</div>
          <div className="bg-red-600 m-1 w-40">40</div>
          <div className="bg-red-600 m-1 w-48">48</div>
          <div className="bg-red-600 m-1 w-56">56</div>
          <div className="bg-red-600 m-1 w-64">64</div>
          <div className="bg-red-600 m-1 w-80">80</div>
          <div className="bg-red-600 m-1 w-96">96</div>
        </div>
      </div>
      <div>
        <h1 className="mt-5">2. Percentage</h1>
        <div className="bg-cyan-200 mb-5 p-5">
          <div className="bg-sky-400 p-2 mb-4 w-1/2">1/2</div>
          <div className="bg-sky-400 p-2 mb-4 w-1/3">1/3</div>
          <div className="bg-sky-400 p-2 mb-4 w-1/5">1/5</div>
          <div className="bg-sky-400 p-2 mb-4 w-2/5">2/5</div>
          <div className="bg-sky-400 p-2 mb-4 w-3/4">3/4</div>
        </div>
      </div>
      <div>
        <h1 className="mt-4">3. Max Width</h1>
        <div className="bg-yellow-100 p-10 mb-4 max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quis
          exercitationem sed molestiae neque. Aliquam, perspiciatis. Voluptates
          incidunt sint minima impedit aspernatur esse, optio magnam quis
          doloremque praesentium rerum asperiores. Exercitationem consequuntur
          sequi aspernatur cum, dolore magni praesentium numquam dicta,
          doloribus pariatur soluta eaque perferendis, blanditiis impedit illo
          in necessitatibus possimus. Incidunt labore, nostrum magnam cumque
          iure tenetur hic soluta explicabo quaerat quisquam neque laboriosam
          possimus officia obcaecati mollitia fugiat reiciendis blanditiis
          pariatur, provident ad ipsa nulla nesciunt inventore. Fuga quaerat
          laboriosam at! Inventore hic ab, optio aliquam eos sit molestias.
          Optio tempore commodi quos explicabo officiis! Illo, magni harum.
        </div>
      </div>
      <div>
        <h1 className="mt-4">4.a viewport width & 100% width</h1>
        <div className="bg-green-500 my-2 p-5 w-screen">(vw) screen</div>
      </div>
      <div>
        <h1>4.b 100% of container</h1>
        <div className="bg-green-500 my-2 p-5 w-fill">(width-100%) w-full</div>
      </div>
      <div>
        <h1>5. Arbitrary Width</h1>
        <div className="bg-green-500 my-2 p-5 w-[500px]">
          (Arbitrary width) 500px
        </div>
      </div>
      <div>
        <h1>6. Height (Most of the same options as width)</h1>
        {/* https://tailwindcss.com/docs/height */}
        <div className="flex items-end mt-20 mb-10">
          <div className="bg-indigo-400 ml-5 h-24">Height-24</div>
          <div className="bg-indigo-400 ml-5 h-32">Height-32</div>
          <div className="bg-indigo-400 ml-5 h-40">Height-40</div>
          <div className="bg-indigo-400 ml-5 h-48">Height-48</div>
          <div className="bg-indigo-400 ml-5 h-56">Height-56</div>
          <div className="bg-indigo-400 ml-5 h-64">Height-64</div>
          <div className="bg-indigo-400 ml-5 h-80">Height-80</div>
          <div className="bg-indigo-400 ml-5 h-96">Height-96</div>
          <div className="bg-indigo-400 ml-5 h-[30rem]">Hgt-30rem</div>
        </div>
      </div>
      <div>
        <h1>7. Min Height</h1>
        <div className="h-96 p-5 bg-green-300 mb-5">
          <div className="min-h-full bg-teal-400">Take Full Height</div>
        </div>
      </div>
      <div>
        <h1>8. Max Height</h1>
        <div className="bg-orange-300 mb-4 p-5 h-40">
          <div className="bg-orange-600 h-48 max-h-full">Max Height Full</div>
        </div>
      </div>
      <div>
        <h1>9. Full Screen Height</h1>
        <div className="bg-pink-300 mb-5 h-screen"></div>
      </div>
      <div>
        <h1>10. Width Auto</h1>
        <div className="bg-purple-200 mb-5 p-5 w-auto">Auto</div>
      </div>
    </div>
  );
};

export default Sizing;
