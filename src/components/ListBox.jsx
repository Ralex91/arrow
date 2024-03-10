"use client"

import { Listbox } from "@headlessui/react"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import clsx from "clsx"

const ListBox = ({
  options,
  selected,
  value,
  label,
  onChange,
  ...otherProps
}) => {
  let selectedItem = null

  if (value) {
    selectedItem = options.find((o) => o.value === value)
  } else if (selected) {
    selectedItem = selected
  }

  return (
    <div>
      {label && <p className="text-sm text-gray-600 ml-1 mb-2">{label}</p>}

      <Listbox value={selectedItem} onChange={onChange} {...otherProps}>
        <div className="relative">
          <Listbox.Button className="p-2 rounded-md outline-none active:border-red-600 border border-gray-200 w-full text-left flex justify-between items-center">
            {selectedItem?.label ?? "Selectioner un options"}
            <ChevronDownIcon />
          </Listbox.Button>
          <Listbox.Options className="absolute bg-white z-20 w-full rounded-md border border-gray-200 max-h-52 overflow-y-auto">
            {options.map((option) => (
              <Listbox.Option
                className={({ active }) =>
                  clsx("p-2 cursor-pointer", {
                    " bg-gray-200": active,
                  })
                }
                key={option.value}
                value={option}
                disabled={option.unavailable}
              >
                {option.label}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  )
}
export default ListBox
