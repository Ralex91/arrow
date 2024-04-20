import FieldInput from "@/components/forms/FieldInput"
import FieldListBox from "@/components/forms/FieldListBox"
import {
  KITCHEN_TYPE_OPTION,
  PLACE_AVERAGE_PRICE_OPTION,
} from "@/utils/constants"

const FormRestaurant = () => (
  <>
    <FieldListBox
      name="kitchenType"
      subName="restaurant"
      label="Type de cuisine"
      options={KITCHEN_TYPE_OPTION}
    />
    <FieldInput
      label="Nombre d'étoiles"
      type="number"
      name="restaurant.starCount"
      placeholder="Nombre d'étoiles"
      min={1}
      max={5}
    />
    <FieldListBox
      name="averagePrice"
      subName="restaurant"
      label="Prix moyen"
      options={PLACE_AVERAGE_PRICE_OPTION}
    />
  </>
)

export default FormRestaurant
