import React, { useState } from "react";
import ic_profile from "../../assets/img/cart_ic-User_fill.png";
import image_preview from "../../assets/img/description-preview-img.png";
import ic_dropDown from "../../assets/img/checkOut-ic-dropDown.svg";
import { Button } from "@nextui-org/react";
import { useDataProdukFilter } from "../../services/product/filter-product";

export const Notification_Section = () => {

  const [statusfilter, setstatusfilter] = useState("");
  const { data } = useDataProdukFilter({
    status: statusfilter,
  });
  const Filter = data ? data.data : [];
  console.log(Filter, "filter");

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
                <img src={Filter[0].produk.media[0].link} alt="" className="max-w-[80px]" />
                <div className="wrap flex flex-col gap-[8px]">
                  <div className="wrap">
                    <h5 className="title">{Filter[0].produk.nama}</h5>
                    <span>{Filter[0].jumlah} {Filter[0].produk.satuan} sachet</span>
                  </div>
                  <span className="price">Rp {Filter[0].produk.harga}</span>
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
              <p>{Filter[0].alamat}</p>
            </div>
            <div className="wrap">
              <h4 className="title">Jam</h4>
              <p>{Filter[0].jam}</p>
            </div>
            <div className="wrap">
              <h4 className="title">Metode Pembayaran</h4>
              <p>{Filter[0].pembayaran}</p>
            </div>
            <div className="wrap">
              <h4 className="title">Bukti Pembayaran</h4>
              <p></p>
            </div>
            <div className="wrap">
              <h4 className="title">Status Pesanan</h4>
              <span className="status">{Filter[0].status}</span>
            </div>
          </div>
          <div className="wrap flex items-center justify-between">
            <Button color="primary">Pesanan Sudah Selesai</Button>
            <div className="wrap flex items-center gap-[24px]">
              <span>Total Harga {Filter[0].jumlah} Barang</span>
              <h4>Rp {Filter[0].harga}</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
