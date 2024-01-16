import React from "react";
import logo from "../svg/LogoBroyur.svg";
import search from "../svg/search.svg";
import dropdown from "../svg/dropdown.svg";
import shop from "../svg/Shop.svg";
import ic_profile from "../../assets/img/img-profile.png";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { LogOut } from "../../redux/action/auth/authLoginUser";
import { useDispatch } from "react-redux";

export default function Navbar_Penjual() {
  const dispatch = useDispatch();
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

  return (
    <div>
      <nav className="navbar bg-abubg">
        <div className="container mx-auto h-[4rem] bg-primaryhijau ">
          <div className=" px-[4rem] "> 
            <div className="flex justify-between  items-center w-full">
             
              <div className="flex space-x-6 ">
                <div className="space-x-2 flex items-center gap-[32px]">
                  <Button onClick={() => {
                  dispatch(LogOut());
                }} className="text-base border-2 font-semibold text-white  bg-red-500">
                    Logout
                  </Button>
                  <a href="#" className="profile">
                    <img src={ic_profile} alt="" className="max-w-[55px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
