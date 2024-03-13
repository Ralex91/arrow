import { deletePlace, getPlace, updatePlace } from "@/db/crud"
import dbConnect from "@/libs/dbConnect"
import { placeSchema } from "@/validators"
import * as yup from "yup"

const handle = async (req, res) => {
  await dbConnect()

  const { placeId } = req.query

  if (req.method === "GET") {
    const place = await getPlace(placeId)

    if (!place) {
      res.status(404).send({ error: "Not found" })

      return
    }

    res.send(place)

    return
  }

  if (req.method === "PATCH") {
    try {
      const rawData = req.body

      if (!rawData.type) {
        res.status(400).send({ error: "Place type is required" })

        return
      }

      const updateSchema = placeSchema.pick(Object.keys(rawData)).strict()
      const data = await updateSchema.validate(rawData)
      const updatedPlace = await updatePlace(placeId, data)

      if (!updatedPlace) {
        res.status(404).send({ error: "Not found" })

        return
      }

      res.send(updatedPlace)

      return
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        res.status(400).send({ error: error.errors })

        return
      }

      console.error(error)
      res.status(400).send({ error: "Bad request" })
    }
  }

  if (req.method === "DELETE") {
    const placeToBeDelete = await deletePlace(placeId)

    if (!placeToBeDelete) {
      res.status(404).send({ error: "Not found" })

      return
    }

    res.send(placeToBeDelete)

    return
  }

  res.status(404).send({ error: "Not found" })
}

export default handle
