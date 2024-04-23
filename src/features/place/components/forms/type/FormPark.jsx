import Toggle from "@/components/Toggle"
import FieldInput from "@/components/forms/FieldInput"
import FieldListBox from "@/components/forms/FieldListBox"
import {
  PARK_TYPE_OPTION,
  PLACE_AVERAGE_PRICE_OPTION,
} from "@/features/place/utils/constants"
import { useFormikContext } from "formik"
import { useEffect, useState } from "react"

const FormPark = ({ enablePrice = true }) => {
  const { values, setFieldValue } = useFormikContext()
  const [isFree, setIsFree] = useState(false)

  useEffect(() => {
    setFieldValue("park.price", isFree ? 0 : values.park?.price || null)
    setFieldValue(
      "park.averagePrice",
      isFree ? null : values.park?.averagePrice,
    )
    setFieldValue("park.public", values.park?.public || false)
  }, [values.park, isFree, setFieldValue])

  return (
    <>
      <FieldListBox
        name="parkType"
        subName="park"
        label="Park type"
        options={PARK_TYPE_OPTION}
      />

      <div className="flex gap-2 items-center">
        <Toggle
          enabled={values.park?.public}
          onChange={(newValue) => setFieldValue("park.public", newValue)}
        />
        <p>Public</p>
      </div>

      <div className="flex gap-2 items-center">
        <Toggle enabled={isFree} onChange={setIsFree} />
        <p>Free</p>
      </div>

      {!isFree && (
        <>
          {enablePrice && (
            <FieldInput label="Price" type="number" name="park.price" />
          )}

          <FieldListBox
            name="averagePrice"
            subName="park"
            label="Average price"
            options={PLACE_AVERAGE_PRICE_OPTION}
          />
        </>
      )}
    </>
  )
}

export default FormPark