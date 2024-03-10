import Card from "@/components/Card"
import { SewingPinFilledIcon, StarFilledIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"

const Place = () => (
  <Link href="/palce/id">
    <Card className="overflow-hidden hover:-translate-x-1 hover:-translate-y-1 transition-all hover:shadow-[0.25rem_0.25rem] hover:shadow-red-600">
      <Image
        alt={`Preview`}
        width="100"
        height="100"
        src="https://placehold.co/600x400"
        className="w-full object-cover h-48"
      />
      <div className="p-2">
        <div className="flex justify-between">
          <p className="text-lg font-bold line-clamp">Lieux 1</p>

          <p className="flex gap-1 items-center">
            <StarFilledIcon className="w-5 h-auto" /> 4.5
          </p>
        </div>
        <p className="text-red-600 flex gap-2 items-center">
          <SewingPinFilledIcon /> Address 515151, 5454
        </p>
        <p className="font-medium">20 €</p>
      </div>
    </Card>
  </Link>
)

export default Place
