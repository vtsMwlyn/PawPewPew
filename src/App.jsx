import "./App.css";

import { Routes, Route } from 'react-router-dom'
import { AudioProvider } from "./context/AudioContext";
import Navbar from "./components/Navbar";
import Hero from "./page/1 - Hero/Index";
import Footer from "./components/Footer";
import WorldMeadow from "./page/2 - Introduction/Index";
import Tailguards from "./Tailguards";
import CTAPage from "./page/6 - Call to Action/Index";
import SeeItInAction from "./page/5 - Gallery/Index";
// import ScreenInfo from "./components/ScreenInfo"
import MuteButton from "./components/MuteButton";
import Separator from "./components/Separator";
import { ToastProvider } from "./context/ToastContext";
import CardButton from "./page/4 - OtherPage/index";

export default function App() {
  return (
    <AudioProvider>
      <ToastProvider>
        <main className="w-full flex flex-col items-stretch">
          {/* Navbar */}
          {/* <ScreenInfo /> */}
          <Navbar />

          <Routes>
            <Route path="/" element={<>
              <Hero />
              <Separator />

              <WorldMeadow />
              <Separator />

              <CardButton />
              <Separator />

              <SeeItInAction />
              <Separator />

              <CTAPage />
            </>} />
            <Route path="/tailguard" element={<Tailguards/>} />
          </Routes>
          {/* Content */}


          {/* Footer */}
          <MuteButton />
          <Footer />
        </main>
      </ToastProvider>
    </AudioProvider>
  );
}
