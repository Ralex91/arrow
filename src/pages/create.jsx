import Button from "@/components/Button"
import Card from "@/components/Card"
import Dropdown from "@/components/Dropdown"
import Input from "@/components/Input"
import { getPlaceSchema } from "@/validators"
import { PlusIcon } from "@radix-ui/react-icons"
import { ErrorMessage, Form, Formik } from "formik"
import * as yup from "yup"
import { PLACE_TYPE_OPTION } from "../constants"

const Create = () => {
  const handleSubmit = (place, { resetForm }) => {
    console.log(place)
    resetForm()
  }
  const validationSchema = yup.lazy((values) => getPlaceSchema(values.type))

  return (
    <main>
      <h2 className="text-3xl font-bold mb-4">Ajouter un lieux</h2>
      <Card className="flex flex-col p-2 gap-2 max-w-6xl">
        <Formik
          validationSchema={validationSchema}
          initialValues={{}}
          onSubmit={() => handleSubmit}
        >
          <Form>
            <Dropdown
              options={PLACE_TYPE_OPTION}
              label="Type de lieu"
              onChange={(v) => console.log(v)}
              name="type"
            />
            <Input name="name" label="Nom du lieu" />
            <ErrorMessage
              component="p"
              className="text-sm text-red-500"
              name="name"
            />

            <Input label="Adresse" />
            <Input label="Ville" />
            <Input label="Code postal" />
            <Input label="Pay" />
            <div className="flex justify-end mt-3">
              <button type="submit">Test</button>
              <Button className="w-auto" type="submit">
                <PlusIcon /> <p>Ajouter le lieux</p>
              </Button>
            </div>
          </Form>
        </Formik>
      </Card>
    </main>
  )
}

export default Create
