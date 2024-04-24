import Input from "@/components/Input"
import { ErrorMessage, useFormikContext } from "formik"

const FieldInput = ({ name, subName, label, className, ...otherProps }) => {
  const { values, handleChange } = useFormikContext()
  const nameString = subName ? [subName, name].join(".") : name
  const nameValue = values[subName] ? values[subName][name] : values[name]

  return (
    <div className={className}>
      {label && (
        <p className="text-sm text-gray-600 ml-1 mb-2 dark:text-white">
          {label}
        </p>
      )}

      <Input
        label={label}
        name={nameString}
        value={nameValue || null}
        onChange={handleChange}
        {...otherProps}
      />

      <ErrorMessage component="p" className="text-red-600" name={name} />
    </div>
  )
}

export default FieldInput
