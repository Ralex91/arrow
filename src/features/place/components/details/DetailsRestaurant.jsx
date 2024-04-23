import {
  KITCHEN_TYPE_OPTION,
  PLACE_AVERAGE_PRICE_OPTION,
} from "@/features/place/utils/constants"
import { InfoCircledIcon } from "@radix-ui/react-icons"

const DetailsRestaurant = ({ place }) => {
  const { kitchenType, starCount, averagePrice } = place.restaurant

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl flex gap-2 items-center">
        <InfoCircledIcon className="w-8 h-auto" /> Restaurant Details
      </h2>

      <div>
        <p>Kitchen Type</p>
        <p>
          {KITCHEN_TYPE_OPTION.find((opt) => opt.value === kitchenType).label}
        </p>
      </div>

      <div>
        <p>Rate</p>
        <p>{starCount}/5</p>
      </div>

      <div>
        <p>Average Price</p>
        <p>
          {
            PLACE_AVERAGE_PRICE_OPTION.find((opt) => opt.value === averagePrice)
              .label
          }
        </p>
      </div>
    </div>
  )
}

export default DetailsRestaurant
