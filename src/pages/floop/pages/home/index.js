import React from 'react';
import Layout from '../../_layout';
import Hero from '../../_sections/home/hero';
import Properties from '../../_sections/home/properties';
import About from '../../_sections/home/about';
import Reviews from '../../_sections/home/reviews';

export default ()=> {
  
  return(
    <Layout>
      <Hero />
      <Properties />
      <About />
      <Reviews />
    </Layout>
  )
}