import FieldListBox from "@/components/forms/FieldListBox"
import {
  BAR_TYPE_OPTION,
  PLACE_AVERAGE_PRICE_OPTION,
} from "@/features/place/utils/constants"

const FormBar = () => (
  <>
    <FieldListBox
      name="barType"
      subName="bar"
      label="Bar type"
      options={BAR_TYPE_OPTION}
    />

    <FieldListBox
      name="averagePrice"
      subName="bar"
      label="Average price"
      options={PLACE_AVERAGE_PRICE_OPTION}
    />
  </>
)

export default FormBar
