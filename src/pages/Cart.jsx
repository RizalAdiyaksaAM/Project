import React from "react";
import { Navbar } from "../assets/components/Navbar";
import { Cart_Section } from "../assets/components/Cart_Section";
import { Footer } from "../assets/components/Footer";

export const Cart = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Cart_Section></Cart_Section>
      <Footer></Footer>
    </div>
  );
};
