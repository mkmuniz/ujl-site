import Header from '../components/header'
import NavBar from '../components/navbar'
import Footer from '../components/footer/index'
import About from '../components/about'
import Valores from '../components/sections/valores'

export default function Home() {
  return <>
    <NavBar />
    <Header />
    <Valores />
    <About />
    <Footer />
  </>
};
