import { Route, Routes } from 'react-router-dom'
import { Box, Link } from '@chakra-ui/react'
import './App.css'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Tours from './components/Tours'
import GalleryPage from './pages/GalleryPage'
import Services from './components/Services'
import Footer from './components/Footer'
import HotelPage from './pages/HotelPage'
import ContactPage from './pages/ContactPage'
import TourPage from './pages/TourPage'
import TourAboutPage from './pages/TourAboutPage'
import HotelAboutPage from './pages/HotelAboutPage'
import Information from './components/Information'
import TransportPage from './pages/TransportPage'
import DestinationPage from './pages/DestinationPage'
import DestinationAboutPage from './pages/DestinationAboutPage'
import Nav from './components/Nav'
import HomeDestionation from './components/Destionation'
import Whatsapp from './assets/Whatsapp';

function App() {

  return (
    <>
      <Nav />
      <Navbar />
      <Box pt={{base:"120px", lg:"150px"}}>
        <Routes>
          <Route path='/' element={<>
            <Header />
            <About />
            <Services />
            <Tours />
            <HomeDestionation />
            {/* <Information /> */}
          </>} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/hotels' element={<HotelPage />} />
          <Route path='/hotels/about/:id' element={<HotelAboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/tours/:id' element={<TourPage />} />
          <Route path='/tours/about/:id' element={<TourAboutPage />} />
          <Route path='/transport' element={<TransportPage />} />
          <Route path='/destination' element={<DestinationPage />} />
          <Route path='/destination/about/:id' element={<DestinationAboutPage />} />
        </Routes>
      </Box>
      <Footer />
      {/* <Link {...css.call} onClick={handleCall} target="_blank" href={"tel:+77753378595"}>
         <Image w={'50px'} src={CallIcon} />
      </Link> */}
      <Link {...css.link} target="_blank" href="https://wa.me/+998977472806">
        <Whatsapp />
      </Link>
    </>
  )
}

export default App

const css = {
  link: {
    position: "fixed",
    zIndex: "9999",
    top: "88%",
    left: {
      base: "85%",
      md: "90%",
    },
  },
}
