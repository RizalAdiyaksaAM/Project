import React from "react";
import ic_profile from "../../assets/img/cart_ic-User_fill.png";
import image_preview from "../../assets/img/description-preview-img.png";
import ic_dropDown from "../../assets/img/checkOut-ic-dropDown.svg";
import { Button } from "@nextui-org/react";

export const Notification_Section = () => {
  return (
    <div>
      <section className="notification bg-[#F8F8F8] py-[100px]">
        <div className="container mx-auto flex flex-col gap-[16px] bg-white rounded-[8px] p-[16px]">
          <h3 className="title">Daftar Pesanan</h3>
          <div className="wrap flex items-center gap-[16px] border-b-2 border-[#DDD] pb-[16px]">
            <a href="#" className="nav-link">
              Semua Pesanan (1)
            </a>
            <a href="#" className="nav-link">
              DIkonfirmasi Penjual (1)
            </a>
            <a href="#" className="nav-link">
              Ditolak (1)
            </a>
            <a href="#" className="nav-link">
              Selesai (0)
            </a>
          </div>
          <div className="wrap flex justify-between items-start">
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
                  <a
                    href="#"
                    className="flex gap-[8px] items-center text-[#62AF2F]"
                  >
                    Lihat 1 Produk Lainnya <img src={ic_dropDown} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="wrap">
              <h4 className="title">Alamat</h4>
              <p>Gg Mahoni 1 Rt01/03</p>
            </div>
            <div className="wrap">
              <h4 className="title">Jam</h4>
              <p>08.00 - 08.15</p>
            </div>
            <div className="wrap">
              <h4 className="title">Metode Pembayaran</h4>
              <p>Cash On Delivery</p>
            </div>
            <div className="wrap">
              <h4 className="title">Bukti Pembayaran</h4>
              <p></p>
            </div>
            <div className="wrap">
              <h4 className="title">Status Pesanan</h4>
              <span className="status">Diproses</span>
            </div>
          </div>
          <div className="wrap flex items-center justify-between">
            <Button color="primary">Pesanan Sudah Selesai</Button>
            <div className="wrap flex items-center gap-[24px]">
              <span>Total Harga 2 Barang</span>
              <h4>Rp 32.000</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
