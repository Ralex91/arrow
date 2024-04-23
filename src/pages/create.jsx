import Card from "@/components/Card"
import FormCreate from "@/features/place/components/forms/FormCreate"
import axios from "axios"
import { useRouter } from "next/navigation"

const Create = () => {
  const router = useRouter()
  const handleSubmit = async (data) => {
    await axios.post("http://localhost:3000/api/place", data)
    router.push("/")
  }

  return (
    <main className="mx-auto">
      <h2 className="text-3xl font-bold mb-4">Add place</h2>
      <Card className="flex flex-col p-2 gap-2">
        <FormCreate onSubmit={handleSubmit} />
      </Card>
    </main>
  )
}

export default Create
