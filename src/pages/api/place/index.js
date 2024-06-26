import { addPlace, getPlaces } from "@/data/place"
import { placeSchema } from "@/features/place/schemas/Place"
import dbConnect from "@/libs/dbConnect"
import * as yup from "yup"

const handle = async (req, res) => {
  try {
    await dbConnect()

    if (req.method === "GET") {
      const places = await getPlaces()

      res.send(places)

      return
    }

    if (req.method === "POST") {
      const rawData = req.body
      const data = await placeSchema.validate(rawData)
      const newPlace = await addPlace(data)

      res.send(newPlace)

      return
    }

    res.status(404).send({ error: "Not found" })
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      res.status(400).send({ error: error.errors })

      return
    }

    console.error(error)
    res.status(500).send({ error: "Server Error" })
  }
}

export default handle
