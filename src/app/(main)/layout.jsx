import Banner from "@/components/Banner";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PopularProducts from "@/components/product/PopularProducts";
import SkinCareTips from "@/components/skinCareTips/SkinCareTips";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <Nav></Nav>
      <Banner></Banner>
      <PopularProducts></PopularProducts>
      <SkinCareTips></SkinCareTips>
      <Brands></Brands>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default layout;
