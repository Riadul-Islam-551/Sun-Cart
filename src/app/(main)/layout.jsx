import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import React from 'react'

const layout = ({ children }) => {
  return (
    <div>
      <Nav></Nav>
      <Banner></Banner>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default layout
