import { getProducts } from "@/lib/fetchJsonData";
import Image from "next/image";
import React from "react";
import ProductCard from "./ProductCard";

const PopularProducts = async () => {
  const popularProducts = await getProducts();
  // console.log(popularProducts);
  return (
    <div className="max-w-300 mx-auto">
      <h1 className="text-2xl text-center font-bold md:text-3xl lg:text-4xl">
        Popular in Summer
      </h1>
      <div className="grid grid-cols-1 lg:grid-col-2 gap-5 my-9">
        {popularProducts.slice(0, 3).map((product, ind) => (
          <div key={ind}>
            <ProductCard product={product}></ProductCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
