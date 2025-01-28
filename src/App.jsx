import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Tours from './components/Tours'
import GalleryPage from './pages/GalleryPage'
import Services from './components/Services'

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
        </>} />
        <Route path='/gallery' element={<GalleryPage />} />
      </Routes>
    </>
  )
}

export default App
