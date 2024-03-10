export const PLACE_TYPE = {
  restaurant: "restaurant",
  museum: "museum",
  bar: "bar",
  park: "park",
}

export const KITCHEN_TYPE = [
  "italian",
  "french",
  "japanese",
  "indian",
  "chinese",
  "mexican",
]

export const ART_MOUEVEMENT = [
  "impressionism",
  "cubism",
  "surrealism",
  "abstract",
  "renaissance",
]
export const ART_TYPE = ["painting", "sculpture", "drawing"]

export const BAR_TYPE = ["wineBar", "cocktailBar", "pub"]

export const PARK_TYPE = ["floral", "forest", "urban"]

export const FORM_INIT_BASE_PLACE = {
  name: "",
  address: "",
  city: "",
  zipCode: "",
  country: "",
}

export const PLACE_TYPE_OPTION = [
  { label: "Restaurant", value: "restaurant" },
  { label: "Musé", value: "museum" },
  { label: "Bar", value: "bar" },
  { label: "Park", value: "park" },
]

export const PLACE_AVERAGE_PRICE_OPTION = [
  { label: "Pas cher", value: 1 },
  { label: "Abordable", value: 2 },
  { label: "Moyen", value: 3 },
  { label: "Coûteux", value: 4 },
  { label: "Très cher", value: 5 },
]

export const KITCHEN_TYPE_OPTION = [
  { label: "Italien", value: KITCHEN_TYPE[0] },
  { label: "Français", value: KITCHEN_TYPE[1] },
  { label: "Japonais", value: KITCHEN_TYPE[2] },
  { label: "Indien", value: KITCHEN_TYPE[3] },
  { label: "Chinois", value: KITCHEN_TYPE[4] },
  { label: "Mexicain", value: KITCHEN_TYPE[5] },
]

export const ART_MOUEVEMENT_OPTION = [
  { label: "Impressionnisme", value: ART_MOUEVEMENT[0] },
  { label: "Cubisme", value: ART_MOUEVEMENT[1] },
  { label: "Surréalisme", value: ART_MOUEVEMENT[2] },
  { label: "Abstrait", value: ART_MOUEVEMENT[3] },
  { label: "Renaissance", value: ART_MOUEVEMENT[4] },
]

export const ART_TYPE_OPTION = [
  { label: "Peinture", value: ART_TYPE[0] },
  { label: "Sculpture", value: ART_TYPE[1] },
  { label: "Dessin", value: ART_TYPE[2] },
]

export const BAR_TYPE_OPTION = [
  { label: "Bar a vin", value: BAR_TYPE[0] },
  { label: "Bar a cocktail", value: BAR_TYPE[1] },
  { label: "Pub", value: BAR_TYPE[3] },
]

export const PARK_TYPE_OPTION = [
  { label: "Floral", value: PARK_TYPE[0] },
  { label: "Foret", value: PARK_TYPE[1] },
  { label: "Urbain", value: PARK_TYPE[2] },
]
