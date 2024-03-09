import Card from "@/components/Card"
import { SewingPinFilledIcon } from "@radix-ui/react-icons"
import Link from "next/link"

const Place = () => (
  <Link href="/palce/id">
    <Card className="overflow-hidden hover:-translate-x-1 hover:-translate-y-1 transition-all hover:shadow-[0.25rem_0.25rem] hover:shadow-red-600">
      <img
        src="https://placehold.co/600x400"
        className="w-full object-cover h-48"
      />
      <div className="p-2">
        <p className="text-lg font-bold line-clamp">Lieux 1</p>
        <p className="text-red-600 flex gap-2 items-center">
          <SewingPinFilledIcon /> Address 515151, 5454
        </p>
        <p className="text-gray-600 line-clamp-3 break-all">
          Lorem
          LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
          LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
          LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
          LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
        </p>
      </div>
    </Card>
  </Link>
)

export default Place
