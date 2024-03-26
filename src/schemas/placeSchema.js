import { PLACE_TYPE } from "@/constants"
import { Schema } from "mongoose"

export const placeSchema = new Schema(
  {
    type: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, required: true },
    kitchenType: {
      type: String,
      required() {
        return this.type === PLACE_TYPE.restaurant
      },
    },
    averagePrice: {
      type: Number,
      min: 1,
      max: 5,
      required() {
        return (
          this.type === PLACE_TYPE.restaurant || this.type === PLACE_TYPE.bar
        )
      },
    },
    starCount: {
      type: Number,
      min: 1,
      max: 5,
      required() {
        return this.type === PLACE_TYPE.restaurant
      },
    },
    artType: {
      type: String,
      required() {
        return this.type === PLACE_TYPE.museum
      },
    },
    artMovement: {
      type: String,
      required() {
        return this.type === PLACE_TYPE.museum
      },
    },
    isFree: {
      type: Boolean,
      required() {
        return this.type === PLACE_TYPE.museum || this.type === PLACE_TYPE.park
      },
    },
    price: {
      type: Number,
      required() {
        return this.isFree
      },
    },
    barType: {
      type: String,
      required() {
        return this.type === PLACE_TYPE.bar
      },
    },
    parkType: {
      type: String,
      required() {
        return this.type === PLACE_TYPE.park
      },
    },
    public: {
      type: Boolean,
      required() {
        return this.type === PLACE_TYPE.park
      },
    },
  },
  { strict: "throw" },
)
