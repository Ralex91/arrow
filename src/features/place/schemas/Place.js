import { PLACE_TYPE, PLACE_TYPES } from "@/features/place/utils/constants"
import {
  PLACES_SCHEMAS,
  PLACES_SEARCH_SCHEMAS,
} from "@/features/place/utils/schemas"
import { Schema } from "mongoose"
import * as yup from "yup"

export const PlaceSchema = new Schema({
  type: { type: String, enum: PLACE_TYPE, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true },
  details: {
    type: Schema.Types.Mixed,
    required: true,
    validate: {
      validator: function validator(value) {
        const placeSchema = PLACES_SCHEMAS[this.type]
        placeSchema.validate(value)
      },
      message: "Invalid details schema",
    },
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
        (number) => String(number).length > 4,
      )
      .required("The zip code is required"),
    country: yup.string().required("The country is required"),
    details: PLACES_SCHEMAS[values.type],
  }),
)

export const placeSchemaSearch = yup.lazy((values) =>
  yup
    .object({
      type: yup.string().oneOf(PLACE_TYPES).nullable(),
      name: yup.string().transform((_, value) => value || null),
      city: yup.string().nullable(),
      ...(PLACES_SEARCH_SCHEMAS[values.type] && {
        details: PLACES_SEARCH_SCHEMAS[values.type].partial().noUnknown(true),
      }),
    })
    .noUnknown(true),
)
