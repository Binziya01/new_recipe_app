import React, { useState } from 'react'
import DesktopNav from './DesktopNav'
import logo1 from "../../logo/logo1.png"
import MobileNav from './MobileNav'

const Header = () => {
    const [hideLeft,setHideLeft]=useState("-left-[1000px]")
    const menuItems = ["recipes","resources","about","contact"]

    const onOpen = () => {
        setHideLeft("left-0")
    } 
    const onClose = () => {
        setHideLeft("-left-[1000px]")

    }
  return (
    <div>
    <div className='max-[900px]:hidden'>
        <DesktopNav menuItems={menuItems} Logo={logo1}/>
    </div>
    <div className='min-[900px]:hidden'>
        <MobileNav menuItems={menuItems} Logo={logo1} onClose={onClose} hideLeft={hideLeft} onOpen={onOpen}/>
    </div>

    </div>
  )
}

export default Header