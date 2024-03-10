import Button from "@/components/Button"
import ListBox from "@/components/ListBox"
import {
  BAR_TYPE_OPTION,
  FORM_INIT_BASE_PLACE,
  PLACE_AVERAGE_PRICE_OPTION,
  PLACE_TYPE,
} from "@/constants"
import { barSchema } from "@/validators"
import { PlusIcon } from "@radix-ui/react-icons"
import { Form, Formik } from "formik"
import FormPlaceBase from "./FormBase"

const initialValues = {
  ...FORM_INIT_BASE_PLACE,
  type: PLACE_TYPE.bar,
  barType: BAR_TYPE_OPTION[0].value,
  averagePrice: PLACE_AVERAGE_PRICE_OPTION[0].value,
}
const FormBar = () => {
  const handleSubmit = (place, { resetForm }) => {
    console.log(place)
    resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={barSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className="flex flex-col gap-2">
          <FormPlaceBase />
          <ListBox
            label="Type de bar"
            options={BAR_TYPE_OPTION}
            value={values.barType}
            onChange={(newValue) => setFieldValue("barType", newValue.value)}
          />

          <ListBox
            label="Prix moyen"
            options={PLACE_AVERAGE_PRICE_OPTION}
            value={values.averagePrice}
            onChange={(newValue) =>
              setFieldValue("averagePrice", newValue.value)
            }
          />

          <div className="flex justify-end mt-3">
            <Button className="w-auto" type="submit">
              <PlusIcon /> <p>Ajouter le lieux</p>
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FormBar
