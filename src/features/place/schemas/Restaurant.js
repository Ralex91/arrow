import { KITCHEN_TYPE } from "@/utils/constants"
import { Schema } from "mongoose"
import * as yup from "yup"

export const RestaurantSchema = new Schema({
  kitchenType: {
    type: String,
    enum: KITCHEN_TYPE,
  },
  averagePrice: {
    type: Number,
    min: 1,
    max: 5,
  },
  starCount: {
    type: Number,
    min: 1,
    max: 5,
  },
})

export const restaurantSchema = yup
  .object({
    kitchenType: yup
      .string()
      .oneOf(KITCHEN_TYPE)
      .required("Kitchen type is required"),
    averagePrice: yup
      .number()
      .min(1, "Average price must be at least 1")
      .max(5, "Average price must be at most 5")
      .integer()
      .required("Average price is required"),
    starCount: yup
      .number()
      .min(1, "Star count must be at least 1")
      .max(5, "Star count must be at most 5")
      .required("Star count is required"),
  })
  .noUnknown(true)
