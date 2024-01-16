import React from "react";
import ic_profile from "../../assets/img/cart_ic-User_fill.png";
import image_preview from "../../assets/img/description-preview-img.png";
import { Button, Checkbox } from "@nextui-org/react";
import ic_dropDown from "../../assets/img/checkOut-ic-dropDown.svg";
import image_paymentDana from "../../assets/img/checkOut-img-dana.png";
import image_paymentCOD from "../../assets/img/checkOut-img-cod.png";
import { useNavigate } from "react-router-dom";

export const Check_Out_section = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="section-check-out bg-[#F8F8F8] h-screen py-[100px]">
        <div className="container mx-auto flex justify-between items-start gap-[30px]">
          <div className="content-left flex flex-col gap-[16px] w-full p-[16px] bg-white rounded-[8px]">
            <h4 className="title">Checkout</h4>
            <a
              href="#"
              className="flex gap-[10px] pb-[16px] border-b-2 border-[#DDD]"
            >
              Pilih Alamat Drop Point
              <img src={ic_dropDown} alt="" />
            </a>
            <div className="wrapper flex justify-between items-start">
              <div className="wrap">
                <div className="wrap flex items-center gap-[10px]">
                  <img src={ic_profile} alt="" />
                  <h5>Malika</h5>
                </div>
                <div className="wrap flex items-center gap-[10px]">
                  <img src={image_preview} alt="" className="max-w-[80px]" />
                  <div className="wrap flex flex-col gap-[8px]">
                    <div className="wrap">
                      <h5 className="title">Garam</h5>
                      <span>1 sachet</span>
                    </div>
                    <span className="price">Rp 16.000</span>
                  </div>
                </div>
              </div>
              <div className="wrap flex flex-col gap-[16px] max-w-[302px] w-full">
                <h4 className="title">Metode Pembayaran</h4>
                <div className="wrap flex items-center justify-between">
                  <div className="wrap flex items-center gap-[10px]">
                    <img src={image_paymentDana} alt="" />
                    <div className="wrap">
                      <h4 className="title">Dana</h4>
                      <p>089238232148</p>
                    </div>
                  </div>
                  <Checkbox></Checkbox>
                </div>
                <div className="wrap flex items-center justify-between">
                  <div className="wrap flex items-center gap-[10px]">
                    <img src={image_paymentCOD} alt="" />
                    <div className="wrap">
                      <h4 className="title">Cash On Delivery</h4>
                    </div>
                  </div>
                  <Checkbox></Checkbox>
                </div>
              </div>
            </div>
          </div>
          <div className="content-right max-w-[385px] w-full flex flex-col gap-[16px] p-[16px] bg-white rounded-[8px]">
            <h5 className="title">Rincian Belanja</h5>
            <div className="wrap flex justify-between items-center pb-[16px] border-b-1 border-[#DDD]">
              <span>2 Barang</span>
              <p className="price">Rp 16.000</p>
            </div>
            <div className="wrap flex justify-between items-center">
              <h5>Total Harga</h5>
              <p className="price">Rp 16.000</p>
            </div>
            <Button onClick={() => {
              navigate(`/home_pembeli`) }}  className="btn btn-primary w-full" color="primary">
              Beli
            </Button>
            {/* <a href="#" className="btn btn-primary">
              Beli
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};
