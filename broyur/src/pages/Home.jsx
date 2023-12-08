import React from 'react'
import { Navbar } from '../assets/components/Navbar'
import { Hero } from '../assets/components/Hero'
import { PenjualTerlaris } from '../assets/components/PenjualTerlaris'
import { Wilayah } from '../assets/components/Wilayah'

export const Home = () => {
  return (
    <div className=' w-full'>
        <Navbar></Navbar>
        <Hero></Hero>
        <PenjualTerlaris></PenjualTerlaris>
        <Wilayah></Wilayah>
    </div>
  )
}
