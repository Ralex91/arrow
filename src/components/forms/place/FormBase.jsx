import FormikInput from "../FormikInput"

const FormPlaceBase = () => (
  <>
    <FormikInput type="text" name="name" label="Nom" />
    <FormikInput type="text" name="address" label="Adresse" />
    <FormikInput type="text" name="city" label="Ville" />
    <div className="flex gap-2">
      <FormikInput type="number" name="zipCode" label="Code postal" />
      <FormikInput type="text" name="country" label="Pays" />
    </div>
  </>
)

export default FormPlaceBase
