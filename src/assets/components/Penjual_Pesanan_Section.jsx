import React from "react";
import logo from "../../assets/svg/LogoBroyur.svg";
import ic_home from "../../assets/svg/ic_Home.svg";
import ic_produk from "../../assets/svg/ic_file_dock_search.svg";
import ic_pesanan from "../../assets/svg/ic_file_dock_search.svg";
import ic_dropdown from "../../assets/svg/dropdown.svg";
import ic_profile from "../../assets/img/cart_ic-User_fill.png";
import img_product from "../../assets/img/profile_card-img-5.png";

function Penjual_Pesanan_Section() {
  return (
    <div>
      <section className="section_pesanan bg-[#F8F8F8] h-screen">
        <div className="container mx-auto flex gap-[16px]">
          <nav className="nav-left flex flex-col gap-[20px] p-[24px] bg-white w-[211px]">
            <a href="#" className="logo">
              <img src={logo} alt="" className="ic" />
            </a>
            <div className="nav-left-menu flex gap-[16px] flex-col">
              <a href="#" className="flex items-center gap-[4px]">
                <img src={ic_home} alt="" />
                Home
              </a>
              <a href="#" className="flex items-center gap-[4px]">
                <img src={ic_produk} alt="" />
                Produk
              </a>
              <a href="#" className="flex items-center gap-[4px]">
                <img src={ic_pesanan} alt="" />
                Pesanan
              </a>
            </div>
          </nav>
          <div className="pesanan bg-white w-full flex flex-col p-[16px] gap-[16px]">
            <h3>Daftar Pesanan</h3>
            <div className="nav-link">
              <a href="#">Semua Pesanan (1)</a>
              <a href="#">Semua Pesanan (1)</a>
              <a href="#">Semua Pesanan (1)</a>
              <a href="#">Semua Pesanan (1)</a>
            </div>
            <div className="pesanan-wrapper border-t-2 border-[#DDD]">
              <div className="wrapper flex justify-between">
                <div className="item p-[12px] flex flex-col">
                  <div className="profile flex items-center gap-[10px]">
                    <img src={ic_profile} alt="" />
                    <h5>Tuqiyem</h5>
                  </div>
                  <div className="item-produk flex items-center gap-[10px]">
                    <img src={img_product} alt="" className="rounded-[8px]" />
                    <div className="wrap flex flex-col gap-[4px]">
                      <p>Garam</p>
                      <span>1 sachet</span>
                      <h5>Rp 16.000</h5>
                    </div>
                  </div>
                </div>
                <div className="item p-[12px] flex flex-col">
                  <div className="profile flex flex-col gap-[8px] justify-between">
                    <h5>Alamat</h5>
                    <span>Gg Mahoni 1 Rt01/03</span>
                  </div>
                  <div className="item-produk flex items-center gap-[10px]">
                    <div className="wrap flex flex-col gap-[4px]">
                      <p>Jam</p>
                      <span>08.00 - 08.15</span>
                    </div>
                  </div>
                </div>
                <div className="item p-[12px] flex flex-col justify-between">
                  <div className="profile flex flex-col gap-[8px]">
                    <h5>Metode Pembayaran</h5>
                    <span>Cash On Delivery</span>
                  </div>
                  <div className="item-produk flex items-center gap-[10px]">
                    <div className="wrap flex flex-col gap-[4px]">
                      <h5>Bukti Pembayaran</h5>
                    </div>
                  </div>
                </div>
                <div className="item p-[12px] flex flex-col">
                  <div className="profile flex flex-col gap-[10px]">
                    <h5>Status Pesanan</h5>
                    <span className="rounded-[8px] bg-[#FFED80] flex items-center justify-center">
                      Prosess
                    </span>
                    {/* <span className="rounded-[8px] bg-[#CBE4BA] flex items-center justify-center">
                    Selesai
                  </span>
                  <span className="rounded-[8px] bg-[#CBE4BA] flex items-center justify-center">
                    Dikonfirmasi
                  </span>
                  <span className="rounded-[8px] bg-[#EA9294] flex items-center justify-center">
                    Ditolak
                  </span> */}
                    {/* <div className="alasan flex items-center gap-[4px]">
                      <span>Alasan</span>
                      <img src={ic_dropdown} alt="" />
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="wrapper flex justify-between items-center">
                <div className="wrap flex gap-[16px]">
                  <button className="btn btn-outline text-[#D62629] border-[#D62629]">
                    Tolak Pesanan
                  </button>
                  <button className="btn btn-primary">Terima Pesanan</button>
                </div>
                <form action="">
                  <input
                    type="text"
                    placeholder="Ketik Catatan Untuk Pembeli"
                    className="min-w-[429px] border-[#888888] border-[1px] p-[8px] rounded-[8px]"
                  />
                </form>
                <div className="total">
                  <span>Total Harga 2 Barang</span>
                  <h5>Rp 32.000</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Penjual_Pesanan_Section;
