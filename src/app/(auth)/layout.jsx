import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <Nav></Nav>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;
