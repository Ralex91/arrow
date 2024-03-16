import { addPlace, getPlaces } from "@/db/crud"
import dbConnect from "@/libs/dbConnect"
import { placeSchema } from "@/validators"
import * as yup from "yup"

const handle = async (req, res) => {
  try {
    await dbConnect()

    if (req.method === "GET") {
      let places = null
      const rawQuery = req.query

      if (rawQuery.type) {
        const updateSchema = placeSchema.pick(Object.keys(rawQuery)).strict()
        const query = await updateSchema.validate(rawQuery)
        places = await getPlaces(query)

        res.send(places)

        return
      }

      places = await getPlaces()

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
    res.status(400).send({ error: "Bad request" })
  }
}

export default handle
