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
import axios from "axios"
import { useEffect, useState } from "react"

const HAS_FREE_ACCESS = [PLACE_TYPE.museum, PLACE_TYPE.park]
const Home = () => {
  const [places, setPlaces] = useState([])
  const [filter, setFilter] = useState({
    generic: {
      name: null,
      city: null,
    },
    place: {
      type: PLACE_TYPE_OPTION[0].value,
    },
  })
  const updatePlaceFilter = (key, value) => {
    const newFilter = {
      ...filter,
      place:
        key === "type"
          ? { type: value }
          : { ...filter.place, [key]: value, type: filter.place.type },
    }

    setFilter(newFilter)
  }
  const fetchPlaces = (placeFilter) =>
    axios
      .get("/api/place", {
        params: placeFilter
          ? {
              ...placeFilter.generic,
              ...placeFilter.place,
            }
          : null,
      })
      .then(({ data }) => setPlaces(data))

  useEffect(() => {
    fetchPlaces()
  }, [])

  useEffect(() => {
    fetchPlaces(filter)
  }, [filter])

  return (
    <main>
      <div className="flex gap-2 flex-col md:flex-row items-start relative">
        <Card className="p-2 w-full md:w-80 md:sticky top-20">
          <h2 className="text-xl font-bold">Affiner votre recherche</h2>

          <div className="mt-2 flex flex-col justify-stretch gap-2">
            <Input
              label="Nom du lieu"
              value={filter.generic.name}
              onChange={(e) =>
                setFilter({
                  ...filter,
                  generic: { ...filter.generic, name: e.target.value },
                })
              }
            />
            <Input
              label="Ville"
              value={filter.generic.city}
              onChange={(e) =>
                setFilter({
                  ...filter,
                  generic: { ...filter.generic, city: e.target.value },
                })
              }
            />
            <ListBox
              label="Type de lieu"
              options={PLACE_TYPE_OPTION}
              onChange={(type) => updatePlaceFilter("type", type.value)}
              value={filter.place.type}
            />

            {filter.place.type === PLACE_TYPE.restaurant && (
              <>
                <Input
                  label="Nombre d'étoiles"
                  min="1"
                  max="5"
                  type="number"
                  value={filter.place?.starCount || 0}
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
                  value={filter.place?.kitchenType}
                />
              </>
            )}

            {filter.place.type === PLACE_TYPE.museum && (
              <>
                <ListBox
                  label="Mouvement artistique"
                  options={ART_MOUEVEMENT_OPTION}
                  value={filter.place?.artMovement}
                  onChange={(artMovement) =>
                    updatePlaceFilter("artMovement", artMovement.value)
                  }
                />
                <ListBox
                  label="Mouvement artistique"
                  options={ART_TYPE_OPTION}
                  value={filter.place?.artType}
                  onChange={(artType) =>
                    updatePlaceFilter("artType", artType.value)
                  }
                />
              </>
            )}

            {filter.place.type === PLACE_TYPE.bar && (
              <>
                <ListBox
                  label="Type de bar"
                  options={BAR_TYPE_OPTION}
                  value={filter.place?.barType}
                  onChange={(barType) =>
                    updatePlaceFilter("barType", barType.value)
                  }
                />
              </>
            )}

            {filter.place.type === PLACE_TYPE.park && (
              <>
                <ListBox
                  label="Type de parc"
                  options={PARK_TYPE_OPTION}
                  value={filter.place?.parkType}
                  onChange={(parkType) =>
                    updatePlaceFilter("parkType", parkType.value)
                  }
                />

                <div className="flex items-center gap-4">
                  <Toggle
                    enabled={filter.place?.public}
                    onChange={(enable) => updatePlaceFilter("public", enable)}
                  />
                  <p>Public</p>
                </div>
              </>
            )}

            {HAS_FREE_ACCESS.includes(filter.place.type) && (
              <div className="flex items-center gap-4">
                <Toggle
                  enabled={filter.place?.isFree}
                  onChange={(enable) => updatePlaceFilter("isFree", enable)}
                />
                <p>Gratuit</p>
              </div>
            )}

            {!filter[filter.place.type]?.isFree && (
              <ListBox
                label="Prix moyen"
                options={PLACE_AVERAGE_PRICE_OPTION}
                value={filter.place?.averagePrice}
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
              {places.length} résultats
            </span>
          </h2>
          <div className="grid grid-cols-1 gap-2 justify-start lg:grid-cols-2">
            {places.map((place, key) => (
              <Place key={key} data={place} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
