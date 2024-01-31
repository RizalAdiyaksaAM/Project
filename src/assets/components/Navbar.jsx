import React, { useEffect, useState } from "react";
import logo from "../svg/LogoBroyur.svg";
import search from "../svg/search.svg";
import dropdown from "../svg/dropdown.svg";
import shop from "../svg/Shop.svg";
import "react-toastify/dist/ReactToastify.css";
import ic_profile from "../../assets/img/img-profile.png";

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { Daftar } from "./Daftar";
import { useDispatch } from "react-redux";
import { LogOut, authLoginUser } from "../../redux/action/auth/authLoginUser";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { CookieKeys, CookieStorage } from "../../utils/cookies";

export const Navbar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const token = CookieStorage.get(CookieKeys.AuthToken);

  const items = [
    {
      key: "new",
      label: "Purwokerto Selatan",
    },
  ];

  const showpass = () => {
    setShowPassword(!showPassword);
  };

  const handleloginUser = async () => {
    try {
      const result = await dispatch(authLoginUser({ email: Email, password: Password }));

      console.log(result, "result");

      const userRole = result.data.data.user.role;
      const userName = result.data.data.user.nama;

      if (userRole === "PEMBELI") {
        toast.success(`Hallo ${userName}, Selamat datang di Broyur`);
        navigate("/home_pembeli");
      } else if (userRole === "PENJUAL") {
        toast.success(`Hallo ${userName} Penjual, Selamat datang `);
        navigate("/penjual_pesanan");
      }
    } catch (err) {
      console.log(err, "err");
      if (err.message === "Network Error") {
        toast.warning("silahkan masukan akun dengan benar");
      }
    }
  };

  return (
    <nav className="navbar bg-abubg">
      <div className="container mx-auto h-[9rem]">
        <div className="h-[2.75rem] px-[4rem] ">
          <div className="h-full flex justify-end items-center space-x-3 text-abu ">
            <div className="flex items-center justify-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
                {/* SVG Path */}
              </svg>
              <p>Notifikasi</p>
            </div>
            <div className="flex items-center justify-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                {/* SVG Path */}
              </svg>
              <p>Tentang Kami</p>
            </div>
          </div>
          <div className="flex justify-between items-center w-full h-[6.875rem]">
            <img src={logo} alt="" />
            <div className="flex w-auto">
              <div className="relative block w-[432px] ">
                <input placeholder="Cari Nama Penjual Sayur Keliling" className=" px-3 border border-abufont h-10 placeholder:font-semibold placeholder:text-base placeholder-[#CCCCCC] rounded-xl w-full" type="text"></input>
                <img className="absolute top-3  right-3 " src={search} alt="" />
              </div>
              <div>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="light" className="flex justify-center items-center">
                      <p className="text-base">Purwokerto Selatan</p>
                      <img src={dropdown} alt="" />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Dynamic Actions" items={items}>
                    {(item) => (
                      <DropdownItem key={item.key} color={item.key === "delete" ? "danger" : "default"} className={item.key === "delete" ? "text-danger" : ""}>
                        {item.label}
                      </DropdownItem>
                    )}
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            <div className="flex space-x-6 ">
              <img src={shop} alt="" />
              <div className="space-x-2 flex">
                {token ? (
                  <div className="flex space-x-6 ">
                    <img src={shop} alt="" />
                    <div className="space-x-2 flex items-center gap-[32px]">
                      <Button
                        onClick={() => {
                          dispatch(LogOut());
                        }}
                        className="text-base border-2 font-semibold text-white  bg-red-500"
                      >
                        Logout
                      </Button>
                      <a href="#" className="profile">
                        <img src={ic_profile} alt="" className="max-w-[55px]" />
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                  <div>
                    <Button onPress={onOpen} className="text-base border-2 font-semibold text-primaryhijau border-primaryhijau bg-transparent">
                      Masuk
                    </Button>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                      <ModalContent>
                        {(onClose) => (
                          <>
                            <ModalHeader className="flex flex-col justify-center items-center gap-1 text-[#315818] font-bold ">Masuk</ModalHeader>
                            <ToastContainer />
                            <ModalBody>
                              <div className="w-full flex flex-col justify-center items-center ">
                                <div className="flex flex-col mb-[2rem] space-y-4 ">
                                  <div>
                                    <p>Email</p>
                                    <input
                                      id="email"
                                      onChange={(e) => {
                                        setEmail(e.target.value);
                                      }}
                                      className="w-[20rem] rounded-xl mt-1 border-2 border-[#D0D0D0] pl-4 py-1 "
                                      placeholder="Masukkan Email"
                                      type="email"
                                    />
                                  </div>
                                  <div className="relative">
                                    <p>Password</p>
                                    <input
                                      id="password"
                                      onChange={(e) => {
                                        setPassword(e.target.value);
                                      }}
                                      className="w-[20rem] rounded-xl mt-1 border-2 border-[#D0D0D0] pl-4 py-1"
                                      placeholder="Masukkan Password"
                                      type={showPassword ? "text" : "password"}
                                    />
                                    <span className="absolute bottom-2 right-4 " onClick={showpass}>
                                      {showPassword ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                          {/* SVG Path */}
                                        </svg>
                                      ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                          {/* SVG Path */}
                                        </svg>
                                      )}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </ModalBody>
                            <ModalFooter className="flex flex-col justify-center items-center gap-4 mt-[2rem] ">
                              <Button
                                onClick={() => {
                                  handleloginUser();
                                  onClose();
                                }}
                                className="text-base border-2 font-semibold text-white  bg-primaryhijau"
                              >
                                Masuk
                              </Button>
                              <div className="flex justify-center items-center w-full gap-1">
                                <p className="text-sm">Belum punya akun ?</p>
                                <a href="#" className="text-primaryhijau text-sm">
                                  Daftar disini
                                </a>
                              </div>
                            </ModalFooter>
                          </>
                        )}
                      </ModalContent>
                    </Modal>
                  </div>
                  <div>
                  <Daftar />
                </div>
               </>
                )}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
