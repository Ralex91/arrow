import prisma from "@/db/prisma.js"

export const addPlace = async (data) => {
  const createdPlace = await prisma.place.create({
    data,
  })

  return createdPlace
}

export const getPlaces = async () => await prisma.place.findMany()

export const getPlace = async (placeId) =>
  await prisma.place.findUnique({
    where: { id: placeId },
  })

export const updatePlace = async (todoId, data) => {
  const newPlace = await prisma.place.update({
    where: { id: todoId },
    data,
  })

  return newPlace
}
export const deletePlace = async (todoId) => {
  const place = await prisma.place.delete({
    where: { id: todoId },
  })

  if (!place) {
    return null
  }

  return place
}
