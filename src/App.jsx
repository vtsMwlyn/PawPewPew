import './App.css'

// import ScreenInfo from './components/ScreenInfo'
import Navbar from './page/Navbar'
import Hero from './page/Hero'
import Footer from './page/Footer'
import WorldMeadow from './page/WorldMeadow'
import CharacterPage from './page/CharacterPage'

export default function App() {
  return (
    <>
      {/* <ScreenInfo /> */}
      <Navbar />
      <Hero />
      <WorldMeadow />
      <CharacterPage />
      <Footer />
    </>
  )
}
