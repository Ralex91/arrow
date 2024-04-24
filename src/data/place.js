import { PlaceModel } from "@/features/place/models/Place"

export const addPlace = async (data) => {
  const newPlace = new PlaceModel(data)
  await newPlace.save()

  return newPlace
}

export const getPlaces = async (query) => {
  if (query?.name) {
    query.name = new RegExp(query.name, "u")
  }

  if (query?.city) {
    query.city = new RegExp(query.city, "u")
  }

  const places = await PlaceModel.find(query)

  return places
}

export const getPlace = async (placeId) => await PlaceModel.findById(placeId)

export const updatePlace = async (placeId, data) => {
  const place = await PlaceModel.findById(placeId).lean()
  const input = Object.assign(place, data)
  const updatedPlace = await PlaceModel.findByIdAndUpdate(placeId, input, {
    returnDocument: "after",
  })

  return updatedPlace
}
export const deletePlace = async (placeID) => {
  const place = await PlaceModel.findOneAndDelete({ _id: placeID })

  if (!place) {
    return null
  }

  return place
}
