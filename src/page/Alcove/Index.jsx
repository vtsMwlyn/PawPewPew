import Map from "./Map";
import Separator from "../../components/Separator";
import CharacterPage from "./Characters";
import Alcove from "./Alcove";
import Relics from "./RelicsPage";

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