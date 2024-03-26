import Card from "@/components/Card"
import { SewingPinFilledIcon, StarFilledIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"

const Place = ({ data: { _id, name, address, price, starCount } }) => (
  <Link href={`/palce/${_id}`}>
    <Card className="overflow-hidden hover:-translate-x-1 hover:-translate-y-1 transition-all hover:shadow-[0.25rem_0.25rem] hover:shadow-red-600">
      <Image
        alt={`Preview ${name}`}
        width="100"
        height="100"
        src="https://placehold.co/600x400"
        className="w-full object-cover h-48"
      />
      <div className="p-2">
        <div className="flex justify-between">
          <p className="text-lg font-bold line-clamp">{name}</p>

          {starCount && (
            <p className="flex gap-1 items-center">
              <StarFilledIcon className="w-5 h-auto" /> {starCount}
            </p>
          )}
        </div>
        <p className="text-red-600 flex gap-2 items-center">
          <SewingPinFilledIcon /> {address}
        </p>
        {price && <p className="font-medium">{price}</p>}
      </div>
    </Card>
  </Link>
)

export default Place
