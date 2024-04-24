import Button from "@/components/Button"
import FieldListBox from "@/components/forms/FieldListBox"

import { MagnifyingGlassIcon } from "@radix-ui/react-icons"

import FieldInput from "@/components/forms/FieldInput"
import {
  PLACES_FORMS,
  PLACE_TYPE_OPTION,
} from "@/features/place/utils/constants"
import { Form, Formik } from "formik"
import { createElement } from "react"

const FormSearch = ({ onSubmit }) => (
  <Formik
    initialValues={{
      type: null,
    }}
    onSubmit={onSubmit}
  >
    {({ values }) => (
      <Form className="flex flex-col gap-1">
        <FieldInput type="text" name="name" label="Name" />
        <FieldInput type="text" name="city" label="City" />
        <div className="flex flex-col flex-1 gap-4">
          <FieldListBox
            label="Place type"
            name="type"
            empty={true}
            options={PLACE_TYPE_OPTION}
          />

          {PLACES_FORMS[values.type] &&
            createElement(PLACES_FORMS[values.type], {
              enablePrice: false,
            })}

          <div className="flex justify-end mt-4">
            <Button className="w-auto" type="submit">
              <MagnifyingGlassIcon /> <p>Search</p>
            </Button>
          </div>
        </div>
      </Form>
    )}
  </Formik>
)

export default FormSearch
