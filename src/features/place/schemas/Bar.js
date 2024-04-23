import { BAR_TYPE } from "@/features/place/utils/constants"
import { Schema } from "mongoose"
import * as yup from "yup"

export const BarSchema = new Schema({
  barType: {
    type: String,
  },
  averagePrice: {
    type: Number,
    min: 1,
    max: 5,
  },
})

export const barSchema = yup
  .object({
    barType: yup.string().oneOf(BAR_TYPE).required("Bar type is required"),
    averagePrice: yup
      .number()
      .min(1, "Average price must be at least 1")
      .max(5, "Average price must be at most 5")
      .integer()
      .required("Average price is required"),
  })
  .noUnknown(true)
