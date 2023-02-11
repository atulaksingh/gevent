import React from 'react'
import CardContactUs from 'components/ContactUsCard/ContactUs'
import Layout from 'components/layouts/Layout'
import { useState, useEffect } from 'react';
import AOS from 'aos';
function ContactUs() {
  useEffect(() => {
  AOS.init();
}, [])

  return (

    <div>
    <Layout>

      <CardContactUs />
    </Layout>
    </div>
  )
}

export default ContactUs
