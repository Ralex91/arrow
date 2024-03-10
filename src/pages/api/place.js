import { addPlace, getPlaces } from "@/db/crud"
import { getPlaceSchema } from "@/validators"
import * as yup from "yup"

const handle = async (req, res) => {
  if (req.method === "GET") {
    const places = await getPlaces()

    res.send(places)

    return
  }

  if (req.method === "POST") {
    try {
      const rawData = req.body
      const data = await getPlaceSchema(rawData)
      const newPlace = await addPlace(data)

      res.send(newPlace)

      return
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        res.status(400).send({ error: error.errors })

        return
      }

      res.status(400).send({ error: "Bad request" })
    }
  }

  res.status(404).send({ error: "Not found" })
}

export default handle
