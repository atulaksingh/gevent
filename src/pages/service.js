import React from 'react'
import { useState, useEffect } from 'react';
import AOS from 'aos';
import Layout from 'components/layouts/Layout'
import MainServices from 'components/ServiceCard/MainServices'

function Service() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
   <>
    <div>
    <Layout>

        <MainServices />
    </Layout>
    </div>
   </>
  )
}

export default Service
