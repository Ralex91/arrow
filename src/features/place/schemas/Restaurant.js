import { KITCHEN_TYPE } from "@/features/place/utils/constants"
import * as yup from "yup"

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
