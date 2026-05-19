import './App.css'

import Navbar from './page/Navbar'
import Hero from './page/Hero'
import Footer from './page/Footer'
import WorldMeadow from './page/WorldMeadow'
import CharacterPage from './page/CharacterPage'
import Map from './page/Map'
import CTAPage from './page/CTAPage'
import Features from './page/Features'
import SeeItInAction from './page/SeeItInAction'

export default function App() {
  return (
    <main className="w-full flex flex-col items-stretch">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <Hero />
      <WorldMeadow />
      <CharacterPage />
      <Map />
      <Features />
      <SeeItInAction />
      <CTAPage />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
