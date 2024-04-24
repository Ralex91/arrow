import Card from "@/components/Card"
import FormEdit from "@/features/place/components/forms/FormEdit"
import axios from "axios"
import { useRouter } from "next/navigation"

export const getServerSideProps = async ({ query: { placeId } }) => {
  const { data: place } = await axios(
    `http://localhost:3000/api/place/${placeId}`,
  )

  return { props: { place } }
}
const Edit = ({ place }) => {
  const { _id: placeId } = place
  const router = useRouter()
  const handleSubmit = async (data) => {
    console.log(data)
    await axios.patch(`http://localhost:3000/api/place/${placeId}`, data)
    router.push(`/place/${placeId}`)
  }

  return (
    <main className="mx-auto">
      <h2 className="text-3xl font-bold mb-4">Edit place</h2>
      <Card className="flex flex-col p-2 gap-2">
        <FormEdit onSubmit={handleSubmit} defaultValues={place} />
      </Card>
    </main>
  )
}

export default Edit
