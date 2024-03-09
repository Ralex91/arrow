import { PlusIcon } from "@radix-ui/react-icons"
import Link from "next/link"

const Header = () => {
  return (
    <header className="border-b border-gray-200 sticky h-16 top-0 bg-white z-[99] px-4">
      <div className="mx-auto max-w-7xl flex h-full justify-between items-center">
        <Link href="/" className=" font-extrabold">
          LOGO
        </Link>
        <nav>
          <ul className="flex gap-4 h-full items-center">
            <li>
              <Link href="/">List</Link>
            </li>
            <li>
              <Link
                href="/create"
                className="py-2 px-4 rounded-md bg-red-600 hover:bg-red-700 text-white flex gap-2 items-center"
              >
                <PlusIcon />
                Add
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
