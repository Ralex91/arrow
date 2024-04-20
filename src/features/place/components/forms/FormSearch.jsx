import Button from "@/components/Button"
import FieldListBox from "@/components/forms/FieldListBox"

import { PLACE_TYPE_OPTION } from "@/utils/constants"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"

import FieldInput from "@/components/forms/FieldInput"
import { Form, Formik } from "formik"
import { createElement } from "react"
import { PLACES_FORMS } from "../../utils/constants"

function FormSearch({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        type: null,
      }}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className="flex flex-col gap-1">
          <FieldInput type="text" name="name" label="Nom" />
          <FieldInput type="text" name="city" label="Ville" />
          <div className="flex flex-col flex-1 gap-4">
            <FieldListBox
              label="Type de lieux"
              name="type"
              empty={true}
              options={PLACE_TYPE_OPTION}
              onChange={(_, oldOption) => setFieldValue(oldOption, undefined)}
            />

            {PLACES_FORMS[values.type] &&
              createElement(PLACES_FORMS[values.type], { enablePrice: false })}

            <div className="flex justify-end mt-4">
              <Button className="w-auto" type="submit">
                <MagnifyingGlassIcon /> <p>Chercher</p>
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FormSearch
