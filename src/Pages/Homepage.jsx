import React from 'react'
import Header from '../components/header'
import Banner from '../components/banner'
import Card from '../components/card'
import Infocard from '../components/Infocard'
import Working from '../components/Working'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
    <Header/>
    <Banner/>
    <div className="bg-[#F0F6FF]">
      <Card/>
      <Infocard/>
      <Working/>
    </div>
   <Footer/>
  </div>
  )
}

export default Homepage