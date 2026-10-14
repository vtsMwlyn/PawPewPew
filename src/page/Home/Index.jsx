import Separator from "../../components/Separator";
import Hero from "./Hero";
import WorldMeadow from "./Introduction";
import CTAPage from "./CTA";
import SeeItInAction from "./Gallery";
import CardButton from "./OtherPage";

const SecondPage = () => {
  return (
    <>
      <Hero />
      <Separator />

      <WorldMeadow />
      <Separator />

      <CardButton />
      <Separator />

      <SeeItInAction />
      <Separator />

      <CTAPage />
    </>
  )
}

export default SecondPage