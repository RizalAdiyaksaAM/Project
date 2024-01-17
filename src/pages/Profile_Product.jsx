import React from "react";
import { Navbar } from "../assets/components/Navbar";
import { Maps } from "../assets/components/Maps";
import { Catalog_2 } from "../assets/components/Catalog_2";
import { Footer } from "../assets/components/Footer";
import Navbar_After from "../assets/components/Navbar_After";

export const Profile_Product = () => {
  return (
    <div>
      <Navbar_After></Navbar_After>
      <Maps></Maps>
      <Catalog_2></Catalog_2>
      <Footer></Footer>
    </div>
  );
};
