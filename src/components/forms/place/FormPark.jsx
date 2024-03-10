import Button from "@/components/Button"
import ListBox from "@/components/ListBox"
import Toggle from "@/components/Toggle"
import { FORM_INIT_BASE_PLACE, PARK_TYPE_OPTION, PLACE_TYPE } from "@/constants"
import { parkSchema } from "@/validators"
import { PlusIcon } from "@radix-ui/react-icons"
import { Form, Formik } from "formik"
import FormikInput from "../FormikInput"
import FormPlaceBase from "./FormBase"

const initialValues = {
  ...FORM_INIT_BASE_PLACE,
  type: PLACE_TYPE.park,
  parkType: PARK_TYPE_OPTION[0].value,
  public: true,
  freeAccess: true,
  price: 0,
}
const FormPark = () => {
  const handleSubmit = (place, { resetForm }) => {
    console.log(place)
    resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={parkSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className="flex flex-col gap-2">
          <FormPlaceBase />

          <ListBox
            label="Mouvement artistique"
            options={PARK_TYPE_OPTION}
            value={values.parkType}
            onChange={(newValue) => setFieldValue("parkType", newValue.value)}
          />

          <div className="flex gap-2 items-center">
            <Toggle
              enabled={values.public}
              onChange={(newValue) => setFieldValue("public", newValue)}
            />
            <p>Public</p>
          </div>

          <div className="flex gap-2 items-center">
            <Toggle
              enabled={values.freeAccess}
              onChange={(newValue) => setFieldValue("freeAccess", newValue)}
            />
            <p>Gratuit</p>
          </div>

          {!values.freeAccess && (
            <FormikInput
              label="Prix"
              type="text"
              name="price"
              placeholder="Prix"
            />
          )}

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

export default FormPark
