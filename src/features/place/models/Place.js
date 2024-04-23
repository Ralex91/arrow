import { PlaceSchema } from "@/features/place/schemas/Place"
import mongoose from "mongoose"

export const PlaceModel =
  mongoose.models.Place || mongoose.model("Place", PlaceSchema)
