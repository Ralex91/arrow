import * as yup from "yup"
import {
  ART_MOUEVEMENT,
  ART_TYPE,
  BAR_TYPE,
  KITCHEN_TYPE,
  PARK_TYPE,
  PLACE_TYPE,
} from "./constants"

const typeFields = {
  [PLACE_TYPE.restaurant]: ["kitchenType", "starCount", "averagePrice"],
  [PLACE_TYPE.museum]: ["artMovement", "artType", "isFree", "price"],
  [PLACE_TYPE.bar]: ["barType", "averagePrice"],
  [PLACE_TYPE.park]: ["parkType", "public", "isFree", "price"],
}
const checkPlaceType = (value, schema) => {
  const {
    parent: { type: placeType },
    path,
  } = schema

  if (!value) {
    return true
  }

  const placeTypeFields = typeFields[placeType]

  if (!placeTypeFields) {
    return false
  }

  return Boolean(placeTypeFields.includes(path))
}

export const placeSchema = yup
  .object({
    name: yup.string().required("The name is required"),
    address: yup.string().required("The address is required"),
    city: yup.string().required("The city is required"),
    zipCode: yup.number().required("The zip code is required"),
    country: yup.string().required("The country is required"),
    type: yup.string().required(),
    kitchenType: yup
      .string()
      .oneOf(KITCHEN_TYPE)
      .when("type", {
        is: PLACE_TYPE.restaurant,
        then: (schema) => schema.required("The kitchen type is required"),
        otherwise: (schema) => schema.notRequired(),
      })
      .test(
        "kitchenType",
        "kitchenType can only be assigned to the restaurant type",
        checkPlaceType,
      ),
    starCount: yup
      .number()
      .min(1, "The number of stars cannot be less than 1")
      .max(5, "The number of stars cannot exceed 5")
      .integer()
      .when("type", {
        is: PLACE_TYPE.restaurant,
        then: (schema) => schema.required("The rating is required"),
        otherwise: (schema) => schema.notRequired(),
      }),
    averagePrice: yup
      .number()
      .min(1)
      .max(5)
      .integer()
      .when("type", {
        is: (type) => [PLACE_TYPE.restaurant, PLACE_TYPE.bar].includes(type),
        then: (schema) => schema.required("The average price is required"),
        otherwise: (schema) => schema.notRequired(),
      }),
    artMovement: yup
      .string()
      .oneOf(ART_MOUEVEMENT)
      .when("type", {
        is: PLACE_TYPE.museum,
        then: (schema) => schema.required("The art movement is required"),
        otherwise: (schema) => schema.notRequired(),
      })
      .test(
        "artMovement",
        "artMovement can only be assigned to the museum type",
        checkPlaceType,
      ),
    artType: yup
      .string()
      .oneOf(ART_TYPE)
      .when("type", {
        is: PLACE_TYPE.museum,
        then: (schema) => schema.required("The art type is required"),
        otherwise: (schema) => schema.notRequired(),
      })
      .test(
        "artType",
        "artType can only be assigned to the museum type",
        checkPlaceType,
      ),
    barType: yup
      .string()
      .oneOf(BAR_TYPE)
      .when("type", {
        is: PLACE_TYPE.bar,
        then: (schema) => schema.required("The bar type is required"),
        otherwise: (schema) => schema.notRequired(),
      })
      .test(
        "barType",
        "barType can only be assigned to the bar type",
        checkPlaceType,
      ),
    parkType: yup
      .string()
      .oneOf(PARK_TYPE)
      .when("type", {
        is: PLACE_TYPE.park,
        then: (schema) => schema.required("The park type is required"),
        otherwise: (schema) => schema.notRequired(),
      })
      .test(
        "parkType",
        "parkType can only be assigned to the park type",
        checkPlaceType,
      ),
    public: yup.boolean().when("type", {
      is: PLACE_TYPE.park,
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    }),
    isFree: yup.boolean().when("type", {
      is: (type) => [PLACE_TYPE.museum, PLACE_TYPE.park].includes(type),
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    }),
    price: yup.number().when(["type", "isFree"], {
      is: (type, isFree) =>
        [PLACE_TYPE.museum, PLACE_TYPE.park].includes(type) && !isFree,
      then: (schema) =>
        schema
          .required("The pricing is required")
          .min(1, "The price must be greater than 0")
          .max(5, "The price must be less than 5"),
      otherwise: (schema) => schema.notRequired(),
    }),
  })
  .noUnknown(true)

export const placeSchemaParmasApi = yup
  .object({
    name: yup.string(),
    address: yup.string(),
    city: yup.string(),
    zipCode: yup.number(),
    country: yup.string(),
    type: yup.string(),
    kitchenType: yup.string().oneOf(KITCHEN_TYPE),
    starCount: yup
      .number()
      .min(1, "The number of stars cannot be less than 1")
      .max(5, "The number of stars cannot exceed 5")
      .integer(),
    averagePrice: yup.number().min(1).max(5).integer(),
    artMovement: yup.string().oneOf(ART_MOUEVEMENT),
    artType: yup.string().oneOf(ART_TYPE),
    barType: yup.string().oneOf(BAR_TYPE),
    parkType: yup.string().oneOf(PARK_TYPE),
    public: yup.boolean(),
    isFree: yup.boolean(),
    price: yup.number(),
  })
  .noUnknown(true)
