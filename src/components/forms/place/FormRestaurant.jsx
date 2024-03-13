import Button from "@/components/Button"
import ListBox from "@/components/ListBox"
import {
  FORM_INIT_BASE_PLACE,
  KITCHEN_TYPE_OPTION,
  PLACE_AVERAGE_PRICE_OPTION,
  PLACE_TYPE,
} from "@/constants"
import { placeSchema } from "@/validators"
import { PlusIcon } from "@radix-ui/react-icons"
import { Form, Formik } from "formik"
import FormikInput from "../FormikInput"
import FormPlaceBase from "./FormBase"

const initialValues = {
  ...FORM_INIT_BASE_PLACE,
  type: PLACE_TYPE.restaurant,
  averagePrice: 2,
  kitchenType: KITCHEN_TYPE_OPTION[0].value,
  starCount: 0,
}
const FormRestaurant = ({ onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={placeSchema}
    onSubmit={onSubmit}
  >
    {({ values, setFieldValue }) => (
      <Form className="flex flex-col gap-2">
        <FormPlaceBase />
        <ListBox
          label="Type de cuisine"
          options={KITCHEN_TYPE_OPTION}
          value={values.kitchenType}
          onChange={(newValue) => setFieldValue("kitchenType", newValue.value)}
        />
        <FormikInput
          label="Nombre d'étoiles"
          type="number"
          name="starCount"
          placeholder="Nombre d'étoiles"
          min="1"
          max="5"
        />
        <ListBox
          label="Prix moyen"
          options={PLACE_AVERAGE_PRICE_OPTION}
          value={values.averagePrice}
          onChange={(newValue) => setFieldValue("averagePrice", newValue.value)}
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

export default FormRestaurant
