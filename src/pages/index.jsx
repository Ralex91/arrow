import Card from "@/components/Card"
import Input from "@/components/Input"
import ListBox from "@/components/ListBox"
import Place from "@/components/Place"
import Toggle from "@/components/Toggle"
import {
  ART_MOUEVEMENT_OPTION,
  ART_TYPE_OPTION,
  BAR_TYPE_OPTION,
  KITCHEN_TYPE_OPTION,
  PARK_TYPE_OPTION,
  PLACE_AVERAGE_PRICE_OPTION,
  PLACE_TYPE,
  PLACE_TYPE_OPTION,
} from "@/constants"
import { useEffect, useState } from "react"

const HAS_FREE_ACCESS = [PLACE_TYPE.museum, PLACE_TYPE.park]
const Home = () => {
  const [placeType, setPlaceType] = useState(PLACE_TYPE_OPTION[0].value)
  const [filter, setFilter] = useState({
    type: PLACE_TYPE_OPTION[0].value,
    restaurant: null,
    museum: null,
    bar: null,
  })
  const updatePlaceFilter = (key, value) =>
    setFilter((prev) =>
      placeType
        ? { ...prev, [placeType]: { ...prev[placeType], [key]: value } }
        : { ...prev, ...value },
    )

  useEffect(() => {
    console.log(filter)
  }, [filter])

  return (
    <main>
      <div className="flex gap-2 flex-col md:flex-row items-start relative">
        <Card className="p-2 w-full md:w-80 md:sticky top-20">
          <h2 className="text-xl font-bold">Affiner votre recherche</h2>

          <div className="mt-2 flex flex-col justify-stretch gap-2">
            <Input label="Nom du lieu" />
            <Input label="Pays" />
            <Input label="Ville" />
            <ListBox
              label="Type de lieu"
              options={PLACE_TYPE_OPTION}
              onChange={(type) => setPlaceType(type.value)}
              value={placeType}
            />

            {placeType === PLACE_TYPE.restaurant && (
              <>
                <Input
                  label="Nombre d'étoiles"
                  min="1"
                  max="5"
                  type="number"
                  value={filter.restaurant?.starCount || 0}
                  onChange={({ target: { value } }) =>
                    updatePlaceFilter("starCount", parseInt(value, 10))
                  }
                />
                <ListBox
                  label="Type de cuisine"
                  options={KITCHEN_TYPE_OPTION}
                  onChange={(kitchenType) =>
                    updatePlaceFilter("kitchenType", kitchenType.value)
                  }
                  value={filter.restaurant?.kitchenType}
                />
              </>
            )}

            {placeType === PLACE_TYPE.museum && (
              <>
                <ListBox
                  label="Mouvement artistique"
                  options={ART_MOUEVEMENT_OPTION}
                  value={filter.museum?.artMovement}
                  onChange={(artMovement) =>
                    updatePlaceFilter("artMovement", artMovement.value)
                  }
                />
                <ListBox
                  label="Mouvement artistique"
                  options={ART_TYPE_OPTION}
                  value={filter.museum?.artType}
                  onChange={(artType) =>
                    updatePlaceFilter("artType", artType.value)
                  }
                />
              </>
            )}

            {placeType === PLACE_TYPE.bar && (
              <>
                <ListBox
                  label="Type de bar"
                  options={BAR_TYPE_OPTION}
                  value={filter.bar?.barType}
                  onChange={(barType) =>
                    updatePlaceFilter("barType", barType.value)
                  }
                />
              </>
            )}

            {placeType === PLACE_TYPE.park && (
              <>
                <ListBox
                  label="Type de parc"
                  options={PARK_TYPE_OPTION}
                  value={filter.park?.parkType}
                  onChange={(parkType) =>
                    updatePlaceFilter("parkType", parkType.value)
                  }
                />

                <div className="flex items-center gap-4">
                  <Toggle
                    enabled={filter[placeType]?.public}
                    onChange={(enable) => updatePlaceFilter("public", enable)}
                  />
                  <p>Public</p>
                </div>
              </>
            )}

            {HAS_FREE_ACCESS.includes(placeType) && (
              <div className="flex items-center gap-4">
                <Toggle
                  enabled={filter[placeType]?.freeAccess}
                  onChange={(enable) => updatePlaceFilter("freeAccess", enable)}
                />
                <p>Gratuit</p>
              </div>
            )}

            {!filter[placeType]?.freeAccess && (
              <ListBox
                label="Prix moyen"
                options={PLACE_AVERAGE_PRICE_OPTION}
                value={filter[placeType]?.averagePrice}
                onChange={(averagePrice) =>
                  updatePlaceFilter("averagePrice", averagePrice.value)
                }
              />
            )}
          </div>
        </Card>

        <div className="w-full md:flex-1">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            Résultats de votre recherche
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
