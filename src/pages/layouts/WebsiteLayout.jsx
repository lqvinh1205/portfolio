import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import HeaderTop from '../../components/HeaderTop'

const WebsiteLayout = () => {
  return (
    <div className='bg-dark'>
        <HeaderTop />
        <Outlet />
        <Footer />
    </div>
  )
}

export default WebsiteLayout