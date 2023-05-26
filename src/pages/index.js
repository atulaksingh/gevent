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
import Dj from 'components/card/Dj'



export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
   
      <Layout>
      <main className={styles.main}>
<div className='bg-black overflow-hidden sm:overflow-hidden'>
<Dj />
</div>

       {/* <Hero /> */}
        {/* <AboutTeamCard /> */}
        <div className='mt-[640px] sm:mt-[650px] lg:pt-0'>
       <MainAbout  />

        </div>
       <Exprience />
       <MainService />
       <MainEventCard />
       <Logo />
       <MainPortfolio />
       <div className="">
          <BgImage3
            title="Let's Talk About Your Event Idea With Us"
            desc="Looking to bring your dream event to life with an unforgettable experience? Look no further than Panache Media, where our expert event management and exclusive celebrity collaborations will make your event stand out from the rest. Contact us today to take the first step in making your vision a reality."
            buttonTitle="CONTACT US"
          />
        </div>
       <Testimonial />
      
       <Blog /> 
    
      </main>
      </Layout>
    </>
  )
}
