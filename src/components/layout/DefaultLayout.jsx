import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const DefaultLayout = () => {
  return (
    <div className='position-relative' >
        {/* header */}
        <Header />

        <main className='main'>
            <Outlet />
        </main>
        {/* footer */}
        <Footer />
    </div>
  )
}

export default DefaultLayout