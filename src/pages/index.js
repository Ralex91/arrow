import Card from "@/components/Card"
import Input from "@/components/Input"
import ListBox from "@/components/ListBox"
import Place from "@/components/Place"
import { PLACE_TYPE_OPTION } from "@/constants"
import { useState } from "react"

// eslint-disable-next-line max-lines-per-function
const Home = () => {
  const [placeType, setPlaceType] = useState(PLACE_TYPE_OPTION[0])

  return (
    <main>
      <div className="flex gap-2 flex-col md:flex-row items-start relative">
        <Card className="p-2 w-full md:w-80 md:sticky top-20">
          <h2 className="text-xl font-bold">Affiner votre recherche</h2>

          <div className="mt-2 flex flex-col justify-stretch gap-2">
            <Input label="Recherche un Pays" />
            <Input label="Recherche une ville" />
            <ListBox
              options={PLACE_TYPE_OPTION}
              onChange={setPlaceType}
              selected={placeType}
            />
          </div>
        </Card>

        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">
            Résultats de votre recherche{" "}
            <span className="text-sm font-normal p-1 rounded-md bg-red-600 text-white">
              999 résultats
            </span>
          </h2>
          <div className="grid grid-cols-1 gap-2 justify-start lg:grid-cols-2">
            <Place />
            <Place />
            <Place />
            <Place />
            <Place />
            <Place />
            <Place />
            <Place />
            <Place />
            <Place />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
