import { Button, Card, CardBody, Tab, Tabs } from '@nextui-org/react'
import React from 'react'
import foto from '../img/foto.png'
import pointer from "../svg/pointer.svg"

export const Wilayah = () => {
  return (
    <div className='mx-[4rem] mb-[10rem] h-80 mt-10 '>
        <div className='space-y-2 mb-6'>
            <p className="font-semibold text-xl" >Wilayah Drop Point</p>
            <div className='flex space-x-10 scroll-pl-6 snap-x overflow-scroll scrollbar-hide'>
              <div>
                <Button className='snap-start relative  w-[11.5625rem] h-[3.25rem] flex flex-col justify-start items-start rounded-md bg-gradient-to-bl from-red-500 to-red-800'>
                    <div className='w-[3rem] h-1 bg-white rounded-2xl mt-1 '></div>
                    <p className='absolute top-2 text-white font-semibold text-base list-outside'>Teluk</p>
                </Button>
              </div>
              <div>
                <Button className='snap-start relative  w-[11.5625rem] h-[3.25rem] flex flex-col justify-start items-start rounded-md bg-gradient-to-bl from-red-500 to-red-800'>
                    <div className='w-[3rem] h-1 bg-white rounded-2xl mt-1 '></div>
                    <p className='absolute top-2 text-white font-semibold text-base list-outside'>Teluk</p>
                </Button>
              </div>
              <div>
                <Button className='snap-start relative  w-[11.5625rem] h-[3.25rem] flex flex-col justify-start items-start rounded-md bg-gradient-to-bl from-red-500 to-red-800'>
                    <div className='w-[3rem] h-1 bg-white rounded-2xl mt-1 '></div>
                    <p className='absolute top-2 text-white font-semibold text-base list-outside'>Teluk</p>
                </Button>
              </div>
              <div>
                <Button className='snap-start relative  w-[11.5625rem] h-[3.25rem] flex flex-col justify-start items-start rounded-md bg-gradient-to-bl from-red-500 to-red-800'>
                    <div className='w-[3rem] h-1 bg-white rounded-2xl mt-1 '></div>
                    <p className='absolute top-2 text-white font-semibold text-base list-outside'>Teluk</p>
                </Button>
              </div>
              <div>
                <Button className='snap-start relative  w-[11.5625rem] h-[3.25rem] flex flex-col justify-start items-start rounded-md bg-gradient-to-bl from-red-500 to-red-800'>
                    <div className='w-[3rem] h-1 bg-white rounded-2xl mt-1 '></div>
                    <p className='absolute top-2 text-white font-semibold text-base list-outside'>Teluk</p>
                </Button>
              </div>
              <div>
                <Button className='snap-start relative  w-[11.5625rem] h-[3.25rem] flex flex-col justify-start items-start rounded-md bg-gradient-to-bl from-red-500 to-red-800'>
                    <div className='w-[3rem] h-1 bg-white rounded-2xl mt-1 '></div>
                    <p className='absolute top-2 text-white font-semibold text-base list-outside'>Teluk</p>
                </Button>
              </div>
              <div>
                <Button className='snap-start relative  w-[11.5625rem] h-[3.25rem] flex flex-col justify-start items-start rounded-md bg-gradient-to-bl from-red-500 to-red-800'>
                    <div className='w-[3rem] h-1 bg-white rounded-2xl mt-1 '></div>
                    <p className='absolute top-2 text-white font-semibold text-base list-outside'>Teluk</p>
                </Button>
              </div>
                
                
            </div>
           
        </div>
        <div className='w-[12.125rem] h-[17rem] bg-white shadow-lg rounded-lg flex flex-col justify-center items-center space-y-2  '>
          <div>
            <img src={foto} alt="" />
          </div>
          <div>
            <p className='text-base font-semibold'>Ferdi Sambo</p>
            <div className='flex gap-1 mb-2'>
              <img src={pointer} alt="" />
              <p>Purwokerto Selatan</p>
            </div>
          </div>
          <div>
            <Button className='w-[11.125rem] h-[1.875rem] text-primaryhijau font-semibold bg-transparent border-2 border-primaryhijau   '> Pesan </Button>
          </div>
        </div>
    </div>
  )
}
