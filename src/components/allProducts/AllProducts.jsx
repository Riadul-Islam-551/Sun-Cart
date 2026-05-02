import { getProducts } from "@/lib/fetchJsonData";
import React from "react";
import AllProductCard from "./AllProductCard";

const AllProducts = async () => {
  const products = await getProducts();
  console.log(products);
  return (
    <div className=" bg-zinc-50 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-300  mx-auto py-12 px-4 gap-9">
        {products.map((product, ind) => (
          <AllProductCard key={ind} product={product}></AllProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
