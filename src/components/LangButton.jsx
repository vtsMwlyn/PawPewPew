import Button from "./Button";
import { useLanguage } from "../context/LanguageContext";

export default function LangButton() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <div className="fixed bottom-20 left-2 z-100 w-20! h-20! flex justify-center items-center">
      <Button
        selected={true}
        frameType="short"
        frameClassName="h-3"
        type="button"
        title={lang === "en" ? "Switch to Chinese" : "Switch to English"}
        onClick={() => toggleLanguage()}
      >
        <div className="flex items-center justify-center gap-1.5 cursor-pointer">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg> */}
          <span className="text-base font-bold tracking-wider select-none">
            {lang === "en" ? "EN" : "CN"}
          </span>
        </div>
      </Button>
    </div>
  );
}
