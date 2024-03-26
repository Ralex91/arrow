import { Switch } from "@headlessui/react"

const Toggle = ({ name, enabled, onChange }) => (
  <Switch
    name={name}
    checked={enabled}
    onChange={onChange}
    className={`${enabled ? "bg-red-600" : "bg-gray-300 dark:bg-slate-900"}
        relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
  >
    <span
      aria-hidden="true"
      className={`${enabled ? "translate-x-5" : "translate-x-0"}
          pointer-events-none inline-block h-5 aspect-square transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
    />
  </Switch>
)

export default Toggle
