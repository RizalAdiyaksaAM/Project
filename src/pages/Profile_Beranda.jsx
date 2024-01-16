import React from 'react'
import { Navbar } from "../assets/components/Navbar";
import { Maps } from "../assets/components/Maps";
import { Catalog } from "../assets/components/Catalog";
import { Footer } from "../assets/components/Footer";
import Navbar_After from '../assets/components/Navbar_After';

const Profile_Beranda = () => {
  return (
    <div>
      <Navbar_After></Navbar_After>
      <Maps></Maps>
      <Catalog></Catalog>
      <Footer></Footer>
    </div>
  );
}

export default Profile_Beranda