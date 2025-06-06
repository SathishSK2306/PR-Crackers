import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Arrivals
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 text-black rounded-md"
          />
        </div>
        <div className=" flex justify-center">
          <button
            className="h-12 text-center mt-10 cursor-pointer  bg-primary text-white py-1 px-5 
            rounded-md transition-transform duration-700 ease-in-out hover:scale-110 "
          >
            Notify Me......
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
