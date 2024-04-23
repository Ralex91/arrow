import FieldInput from "@/components/forms/FieldInput"
import FieldListBox from "@/components/forms/FieldListBox"
import {
  KITCHEN_TYPE_OPTION,
  PLACE_AVERAGE_PRICE_OPTION,
} from "@/features/place/utils/constants"

const FormRestaurant = () => (
  <>
    <FieldListBox
      name="kitchenType"
      subName="restaurant"
      label="Kitchen Type"
      options={KITCHEN_TYPE_OPTION}
    />
    <FieldInput
      label="Stars Rate"
      type="number"
      name="restaurant.starCount"
      min={1}
      max={5}
    />
    <FieldListBox
      name="averagePrice"
      subName="restaurant"
      label="Average price"
      options={PLACE_AVERAGE_PRICE_OPTION}
    />
  </>
)

export default FormRestaurant
