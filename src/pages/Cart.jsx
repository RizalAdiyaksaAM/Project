import React from "react";
import { Navbar } from "../assets/components/Navbar";
import { Cart_Section } from "../assets/components/Cart_Section";
import { Footer } from "../assets/components/Footer";
import Navbar_After from "../assets/components/Navbar_After";

export const Cart = () => {
  return (
    <div>
      <Navbar_After></Navbar_After>
      <Cart_Section></Cart_Section>
      <Footer></Footer>
    </div>
  );
};
