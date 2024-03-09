import * as yup from "yup"
import {
  PLACE_TYPE,
  artMovementOptions,
  artTypeOptions,
  barTypeOptions,
  kitchenTypeOptions,
  parkTypeOptions,
} from "./constants"

const basePlaceSchema = {
  name: yup.string().min(10).required(),
  city: yup.string().required(),
  zipCode: yup.string().required(),
  country: yup.string().required(),
}
const restaurantSchema = yup.object().shape({
  ...basePlaceSchema,
  type: yup.string().required().oneOf([PLACE_TYPE.restaurant]),
  kitchenType: yup.string().required().oneOf(kitchenTypeOptions),
  starCount: yup.number().required().min(1).max(3).integer(),
  averagePrice: yup.number().required().min(1).max(5).integer(),
})
const museumSchema = yup.object().shape({
  ...basePlaceSchema,
  type: yup.string().required().oneOf([PLACE_TYPE.museum]),
  artMovement: yup.string().required().oneOf(artMovementOptions),
  artType: yup.string().required().oneOf(artTypeOptions),
  freeAccess: yup.boolean(),
  price: yup.number().when("freeAccess", {
    is: true,
    then: yup.number().notRequired(),
    otherwise: yup.number().required().min(1).max(5),
  }),
})
const barSchema = yup.object().shape({
  ...basePlaceSchema,
  type: yup.string().required().oneOf([PLACE_TYPE.bar]),
  barType: yup.string().required().oneOf(barTypeOptions),
  averagePrice: yup.number().required().min(1).max(5).integer(),
})
const parkSchema = yup.object().shape({
  ...basePlaceSchema,
  type: yup.string().required().oneOf([PLACE_TYPE.park]),
  parkType: yup.string().required().oneOf(parkTypeOptions),
  public: yup.boolean(),
  freeAccess: yup.boolean(),
  price: yup.number().when("freeAccess", {
    is: true,
    then: yup.number().notRequired(),
    otherwise: yup.number().required().min(1).max(5),
  }),
})

export const getPlaceSchema = (placeType) => {
  console.log(placeType)
  let specificPlaceSchema = null

  switch (placeType) {
    case PLACE_TYPE.restaurant:
      specificPlaceSchema = restaurantSchema

      break

    case PLACE_TYPE.museum:
      specificPlaceSchema = museumSchema

      break

    case PLACE_TYPE.bar:
      specificPlaceSchema = barSchema

      break

    case PLACE_TYPE.park:
      specificPlaceSchema = parkSchema

      break

    default:
      throw new Error("Invalid place type")
  }

  return specificPlaceSchema
}

export const validatorPlace = async (data) => {
  let validatedData = null

  switch (data.type) {
    case PLACE_TYPE.restaurant:
      validatedData = await restaurantSchema.validate(data, {
        abortEarly: false,
      })

      break

    case PLACE_TYPE.museum:
      validatedData = await museumSchema.validate(data, { abortEarly: false })

      break

    case PLACE_TYPE.bar:
      validatedData = await barSchema.validate(data, { abortEarly: false })

      break

    case PLACE_TYPE.park:
      validatedData = await parkSchema.validate(data, { abortEarly: false })

      break

    default:
      throw new Error("Invalid place type")
  }

  return validatedData
}

export { barSchema, museumSchema, parkSchema, restaurantSchema }
