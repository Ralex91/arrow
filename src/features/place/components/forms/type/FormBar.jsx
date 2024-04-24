import FieldListBox from "@/components/forms/FieldListBox"
import {
  BAR_TYPE_OPTION,
  PLACE_AVERAGE_PRICE_OPTION,
} from "@/features/place/utils/constants"

const FormBar = () => (
  <>
    <FieldListBox
      name="barType"
      subName="details"
      label="Bar type"
      options={BAR_TYPE_OPTION}
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

export default FormBar
