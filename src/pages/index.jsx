import Card from "@/components/Card"
import PlaceCard from "@/features/place/components/PlaceCard"
import FormSearch from "@/features/place/components/forms/FormSearch"
import axios from "axios"
import { useState } from "react"

export const getServerSideProps = async () => {
  const { data: placesInit } = await axios.get(
    "http://localhost:3000/api/place",
  )

  return { props: { placesInit } }
}
const Home = ({ placesInit }) => {
  const [places, setPlaces] = useState(placesInit)
  const updatePlaceFilter = async (filter) => {
    const { data: filtredPlaces } = await axios.post(
      "/api/place/search",
      filter,
    )

    setPlaces(filtredPlaces)
  }

  return (
    <main>
      <div className="flex gap-2 flex-col md:flex-row items-start relative">
        <Card className="p-2 w-full md:w-80 md:sticky top-20">
          <h2 className="text-xl font-bold">Place filter</h2>

          <div className="mt-2 flex flex-col justify-stretch gap-2">
            <FormSearch onSubmit={updatePlaceFilter} />
          </div>
        </Card>

        <div className="w-full md:flex-1">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            Results of your search
            <span className="text-sm font-normal p-1 rounded-md bg-red-600 text-white">
              {places.length} results
            </span>
          </h2>
          <div className="grid grid-cols-1 gap-2 justify-start lg:grid-cols-2">
            {places &&
              places?.map((place, key) => <PlaceCard key={key} data={place} />)}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
