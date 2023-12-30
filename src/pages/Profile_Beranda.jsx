import React from 'react'
import { Navbar } from "../assets/components/Navbar";
import { Maps } from "../assets/components/Maps";
import { Catalog } from "../assets/components/Catalog";
import { Footer } from "../assets/components/Footer";

const Profile_Beranda = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Maps></Maps>
      <Catalog></Catalog>
      <Footer></Footer>
    </div>
  );
}

export default Profile_Beranda