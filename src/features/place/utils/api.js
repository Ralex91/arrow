import axios from "axios"

export const getAPIPlaces = (filters) =>
  axios.get("/api/place", {
    params: filters
      ? {
          ...filters.generic,
          ...filters.place,
        }
      : null,
  })
