import FormBar from "@/features/place/components/forms/type/FormBar"
import FormMuseum from "@/features/place/components/forms/type/FormMuseum"
import FormPark from "@/features/place/components/forms/type/FormPark"
import FormRestaurant from "@/features/place/components/forms/type/FormRestaurant"

export const PLACES_FORMS = {
  restaurant: FormRestaurant,
  museum: FormMuseum,
  bar: FormBar,
  park: FormPark,
}

export const FORM_INIT_BASE_PLACE = {
  name: "",
  address: "",
  city: "",
  zipCode: 0,
  country: "",
}

export const PLACE_TYPES = ["restaurant", "museum", "bar", "park"]

export const KITCHEN_TYPE = [
  "italian",
  "french",
  "japanese",
  "indian",
  "chinese",
  "mexican",
]

export const ART_MOVEMENT = [
  "impressionism",
  "cubism",
  "surrealism",
  "abstract",
  "renaissance",
]
export const ART_TYPE = ["painting", "sculpture", "drawing"]

export const BAR_TYPE = ["wineBar", "cocktailBar", "pub"]

export const PARK_TYPE = ["floral", "forest", "urban"]

export const PLACE_TYPE_OPTION = [
  { label: "Restaurant", value: "restaurant" },
  { label: "Museum", value: "museum" },
  { label: "Bar", value: "bar" },
  { label: "Park", value: "park" },
]

export const PLACE_AVERAGE_PRICE_OPTION = [
  { label: "Cheap", value: 1 },
  { label: "Affordable", value: 2 },
  { label: "Medium", value: 3 },
  { label: "Expensive", value: 4 },
  { label: "Very Expensive", value: 5 },
]

export const KITCHEN_TYPE_OPTION = [
  { label: "Italian", value: KITCHEN_TYPE[0] },
  { label: "French", value: KITCHEN_TYPE[1] },
  { label: "Japanese", value: KITCHEN_TYPE[2] },
  { label: "Indian", value: KITCHEN_TYPE[3] },
  { label: "Chinese", value: KITCHEN_TYPE[4] },
  { label: "Mexican", value: KITCHEN_TYPE[5] },
]

export const ART_MOVEMENT_OPTION = [
  { label: "Impressionism", value: ART_MOVEMENT[0] },
  { label: "Cubism", value: ART_MOVEMENT[1] },
  { label: "Surrealism", value: ART_MOVEMENT[2] },
  { label: "Abstract", value: ART_MOVEMENT[3] },
  { label: "Renaissance", value: ART_MOVEMENT[4] },
]

export const ART_TYPE_OPTION = [
  { label: "Painting", value: ART_TYPE[0] },
  { label: "Sculpture", value: ART_TYPE[1] },
  { label: "Drawing", value: ART_TYPE[2] },
]

export const BAR_TYPE_OPTION = [
  { label: "Wine Bar", value: BAR_TYPE[0] },
  { label: "Cocktail Bar", value: BAR_TYPE[1] },
  { label: "Pub", value: BAR_TYPE[2] },
]

export const PARK_TYPE_OPTION = [
  { label: "Floral", value: PARK_TYPE[0] },
  { label: "Forest", value: PARK_TYPE[1] },
  { label: "Urban", value: PARK_TYPE[2] },
]
