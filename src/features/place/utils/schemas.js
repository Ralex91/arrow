import { barSchema } from "@/features/place/schemas/Bar"
import {
  museumSchema,
  museumSearchSchema,
} from "@/features/place/schemas/Museum"
import { parkSchema, parkSearchSchema } from "@/features/place/schemas/Park"
import { restaurantSchema } from "@/features/place/schemas/Restaurant"

export const PLACES_SCHEMAS = {
  restaurant: restaurantSchema,
  museum: museumSchema,
  bar: barSchema,
  park: parkSchema,
}

export const PLACES_SEARCH_SCHEMAS = {
  ...PLACES_SCHEMAS,
  museum: museumSearchSchema,
  park: parkSearchSchema,
}
