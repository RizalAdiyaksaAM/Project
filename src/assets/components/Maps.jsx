import { Navbar } from "@nextui-org/react";
import React, { useEffect } from "react";
import imgMaps from "../img/img-maps.png";
import img__profile from "../img/img-profile.png";
import ic__circle from "../img/ic-circle.svg";
import ic__pin from "../img/ic-pin.svg";
import bg__gradient from "../img/bg-gradient.png";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getPenjual from "../../redux/action/getPenjual";

export const Maps = () => {

  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPenjual(params.penjualId))

  },[dispatch, params.penjualId]);

  const dataPenjual = useSelector((state) => state.penjual)

  
  
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
                {dataPenjual && dataPenjual.penjual && dataPenjual.penjual[0] && dataPenjual.penjual[0].nama}
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
                {dataPenjual && dataPenjual.penjual && dataPenjual.penjual[0] && dataPenjual.penjual[0].alamat}
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
