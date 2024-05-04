import Button from "@/components/Button"
import ErrorMessage from "@/components/ErrorMessage"
import DeleteConfirm from "@/components/modals/DeleteConfirm"
import DetailsBar from "@/features/place/components/details/DetailsBar"
import DetailsMuseum from "@/features/place/components/details/DetailsMuseum"
import DetailsPark from "@/features/place/components/details/DetailsPark"
import DetailsRestaurant from "@/features/place/components/details/DetailsRestaurant"
import { Cross1Icon, InfoCircledIcon, Pencil1Icon } from "@radix-ui/react-icons"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { createElement, useState } from "react"

const DetailsPlaces = {
  restaurant: DetailsRestaurant,
  museum: DetailsMuseum,
  park: DetailsPark,
  bar: DetailsBar,
}

export const getServerSideProps = async ({ query: { placeId } }) => {
  try {
    const { data: place } = await axios(
      `http://localhost:3000/api/place/${placeId}`,
    )

    return { props: { place } }
  } catch ({
    response: {
      data: { error },
    },
  }) {
    return { props: { error } }
  }
}
const Create = ({ place, error }) => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const handleDelete = (placeId) => async () => {
    await axios.delete(`/api/place/${placeId}`)
    router.push("/")
  }

  if (error) {
    return <ErrorMessage text="An error occurred" details={error} />
  }

  const { _id: placeId } = place

  return (
    <main className="mx-auto">
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="flex-1">
          <div className="mt-4 flex justify-between">
            <h1 className="text-3xl font-bold mb-4">{place.name}</h1>
          </div>

          <h2 className="text-2xl flex gap-2 items-center">
            <InfoCircledIcon className="w-8 h-auto" /> Details
          </h2>

          <p>Address: {place.address}</p>
          <p>City: {place.city}</p>
          <p>Country: {place.country}</p>
          <p>Zip code: {place.zipCode}</p>

          <div className="mt-4">
            {DetailsPlaces[place.type] &&
              createElement(DetailsPlaces[place.type], {
                place,
              })}

            <div className="flex gap-3">
              <Link href={`/place/${placeId}/edit`}>
                <Button>
                  <Pencil1Icon /> Edit
                </Button>
              </Link>
              <Button onClick={() => setIsOpen(true)}>
                <Cross1Icon /> Delete
              </Button>
            </div>
          </div>
        </div>
        <Image
          alt={`Preview ${place.name}`}
          width="500"
          height="500"
          src={`https://source.unsplash.com/featured/1600x900?${place.type}`}
          className="w-full object-cover rounded flex-1"
        />
      </div>
      <DeleteConfirm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onConfirm={handleDelete(placeId)}
      />
    </main>
  )
}

export default Create
