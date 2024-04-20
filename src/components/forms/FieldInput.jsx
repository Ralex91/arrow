import { ErrorMessage, useFormikContext } from "formik"
import Input from "../Input"

const FieldInput = ({ name, label, ...otherProps }) => {
  const { values, handleChange } = useFormikContext()

  return (
    <div>
      {label && (
        <p className="text-sm text-gray-600 ml-1 mb-2 dark:text-white">
          {label}
        </p>
      )}

      <Input
        label={label}
        name={name}
        value={values[name]}
        onChange={handleChange}
        {...otherProps}
      />

      <ErrorMessage component="p" className="text-red-600" name={name} />
    </div>
  )
}

export default FieldInput
