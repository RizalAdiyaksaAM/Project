import React from "react";
import { Navbar } from "../assets/components/Navbar";
import { Footer } from "../assets/components/Footer";
import { Check_Out_section } from "../assets/components/Check_Out_section";
import Navbar_After from "../assets/components/Navbar_After";

export const Check_Out = () => {
  return (
    <div>
      <Navbar_After></Navbar_After>
      <Check_Out_section></Check_Out_section>
      <Footer></Footer>
    </div>
  );
};
