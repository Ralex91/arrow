import Toggle from "@/components/Toggle"
import FieldInput from "@/components/forms/FieldInput"
import FieldListBox from "@/components/forms/FieldListBox"
import {
  ART_MOVEMENT_OPTION,
  ART_TYPE_OPTION,
  PLACE_AVERAGE_PRICE_OPTION,
} from "@/features/place/utils/constants"
import { useFormikContext } from "formik"
import { useEffect, useState } from "react"

const FormMuseum = ({ enablePrice = true }) => {
  const { values, setFieldValue } = useFormikContext()
  const [isFree, setIsFree] = useState(values.details?.price === 0)

  useEffect(() => {
    setFieldValue("details.price", isFree ? 0 : values.details?.price || null)
    setFieldValue(
      "details.averagePrice",
      isFree ? null : values.details?.averagePrice,
    )
  }, [values.details, isFree, setFieldValue])

  return (
    <>
      <FieldListBox
        name="artMovement"
        subName="details"
        label="Art mouvement"
        options={ART_MOVEMENT_OPTION}
        empty={true}
      />

      <FieldListBox
        name="artType"
        subName="details"
        label="Art type"
        options={ART_TYPE_OPTION}
        empty={true}
      />

      <div className="flex gap-2 items-center">
        <Toggle enabled={isFree} onChange={setIsFree} />
        <p>Free</p>
      </div>
      {!isFree && (
        <>
          {enablePrice && (
            <FieldInput
              label="Price"
              type="number"
              name="price"
              subName="details"
            />
          )}
          <FieldListBox
            name="averagePrice"
            subName="details"
            label="Average price"
            options={PLACE_AVERAGE_PRICE_OPTION}
            empty={true}
          />
        </>
      )}
    </>
  )
}

export default FormMuseum
