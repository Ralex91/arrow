import Input from "@/components/Input"
import { ErrorMessage, useFormikContext } from "formik"

const FieldInput = ({ name, label, className, ...otherProps }) => {
  const { values, handleChange } = useFormikContext()

  return (
    <div className={className}>
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
