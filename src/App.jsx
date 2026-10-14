import "./App.css";

import { Routes, Route } from 'react-router-dom'
import { AudioProvider } from "./context/AudioContext";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Alcove from "./page/Alcove/Index";
import Home from "./page/Home/Index";
// import ScreenInfo from "./components/ScreenInfo"
import MuteButton from "./components/MuteButton";
import LangButton from "./components/LangButton";
import { ToastProvider } from "./context/ToastContext";
import ScrollToHashElement from './components/ScrollToHashElement';

export default function App() {
  return (
    <LanguageProvider>
      <AudioProvider>
        <ToastProvider>
        <main className="w-full flex flex-col items-stretch">
          {/* Navbar */}
          <ScrollToHashElement />
          {/* <ScreenInfo /> */}
          <Navbar />

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/alcove" element={<Alcove/>} />
          </Routes>
          {/* Content */}


          {/* Footer */}
          <MuteButton />
          <LangButton />
          <Footer />
        </main>
      </ToastProvider>
    </AudioProvider>
  </LanguageProvider>
  );
}
