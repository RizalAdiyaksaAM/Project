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

export default function Navbar_After_V2() {
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
      <nav className="navbar bg-[#62AF2F]">
        <div className="container mx-auto">
          <div className="py-[14px] px-[4rem] ">
            <div className="flex justify-end items-center w-full">
              <div className="flex space-x-6 ">
              <Button onClick={() => {
                  dispatch(LogOut());
                }} className="text-base border-2 font-semibold text-white  bg-red-500">
                    Logout
                  </Button>
                <div className="space-x-2 flex items-center gap-[32px]">
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
