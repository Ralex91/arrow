import clsx from "clsx"

const Input = ({ className, type, ...otherProps }) => (
  <input
    {...otherProps}
    type={type}
    className={clsx(
      "p-2 rounded-md outline-none focus:border-red-600 border border-gray-200 dark:border-slate-700 dark:bg-slate-900 w-full",
      className,
    )}
  />
)

export default Input
