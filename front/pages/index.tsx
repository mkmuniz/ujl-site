import Head from 'next/head'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import About from '../components/About'
import styles from '../styles/Home.module.css'

export default function Home() {
  return <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=League+Spartan&display=swap" rel="stylesheet" />
    </Head>
    <NavBar />
    <Header />
    <About />
  </>
}
