import React from 'react'
import { Navbar } from '../assets/components/Navbar'
import { Hero } from '../assets/components/Hero'
import { PenjualTerlaris } from '../assets/components/PenjualTerlaris'
import { Wilayah } from '../assets/components/Wilayah'
import { Footer} from '../assets/components/Footer'

export const Home = () => {
  return (
    <div className=' w-full'>
        <Navbar></Navbar>
        <Hero></Hero>
        <PenjualTerlaris></PenjualTerlaris>
        <Wilayah></Wilayah>
        <Footer></Footer>
    </div>
  )
}
