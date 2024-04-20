import FormBar from "../components/forms/type/FormBar"
import FormMuseum from "../components/forms/type/FormMuseum"
import FormPark from "../components/forms/type/FormPark"
import FormRestaurant from "../components/forms/type/FormRestaurant"
import { barSchema } from "../schemas/Bar"
import { museumSchema } from "../schemas/Museum"
import { parkSchema } from "../schemas/Park"
import { restaurantSchema } from "../schemas/Restaurant"

export const PLACES_FORMS = {
  restaurant: FormRestaurant,
  museum: FormMuseum,
  bar: FormBar,
  park: FormPark,
}
export const PLACES_SCHEMAS = {
  restaurant: restaurantSchema,
  museum: museumSchema,
  bar: barSchema,
  park: parkSchema,
}

export const PLACE_INIT_VALUES = {
  restaurant: {},
}
