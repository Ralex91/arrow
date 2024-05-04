import {
  ART_MOVEMENT_OPTION,
  ART_TYPE_OPTION,
  PLACE_AVERAGE_PRICE_OPTION,
} from "@/features/place/utils/constants"
import { InfoCircledIcon } from "@radix-ui/react-icons"

const DetailsMuseum = ({ place }) => {
  const { artType, artMovement, averagePrice, price } = place.details

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl flex gap-2 items-center">
        <InfoCircledIcon className="w-8 h-auto" /> Museum Details
      </h2>

      <div>
        <p>Art Type</p>
        <p>{ART_TYPE_OPTION.find((opt) => opt.value === artType).label}</p>
      </div>

      <div>
        <p>Art Mouvement</p>
        <p>
          {ART_MOVEMENT_OPTION.find((opt) => opt.value === artMovement).label}
        </p>
      </div>

      {Boolean(price) && (
        <div>
          <p>Average Price</p>
          <p>
            {
              PLACE_AVERAGE_PRICE_OPTION.find(
                (opt) => opt.value === averagePrice,
              ).label
            }
          </p>
        </div>
      )}
      <div>
        <p>Price</p>
        <p>{price || "Free"}</p>
      </div>
    </div>
  )
}

export default DetailsMuseum
