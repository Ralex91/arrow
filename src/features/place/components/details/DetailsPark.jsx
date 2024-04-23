import {
  PARK_TYPE_OPTION,
  PLACE_AVERAGE_PRICE_OPTION,
} from "@/features/place/utils/constants"
import { InfoCircledIcon } from "@radix-ui/react-icons"

const DetailsPark = ({ place }) => {
  const { parkType, price, averagePrice, public: isPublic } = place.park

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl flex gap-2 items-center">
        <InfoCircledIcon className="w-8 h-auto" /> Park Details
      </h2>

      <div>
        <p>Park Type</p>
        <p>{PARK_TYPE_OPTION.find((opt) => opt.value === parkType).label}</p>
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
        <p>Public</p>
        <p>{isPublic ? "Yes" : "No"}</p>
      </div>

      <div>
        <p>Price</p>
        <p>{price || "Free"}</p>
      </div>
    </div>
  )
}

export default DetailsPark
