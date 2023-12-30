import React from "react";
import profile_profile_card_image1 from "../img/profile_card-img-1.png";
import profile_profile_card_image2 from "../img/profile_card-img-2.png";
import profile_profile_card_image3 from "../img/profile_card-img-3.png";
import profile_profile_card_image4 from "../img/profile_card-img-4.png";
import profile_profile_card_image5 from "../img/profile_card-img-5.png";
import profile_profile_card_image6 from "../img/profile_card-img-6.png";
import profile_profile_card_image7 from "../img/profile_card-img-7.png";
import profile_profile_card_image8 from "../img/profile_card-img-8.png";

export const Catalog_2 = () => {
  return (
    <div>
      <section className="catalog py-[100px] h-screen bg-[#F8F8F8]">
        <div className="container mx-auto flex flex-col gap-8">
          <div className="content-top flex gap-[24px] pb-[10px] border-b-[3px] border-[#DDD]">
            <button className="btn hover:text-[#62AF2F] focus:text-[#62AF2F] font-semibold">
              Beranda
            </button>
            <button className="btn hover:text-[#62AF2F] focus:text-[#62AF2F] font-semibold">
              Produk
            </button>
          </div>
          <div className="content-bottom flex justify-between gap-[30px]">
            <div className="content-bottom-left flex flex-col gap-[8px]">
              <a href="#" className="nav-link">
                Sayur
              </a>
              <a href="#" className="nav-link">
                Bumbu
              </a>
              <a href="#" className="nav-link">
                Daging dan Ikan
              </a>
              <a href="#" className="nav-link">
                Buah
              </a>
              <a href="#" className="nav-link">
                Telur, Tahu dan Tempe
              </a>
              <a href="#" className="nav-link">
                Lainnya
              </a>
            </div>
            <div className="content-bottom-right grid grid-cols-5 gap-[30px]">
              <div className="card rounded-[8px] bg-white shadow-black overflow-hidden">
                <img
                  src={profile_profile_card_image1}
                  alt=""
                  className="card-image w-full"
                />
                <div className="card-body pb-[12px] px-[10px] flex flex-col gap-[16px]">
                  <div className="card-body-title title">
                    <h4 className="title-display">Apel</h4>
                    <span className="title-subdisplay">1/2 Kg</span>
                  </div>
                  <div className="card-body-price price flex flex-col gap-[16px]">
                    <h4 className="price-text">Rp 15.000</h4>
                    <a href="#" className="btn btn-outline">
                      + Keranjang
                    </a>
                  </div>
                </div>
              </div>
              <div className="card rounded-[8px] bg-white shadow-black overflow-hidden">
                <img
                  src={profile_profile_card_image1}
                  alt=""
                  className="card-image w-full"
                />
                <div className="card-body pb-[12px] px-[10px] flex flex-col gap-[16px]">
                  <div className="card-body-title title">
                    <h4 className="title-display">Apel</h4>
                    <span className="title-subdisplay">1/2 Kg</span>
                  </div>
                  <div className="card-body-price price flex flex-col gap-[16px]">
                    <h4 className="price-text">Rp 15.000</h4>
                    <a href="#" className="btn btn-outline">
                      + Keranjang
                    </a>
                  </div>
                </div>
              </div>
              <div className="card rounded-[8px] bg-white shadow-black overflow-hidden">
                <img
                  src={profile_profile_card_image1}
                  alt=""
                  className="card-image w-full"
                />
                <div className="card-body pb-[12px] px-[10px] flex flex-col gap-[16px]">
                  <div className="card-body-title title">
                    <h4 className="title-display">Apel</h4>
                    <span className="title-subdisplay">1/2 Kg</span>
                  </div>
                  <div className="card-body-price price flex flex-col gap-[16px]">
                    <h4 className="price-text">Rp 15.000</h4>
                    <a href="#" className="btn btn-outline">
                      + Keranjang
                    </a>
                  </div>
                </div>
              </div>
              <div className="card rounded-[8px] bg-white shadow-black overflow-hidden">
                <img
                  src={profile_profile_card_image1}
                  alt=""
                  className="card-image w-full"
                />
                <div className="card-body pb-[12px] px-[10px] flex flex-col gap-[16px]">
                  <div className="card-body-title title">
                    <h4 className="title-display">Apel</h4>
                    <span className="title-subdisplay">1/2 Kg</span>
                  </div>
                  <div className="card-body-price price flex flex-col gap-[16px]">
                    <h4 className="price-text">Rp 15.000</h4>
                    <a href="#" className="btn btn-outline">
                      + Keranjang
                    </a>
                  </div>
                </div>
              </div>
              <div className="card rounded-[8px] bg-white shadow-black overflow-hidden">
                <img
                  src={profile_profile_card_image1}
                  alt=""
                  className="card-image w-full"
                />
                <div className="card-body pb-[12px] px-[10px] flex flex-col gap-[16px]">
                  <div className="card-body-title title">
                    <h4 className="title-display">Apel</h4>
                    <span className="title-subdisplay">1/2 Kg</span>
                  </div>
                  <div className="card-body-price price flex flex-col gap-[16px]">
                    <h4 className="price-text">Rp 15.000</h4>
                    <a href="#" className="btn btn-outline">
                      + Keranjang
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
