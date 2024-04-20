import { ErrorMessage, useFormikContext } from "formik"
import ListBox from "../ListBox"

const FieldListBox = ({ name, subName, label, options, empty, onChange }) => {
  const { setFieldValue, values } = useFormikContext()
  const nameString = subName ? [subName, name].join(".") : name
  const nameValue = values[subName] ? values[subName][name] : values[name]

  return (
    <div>
      {label && (
        <p className="text-sm text-gray-600 ml-1 mb-2 dark:text-white">
          {label}
        </p>
      )}

      <ListBox
        options={options}
        value={nameValue}
        empty={empty}
        onChange={(option) => {
          const oldValue = nameValue
          setFieldValue(nameString, option.value)

          if (onChange) {
            onChange(option.value, oldValue)
          }
        }}
      />

      <ErrorMessage component="p" className="text-red-600" name={nameString} />
    </div>
  )
}

export default FieldListBox
