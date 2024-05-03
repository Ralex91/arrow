import { deletePlace, getPlace, updatePlace } from "@/data/place"
import { placeSchema } from "@/features/place/schemas/Place"
import dbConnect from "@/libs/dbConnect"
import { isValidObjectId } from "mongoose"
import * as yup from "yup"

const handle = async (req, res) => {
  await dbConnect()

  const { placeId } = req.query
  const isValidId = isValidObjectId(placeId)

  if (!isValidId) {
    res.status(400).send({ error: "Invalid place id" })

    return
  }

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
      const updateData = await placeSchema.validate(rawData)
      const place = await getPlace(placeId)

      if (!place) {
        res.status(404).send({ error: "Not found" })

        return
      }

      const updatedPlace = await updatePlace(placeId, updateData)

      res.send(updatedPlace)

      return
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        res.status(400).send({ error: error.errors })

        return
      }

      console.error(error)
      res.status(500).send({ error: "Server Error" })
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
