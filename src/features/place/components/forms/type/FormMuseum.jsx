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
  const [isFree, setIsFree] = useState(false)

  useEffect(() => {
    setFieldValue("museum.price", isFree ? 0 : values.museum?.price || null)
    setFieldValue(
      "museum.averagePrice",
      isFree ? null : values.museum?.averagePrice,
    )
  }, [values.museum, isFree, setFieldValue])

  return (
    <>
      <FieldListBox
        name="artMovement"
        subName="museum"
        label="Art mouvement"
        options={ART_MOVEMENT_OPTION}
      />

      <FieldListBox
        name="artType"
        subName="museum"
        label="Art type"
        options={ART_TYPE_OPTION}
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
              name="museum.price"
              min={1}
            />
          )}
          <FieldListBox
            name="averagePrice"
            subName="museum"
            label="Average price"
            options={PLACE_AVERAGE_PRICE_OPTION}
          />
        </>
      )}
    </>
  )
}

export default FormMuseum
