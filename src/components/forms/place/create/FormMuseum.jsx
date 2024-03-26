import Button from "@/components/Button"
import ListBox from "@/components/ListBox"
import Toggle from "@/components/Toggle"
import {
  ART_MOUEVEMENT_OPTION,
  ART_TYPE_OPTION,
  FORM_INIT_BASE_PLACE,
  PLACE_AVERAGE_PRICE_OPTION,
  PLACE_TYPE,
} from "@/constants"
import { placeSchema } from "@/validators"
import { PlusIcon } from "@radix-ui/react-icons"
import { Form, Formik } from "formik"
import FieldInput from "../../FieldInput"
import FormPlaceBase from "./FormBase"

const initialValues = {
  ...FORM_INIT_BASE_PLACE,
  type: PLACE_TYPE.museum,
  artMovement: ART_MOUEVEMENT_OPTION[0].value,
  artType: ART_TYPE_OPTION[0].value,
  isFree: true,
  price: 0,
}
const FormMuseum = ({ onSubmit }) => (
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
          options={ART_MOUEVEMENT_OPTION}
          value={values.artMovement}
          onChange={(newValue) => setFieldValue("artMovement", newValue.value)}
        />

        <ListBox
          label="Type d'art"
          options={ART_TYPE_OPTION}
          value={values.artType}
          onChange={(newValue) => setFieldValue("artType", newValue.value)}
        />

        <div className="flex gap-2 items-center">
          <Toggle
            enabled={values.isFree}
            onChange={(newValue) => setFieldValue("isFree", newValue)}
          />
          <p>Gratuit</p>
        </div>
        {!values.isFree && (
          <>
            <FieldInput
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

export default FormMuseum
