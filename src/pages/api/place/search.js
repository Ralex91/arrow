import { getPlaces } from "@/data/place"
import { placeSchemaSearch } from "@/features/place/schemas/Place"
import dbConnect from "@/libs/dbConnect"
import { queryNestedObjects } from "@/utils/format"
import cleanDeep from "clean-deep"
import * as yup from "yup"

const handle = async (req, res) => {
  try {
    await dbConnect()

    if (req.method === "POST") {
      const rawData = req.body
      const cleanObject = cleanDeep(rawData)
      const query = await placeSchemaSearch.validate(cleanObject)
      const formatQuery = queryNestedObjects(query)
      const places = await getPlaces(formatQuery)

      res.send(places)

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
