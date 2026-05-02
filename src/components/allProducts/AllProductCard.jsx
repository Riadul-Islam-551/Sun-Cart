import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllProductCard = ({ product }) => {
  const {
    id,
    name,
    brand,
    price,
    rating,
    stock,
    description,
    image,
    category,
  } = product;
  return (
    <div className="group card bg-base-100 shadow-sm rounded-2xl">
      <figure className="p-4">
        <div className="relative w-full h-72 overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="h-full group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </figure>
      <div className="card-body items-start text-start ">
        <h2 className="card-title">{name}</h2>
        <p className="text-warning font-bold">$ {price}</p>
        <div className="card-actions">
          <Button>Buy Now</Button>
          <Button variant="secondary">
            <Link href={`/product/${id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AllProductCard;
