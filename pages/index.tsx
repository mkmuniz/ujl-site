import React from 'react';
import Header from '../components/header'
import NavBar from '../components/navbar'
import Footer from '../components/footer/index'
import About from '../components/about'
import Valores from '../components/sections/valores'
import News from '../components/news';
import Head from 'next/head';

export default function Home() {
  return <>
    <Head>
      <title>UJL - União Juventude Livre</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/img/ujl-icon.png" />
    </Head>
    <NavBar />
    <Header />
    <About />
    <Valores />
    <News />
    <Footer />
  </>
}
