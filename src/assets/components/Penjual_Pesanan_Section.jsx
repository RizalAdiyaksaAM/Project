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
import { useDispatch } from "react-redux";
import getupdates from "../../redux/action/admin/puttransaction";
import { useDataProdukFilter } from "../../services/product/filter-product";

function Penjual_Pesanan_Section() {
  // get data produk
  // const { data } = useDataProduk();
  // const Produk = data ? data.data : [];

  // put transaction
  const [Status, setStatus] = useState("");
  const [Note, setNote] = useState("");
  const dispatch = useDispatch();
  const updatepaswwordakun = async (id_produk) => {
    const success = await dispatch(
      getupdates(id_produk, {
        status: Status,
        note: Note,
      })
    );
  };

  // filter produk
  const [statusfilter, setstatusfilter] = useState("");
  const { data } = useDataProdukFilter({
    status: statusfilter,
  });
  const Filter = data ? data.data : [];
  console.log(Filter, "filter");

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

  // const jumlahSemua = Filter.length;
  // const jumlahDitolak = Filter.filter((item) => item.status === "DITOLAK").length;
  // const jumlahDikonfirmasi = Filter.filter((item) => item.status === "DIKONFIRMASI").length;

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
              <a href="/penjual_pesanan" className="flex items-center gap-[4px] text-green-600">
                <img src={ic_pesanan} alt="" />
                Pesanan
              </a>
            </div>
          </nav>
          <div className="pesanan bg-white w-full flex flex-col p-[16px] gap-[16px]">
            <h3>Daftar Pesanan</h3>
            <div className="nav-link flex gap-4">
              <button className={statusfilter === "" ? "text-green-600" : ""} onClick={(e) => setstatusfilter(e.target.value)} value="">
                Semua
              </button>
              <button className={statusfilter === "DITOLAK" ? "text-green-600" : ""} onClick={(e) => setstatusfilter(e.target.value)} value="DITOLAK">
                Ditolak
              </button>
              <button className={statusfilter === "DIKONFIRMASI" ? "text-green-600" : ""} onClick={(e) => setstatusfilter(e.target.value)} value="DIKONFIRMASI">
                Dikonfirmasi
              </button>
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
                      <p>{Filter[0]?.produk.nama}</p>
                      <span>
                        {Filter[0]?.jumlah}
                        {Filter[0]?.produk.satuan}
                      </span>
                      <h5>
                        Rp.
                        {Filter[0]?.produk.harga}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="item p-[12px] flex flex-col">
                  <div className="profile flex flex-col gap-[8px] justify-between">
                    <h5>Alamat :</h5>
                    <span>{Filter[0]?.alamat}</span>
                  </div>
                  <div className="item-produk flex items-center gap-[10px]">
                    <div className="wrap flex flex-col gap-[4px]">
                      <p>Jam: </p>
                      <p>{formatTime(Filter[0]?.created)}</p>
                    </div>
                  </div>
                </div>
                <div className="item p-[12px] flex flex-col justify-between">
                  <div className="profile flex flex-col gap-[8px]">
                    <h5>Metode Pembayaran</h5>
                    <span>{Filter[0]?.pembayaran}</span>
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
                    <span className="rounded-[8px] bg-[#FFED80] flex items-center justify-center">{Filter[0]?.status}</span>
                  </div>
                </div>
              </div>
              {Filter.map((item) => (
                <div key={item.id_produk} className="wrapper flex justify-between items-center">
                  <div className="wrap flex gap-[16px]">
                    <select id="Status" value={Status} onChange={(e) => setStatus(e.target.value)} className="min-w-[429px] border-[#888888] border-[1px] p-[8px] rounded-[8px]">
                      <option value="">Pilih Status Pesanan</option>
                      <option value="DITOLAK">Ditolak</option>
                      <option value="DIKONFIRMASI">Dikonfirmasi</option>
                    </select>
                    {/* <input id="Status" onChange={(e) => setStatus(e.target.value)} type="text" placeholder="Ketik Catatan Untuk Pembeli" className="min-w-[429px] border-[#888888] border-[1px] p-[8px] rounded-[8px]" /> */}
                  </div>
                  <form action="">
                    <input id="Note" onChange={(e) => setNote(e.target.value)} type="text" placeholder="Ketik Catatan Untuk Pembeli" className="min-w-[429px] border-[#888888] border-[1px] p-[8px] rounded-[8px]" />
                  </form>
                  <button onClick={() => updatepaswwordakun(item.id_produk)} className="btn btn-primary">
                    Submit
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
