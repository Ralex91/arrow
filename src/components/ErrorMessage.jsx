import { CrossCircledIcon } from "@radix-ui/react-icons"

const ErrorMessage = ({ text, details }) => (
  <div className="text-center flex flex-col items-center h-full">
    <CrossCircledIcon className="w-20 h-auto mb-4 text-red-500" />
    <h1 className="text-3xl font-bold mb-2">{text}</h1>
    <p className="text-xl">{details}</p>
  </div>
)

export default ErrorMessage
