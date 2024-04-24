import {
  BAR_TYPE_OPTION,
  PLACE_AVERAGE_PRICE_OPTION,
} from "@/features/place/utils/constants"
import { InfoCircledIcon } from "@radix-ui/react-icons"

const DetailsBar = ({ place }) => {
  const { barType, averagePrice } = place.details

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl flex gap-2 items-center">
        <InfoCircledIcon className="w-8 h-auto" /> Bar Details
      </h2>

      <div>
        <p>Bar Type</p>
        <p>{BAR_TYPE_OPTION.find((opt) => opt.value === barType).label}</p>
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

export default DetailsBar
