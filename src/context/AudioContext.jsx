import { useEffect } from "react";
import { createContext, useContext, useRef, useState } from "react";

const AudioContext = createContext(null);

export function AudioProvider({ children }) {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const isMutedRef = useRef(false);
  const pausedForVideoRef = useRef(false);

  const toggleMute = () => {
    const next = !isMutedRef.current;
    isMutedRef.current = next;
    setIsMuted(next);
    if (next) {
      pausedForVideoRef.current = false;
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
  };

  const pauseForVideo = () => {
    if (audioRef.current && !audioRef.current.paused) {
      pausedForVideoRef.current = true;
      audioRef.current.pause();
    }
  };

  const resumeAfterVideo = () => {
    if (pausedForVideoRef.current && !isMutedRef.current) {
      audioRef.current?.play();
    }
    pausedForVideoRef.current = false;
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current?.play();
    }
  }, []);

  return (
    <AudioContext.Provider
      value={{ isMuted, toggleMute, pauseForVideo, resumeAfterVideo }}
    >
      <audio ref={audioRef} loop src="/bgm.mp3" />
      {children}
    </AudioContext.Provider>
  );
}

export const useAudio = () => useContext(AudioContext);
