import React, { useEffect, useState } from "react";
import profile_profile_card_image1 from "../img/profile_card-img-1.png";
import profile_profile_card_image2 from "../img/profile_card-img-2.png";
import profile_profile_card_image3 from "../img/profile_card-img-3.png";
import profile_profile_card_image4 from "../img/profile_card-img-4.png";
import profile_profile_card_image5 from "../img/profile_card-img-5.png";
import profile_profile_card_image6 from "../img/profile_card-img-6.png";
import profile_profile_card_image7 from "../img/profile_card-img-7.png";
import profile_profile_card_image8 from "../img/profile_card-img-8.png";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getPenjual from "../../redux/action/getPenjual";
import getKategori from "../../redux/action/product/get-kategori";

export const Catalog = () => {

  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getPenjual(params.penjualId))

  },[dispatch, params.penjualId]);



  const dataPenjual = useSelector((state) => state.penjual.penjual[0])

  console.log(dataPenjual, "penjual");


  return (
    <section className="catalog py-[100px] bg-[#F8F8F8]">
      <div className="container mx-auto flex flex-col gap-8">
        <div className="content-top flex gap-[24px] pb-[10px] border-b-[3px] border-[#DDD] mx-8">
          <button onClick={() => {
                  navigate(`/profile_beranda/${dataPenjual.id}`);
                }} className="btn text-[#62AF2F] hover:text-[#62AF2F] focus:text-[#62AF2F] font-semibold">
            Beranda
          </button>
          <button onClick={() => {
                  navigate(`/profile_product/${dataPenjual.id}`);
                }}  className="btn hover:text-[#62AF2F] focus:text-[#62AF2F] font-semibold">
            Produk
          </button>
        </div>
        <div className="content-bottom flex justify-between items-start  mx-8">
          <div className="content-bottom-left subtext flex flex-col gap-[10px]">
            <h3 className="subtext-title font-semibold text-xl">Semua Produk</h3>
            <div className="wrapper-card grid grid-cols-4 justify-between gap-[30px]">
              {dataPenjual && dataPenjual.produk.map((produk) => (
              <div onClick={() => {
                  navigate(`/description/${produk.id}`);
                }} className="card rounded-[8px] bg-white shadow-black overflow-hidden drop-shadow-lg">
                <img         
                  src={produk.media[0].link}
                  alt=""
                  className="card-image w-full"
                />
                <div className="card-body pb-[12px] px-[10px] flex flex-col gap-[16px]  ">
                  <div className="card-body-title title">
                    <h4 className="title-display text-lg font-semibold">{produk.nama}</h4>
                    <span className="title-subdisplay">1/2 {produk.satuan}</span>
                  </div>
                  <div className="card-body-price price flex flex-col gap-[16px]">
                    <h4 className="price-text text-lg font-semibold">Rp{produk.harga}</h4>
                    <a href="/cart" className="btn btn-outline">
                      + Keranjang
                    </a>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
          <div className="content-bottom-right check-out max-w-[500px] w-full flex flex-col gap-[10px] p-[16px] bg-white">
            <div className="location flex flex-col gap-[10px]">
              <h4 className="location-title font-bold text-lg">Lokasi Drop Point</h4>
              <div className="wrap flex items-center gap-[36px]">
                <h5 className="location-site font-semibold text-lg text-[#62AF2F]">Tanjung</h5>
                <h5 className="location-site">Karangpucung</h5>
                <h5 className="location-site">Teluk</h5>
              </div>
            </div>
            <div className="drop-out flex flex-col gap-[10px]">
              <div className="wrap flex items-center justify-start gap-[340px] border-b-[1px] border-[#888888] " >
                <h5 className="site">Lokasi</h5>
                <h5 className="time">Jam</h5>
              </div>
              <div className="wrapper-drop flex flex-col gap-[8px]">
                <div className="wrap flex justify-between items-center">
                  <p className="site-address">Gg Mahoni 1 RT01/03</p>
                  <span className="time-drop">08.00-08.15</span>
                </div>
                <div className="wrap flex justify-between items-center">
                  <p className="site-address">Gg Rasamala 2 RT02/03</p>
                  <span className="time-drop">08.15-08.30</span>
                </div>
                <div className="wrap flex justify-between items-center">
                  <p className="site-address">Gg Cemara 1 RT03/03</p>
                  <span className="time-drop">08.30-08.45</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
