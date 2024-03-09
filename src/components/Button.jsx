import clsx from "clsx"

const Button = ({ className, children, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={clsx(
        "p-2 rounded-md bg-red-600 hover:bg-red-700 flex items-center text-white gap-2",
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
