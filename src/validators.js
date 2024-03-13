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
  [PLACE_TYPE.museum]: ["artMovement", "artType", "freeAccess", "price"],
  [PLACE_TYPE.bar]: ["barType", "averagePrice"],
  [PLACE_TYPE.park]: ["parkType", "public", "freeAccess", "price"],
}
const checkPlaceType = (value, schema) => {
  const {
    parent: { type: placeType },
    path,
  } = schema

  if (!value) {
    return true
  }

  return Boolean(typeFields[placeType].includes(path))
}

export const placeSchema = yup.object().shape({
  name: yup.string().required("Le nom est obligatoire"),
  address: yup.string().required("L'adresse est obligatoire"),
  city: yup.string().required("La ville est obligatoire"),
  zipCode: yup.number().required("Le code postal est obligatoire"),
  country: yup.string().required("Le pays est obligatoire"),
  type: yup.string().required(),
  kitchenType: yup
    .string()
    .oneOf(KITCHEN_TYPE)
    .when("type", {
      is: PLACE_TYPE.restaurant,
      then: (schema) => schema.required("Le type de cuisine est obligatoire"),
      otherwise: (schema) => schema.notRequired(),
    })
    .test(
      "kitchenType",
      "kitchenType can only be assigned to the museum type",
      checkPlaceType,
    ),
  starCount: yup
    .number()
    .min(1, "Le nombre de étoiles doit pas être inférieur à 1")
    .max(5, "Le nombre de étoiles doit pas dépasser 5")
    .integer()
    .when("type", {
      is: PLACE_TYPE.restaurant,
      then: (schema) => schema.required("La note est obligatoire"),
      otherwise: (schema) => schema.notRequired(),
    }),
  averagePrice: yup
    .number()
    .min(1)
    .max(5)
    .integer()
    .when("type", {
      is: (type) => [PLACE_TYPE.restaurant, PLACE_TYPE.bar].includes(type),
      then: (schema) => schema.required("La moyenne des prix est obligatoire"),
      otherwise: (schema) => schema.notRequired(),
    }),
  artMovement: yup
    .string()
    .oneOf(ART_MOUEVEMENT)
    .when("type", {
      is: PLACE_TYPE.museum,
      then: (schema) => schema.required("L'art movement est obligatoire"),
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
      then: (schema) => schema.required("L'art type est obligatoire"),
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
      then: (schema) => schema.required("Le type de bar est obligatoire"),
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
      then: (schema) => schema.required("Le type de parc est obligatoire"),
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
  freeAccess: yup.boolean().when("type", {
    is: (type) => [PLACE_TYPE.museum, PLACE_TYPE.park].includes(type),
    then: (schema) => schema.required(),
    otherwise: (schema) => schema.notRequired(),
  }),
  price: yup.number().when(["type", "freeAccess"], {
    is: (type, freeAccess) =>
      [PLACE_TYPE.museum, PLACE_TYPE.park].includes(type) && !freeAccess,
    then: (schema) =>
      schema
        .required("La tarification est obligatoire")
        .min(0)
        .min(1, "Le prix doit être supérieur à 0")
        .max(5, "Le prix doit être inférieur à 5"),
    otherwise: (schema) => schema.notRequired(),
  }),
})
