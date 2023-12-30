import { Button } from "@nextui-org/react";
import React from "react";
import heroSayur from "../img/HeroSayur.png"
import praktis from "../svg/Praktis.svg"
import ramah from "../svg/ramah.svg"
import segar from "../svg/Segar.svg"
import sayur from "../img/sayur.png"
import sayur2 from "../img/sayur2.png"

export const Hero = () => {
  return (
    <div className="bg-abubg pt-[4.5rem] h-[51.875rem]">

    <div className="relative mx-[4rem]  ">
      <div className="flex justify-center items-center rounded-[3rem] w-full bg-primaryhijau  ">
        <div className=" space-y-4 ">
          <p className="text-5xl font-semibold text-white w-[41.625rem]">Menyediakan Kebutuhan Sayuran Harian Anda</p>
          <p className="text-base font-semibold w-[40.9375rem] ">
            Pesan sayur keliling secara online untuk pengalaman belanja yang
            lebih praktis dan efisien. Tidak perlu menunggu kedatangan tukang
            sayur, Anda dapat memilih dari beragam produk, melakukan transaksi
            dengan cepat, dan menikmati pengiriman langsung ke rumah.
          </p>
          <Button className="bg-[#315818] text-white font-semibold text-base ">Pesan Sekarang</Button>
        </div>
        <div className="w-[37rem]">
        <img width={592} height={570} src={heroSayur} alt="" />
        </div>
        
      </div>
      <div className="absolute -top-32 -right-16">
        <img src={sayur} alt="" />
      </div>
      <div className="absolute -bottom-14 inset-x-[34rem] ">
        <img src={sayur2} alt="" />
      </div>
      <div className="absolute  inset-x-[6.5rem] -bottom-[7rem] bg-white w-[74.0625rem] h-[11.1875rem] shadow-sm rounded-[1.5rem]">
        <div className="h-full flex justify-around items-center">
            <div className=" flex justify-center items-center gap-2">
                <img src={praktis} alt="" />
                <div className="space-y-2">
                    <p className="font-semibold text-xl">Pemesanan Praktis</p>
                    <p className="text-sm w-[14.03963rem]">Pesan dan ambil sayuranmu dengan mudah</p>
                </div>
            </div>
            <div className=" flex justify-center items-center gap-2">
                <img src={segar} alt="" />
                <div className="space-y-2">
                    <p className="font-semibold text-xl">Sayuran Segar</p>
                    <p className="text-sm w-[14.03963rem]">Dapatkan sensasi sayur yang segar dan kualitas terbaik</p>
                </div>
            </div>
            <div className=" flex justify-center items-center gap-2">
                <img src={ramah} alt="" />
                <div className="space-y-2">
                    <p className="font-semibold text-xl">Penjual Yang Ramah</p>
                    <p className="text-sm w-[14.03963rem]">Transaksi menyenangkan dengan penjual yang interaktif</p>
                </div>
            </div>
        </div>

        </div>
    </div>
    </div>
  );
};
