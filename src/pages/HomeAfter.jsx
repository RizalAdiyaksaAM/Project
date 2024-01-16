import React from 'react'
import { Hero } from '../assets/components/Hero'
import { PenjualTerlaris } from '../assets/components/PenjualTerlaris'
import { Wilayah } from '../assets/components/Wilayah'
import { Footer } from '../assets/components/Footer'
import Navbar_After from '../assets/components/Navbar_After'

export const HomeAfter = () => {
  return (
    <div className=' w-full'>
        <Navbar_After></Navbar_After>
        <Hero></Hero>
        <PenjualTerlaris></PenjualTerlaris>
        <Wilayah></Wilayah>
        <Footer></Footer>
    </div>
  )
}
