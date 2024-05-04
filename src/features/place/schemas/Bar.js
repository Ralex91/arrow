import { BAR_TYPE } from "@/features/place/utils/constants"
import * as yup from "yup"

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
