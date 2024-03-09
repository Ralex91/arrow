"use client"

import { useRef, useState } from "react"

const Dropdown = ({ options, label, onChange }) => {
  const dropDownRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [state, setState] = useState({ selected: null, options })
  const handleSelect = (option) => () => {
    setState((prevState) => ({ ...prevState, selected: option }))
    setIsOpen(false)
    onChange(option.value)
  }

  return (
    <div>
      {label && <p className="text-sm text-gray-600 ml-1 mb-2">{label}</p>}
      <div className="relative">
        <button
          className="rounded-md border border-gray-200 bg-white w-full p-2 text-left"
          onClick={() => setIsOpen(!isOpen)}
        >
          {state.selected ? state.selected.label : "Select an option"}
        </button>
        {isOpen && (
          <div
            ref={dropDownRef}
            className="bg-white absolute rounded-md border border-gray-200 w-full mt-1 max-h-32 overflow-y-auto ga"
          >
            {state.options.map((option) => (
              <button
                key={option.value}
                onClick={handleSelect(option)}
                className="w-full text-left p-2 hover:bg-gray-300"
                title={option.label}
              >
                <span className="line-clamp-1">{option.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Dropdown
