import { PLACE_TYPE, PLACE_TYPES } from "@/features/place/utils/constants"
import { PLACES_SCHEMAS } from "@/features/place/utils/schemas"
import { Schema } from "mongoose"
import * as yup from "yup"
import { BarSchema } from "./Bar"
import { MuseumSchema } from "./Museum"
import { ParkSchema } from "./Park"
import { RestaurantSchema } from "./Restaurant"

export const PlaceSchema = new Schema({
  type: { type: String, enum: PLACE_TYPE, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true },
  restaurant: {
    type: RestaurantSchema,
    required() {
      return this.type === "restaurant"
    },
  },
  museum: {
    type: MuseumSchema,
    required() {
      return this.type === "museum"
    },
  },
  bar: {
    type: BarSchema,
    required() {
      return this.type === "bar"
    },
  },
  park: {
    type: ParkSchema,
  },
})

export const placeSchema = yup.lazy((values) =>
  yup.object({
    type: yup.string().oneOf(PLACE_TYPES).required(),
    name: yup.string().required("The name is required"),
    address: yup.string().required("The address is required"),
    city: yup.string().required("The city is required"),
    zipCode: yup
      .number()
      .test(
        "maxDigits",
        "Zip code field must have exactly 5 digits",
        (number) => String(number).length > 5,
      )
      .required("The zip code is required"),
    country: yup.string().required("The country is required"),
    [values.type]: PLACES_SCHEMAS[values.type],
  }),
)

export const placeSchemaSearch = yup.lazy((values) =>
  yup
    .object({
      type: yup.string().oneOf(PLACE_TYPES).nullable(),
      name: yup.string().transform((_, value) => value || null),
      city: yup.string().nullable(),
      ...(PLACES_SCHEMAS[values.type] && {
        [values.type]: PLACES_SCHEMAS[values.type].partial().noUnknown(true),
      }),
    })
    .noUnknown(true),
)
