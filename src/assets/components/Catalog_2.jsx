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
import { Button } from "@nextui-org/react";
import getKategori from "../../redux/action/product/get-kategori";

export const Catalog_2 = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const [kategori, setKategori]  = useState("SAYUR");


  // useEffect(() => {
  //   dispatch(getPenjual(params.penjualId))

  // },[dispatch, params.penjualId]);

  useEffect(() => {
    dispatch(getKategori(params.penjualId, kategori))

  },[dispatch, params.penjualId, kategori]);

  console.log(kategori, "kategori");

  const handleKategori = (dataKategori) => {
    setKategori(dataKategori);
  }

  const dataPenjual = useSelector((state) => state.penjual.penjual[0])

  console.log(dataPenjual, "data");


  return (
    <div>
      <section className="catalog w- py-[100px] h-screen bg-[#F8F8F8]">
        <div className="container w-full flex flex-col gap-8  ">
          <div className="content-top flex gap-[24px] pb-[10px] mx-8 border-b-[3px] border-[#DDD]">
          <button onClick={() => {
                  navigate(`/profile_beranda/${dataPenjual.id}`);
                }} className="btn hover:text-[#62AF2F] focus:text-[#62AF2F] font-semibold">
            Beranda
          </button>
          <button onClick={() => {
                  navigate(`/profile_product/${dataPenjual.id}`);
                }}  className="btn text-[#62AF2F] hover:text-[#62AF2F] focus:text-[#62AF2F] font-semibold">
            Produk
          </button>
          </div>
          <div className="content-bottom mx-8 flex justify-between gap-[30px]">
            <div className="content-bottom-left flex flex-col  gap-[8px]">
            <Button onClick={() => handleKategori('SAYUR')} className="text-base  bg-transparent pr-[11.9rem]">Sayur</Button>
            <Button onClick={() => handleKategori('DAGING_DAN_IKAN')} className="text-base  bg-transparent pr-[6.4rem]">Daging dan Ikan</Button>
            <Button onClick={() => handleKategori('BUAH')} className="text-base  bg-transparent pr-[12rem]">Buah</Button>
            <Button onClick={() => handleKategori('TELUR_TAHU_TEMPE')} className="text-base  bg-transparent pr-[3rem]">Telur, Tahu dan Tempe</Button>
             
            </div>
            <div className="content-bottom-right grid grid-cols-5 gap-[30px]">
            {dataPenjual && dataPenjual.produk.map((produk) => (
              <div onClick={() => {
                  navigate(`/description/${produk.id}`);
                }} className="card rounded-[8px] bg-white shadow-black overflow-hidden drop-shadow-lg">
                <img         
                  src={profile_profile_card_image1}
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
        </div>
      </section>
    </div>
  );
};
