import { useLanguage } from "../../context/LanguageContext";
import Section from "../../components/Section";

export default function Index() {
  const { t } = useLanguage();
  const alcove = t.alcove;
  return (
    <Section>
      <div className="w-full min-h-screen flex flex-col items-center py-40">
        <div className="w-full h-full flex flex-col justify-between">
          <div className='w-full flex flex-col items-center gap-5 px-5 2xl:px-0'>
            <h3 className="text-xl lg:text-2xl 2xl:text-3xl text-white poppins-medium text-shadow-[-2px_3px_0px_#0F1B24]">
              {alcove.welcome}
            </h3>
            <h1 className="text-4xl lg:text-5xl 2xl:text-7xl text-white uppercase text-center text-shadow-[-4px_4px_0px_#0F1B24]">
              {alcove.title}
            </h1>
            <p className="text-white poppins-medium text-lg lg:text-xl 2xl:text-2xl w-full lg:w-4xl text-center text-shadow-[-2px_3px_0px_#0F1B24]">
              {alcove.subtitle}
            </p>
          </div>
          {/* <div className='flex flex-col times-center gap-5'>
          <p className="text-white poppins-medium text-sm lg:text-xl w-full lg:w-4xl text-center text-shadow-[-2px_3px_0px_#0F1B24]">
            {alcove.desk1}
          </p>
          <p className="text-white poppins-medium text-sm lg:text-xl w-full lg:w-4xl text-center text-shadow-[-2px_3px_0px_#0F1B24]">
            {alcove.desk2}
          </p>
        </div> */}
        </div>
      </div>

      <img
        src="/bg-world-map2.webp"
        className="absolute top-0 h-screen w-full object-cover o r -z-5"
      />
    </Section>
  )
}
