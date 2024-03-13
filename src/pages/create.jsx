import Card from "@/components/Card"
import ListBox from "@/components/ListBox"
import FormBar from "@/components/forms/place/FormBar"
import FormMuseum from "@/components/forms/place/FormMuseum"
import FormPark from "@/components/forms/place/FormPark"
import FormRestaurant from "@/components/forms/place/FormRestaurant"
import axios from "axios"
import { useState } from "react"
import { PLACE_TYPE_OPTION } from "../constants"

const Create = () => {
  const [placeType, setPlaceType] = useState(PLACE_TYPE_OPTION[0].value)
  const handleSubmit = async (data) => {
    const res = await axios.post("http://localhost:3000/api/place", data)
    console.log(res)
  }

  return (
    <main className="w-[500px] mx-auto">
      <h2 className="text-3xl font-bold mb-4">Ajouter un lieux</h2>
      <Card className="flex flex-col p-2 gap-2">
        <ListBox
          options={PLACE_TYPE_OPTION}
          value={placeType}
          onChange={(newValue) => setPlaceType(newValue.value)}
        />

        {placeType === "restaurant" && (
          <FormRestaurant onSubmit={handleSubmit} />
        )}
        {placeType === "museum" && <FormMuseum onSubmit={handleSubmit} />}
        {placeType === "bar" && <FormBar onSubmit={handleSubmit} />}
        {placeType === "park" && <FormPark onSubmit={handleSubmit} />}
      </Card>
    </main>
  )
}

export default Create
