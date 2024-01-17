import { Button, Checkbox } from "@nextui-org/react";
import React from "react";
import ic_profile from "../../assets/img/cart_ic-User_fill.png";
import ic_trash from "../../assets/img/cart_ic-trash.png";
import image_preview from "../../assets/img/description-preview-img.png";
import { useNavigate } from "react-router-dom";

export const Cart_Section = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="section-cart bg-[#F8F8F8] py-[100px]">
        <div className="container mx-auto flex items-start justify-between gap-[30px]">
          <div className="content-left flex flex-col p-[16px] gap-[16px] w-full bg-white rounded-[8px]">
            <h3 className="title">Keranjang</h3>
            <div className="wrap flex items-center justify-between">
              <div className="wrap">
                <Checkbox></Checkbox>
                <span>Pilih Semua</span>
              </div>
              <a href="#">Hapus</a>
            </div>
            <div className="wrapper-order flex flex-col gap-[16px] pb-[12px] border-b-1 border-[#DDD]">
              <div className="wrap flex items-center gap-[10px]">
                <Checkbox></Checkbox>
                <img src={ic_profile} alt="" />
                <h5>Malika</h5>
              </div>
              <div className="wrap flex flex-col gap-[16px]">
                <div className="wrap flex items-center gap-[10px]">
                  <Checkbox></Checkbox>
                  <img src={image_preview} alt="" className="max-w-[80px]" />
                  <div className="wrap flex flex-col gap-[8px]">
                    <div className="wrap">
                      <h5 className="title">Garam</h5>
                      <span>1 sachet</span>
                    </div>
                    <span className="price">Rp 16.000</span>
                  </div>
                </div>
                <div className="wrap flex items-center justify-between">
                  <span>Tulis Catatan</span>
                  <div className="wrap flex items-center gap-[24px]">
                    <img src={ic_trash} alt="" />
                    <div className="number flex items-center">
                      <span class="minus">-</span>
                      <input
                        type="text"
                        value="1"
                        className="w-[50px] text-center"
                      />
                      <span class="plus">+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap flex flex-col gap-[16px]">
                <div className="wrap flex items-center gap-[10px]">
                  <Checkbox></Checkbox>
                  <img src={image_preview} alt="" className="max-w-[80px]" />
                  <div className="wrap flex flex-col gap-[8px]">
                    <div className="wrap">
                      <h5 className="title">Garam</h5>
                      <span>1 sachet</span>
                    </div>
                    <span className="price">Rp 16.000</span>
                  </div>
                </div>
                <div className="wrap flex items-center justify-between">
                  <span>Tulis Catatan</span>
                  <div className="wrap flex items-center gap-[24px]">
                    <img src={ic_trash} alt="" />
                    <div className="number flex items-center">
                      <span class="minus">-</span>
                      <input
                        type="text"
                        value="1"
                        className="w-[50px] text-center"
                      />
                      <span class="plus">+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper-order flex flex-col gap-[16px] pb-[12px] border-b-1 border-[#DDD]">
              <div className="wrap flex items-center gap-[10px]">
                <Checkbox></Checkbox>
                <img src={ic_profile} alt="" />
                <h5>Malika</h5>
              </div>
              <div className="wrap flex flex-col gap-[16px]">
                <div className="wrap flex items-center gap-[10px]">
                  <Checkbox></Checkbox>
                  <img src={image_preview} alt="" className="max-w-[80px]" />
                  <div className="wrap flex flex-col gap-[8px]">
                    <div className="wrap">
                      <h5 className="title">Garam</h5>
                      <span>1 sachet</span>
                    </div>
                    <span className="price">Rp 16.000</span>
                  </div>
                </div>
                <div className="wrap flex items-center justify-between">
                  <span>Tulis Catatan</span>
                  <div className="wrap flex items-center gap-[24px]">
                    <img src={ic_trash} alt="" />
                    <div className="number flex items-center">
                      <span class="minus">-</span>
                      <input
                        type="text"
                        value="1"
                        className="w-[50px] text-center"
                      />
                      <span class="plus">+</span>
                    </div>
                  </div>
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
                  navigate(`/home_pembeli`);
                }}   className="btn btn-primary w-full" color="primary">
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
