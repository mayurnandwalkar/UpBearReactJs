import React from 'react'
import Header from '../CommonComponent/Header'
import HeroSection from '../Home/HeroSection'
import Footer from '../commoncomponent/Footer'
import Feature from '../Home/Feature'
import Learn from '../Home/Learn'
import Earn from '../Home/Earn'
import NewsLetter from '../Home/NewsLetter'

const Home = () => {
  return (
    <>
      <Header/>
      <main className="l-main">
        <HeroSection/>
        <Feature/>
        <Earn/>
        <Learn/>
        <NewsLetter/>
      </main>
      <Footer/>
    </>
  )
}

export default Home