import { Button, Card, CardBody, Tab, Tabs } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import foto from '../img/foto.png'
import pointer from "../svg/pointer.svg"
import { useDispatch, useSelector } from 'react-redux'
import getUser from '../../redux/action/getUser'
import { Link } from 'react-router-dom'

export const Wilayah = () => {
  const dispatch = useDispatch();
  const [alamat, setAlamat] = useState("")

  const dataAll = useSelector((state) => state.user.user);
  console.log(dataAll, "All");

  useEffect(() => {
    dispatch(getUser(alamat));
  }, [dispatch, alamat]);

  const handleAlamat = (dataAlamat) => {
    setAlamat(dataAlamat);
  }

  console.log(alamat, " alamat");

  return (
    <section className='wilayah py-[24px]'>
      <div className="container w-auto  mx-[4rem] mb-[10rem] h-80 mt-10 ">
        <div className="space-y-2 mb-6">
          <p className="font-semibold text-xl">Wilayah Drop Point</p>
          <div className="flex space-x-8 scroll-pl-6 snap-x overflow-scroll scrollbar-hide">
          <Button onClick={() => handleAlamat('Teluk')}
            className="snap-start relative  w-[11.5625rem] h-[3.25rem] flex flex-col justify-start items-start rounded-md bg-gradient-to-bl from-red-500 to-red-800">
                <div className="w-[3rem] h-1 bg-white rounded-2xl mt-1 "></div>
                <p className="absolute top-2 text-white font-semibold text-base list-outside">
                  Teluk
                </p>
              </Button>
              <Button onClick={() => handleAlamat('Berkoh')}
               className="snap-start relative  w-[11.5625rem] h-[3.25rem] flex flex-col justify-start items-start rounded-md bg-gradient-to-bl from-[#FCBA04] to-[#E5AC0C]">
                <div className="w-[3rem] h-1 bg-white rounded-2xl mt-1 "></div>
                <p className="absolute top-2 text-white font-semibold text-base list-outside">
                  Berkoh
                </p>
              </Button>
              <Button onClick={() => handleAlamat('Tanjung')}className="snap-start relative  w-[11.5625rem] h-[3.25rem] flex flex-col justify-start items-start rounded-md bg-gradient-to-bl from-[#68E4FF] to-[#187184]">
                <div className="w-[3rem] h-1 bg-white rounded-2xl mt-1 "></div>
                <p className="absolute top-2 text-white font-semibold text-base list-outside">
                  Tanjung
                </p>
              </Button> 
              <Button onClick={() => handleAlamat('Karangklesem')} className="snap-start relative  w-[11.5625rem] h-[3.25rem] flex flex-col justify-start items-start rounded-md bg-gradient-to-bl from-[#20E96F] to-[#0FA94C]">
                <div className="w-[3rem] h-1 bg-white rounded-2xl mt-1 "></div>
                <p className="absolute top-2 text-white font-semibold text-base list-outside">
                  Karangklesem
                </p>
              </Button>    
              <Button onClick={() => handleAlamat('Karangpucung')} className="snap-start relative  w-[11.5625rem] h-[3.25rem] flex flex-col justify-start items-start rounded-md bg-gradient-to-bl from-[#8D28D9] to-[#531085]">
                <div className="w-[3rem] h-1 bg-white rounded-2xl mt-1 "></div>
                <p className="absolute top-2 text-white font-semibold text-base list-outside">
                  Karangpucung
                </p>
              </Button>        
              <Button onClick={() => handleAlamat('Purwokerto_kidul')} className="snap-start relative  w-[11.5625rem] h-[3.25rem] flex flex-col justify-start items-start rounded-md bg-gradient-to-bl from-[#EA2BA3] to-[#961164]">
                <div className="w-[3rem] h-1 bg-white rounded-2xl mt-1 "></div>
                <p className="absolute top-2 text-white font-semibold text-base list-outside">
                  Purwokerto Kidul
                </p>
              </Button>
              <Button onClick={() => handleAlamat('Arca')} className="snap-start relative  w-[11.5625rem] h-[3.25rem] flex flex-col justify-start items-start rounded-md bg-gradient-to-bl from-[#3C14B0] to-[#5C28F2]">
                <div className="w-[3rem] h-1 bg-white rounded-2xl mt-1 "></div>
                <p className="absolute top-2 text-white font-semibold text-base list-outside">
                  Arca
                </p>
              </Button>
          {/* {dataAll &&
          dataAll.map((course) => (
            <div className="space-y-5 col-span-2" key={course.id}>
              <Button className="snap-start relative  w-[11.5625rem] h-[3.25rem] flex flex-col justify-start items-start rounded-md bg-gradient-to-bl from-red-500 to-red-800">
                <div className="w-[3rem] h-1 bg-white rounded-2xl mt-1 "></div>
                <p className="absolute top-2 text-white font-semibold text-base list-outside">
                  {course.alamat}
                </p>
              </Button>
            </div>
          ))} */}
           
          </div>
        </div>
        <div className='flex  justify-start gap-4 w-full h-fit '>
        {dataAll && dataAll.slice(0, 6).map((data) => (
           <Link to={`/profile_beranda/${data.id}`}>
          <div key={data.id}  className="w-[12.125rem] h-[17rem] bg-white shadow-lg rounded-lg flex flex-col justify-center items-center space-y-2  ">
          <div>
            <img src={foto} alt="" />
          </div>
          <div className='flex flex-col w-full pl-4 justify-start'>
            <p className="text-base font-semibold pl-1">{data.nama}</p>
            <div className="flex gap-1 justify-start mb-2">
              <img src={pointer} alt="" />
              <p>{data.alamat}</p>
            </div>
          </div>
          <div>
            <Button className="w-[11.125rem] h-[1.875rem] text-primaryhijau font-semibold bg-transparent border-2 border-primaryhijau   ">
              {" "}
              Pesan{" "}
            </Button>
          </div>
        </div>
        </Link>

        ))}
        </div>
        
      </div>
    </section>
  );
}
