import Card from "@/components/Card"
import { SewingPinFilledIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"

const PlaceCard = ({ data: { _id, name, address, type } }) => (
  <Link href={`/place/${_id}`}>
    <Card className="overflow-hidden hover:-translate-x-1 hover:-translate-y-1 transition-all hover:shadow-[0.25rem_0.25rem] hover:shadow-red-600">
      <Image
        alt={`Preview ${name}`}
        width="500"
        height="500"
        src={`https://source.unsplash.com/featured/1600x900?${type}`}
        className="w-full object-cover h-48"
      />
      <div className="p-2">
        <div className="flex justify-between">
          <p className="text-lg font-bold line-clamp">{name}</p>
        </div>
        <p className="text-red-600 flex gap-2 items-center">
          <SewingPinFilledIcon /> {address}
        </p>
      </div>
    </Card>
  </Link>
)

export default PlaceCard
