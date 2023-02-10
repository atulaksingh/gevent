import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Hero from 'components/main/Hero'

import Logo from 'components/main/Logo'
import Plans from 'components/main/Plans'
import Testimonial from 'components/main/Testimonial'
import Blog from 'components/main/Blog'

import AboutTeamCard from 'components/card/AboutTeamCard'
import Exprience from 'components/card/Exprience'
import MainAbout from 'components/main/MainAbout'
import MainEventCard from 'components/main/MainEventCard'
import MainService from 'components/main/MainService'
import MainPortfolio from 'components/main/MainPortfolio'
import Layout from 'components/layouts/Layout'
import BgImage3 from 'components/card/BgImage3'



export default function Home() {
  return (
    <>
   
      <Layout>
      <main className={styles.main}>
   
       <Hero />
       <AboutTeamCard />
       <MainAbout  />
       <Exprience />
       <MainService />
       <MainEventCard />
       <Logo />
       <MainPortfolio />
       <div className="">
          <BgImage3
            title="Let's Talk About Your Event Idea With Us"
            desc="Cras porttitor urna eu metus efficitur, a tempus ligula vehicula. Donec ornare pharetra metus nec vehicula. Etiam mauris dolor, interdum id vestibulum et pharetra ac libero. Etiam vestibulum in mi sit amet."
            buttonTitle="CONTACT US"
          />
        </div>
       <Testimonial />
       <Plans />
       <Blog />
     
      </main>
      </Layout>
    </>
  )
}
