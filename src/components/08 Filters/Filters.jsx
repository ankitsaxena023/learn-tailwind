import React from "react";

const Filters = () => {
  return (
    <div className="p-5">
      <div>
        <h1>1. Contrast</h1>
        <div className="border m-10 flex flex-wrap justify-center items-center p-10 gap-8">
          <img
            className="w-60 bg-cover bg-no-repeat bg-center contrast-50"
            src="https://images.unsplash.com/photo-1697219590638-d2db7748802e?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className="w-60 bg-cover bg-no-repeat bg-center contrast-100"
            src="https://images.unsplash.com/photo-1697219590638-d2db7748802e?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className="w-60 bg-cover bg-no-repeat bg-center contrast-125"
            src="https://images.unsplash.com/photo-1697219590638-d2db7748802e?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className="w-60 bg-cover bg-no-repeat bg-center contrast-200"
            src="https://images.unsplash.com/photo-1697219590638-d2db7748802e?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
      <div>
        <h1>2. Brightness</h1>
        <div className="border m-10 flex flex-wrap justify-center items-center p-10 gap-8">
          <img
            className="w-60 bg-cover bg-no-repeat bg-center brightness-50"
            src="https://images.unsplash.com/photo-1702429509096-deae835cd84c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className="w-60 bg-cover bg-no-repeat bg-center brightness-100"
            src="https://images.unsplash.com/photo-1702429509096-deae835cd84c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className="w-60 bg-cover bg-no-repeat bg-center brightness-150"
            src="https://images.unsplash.com/photo-1702429509096-deae835cd84c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className="w-60 bg-cover bg-no-repeat bg-center brightness-200"
            src="https://images.unsplash.com/photo-1702429509096-deae835cd84c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
      <div>
        <h1>3. Grayscale</h1>
        <div className="border m-10 flex flex-wrap justify-around items-center p-10 gap-8">
          <img
            className="w-60 bg-cover bg-no-repeat bg-center grayscale-0"
            src="https://images.unsplash.com/photo-1702450999656-e02eeade775c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className="w-60 bg-cover bg-no-repeat bg-center grayscale"
            src="https://images.unsplash.com/photo-1702450999656-e02eeade775c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className="w-60 bg-cover bg-no-repeat bg-center invert"
            src="https://images.unsplash.com/photo-1702450999656-e02eeade775c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className="w-60 bg-cover bg-no-repeat bg-center sepia"
            src="https://images.unsplash.com/photo-1702450999656-e02eeade775c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
      <div>
        <h1>4. Hue Rotate</h1>
        <div className="border m-10 flex flex-wrap justify-around items-center p-10 gap-8">
          <img
            className="w-60 bg-cover bg-no-repeat bg-center "
            src="https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className="w-60 bg-cover bg-no-repeat bg-center "
            src="https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className="w-60 bg-cover bg-no-repeat bg-center "
            src="https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className="w-60 bg-cover bg-no-repeat bg-center "
            src="https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
      <div>
        <h1>5. Saturate</h1>
        <div className="border m-10 flex flex-wrap justify-around items-center p-10 gap-8">
          <img
            className="w-60 bg-cover bg-no-repeat bg-center saturate-50"
            src="https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className="w-60 bg-cover bg-no-repeat bg-center saturate-100"
            src="https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className="w-60 bg-cover bg-no-repeat bg-center saturate-150"
            src="https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className="w-60 bg-cover bg-no-repeat bg-center saturate-200"
            src="https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
      <div>
        <h1>6. Blur</h1>
        <div className="border m-10 flex flex-wrap justify-around items-center p-10 gap-8">
          <img
            className="w-60 bg-cover bg-no-repeat bg-center blur-none"
            src="https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className="w-60 bg-cover bg-no-repeat bg-center blur-sm"
            src="https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className="w-60 bg-cover bg-no-repeat bg-center blur-md"
            src="https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className="w-60 bg-cover bg-no-repeat bg-center blur-lg"
            src="https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
