import "./App.css";

import { AudioProvider } from "./context/AudioContext";
import Navbar from "./components/Navbar";
import Hero from "./page/1 - Hero/Index";
import Footer from "./components/Footer";
import WorldMeadow from "./page/2 - Introduction/Index";
import CharacterPage from "./page/3 - Characters/Index";
import Map from "./page/4 - Map/Index";
import CTAPage from "./page/6 - Call to Action/Index";
import SeeItInAction from "./page/5 - Gallery/Index";
// import ScreenInfo from "./components/ScreenInfo"
import MuteButton from "./components/MuteButton";
import Separator from "./components/Separator";
import { ToastProvider } from "./context/ToastContext";

export default function App() {
  return (
    <AudioProvider>
      <ToastProvider>
        <main className="w-full flex flex-col items-stretch">
          {/* Navbar */}
          {/* <ScreenInfo /> */}
          <Navbar />

          {/* Content */}
          <Hero />
          <Separator />

          <WorldMeadow />
          <Separator />

          <CharacterPage />
          <Separator />

          <Map />
          <Separator />

          <SeeItInAction />
          <Separator />

          <CTAPage />

          {/* Footer */}
          <MuteButton />
          <Footer />
        </main>
      </ToastProvider>
    </AudioProvider>
  );
}
