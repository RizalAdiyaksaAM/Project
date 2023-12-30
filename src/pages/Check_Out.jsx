import React from "react";
import { Navbar } from "../assets/components/Navbar";
import { Footer } from "../assets/components/Footer";
import { Check_Out_section } from "../assets/components/Check_Out_section";

export const Check_Out = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Check_Out_section></Check_Out_section>
      <Footer></Footer>
    </div>
  );
};
