import clsx from "clsx"

const Card = ({ className, children, ...otherProps }) => (
  <div
    {...otherProps}
    className={clsx(
      "rounded-md shadow-md border border-gray-200 bg-white dark:bg-slate-800 dark:border-slate-700",
      className,
    )}
  >
    {children}
  </div>
)

export default Card
