import './App.css'

import Navbar from './page/Navbar'
import Hero from './page/Hero'
import Footer from './page/Footer'
import WorldMeadow from './page/WorldMeadow'
import CharacterPage from './page/CharacterPage'
import Map from './page/Map'
import CTAPage from './page/CTAPage'
import Features from './page/Features'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WorldMeadow />
      <CharacterPage />
      <Map />
      <Features />
      <CTAPage />
      <Footer />
    </>
  )
}
