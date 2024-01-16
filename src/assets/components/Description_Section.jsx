import React from "react";
import image_preview from "../../assets/img/description-preview-img.png";
import image_profile from "../../assets/img/description-profile-img.svg";
import ic_circle from "../../assets/img/description-circle.svg";
import ic_pin from "../../assets/img/description-ic-pin.svg";

export const Description_Section = () => {
  return (
    <div>
      <div className="description bg-[#F8F8F8] py-[100px]">
        <div className="container mx-auto flex gap-[30px]">
          <div className="content-left wrap-preview flex flex-col gap-[16px]">
            <div className="preview ">
              <img
                src={image_preview}
                alt=""
                className="max-w-[500px] rounded-[8px]"
              />
            </div>
            <div className="choose">
              <img src={image_preview} alt="" className="max-w-[150px]" />
            </div>
          </div>
          <div className="content-right flex flex-col gap-[30px]">
            <div className="wrap-cart p-[16px] bg-white rounded-[8px] flex flex-col gap-[24px]">
              <div className="wrap">
                <h4 className="title">Garam</h4>
                <span className="subtitle">1 sachet</span>
              </div>
              <p className="price">Rp 8.000</p>
              <div className="wrapper flex flex-col gap-[10px]">
                <div className="count flex items-center gap-[24px]">
                  <span>Jumlah</span>
                  <div className="number flex items-center border-1 py-[8px] px-[22px] rounded-[8px] border-[#888]">
                    <span class="minus">-</span>
                    <input
                      type="text"
                      value="1"
                      className="w-[50px] text-center"
                    />
                    <span class="plus">+</span>
                  </div>
                  <span>tersedia</span>
                </div>
                <div className="wrap-btn flex gap-[16px]">
                  <a href="/cart" className="btn btn-primary">
                    + Keranjang
                  </a>
                  <a href="/check_out" className="btn btn-outline">
                    Beli Sekarang
                  </a>
                </div>
              </div>
            </div>
            <div className="wrap-description p-[16px] bg-white rounded-[8px]">
              <h4 className="subtitle">Deskripsi Produk</h4>
              <p className="desc">
                Garam dapur pilihan kami, terpilih dari sumber alam berkualitas,
                menambah kesempurnaan rasa dalam setiap hidangan. Kristal
                halusnya melarut dengan sempurna, memperkaya cita rasa autentik
                masakan Anda. Kemasan praktis memudahkan penggunaan sehari-hari.
                Rasakan kelezatan dan kualitasnya yang tiada duanya dalam setiap
                sajian.
              </p>
            </div>
            <div className="wrap-owner p-[16px] bg-white rounded-[8px] flex items-center justify-between">
              <div className="profile flex gap-[10px] items-center">
                <img src={image_profile} alt="" />
                <div className="profile-text text">
                  <h4 className="text-title">Malika</h4>
                  <div className="info flex items-center gap-[4px]">
                    <img src={ic_circle} alt="" />
                    <span className="info-text">Libur</span>
                  </div>
                  <div className="location flex items-center gap-[4px]">
                    <img src={ic_pin} alt="" />
                    <span className="location-text">Purwokerto Selatan</span>
                  </div>
                </div>
              </div>
              <a href="#" className="btn btn-outline">
                Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
