import { createTodo, getPlaces } from "@/db/crud"
import { validatorPlace } from "@/validators"
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
      const data = await validatorPlace(rawData)
      const newPlace = await createTodo(data)

      res.send(newPlace)

      return
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        res.status(400).send({ error: error.errors })
      }

      throw error
    }
  }

  res.status(404).send({ error: "Not found" })
}

export default handle
