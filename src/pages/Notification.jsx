import React from 'react'
import { Navbar } from '../assets/components/Navbar'
import { Notification_Section } from '../assets/components/Notification_Section'
import Navbar_After from '../assets/components/Navbar_After'

export const Notification = () => {
  return (
    <div>
      <Navbar_After></Navbar_After>
      <Notification_Section></Notification_Section>
    </div>
  )
}
