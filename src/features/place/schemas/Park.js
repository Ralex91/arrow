import { PARK_TYPE } from "@/features/place/utils/constants"
import { Schema } from "mongoose"
import * as yup from "yup"

export const ParkSchema = new Schema({
  parkType: {
    type: String,
    enum: PARK_TYPE,
  },
  public: {
    type: Boolean,
  },
  averagePrice: {
    type: Number,
    min: 1,
    max: 5,
  },
  isFree: {
    type: Boolean,
  },
  price: {
    type: Number,
  },
})

export const parkSchema = yup
  .object({
    parkType: yup.string().oneOf(PARK_TYPE).required("Park type is required"),
    public: yup.boolean().required(),
    price: yup
      .number()
      .min(0, "Price must be at least 0")
      .required("Price is required"),
    averagePrice: yup
      .number()
      .min(1, "Average price must be at least 1")
      .max(5, "Average price must be at most 5")
      .integer()
      .when("price", {
        is: true,
        then: (schema) => schema.required("Average price is required"),
        otherwise: (schema) => schema.notRequired(),
      }),
  })
  .noUnknown(true)