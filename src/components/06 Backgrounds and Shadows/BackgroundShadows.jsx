import React from "react";

const BackgroundShadows = () => {
  return (
    <div>
      <div
        // Background Image and Properties
        className="w-full h-screen bg-blue-600 bg-cover bg-center"
        style={{
          backgroundImage: `url(
          'https://images.unsplash.com/photo-1585832770485-e68a5dbfad52?q=80&w=1561&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        )`,
        }}
      ></div>
      <div>
        <h1 className="px-10 pt-10">1. Background and Background Image 👆</h1>
        <h1 className="px-10 pt-10">2. Shadows 👇</h1>
        {/* Shadows */}
        {/* 1. Outer Shadows */}
        <div className="flex flex-wrap mb-10 ">
          <div className="w-[400px] mt-10 ml-7 p-3 shadow-md">
            Shadow Medium
          </div>
          <div className="w-[400px] mt-10 ml-7 p-3 shadow-lg">Shadow Large</div>
          <div className="w-[400px] mt-10 ml-7 p-3 shadow-xl">Shadow xl</div>
          <div className="w-[400px] mt-10 ml-7 p-3 shadow-2xl">Shadow 2xl</div>
        </div>
        {/* 2. Inner Shadows */}
        <div className="flex flex-wrap mb-10 ">
          <div className="w-[400px] mt-10 ml-7 p-3 shadow-inner">
            Shadow Inner
          </div>
        </div>
        {/* Shadows colors */}
        <div className="flex flex-wrap mb-10">
          <div className="w-[400px] mt-10 ml-7 p-3 shadow-lg shadow-teal-300/70">
            Shadow with colors
          </div>
        </div>
      </div>
      <div>
        {/* Gradients */}
        <h1 className="px-10 pt-5">3. Gradients 👇</h1>
        <div className="px-10 pt-5">
          <div className="bg-gradient-to-r from-rose-500 h-40 m-10 p-40 text-center w-full">
            from-rose-500 Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Possimus dolores quidem ab, optio eveniet dicta commodi sed
            quis ipsa quod nobis molestiae! Praesentium quis voluptate qui
            impedit quo doloremque atque? Enim dolorum velit odio error labore,
            quis praesentium, quod nesciunt nam molestiae inventore id molestias
            deserunt quas modi animi perferendis.
          </div>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-40 m-10 p-40 text-center">
            from-cyan-500 to-blue-500
          </div>
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-40 m-10 p-40 text-center">
            from-indigo-500 via-purple-500 to-pink-500
          </div>
          <div class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-40 m-10 p-40 text-center">
            from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundShadows;
