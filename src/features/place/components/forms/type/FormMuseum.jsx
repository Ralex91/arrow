import Toggle from "@/components/Toggle"
import FieldInput from "@/components/forms/FieldInput"
import FieldListBox from "@/components/forms/FieldListBox"
import {
  ART_MOUEVEMENT_OPTION,
  ART_TYPE_OPTION,
  PLACE_AVERAGE_PRICE_OPTION,
} from "@/utils/constants"
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
        label="Mouvement artistique"
        options={ART_MOUEVEMENT_OPTION}
      />

      <FieldListBox
        name="artType"
        subName="museum"
        label="Type d'art"
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
              label="Prix"
              type="number"
              name="museum.price"
              placeholder="Prix"
              min={1}
            />
          )}
          <FieldListBox
            name="averagePrice"
            subName="museum"
            label="Prix moyen"
            options={PLACE_AVERAGE_PRICE_OPTION}
          />
        </>
      )}
    </>
  )
}

export default FormMuseum
