import Button from "@/components/Button"
import FieldListBox from "@/components/forms/FieldListBox"
import FormPlace from "@/features/place/components/forms/FormPlace"

import { placeSchema } from "@/features/place/schemas/Place"
import { FORM_INIT_BASE_PLACE, PLACE_TYPE_OPTION } from "@/utils/constants"
import { PlusIcon } from "@radix-ui/react-icons"

import { Form, Formik } from "formik"
import { createElement } from "react"
import { PLACES_FORMS } from "../../utils/constants"

function FormCreate({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        ...FORM_INIT_BASE_PLACE,
        type: PLACE_TYPE_OPTION[0].value,
      }}
      validationSchema={placeSchema}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col flex-1 gap-4">
            <FormPlace />
          </div>
          <div className="flex flex-col flex-1 gap-4">
            <FieldListBox
              label="Type de lieux"
              name="type"
              empty={false}
              options={PLACE_TYPE_OPTION}
              onChange={(_, oldOption) => setFieldValue(oldOption, undefined)}
            />

            {PLACES_FORMS[values.type] &&
              createElement(PLACES_FORMS[values.type])}

            <div className="flex justify-end mt-4">
              <Button className="w-auto" type="submit">
                <PlusIcon /> <p>Ajouter le lieux</p>
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FormCreate
