import FieldInput from "../../../../components/forms/FieldInput"

const FormPlace = () => (
  <>
    <FieldInput type="text" name="name" label="Nom" />
    <FieldInput type="text" name="address" label="Adresse" />
    <FieldInput type="text" name="city" label="Ville" />
    <div className="flex gap-2">
      <FieldInput type="number" name="zipCode" label="Code postal" />
      <FieldInput type="text" name="country" label="Pays" />
    </div>
  </>
)

export default FormPlace
