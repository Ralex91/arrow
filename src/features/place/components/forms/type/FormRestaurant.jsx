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
      subName="details"
      label="Kitchen Type"
      options={KITCHEN_TYPE_OPTION}
    />
    <FieldInput
      label="Stars Rate"
      type="number"
      name="starCount"
      subName="details"
      min={1}
      max={5}
    />
    <FieldListBox
      name="averagePrice"
      subName="details"
      label="Average price"
      options={PLACE_AVERAGE_PRICE_OPTION}
    />
  </>
)

export default FormRestaurant
