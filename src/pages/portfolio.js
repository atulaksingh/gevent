import React from 'react'
import { useState, useEffect } from 'react';
import AOS from 'aos';
import Layout from 'components/layouts/Layout'
import PortfolioPage from 'components/PortfolioCard/PortfolioPage'

function Portfolio() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
  <>
    <div>
    <Layout>

        <PortfolioPage />
    </Layout>
    </div>
  </>
  )
}

export default Portfolio
