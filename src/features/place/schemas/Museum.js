import { ART_MOVEMENT, ART_TYPE } from "@/features/place/utils/constants"
import * as yup from "yup"

export const museumSchema = yup
  .object({
    artType: yup.string().oneOf(ART_TYPE).required("Art type is required"),
    artMovement: yup
      .string()
      .oneOf(ART_MOVEMENT)
      .required("Art movement is required"),
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
