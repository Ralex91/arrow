import Button from "@/components/Button"
import FieldListBox from "@/components/forms/FieldListBox"
import FormPlace from "@/features/place/components/forms/FormPlace"

import { placeSchema } from "@/features/place/schemas/Place"
import { Pencil1Icon } from "@radix-ui/react-icons"

import {
  PLACES_FORMS,
  PLACE_TYPE_OPTION,
} from "@/features/place/utils/constants"
import { Form, Formik } from "formik"
import { createElement } from "react"

const FormEdit = ({ onSubmit, defaultValues }) => (
  <Formik
    initialValues={defaultValues}
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
            label="Place type"
            name="type"
            empty={false}
            options={PLACE_TYPE_OPTION}
            onChange={(_, oldOption) => setFieldValue(oldOption, undefined)}
          />

          {PLACES_FORMS[values.type] &&
            createElement(PLACES_FORMS[values.type], { hasDefaultValue: true })}

          <div className="flex justify-end mt-4">
            <Button className="w-auto" type="submit">
              <Pencil1Icon /> <p>Edit place</p>
            </Button>
          </div>
        </div>
      </Form>
    )}
  </Formik>
)

export default FormEdit
