import React from 'react'
import Map from "./page/4 - Map/Index";
import Separator from "./components/Separator";
import CharacterPage from "./page/3 - Characters/Index";
import Alcove from "./page/2 - Alcove/Index";

const SecondPage = () => {
  return (
    <>
      <Alcove />
      <Separator />

      <CharacterPage />
      <Separator />

      <Map />
      <Separator />
    </>
  )
}

export default SecondPage