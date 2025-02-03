import { Route, Routes } from 'react-router-dom'
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

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<>
          <Header />
          <About />
          <Services />
          <Tours />
          <Information />
        </>} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/hotels' element={<HotelPage />} />
        <Route path='/hotels/about/:id' element={<HotelAboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/tours' element={<TourPage />} />
        <Route path='/tours/about/:id' element={<TourAboutPage />} />
        <Route path='/transport' element={<TransportPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
