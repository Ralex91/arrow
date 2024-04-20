import Card from "@/components/Card"
import FormCreate from "@/features/place/components/forms/FormCreate"
import axios from "axios"

const Create = () => {
  const handleSubmit = async (data) => {
    const res = await axios.post("http://localhost:3000/api/place", data)
    console.log(res)
  }

  return (
    <main className="mx-auto">
      <h2 className="text-3xl font-bold mb-4">Ajouter un lieux</h2>
      <Card className="flex flex-col p-2 gap-2">
        <FormCreate onSubmit={handleSubmit} />
      </Card>
    </main>
  )
}

export default Create
