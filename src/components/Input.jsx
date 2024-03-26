import clsx from "clsx"

const Input = ({ className, label, ...otherProps }) => (
  <div>
    {label && (
      <p className="text-sm text-gray-600 ml-1 mb-2 dark:text-white">{label}</p>
    )}

    <input
      {...otherProps}
      className={clsx(
        "p-2 rounded-md outline-none focus:border-red-600 border border-gray-200 dark:border-slate-700 dark:bg-slate-900 w-full",
        className,
      )}
    />
  </div>
)

export default Input
