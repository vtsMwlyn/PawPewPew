import './App.css'

import { AudioProvider } from './context/AudioContext'
import Navbar from './components/Navbar'
import Hero from './page/1 - Hero/Index'
import Footer from './components/Footer'
import WorldMeadow from './page/2 - Introduction/Index'
import CharacterPage from './page/3 - Characters/Index'
import Map from './page/4 - Map/Index'
import CTAPage from './page/6 - Call to Action/Index'
import SeeItInAction from './page/5 - Gallery/Index'
// import ScreenInfo from "./components/ScreenInfo"

export default function App() {
  return (
    <AudioProvider>
      <main className="w-full flex flex-col items-stretch">
        {/* Navbar */}
        {/* <ScreenInfo /> */}
        <Navbar />

        {/* Content */}
        <Hero />
        <WorldMeadow />
        <CharacterPage />
        <Map />
        <SeeItInAction />
        <CTAPage />

        {/* Footer */}
        <Footer />
      </main>
    </AudioProvider>
  )
}
