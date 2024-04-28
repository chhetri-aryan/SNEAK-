import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import mens from '../../../Data/Mens/mens'
import Cart from '../../components/Cart/Cart'
import Footer from '../../components/Footer/Footer'
import Error from './Error'
const HomePage = () => {
  return (
    <div className='no-scrollbar'>
    
      <MainCarousel />
      <div className='space-y-10 py-20 flex-col justify-center'>
        <HomeSectionCarousel data={mens} sectionName="Mens shoe" />
        <HomeSectionCarousel data={mens} sectionName="Womens shoe" />
        <HomeSectionCarousel data={mens} sectionName="Kids shoe" />
      </div>

      <Cart />
      <Footer />
    </div>

  )
}

export default HomePage
