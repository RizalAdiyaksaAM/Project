import React from 'react'
import { Navbar } from "../assets/components/Navbar";
import { Description_Section } from '../assets/components/Description_Section';
import { Footer } from "../assets/components/Footer";

export const Description = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Description_Section></Description_Section>
      <Footer></Footer>
    </div>
  );
}
