import React from "react";
import Marquee from "react-fast-marquee";
import Chenel from "../assets/chenel.jpg";
import Hermes from "../assets/hermes-logo-color.png";
import Inditex from "../assets/Inditex-Logo.wine.png";
import Louis from "../assets/Louis-Vuitton-Logo-SVG-preview.jpg";
import NewBalance from "../assets/New-Balance-Logo-1.png";
import Image from "next/image";

const Brands = () => {
  return (
    <div className="my-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center my-9">Top Brands</h1>
      <Marquee className=" rounded-3xl max-w-300  mx-auto">
        <Image
          src={Chenel}
          alt="Chenel"
          className="mx-4"
          width={200}
          height={200}
        />
        <Image
          src={Hermes} 
          alt="Hermes" 
          className="mx-4"
          width={200}
          height={200}
        />
        <Image
          src={Inditex}
          alt="Inditex"
          className="mx-4"
          width={200}
          height={200}
        />
        <Image
          src={Louis}
          alt="Louis Vuitton"
          className="mx-4"
          width={200}
          height={200}
        />
        <Image
          src={NewBalance}
          alt="New Balance"
          className="mx-4"
          width={200}
          height={200}
        />
      </Marquee>
    </div>
  );
};

export default Brands;
