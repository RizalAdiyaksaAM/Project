import React, { useState } from "react";
import logo from "../../assets/svg/LogoBroyur.svg";
import ic_home from "../../assets/svg/ic_Home.svg";
import ic_produk from "../../assets/svg/ic_file_dock_search.svg";
import ic_pesanan from "../../assets/svg/ic_file_dock_search.svg";
import ic_dropdown from "../../assets/svg/dropdown.svg";
import ic_profile from "../../assets/img/cart_ic-User_fill.png";
import img_product from "../../assets/img/profile_card-img-5.png";
import { useDataProdukPenjual } from "../../services/product/get-produk";
import { usePutProduct } from "../../services/product/put-product";

export default function Penjual_Produk_section() {
  const { data } = useDataProdukPenjual();
  const Produk = data ? data.data : [];

  const [Stok, setStok] = useState("");

  const { mutate: product } = usePutProduct();
  const handlePutProduct = (id) => {
    console.log("Stok saat ini:", Stok);
    product(id, {
      stok: Stok,
    });
  };

  return (
    <div>
      <section className="section_produk bg-[#F8F8F8] h-screen">
        <div className="container mx-auto flex gap-[16px]">
          <nav className="nav-left flex flex-col gap-[20px] p-[24px] bg-white w-[211px]">
            <a href="#" className="logo">
              <img src={logo} alt="" className="ic" />
            </a>
            <div className="nav-left-menu flex gap-[16px] flex-col">
              <a href="/penjual_produk" className="flex items-center gap-[4px]">
                <img src={ic_produk} alt="" />
                Produk
              </a>
              <a href="/penjual_pesanan" className="flex items-center gap-[4px]">
                <img src={ic_pesanan} alt="" />
                Pesanan
              </a>
            </div>
          </nav>
          <div className="pesanan bg-white w-full flex flex-col p-[16px] gap-[16px]">
            <div className="wrap flex justify-between items-center">
              <h3>Daftar Produk</h3>
              <a href="/add/product" className="btn btn-primary">
                + Tambah Produk
              </a>
            </div>
            <div className="nav-link">
              <a href="#" className="text-[#62AF2F]">
                Semua Produk
              </a>
            </div>
            <div className="pesanan-wrapper border-t-2 border-[#DDD]">
              {Produk.map((produk) => (
                <div className="wrapper flex justify-between items-end">
                  <div className="item p-[12px] flex flex-col">
                    <div className="profile flex flex-col gap-[8px] justify-between">
                      <h5>Nama Produk</h5>
                    </div>
                    <div className="item-produk flex items-center gap-[10px]">
                      <div className="wrap flex flex-col gap-[4px]">
                        <p className="text-[#888888]">{produk.nama}</p>
                      </div>
                    </div>
                  </div>
                  <div className="item p-[12px] flex flex-col">
                    <div className="profile flex flex-col gap-[8px] justify-between">
                      <h5>Harga</h5>
                    </div>
                    <div className="item-produk flex items-center gap-[10px]">
                      <div className="wrap flex flex-col gap-[4px]">
                        <p className="text-[#888888]">{produk.harga}</p>
                      </div>
                    </div>
                  </div>
                  <div className="item p-[12px] flex flex-col">
                    <div className="profile flex flex-col gap-[8px] justify-between">
                      <h5>Stok</h5>
                    </div>
                    <div className="item-produk flex items-center gap-[10px]">
                      <div className="wrap flex flex-col gap-[4px]">
                        <input id="Stok" type="number" onChange={(e) => setStok(e.target.value)} className="text-[#62AF2F]"></input>
                      </div>
                    </div>
                  </div>
                  <div className="item p-[12px] flex flex-col">
                    <div className="profile flex flex-col gap-[8px] justify-between">
                      <h5></h5>
                    </div>
                    <div className="item-produk flex items-center gap-[10px]">
                      <div className="wrap flex flex-col gap-[4px]">
                        <button
                          onClick={() => {
                            handlePutProduct(produk.id);
                          }}
                          className="btn btn-link text-[#62AF2F]"
                        >
                          simpan
                        </button>
                      </div>
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
}
