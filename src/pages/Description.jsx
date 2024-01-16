import React from 'react'
import { Navbar } from "../assets/components/Navbar";
import { Description_Section } from '../assets/components/Description_Section';
import { Footer } from "../assets/components/Footer";
import Navbar_After from '../assets/components/Navbar_After';

export const Description = () => {
  return (
    <div>
      <Navbar_After></Navbar_After>
      <Description_Section></Description_Section>
      <Footer></Footer>
    </div>
  );
}
