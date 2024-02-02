import React, { useState } from "react";
import logo from "../../assets/svg/LogoBroyur.svg";
import ic_home from "../../assets/svg/ic_Home.svg";
import ic_produk from "../../assets/svg/ic_file_dock_search.svg";
import ic_pesanan from "../../assets/svg/ic_file_dock_search.svg";
import ic_dropdown from "../../assets/svg/dropdown.svg";
import ic_profile from "../../assets/img/cart_ic-User_fill.png";
import img_product from "../../assets/img/profile_card-img-5.png";
import { useDataProduk } from "../../services/product/get-product-penjual";
import { usePutTransaction } from "../../services/product/put_transaction";

function Penjual_Pesanan_Section() {
  const { data } = useDataProduk();
  const Produk = data ? data.data : [];

  const [Status, setStatus] = useState("");
  const [Note, setNote] = useState("");
  const { mutate: Transaction } = usePutTransaction();
  const handlePutTransaction = (id_produk) => {
    Transaction(id_produk, {
      status: Status,
      note: Note,
    });
  };

  console.log(Status, "status");
  console.log(Note, "note");

  const formatTime = (timeString) => {
    if (!timeString) return ""; // Handle jika string waktu kosong atau tidak valid

    // Buat objek date dari string waktu
    const dateTime = new Date(timeString);

    // Ambil bagian jam, menit, dan detik dari waktu
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    const seconds = dateTime.getSeconds();

    // Format jam dengan menambahkan nol di depan jika jam, menit, atau detik kurang dari 10
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    // Gabungkan bagian jam, menit, dan detik menjadi string jam
    const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    return formattedTime;
  };

  const countOrdersByStatus = (status) => {
    if (!Produk || Produk.length === 0) return 0;
    return Produk.filter((order) => order.status === status).length;
  };

  return (
    <div>
      <section className="section_pesanan bg-[#F8F8F8] h-screen">
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
            <h3>Daftar Pesanan</h3>
            <div className="nav-link">
              <button>Semua Pesanan ({Produk.length})</button>
              <button>Dikonfirmasi ({countOrdersByStatus("Dikonfirmasi")})</button>
              <button>Ditolak ({countOrdersByStatus("Ditolak")})</button>
              <button>Selesai ({countOrdersByStatus("Selesai")})</button>
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
                      <p>{Produk[0]?.produk.nama}</p>
                      <span>
                        {Produk[0]?.jumlah}
                        {Produk[0]?.produk.satuan}
                      </span>
                      <h5>
                        Rp.
                        {Produk[0]?.produk.harga}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="item p-[12px] flex flex-col">
                  <div className="profile flex flex-col gap-[8px] justify-between">
                    <h5>Alamat :</h5>
                    <span>{Produk[0]?.alamat}</span>
                  </div>
                  <div className="item-produk flex items-center gap-[10px]">
                    <div className="wrap flex flex-col gap-[4px]">
                      <p>Jam: </p>
                      <p>{formatTime(Produk[0]?.created)}</p>
                    </div>
                  </div>
                </div>
                <div className="item p-[12px] flex flex-col justify-between">
                  <div className="profile flex flex-col gap-[8px]">
                    <h5>Metode Pembayaran</h5>
                    <span>{Produk[0]?.pembayaran}</span>
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
                    <span className="rounded-[8px] bg-[#FFED80] flex items-center justify-center">{Produk[0]?.status}</span>
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
              {Produk.map((item) => (
                <div key={item.id_produk} className="wrapper flex justify-between items-center">
                  <div className="wrap flex gap-[16px]">
                    {/* <button id="status" onClick={() => handlePutTransaction(item.id_produk, "DITOLAK")} className="btn btn-outline text-[#D62629] border-[#D62629]">
                      Tolak Pesanan
                    </button> */}
                    {/* <button id="status" onClick={() => handlePutTransaction(item.id_produk, "DIPROSES")} className="btn btn-primary">
                      Terima Pesanan
                    </button> */}
                    <select id="Status" value={Status} onChange={(e) => setStatus(e.target.value)} className="min-w-[429px] border-[#888888] border-[1px] p-[8px] rounded-[8px]">
                      <option value="">Pilih Status Pesanan</option>
                      <option value="DITOLAK">Ditolak</option>
                      <option value="DIPROSES">Diproses</option>
                      <option value="SELESAI">Selesai</option>
                    </select>
                  </div>
                  <form action="">
                    <input id="Note" onChange={(e) => setNote(e.target.value)} type="text" placeholder="Ketik Catatan Untuk Pembeli" className="min-w-[429px] border-[#888888] border-[1px] p-[8px] rounded-[8px]" />
                  </form>
                  <button onClick={() => handlePutTransaction(item.id_produk)} className="btn btn-primary">
                    Terima Pesanan
                  </button>
                  <div className="total">
                    <span>Total Harga {item.jumlah} Barang</span>
                    <h5>Rp. {item.harga}</h5>
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

export default Penjual_Pesanan_Section;
