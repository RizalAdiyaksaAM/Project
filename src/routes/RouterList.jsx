import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import Profile_Beranda from "../pages/Profile_Beranda";
import { Profile_Product } from "../pages/Profile_Product";
import { Description } from "../pages/Description";
import { Cart } from "../pages/Cart";
import { Check_Out } from "../pages/Check_Out";
import { Notification } from "../pages/Notification";
import Penjual_Pesanan from "../pages/penjual_pesanan";
import Penjual_Produk from "../pages/penjual_produk";
import { HomeAfter } from "../pages/HomeAfter";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home_pembeli" element={<HomeAfter/>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile_beranda/:penjualId" element={<Profile_Beranda />} />
        <Route path="/profile_product/:penjualId" element={<Profile_Product />} />
        <Route path="/description" element={<Description />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/check_out" element={<Check_Out />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/penjual_pesanan" element={<Penjual_Pesanan />} />
        <Route path="/penjual_produk" element={<Penjual_Produk />} />
      </Routes>
    </BrowserRouter>
  );
};
