import React from 'react';
import Header from '../components/header'
import NavBar from '../components/navbar'
import Footer from '../components/footer/index'
import About from '../components/about'
import Valores from '../components/sections/valores'
import News from '../components/news';

export default function Home() {
  return <>
    <NavBar />
    <Header />
    <About />
    <Valores />
    <News />
    <Footer />
  </>
}
