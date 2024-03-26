import { ErrorMessage, Field } from "formik"
import Input from "../Input"

const FieldInput = ({ name, label, ...otherProps }) => (
  <div className="flex-1">
    <Field name={name}>
      {({ field, form: { isSubmitting } }) => (
        <Input
          {...field}
          disabled={isSubmitting}
          label={label}
          {...otherProps}
        />
      )}
    </Field>
    <ErrorMessage component="p" className="text-red-600" name={name} />
  </div>
)

export default FieldInput
