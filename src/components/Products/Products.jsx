import React from "react";
import Img1 from "../../../public/assets/thunder_cover.jpg";
import Img2 from "../../../public/assets/fountain_cover.jpg";
import Img3 from "../../../public/assets/sky_cover.jpg";
import Img4 from "../../../public/assets/prec_cover.jpg";
import Img5 from "../../../public/assets/kids_cover.jpg";

import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Thunder Blasters",
    rating: 4.3,
    // color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Fountains",
    rating: 4.7,
    // color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Sky Show",
    rating: 4.5,
    // color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Precision Shots",
    rating: 4.9,
    // color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Kid's Favourite",
    rating: 4.4,
    // color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            🎁 This Diwali, get more dhamaka for your money!
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Crackling
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Check out our exclusive combo packs and discounts:
          </p>
        </div>
        {/* Body section */}
        <div>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
          place-items-center gap-5 "
          >
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md hover:cursor-pointer 
                  transition-transform duration-700 ease-in-out hover:scale-110"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button
              className="h-12 text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 
            rounded-md transition-transform duration-700 ease-in-out hover:scale-110"
            >
              Blast Now 🎇
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
