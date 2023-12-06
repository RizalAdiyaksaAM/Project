import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Navbar } from '../assets/components/Navbar'

export const RouterList = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="navbar" element={<Navbar />} />
    </Routes>
    </BrowserRouter>
  )
}
