import React, { useEffect, useState } from "react";
import logo from "../svg/LogoBroyur.svg";
import search from "../svg/search.svg";
import dropdown from "../svg/dropdown.svg";
import shop from "../svg/Shop.svg";
import "react-toastify/dist/ReactToastify.css";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Daftar } from "./Daftar";
import { useDispatch } from "react-redux";
import { authLoginUser } from "../../redux/action/auth/authLoginUser";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export const Navbar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const items = [
    {
      key: "new",
      label: "New file",
    },
    {
      key: "copy",
      label: "Copy link",
    },
    {
      key: "edit",
      label: "Edit file",
    },
    {
      key: "delete",
      label: "Delete file",
    },
  ];

  const showpass = () => {
    setShowPassword(!showPassword);
  };

  const handleloginUser = async () => {
    try {
      const result = await dispatch(
        authLoginUser({ email: Email, password: Password })
      );

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
      <div className="container mx-auto h-[9rem] ">
        <div className="h-[2.75rem] px-[4rem] ">
          <div className="h-full flex justify-end items-center space-x-3 text-abu ">
            <div className="flex items-center justify-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="18"
                viewBox="0 0 15 18"
                fill="none">
                <path
                  d="M14.5997 11.6749L13.0997 10.1665V6.44987C13.1196 5.06972 12.6395 3.72896 11.7481 2.67515C10.8566 1.62134 9.61401 0.92565 8.24965 0.716538C7.45783 0.61226 6.65287 0.67805 5.88849 0.909517C5.12411 1.14098 4.41788 1.53281 3.81692 2.05884C3.21597 2.58487 2.73411 3.23302 2.40349 3.96003C2.07288 4.68705 1.90111 5.47621 1.89965 6.27487V10.1665L0.399654 11.6749C0.211242 11.8664 0.0834736 12.1093 0.0323209 12.373C-0.0188318 12.6368 0.0089009 12.9098 0.112052 13.1579C0.215203 13.406 0.389196 13.6182 0.61228 13.7679C0.835363 13.9177 1.09764 13.9984 1.36632 13.9999H4.16632V14.2832C4.20525 15.1292 4.57795 15.9253 5.20276 16.497C5.82757 17.0687 6.65353 17.3694 7.49965 17.3332C8.34578 17.3694 9.17174 17.0687 9.79655 16.497C10.4214 15.9253 10.7941 15.1292 10.833 14.2832V13.9999H13.633C13.9017 13.9984 14.1639 13.9177 14.387 13.7679C14.6101 13.6182 14.7841 13.406 14.8873 13.1579C14.9904 12.9098 15.0181 12.6368 14.967 12.373C14.9158 12.1093 14.7881 11.8664 14.5997 11.6749ZM9.16632 14.2832C9.12011 14.684 8.92102 15.0516 8.61055 15.3093C8.30007 15.567 7.90214 15.6949 7.49965 15.6665C7.09717 15.6949 6.69924 15.567 6.38876 15.3093C6.07828 15.0516 5.8792 14.684 5.83299 14.2832V13.9999H9.16632V14.2832ZM2.09132 12.3332L3.07465 11.3499C3.23063 11.1948 3.35437 11.0104 3.43876 10.8073C3.52314 10.6043 3.56649 10.3865 3.56632 10.1665V6.27487C3.56677 5.71271 3.68747 5.15714 3.92032 4.64546C4.15316 4.13378 4.49276 3.67783 4.91632 3.3082C5.33417 2.92961 5.8293 2.64633 6.36744 2.47798C6.90558 2.30963 7.47387 2.26023 8.03299 2.3332C8.99672 2.48968 9.87149 2.98905 10.4962 3.73935C11.121 4.48966 11.4536 5.4404 11.433 6.41654V10.1665C11.4317 10.3859 11.4738 10.6033 11.5567 10.8064C11.6396 11.0094 11.7619 11.1941 11.9163 11.3499L12.908 12.3332H2.09132Z"
                  fill="#888888"
                />
              </svg>
              <p>Notifikasi</p>
            </div>
            <div className="flex items-center justify-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none">
                <path
                  d="M10.5003 1.66675C8.85215 1.66675 7.24099 2.15549 5.87058 3.07117C4.50017 3.98685 3.43206 5.28834 2.80133 6.81105C2.1706 8.33377 2.00558 10.0093 2.32712 11.6258C2.64866 13.2423 3.44234 14.7272 4.60777 15.8926C5.77321 17.0581 7.25807 17.8517 8.87458 18.1733C10.4911 18.4948 12.1666 18.3298 13.6894 17.6991C15.2121 17.0683 16.5136 16.0002 17.4292 14.6298C18.3449 13.2594 18.8337 11.6483 18.8337 10.0001C18.8337 8.90573 18.6181 7.8221 18.1993 6.81105C17.7805 5.80001 17.1667 4.88135 16.3929 4.10752C15.6191 3.3337 14.7004 2.71987 13.6894 2.30109C12.6783 1.8823 11.5947 1.66675 10.5003 1.66675ZM10.5003 16.6667C9.18179 16.6667 7.89286 16.2758 6.79653 15.5432C5.7002 14.8107 4.84572 13.7695 4.34113 12.5513C3.83655 11.3331 3.70453 9.99269 3.96176 8.69948C4.219 7.40627 4.85393 6.21839 5.78628 5.28604C6.71863 4.35369 7.90652 3.71875 9.19973 3.46151C10.4929 3.20428 11.8334 3.3363 13.0516 3.84088C14.2697 4.34547 15.3109 5.19995 16.0435 6.29628C16.776 7.39261 17.167 8.68154 17.167 10.0001C17.167 11.7682 16.4646 13.4639 15.2144 14.7141C13.9641 15.9644 12.2684 16.6667 10.5003 16.6667Z"
                  fill="#888888"
                />
                <path
                  d="M10.4998 14.1667C10.9601 14.1667 11.3332 13.7936 11.3332 13.3333C11.3332 12.8731 10.9601 12.5 10.4998 12.5C10.0396 12.5 9.6665 12.8731 9.6665 13.3333C9.6665 13.7936 10.0396 14.1667 10.4998 14.1667Z"
                  fill="#888888"
                />
                <path
                  d="M10.4998 5.83325C10.2788 5.83325 10.0669 5.92105 9.91058 6.07733C9.7543 6.23361 9.6665 6.44557 9.6665 6.66659V10.8333C9.6665 11.0543 9.7543 11.2662 9.91058 11.4225C10.0669 11.5788 10.2788 11.6666 10.4998 11.6666C10.7209 11.6666 10.9328 11.5788 11.0891 11.4225C11.2454 11.2662 11.3332 11.0543 11.3332 10.8333V6.66659C11.3332 6.44557 11.2454 6.23361 11.0891 6.07733C10.9328 5.92105 10.7209 5.83325 10.4998 5.83325Z"
                  fill="#888888"
                />
              </svg>
              <p>Tentang Kami</p>
            </div>
          </div>
          <div className="flex justify-between items-center w-full h-[6.875rem]">
            <img src={logo} alt="" />
            <div className="flex w-auto">
              <div className="relative block w-[432px] ">
                <input
                  placeholder="Cari Nama Penjual Sayur Keliling"
                  className=" px-3 border border-abufont h-10 placeholder:font-semibold placeholder:text-base placeholder-[#CCCCCC] rounded-xl w-full"
                  type="text"></input>
                <img className="absolute top-3  right-3 " src={search} alt="" />
              </div>
              <div>
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      variant="light"
                      className="flex justify-center items-center">
                      <p className="text-base">Area Pengiriman</p>
                      <img src={dropdown} alt="" />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Dynamic Actions" items={items}>
                    {(item) => (
                      <DropdownItem
                        key={item.key}
                        color={item.key === "delete" ? "danger" : "default"}
                        className={item.key === "delete" ? "text-danger" : ""}>
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
                <div>
                  <Button
                    onPress={onOpen}
                    className="text-base border-2 font-semibold text-primaryhijau border-primaryhijau bg-transparent">
                    Masuk
                  </Button>
                  <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                      {(onClose) => (
                        <>
                          <ModalHeader className="flex flex-col justify-center items-center gap-1 text-[#315818] font-bold ">
                            Masuk
                          </ModalHeader>
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
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="16"
                                        width="18"
                                        viewBox="0 0 576 512">
                                        <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                                      </svg>
                                    ) : (
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="16"
                                        width="20"
                                        viewBox="0 0 640 512">
                                        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
                                      </svg>
                                    )}
                                  </span>
                                </div>
                              </div>
                              <Button
                                onClick={handleloginUser}
                                className="px-[7rem] bg-[#315818] text-white font-semibold ">
                                Masuk
                              </Button>
                            </div>
                          </ModalBody>
                          <ModalFooter>
                            <Button
                              color="danger"
                              variant="light"
                              onPress={onClose}>
                              Close
                            </Button>
                          </ModalFooter>
                        </>
                      )}
                    </ModalContent>
                  </Modal>
                </div>
                <div>
                  <Daftar></Daftar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
