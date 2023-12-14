import { Navbar } from "@nextui-org/react";
import React from "react";
import imgMaps from "../img/img-maps.png";
import img__profile from "../img/img-profile.png";
import ic__circle from "../img/ic-circle.svg";
import ic__pin from "../img/ic-pin.svg";
import bg__gradient from "../img/bg-gradient.png";

export const Maps = () => {
  return (
    <div>
      <section className="maps">
        <div className="container mx-auto relative">
          <img src={imgMaps} alt="" />
          <div className="profile flex items-center gap-4 absolute left-[64px] bottom-[13px] z-10">
            <img
              src={img__profile}
              alt=""
              className="profile-image max-w-[200px]"
            />
            <div className="profile-text">
              <h3 className="profile-text-title text-2xl font-semibold">
                Malika
              </h3>
              <p className="profile-text-status flex align-middle gap-2">
                <span className="flex">
                  <img src={ic__circle} alt="" />
                </span>
                Keliling
              </p>
              <p className="profile-text-site flex align-middle gap-2">
                <span className="flex">
                  <img src={ic__pin} alt="" />
                </span>
                Purwokerto Selatan
              </p>
            </div>
          </div>
          <img
            src={bg__gradient}
            alt=""
            className="bg-gradient-bottom absolute left-0 right-0 bottom-0 z-0"
          />
        </div>
      </section>
    </div>
  );
};
