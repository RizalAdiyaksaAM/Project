import { Button } from "@nextui-org/react";
import React from "react";
import pointer from "../svg/pointer.svg"

export const PenjualTerlaris = () => {
  return (
    <div className="bg-abubg">
      <div className="space-y-4 mx-[4rem]  ">
        <p className="font-semibold text-xl " >Penjual Terlaris</p>
        <div className="relative ">
          <div className="bg-[#F5D151] w-[15.625rem] h-[16.125rem] text-start flex justify-start px-[1.125rem] rounded-3xl text-white font-semibold text-xl items-center">
            <p className="w-[9.5625rem] ">Penjual sayur keliling terlaris di Purwokerto Selatan</p>
          </div>
          <div className="absolute inset-y-16 left-[12.7rem]  ">
            <div className="flex space-x-20 t ">
            <div className="flex justify-start items-center bg-white w-[21.4375rem] h-[8.5rem] shadow-md rounded-3xl">
                <div className="">
                    <img  src="https://i.pravatar.cc/150?u=a04258114e29026708c" alt="" className="w-[8.1875rem] h-[8.5rem] rounded-s-3xl" />
                </div>
                <div className="px-2">
                    <p className="font-semibold text-base">Marzuki</p>
                    <div className="flex">
                        <img src={pointer} alt="" />
                        <p className="text-sm">Teluk</p>
                    </div>
                    <Button className="w-[11.5rem] h-[1.875rem] bg-primaryhijau text-white mt-6 ">
                        pesan
                    </Button>
                </div>
            </div>
            <div className="flex justify-start items-center bg-white w-[21.4375rem] h-[8.5rem] shadow-md rounded-3xl">
                <div className="">
                    <img  src="https://i.pravatar.cc/150?u=a04258114e29026708c" alt="" className="w-[8.1875rem] h-[8.5rem] rounded-s-3xl" />
                </div>
                <div className="px-2">
                    <p className="font-semibold text-base">Marzuki</p>
                    <div className="flex">
                        <img src={pointer} alt="" />
                        <p className="text-sm">Teluk</p>
                    </div>
                    <Button className="w-[11.5rem] h-[1.875rem] bg-primaryhijau text-white mt-6 ">
                        pesan
                    </Button>
                </div>
            </div>
            <div className="flex justify-start items-center bg-white w-[21.4375rem] h-[8.5rem] shadow-md rounded-3xl">
                <div className="">
                    <img  src="https://i.pravatar.cc/150?u=a04258114e29026708c" alt="" className="w-[8.1875rem] h-[8.5rem] rounded-s-3xl" />
                </div>
                <div className="px-2">
                    <p className="font-semibold text-base">Marzuki</p>
                    <div className="flex">
                        <img src={pointer} alt="" />
                        <p className="text-sm">Teluk</p>
                    </div>
                    <Button className="w-[11.5rem] h-[1.875rem] bg-primaryhijau text-white mt-6 ">
                        pesan
                    </Button>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
