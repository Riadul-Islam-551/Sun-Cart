import { getProducts } from "@/lib/fetchJsonData";
import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import "animate.css";

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const allProducts = await getProducts();
  console.log(allProducts);
  const product = allProducts.find((item) => item.id === parseInt(id));
  console.log(product, "product");
  const {
    id: productId,
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
    <div className="bg-base-200">
      <div className="hero container mx-auto">
        <div className="hero-content flex-col lg:flex-row lg:items-start">
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="flex-1 rounded-3xl w-full "
          />
          <div className="flex-1 ">
            {/* name of product  */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl mt-3 font-bold pb-2 md:pb-4 lg:pb-6 ">
              {name}
            </h1>
            {/* price of product  */}
            <p className="text-3xl md:text-4xl lg:text-5xl text-orange-400  font-bold border-b pb-2 md:pb-4 lg:pb-6 border-gray-300">
              $ {price}
            </p>
            {/* quantity / stock  */}
            <div className="mt-2 md:mt-4 lg:mt-6">
              <Button variant="outline">Quantity : {stock}</Button>
            </div>
            {/* brands and category  */}
            <div className="flex justify-between items-center gap-2 mt-3">
              <div className="border w-full py-3 rounded-xl bg-orange-400 font-bold text-center text-base-100">
                Brand: {brand}
              </div>
              <div className="border w-full py-3 rounded-xl bg-orange-400 font-bold text-center text-base-100">
                Category: {category}
              </div>
            </div>
            <div className="text-lg font-bold text-muted flex justify-start items-center gap-2 my-6 md:my-8 lg:my-12 ">
              <FaStar className="text-warning" /> {rating}
            </div>
            <div className="animate__animated animate__pulse animate__infinite">
              <Button className="font-bold w-full py-7 text-lg ">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* description of product */}
      <div className="container mx-auto py-12 px-4  ">
        <h2 className="text-xl md:text-2xl mt-10 font-bold pb-4 border-b border-gray-300">
          Description
        </h2>
        <p className="text-lg mt-6 text-muted text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
