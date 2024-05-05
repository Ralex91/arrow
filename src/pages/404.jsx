import ErrorMessage from "@/components/ErrorMessage"

const error404 = () => (
  <ErrorMessage
    text="Page not found"
    details="The page you are looking for does not exist"
  />
)

export default error404
