import React from 'react'
import Map from "./page/4 - Map/Index";
import Separator from "./components/Separator";
import CharacterPage from "./page/3 - Characters/Index";
import Alcove from "./page/2 - Alcove/Index";
import Relics from "./page/5 - Relics/Index";

const SecondPage = () => {
  return (
    <>
      <Alcove />
      <Separator />

      <CharacterPage />
      <Separator />

      <Relics />
      <Separator />

      <Map />
      <Separator />
    </>
  )
}

export default SecondPage