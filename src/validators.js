import * as yup from "yup"
import {
  ART_MOUEVEMENT,
  ART_TYPE,
  BAR_TYPE,
  KITCHEN_TYPE,
  PARK_TYPE,
  PLACE_TYPE,
} from "./constants"

export const basePlaceSchema = {
  name: yup.string().required(),
  address: yup.string().required(),
  city: yup.string().required(),
  zipCode: yup.number().required(),
  country: yup.string().required(),
}

export const priceSchema = yup.number().when("freeAccess", {
  is: true,
  then: (schema) => schema.notRequired(),
  otherwise: (schema) => schema.required().min(1).max(5),
})

export const restaurantSchema = yup.object().shape({
  ...basePlaceSchema,
  type: yup.string().required().oneOf([PLACE_TYPE.restaurant]),
  kitchenType: yup.string().required().oneOf(KITCHEN_TYPE),
  starCount: yup.number().required().min(1).max(5).integer(),
  averagePrice: yup.number().required().min(1).max(5).integer(),
})

export const museumSchema = yup.object().shape({
  ...basePlaceSchema,
  type: yup.string().required().oneOf([PLACE_TYPE.museum]),
  artMovement: yup.string().required().oneOf(ART_MOUEVEMENT),
  artType: yup.string().required().oneOf(ART_TYPE),
  freeAccess: yup.boolean(),
  price: priceSchema,
})

export const barSchema = yup.object().shape({
  ...basePlaceSchema,
  type: yup.string().required().oneOf([PLACE_TYPE.bar]),
  barType: yup.string().required().oneOf(BAR_TYPE),
  averagePrice: yup.number().required().min(1).max(5).integer(),
})

export const parkSchema = yup.object().shape({
  ...basePlaceSchema,
  type: yup.string().required().oneOf([PLACE_TYPE.park]),
  parkType: yup.string().required().oneOf(PARK_TYPE),
  public: yup.boolean(),
  freeAccess: yup.boolean(),
  price: priceSchema,
})

export const placeSchemas = {
  [PLACE_TYPE.restaurant]: restaurantSchema,
  [PLACE_TYPE.museum]: museumSchema,
  [PLACE_TYPE.bar]: barSchema,
  [PLACE_TYPE.park]: parkSchema,
}

export const getPlaceSchema = async (data) => {
  if (Object.hasOwn(placeSchemas, data.type)) {
    const validatedData = await placeSchemas[data.type].validate(data, {
      abortEarly: false,
      stripUnknown: true,
    })

    return validatedData
  }

  throw new Error("Invalid place type")
}
