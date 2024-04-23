import { barSchema } from "@/features/place/schemas/Bar"
import { museumSchema } from "@/features/place/schemas/Museum"
import { parkSchema } from "@/features/place/schemas/Park"
import { restaurantSchema } from "@/features/place/schemas/Restaurant"

export const PLACES_SCHEMAS = {
  restaurant: restaurantSchema,
  museum: museumSchema,
  bar: barSchema,
  park: parkSchema,
}
