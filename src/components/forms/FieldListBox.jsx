import ListBox from "@/components/ListBox"
import { ErrorMessage, useFormikContext } from "formik"

const FieldListBox = ({ name, subName, label, options, empty }) => {
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
        onChange={(option) => setFieldValue(nameString, option.value)}
      />

      <ErrorMessage component="p" className="text-red-600" name={nameString} />
    </div>
  )
}

export default FieldListBox
