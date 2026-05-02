import React from "react";
import bannerImage from "../assets/sunglass-banner.jpg";
import Image from "next/image";
import { Button } from "@heroui/react";
import { FaPlus } from "react-icons/fa";
import "animate.css";

const Banner = () => {
  return (
    <div className="hero py-16">
      <div className="hero-content container flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <Image
            src={bannerImage}
            alt="SunCart banner"
            height="600"
            width="600"
            className="rounded"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-accent text-center lg:text-start mt-4 ">
            Hot Deals !
          </h1>
          <p className="py-6 text-center lg:text-start max-w-125 mx-auto lg:mx-0">
            Purchase sunglasses from our store and enjoy exclusive discounts on
            the latest styles. Don&apos;t miss out on our hot deals and elevate
            your eye-wear game with us!
          </p>
          <div className="text-center lg:text-start animate__animated animate__pulse animate__infinite animate__slow">
            <p
              className="p-3 text-warning rounded-full border-2 border-blue-300 my-2
             md:my-3 lg:my-5  inline-block"
            >
              50% off on Flash Sell
            </p>
          </div>

          <div className="flex justify-center lg:justify-start items-center gap-3">
            <Button variant="secondary">
              <FaPlus />
              Add to Cart
            </Button>
            <Button>See the products</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
