import Button from "@/components/Button"
import ListBox from "@/components/ListBox"
import Toggle from "@/components/Toggle"
import {
  FORM_INIT_BASE_PLACE,
  PARK_TYPE_OPTION,
  PLACE_AVERAGE_PRICE_OPTION,
  PLACE_TYPE,
} from "@/constants"
import { placeSchema } from "@/db/schemas/placeSchema"
import { PlusIcon } from "@radix-ui/react-icons"
import { Form, Formik } from "formik"
import FormikInput from "../FormikInput"
import FormPlaceBase from "./FormBase"

const initialValues = {
  ...FORM_INIT_BASE_PLACE,
  type: PLACE_TYPE.park,
  parkType: PARK_TYPE_OPTION[0].value,
  public: true,
  isFree: true,
  price: 0,
}
const FormPark = ({ onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={placeSchema}
    onSubmit={onSubmit}
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
            enabled={values.isFree}
            onChange={(newValue) => setFieldValue("isFree", newValue)}
          />
          <p>Gratuit</p>
        </div>

        {!values.isFree && (
          <>
            <FormikInput
              label="Prix"
              type="number"
              name="price"
              placeholder="Prix"
            />

            <ListBox
              label="Prix moyen"
              options={PLACE_AVERAGE_PRICE_OPTION}
              value={values.averagePrice}
              onChange={(newValue) =>
                setFieldValue("averagePrice", newValue.value)
              }
            />
          </>
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

export default FormPark
