import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Hero from 'components/main/Hero'

import Logo from 'components/main/Logo'
import Plans from 'components/main/Plans'
import Testimonial from 'components/main/Testimonial'
import Blog from 'components/main/Blog'
import { useState, useEffect } from 'react';
import AOS from 'aos';
import AboutTeamCard from 'components/card/AboutTeamCard'
import Exprience from 'components/card/Exprience'
import MainAbout from 'components/main/MainAbout'
import MainEventCard from 'components/main/MainEventCard'
import MainService from 'components/main/MainService'
import MainPortfolio from 'components/main/MainPortfolio'
import Layout from 'components/layouts/Layout'
import BgImage3 from 'components/card/BgImage3'
import SmNavbar from 'components/card/SmNavbar'



export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
   
      <Layout>
      <main className={styles.main}>
   
       <Hero />
        {/* <AboutTeamCard /> */}
       <MainAbout  />
       <Exprience />
       <MainService />
       <MainEventCard />
       <Logo />
       <MainPortfolio />
       <div className="">
          <BgImage3
            title="Let's Talk About Your Event Idea With Us"
            desc="Get in touch with Panache Media to bring your dream event to life with their expert event management and celebrity collaborations.."
            buttonTitle="CONTACT US"
          />
        </div>
       <Testimonial />
       {/* <Plans /> */}
       <Blog /> 
     {/* <SmNavbar /> */}
      </main>
      </Layout>
    </>
  )
}
