import React from "react";

const Loading = () => {
  return (
    <div className="container m-auto">
      <div className="container w-[60vw] h-[100vh] m-auto">
        <div className="breadcrumbs text-sm text-white text-lg py-12">
          <ul>
            <li className="skeleton rounded-lg w-16"></li>
            <li className="">
              <div className=" skeleton w-16 rounded-lg">Title</div>
            </li>
          </ul>
        </div>
        <div className="relative w-[900px] h-[500px] m-auto rounded-xl overflow-hidden">
          <div className={` bg-no-repeat bg-cover w-full h-full`}></div>
          <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-lg">
            <div className="container grid grid-cols-3 gap-4 w-full h-[90%] items-center">
              <img className="skeleton w-64 h-96 rounded-2xl justify-center items-center flex m-auto" />
              <div className="container w-full h-[90%] col-span-2 mt-8">
                <p className=" text font-bold text-4xl w-32 h-8 rounded-lg skeleton"></p>
                <div className="container inline-flex items-center my-2">
                  <p className="skeleton text text-lg w-20 h-6 rounded-lg"></p>
                  <p className="text font-bold text-xl px-2"></p>
                  <p className="text text-lg"></p>
                  <p className="text font-bold text-xl px-2"></p>
                  <p className="text text-lg"></p>
                </div>
                <div>
                  <p className="my-2 ">Overview</p>
                  <p className="skeleton w-80 h-6 rounded-lg mb-2"></p>
                  <p className="skeleton w-92  h-6 rounded-lg mb-2"></p>
                  <p className="skeleton w-96  h-6 rounded-lg"></p>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
