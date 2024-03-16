import { PlaceModel } from "./models/PlaceModel"

export const addPlace = async (data) => {
  const newPlace = new PlaceModel(data)
  await newPlace.save()

  return newPlace
}

export const getPlaces = async (query) => await PlaceModel.find(query)

export const getPlace = async (placeId) => await PlaceModel.findById(placeId)

export const updatePlace = async (placeId, data) => {
  const place = await PlaceModel.findById(placeId).lean()

  Object.assign(place, data)

  const updatedPlace = new PlaceModel(place)
  await updatedPlace.save()

  return updatedPlace
}
export const deletePlace = async (placeID) => {
  const place = await PlaceModel.findOneAndDelete({ _id: placeID })

  if (!place) {
    return null
  }

  return place
}
