import FieldListBox from "@/components/forms/FieldListBox"
import { BAR_TYPE_OPTION, PLACE_AVERAGE_PRICE_OPTION } from "@/utils/constants"

const FormBar = () => (
  <>
    <FieldListBox
      name="barType"
      subName="bar"
      label="Type de bar"
      options={BAR_TYPE_OPTION}
    />

    <FieldListBox
      name="averagePrice"
      subName="bar"
      label="Prix moyen"
      options={PLACE_AVERAGE_PRICE_OPTION}
    />
  </>
)

export default FormBar
