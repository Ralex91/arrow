import clsx from "clsx"

const Card = ({ className, children, ...otherProps }) => (
  <div
    {...otherProps}
    className={clsx(
      "rounded-md shadow-md border border-gray-200 bg-white",
      className,
    )}
  >
    {children}
  </div>
)

export default Card
