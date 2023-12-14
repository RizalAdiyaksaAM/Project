import React from "react";
import logo from "../svg/LogoBroyur.svg";
import ic__email from "../img/mail.svg"
import ic__instagram from "../img/instagram.svg"
import ic__phone from "../img/phone.svg"

export const Footer = () => {
  return (
    <section className="footer bg-[#142309] text-white py-[48px]">
      <div className="container mx-auto flex flex-col gap-6">
        <div className="content-top">
          <a href="#" className="logo">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="content-bottom">
          <div className="wrapper-menus flex gap-[320px] pb-[32px] mb-[32px] border-b-1 border-[#FBFBFB]">
            <div className="company flex flex-col gap-4">
              <h5 className="title text-xl font-semibold">Perusahaan</h5>
              <a href="#" className="nav-link">
                Tentang Kami
              </a>
              <a href="#" className="nav-link">
                Layanan
              </a>
              <a href="#" className="nav-link">
                FAQ
              </a>
            </div>
            <div className="contact flex flex-col gap-4">
              <h5 className="title text-xl font-semibold">Hubungi Kami</h5>
              <a href="#" className="nav-link flex gap-4">
                <img src={ic__email} alt="" />
                broyur@gmail.com
              </a>
              <a href="#" className="nav-link flex gap-4">
                <img src={ic__instagram} alt="" />
                broyur.id
              </a>
              <a href="#" className="nav-link flex gap-4">
                <img src={ic__phone} alt="" />
                +62-345-678-910
              </a>
            </div>
          </div>
          <div className="copyright text-center">
            <span className="copyright-text">Copyright © Broyur 2023</span>
          </div>
        </div>
      </div>
    </section>
  );
};
