import FieldInput from "@/components/forms/FieldInput"

const FormPlace = () => (
  <>
    <FieldInput type="text" name="name" label="Name" />
    <FieldInput type="text" name="address" label="Address" />
    <FieldInput type="text" name="city" label="City" />
    <div className="flex gap-2 w-full">
      <FieldInput
        className="flex-1"
        type="number"
        name="zipCode"
        label="Zip code"
      />
      <FieldInput
        className="flex-1"
        type="text"
        name="country"
        label="Contry"
      />
    </div>
  </>
)

export default FormPlace
