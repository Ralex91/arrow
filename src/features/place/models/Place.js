import mongoose from "mongoose"
import { PlaceSchema } from "../schemas/Place"

export const PlaceModel =
  mongoose.models.Place || mongoose.model("Place", PlaceSchema)
