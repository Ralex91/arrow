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
  const [isFree, setIsFree] = useState(values.details?.price === 0)

  useEffect(() => {
    setFieldValue("details.price", isFree ? 0 : values.details?.price || null)
    setFieldValue(
      "details.averagePrice",
      isFree ? null : values.details?.averagePrice,
    )
    setFieldValue("details.public", values.details?.public || false)
  }, [values.details, isFree, setFieldValue])

  return (
    <>
      <FieldListBox
        name="parkType"
        subName="details"
        label="Park type"
        options={PARK_TYPE_OPTION}
        empty={true}
      />

      <div className="flex gap-2 items-center">
        <Toggle
          enabled={values.details?.public}
          onChange={(newValue) => setFieldValue("details.public", newValue)}
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

export default FormPark
