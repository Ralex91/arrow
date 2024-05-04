import FieldListBox from "@/components/forms/FieldListBox"
import {
  KITCHEN_TYPE_OPTION,
  PLACE_AVERAGE_PRICE_OPTION,
  PLACE_STAR_RATE,
} from "@/features/place/utils/constants"

const FormRestaurant = () => (
  <>
    <FieldListBox
      name="kitchenType"
      subName="details"
      label="Kitchen Type"
      options={KITCHEN_TYPE_OPTION}
      empty={true}
    />
    <FieldListBox
      name="starCount"
      subName="details"
      label="Stars Rate"
      options={PLACE_STAR_RATE}
      empty={true}
    />
    <FieldListBox
      name="averagePrice"
      subName="details"
      label="Average price"
      options={PLACE_AVERAGE_PRICE_OPTION}
      empty={true}
    />
  </>
)

export default FormRestaurant
