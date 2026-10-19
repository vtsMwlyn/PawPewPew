import Button from "./Button";
import { useLanguage } from "../context/LanguageContext";
import { Globe } from "lucide-react";


export default function LangButton() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <div className="fixed bottom-1 right-2 z-100 w-20! h-20! flex justify-center items-center">
      <Button
        selected={true}
        frameType="short"
        frameClassName="h-3"
        type="button"
        title={lang === "en" ? "Switch to Chinese" : "Switch to English"}
        onClick={() => toggleLanguage()}
      >
        <div className="flex items-center justify-center gap-1.5 cursor-pointer">
          <Globe strokeWidth={2.5} />
          <span className="text-base poppins-bold font-bold tracking-wider select-none">
            {lang === "en" ? "EN" : "CN"}
          </span>
        </div>
      </Button>
    </div>
  );
}
