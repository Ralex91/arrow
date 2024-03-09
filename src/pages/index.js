import Card from "@/components/Card"
import Dropdown from "@/components/Dropdown"
import Input from "@/components/Input"
import Place from "@/components/Place"
import { PLACE_TYPE_OPTION } from "@/constants"
import { Combobox } from "@headlessui/react"
import { CheckIcon } from "@radix-ui/react-icons"
import { Fragment, useState } from "react"

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
]
// eslint-disable-next-line max-lines-per-function
const Home = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0])
  const [query, setQuery] = useState("")
  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name.toLowerCase().includes(query.toLowerCase()),
        )

  return (
    <main>
      <div className="flex gap-2 flex-col md:flex-row items-start relative">
        <Card className="p-2 w-full md:w-80 md:sticky top-20">
          <h2 className="text-xl font-bold">Affiner votre recherche</h2>

          <div className="mt-2 flex flex-col justify-stretch gap-2">
            <Input label="Recherche une ville" />
            <Dropdown
              options={PLACE_TYPE_OPTION}
              label="Type de lieu"
              onChange={(v) => alert(v)}
            />

            <Combobox value={selectedPerson} onChange={setSelectedPerson}>
              <div className="relative">
                <Combobox.Input
                  className="p-2 rounded-md outline-none focus:border-red-600 border border-gray-200 w-full"
                  onChange={(event) => setQuery(event.target.value)}
                  displayValue={(person) => person.name}
                />
                <Combobox.Options className="bg-white absolute rounded-md border border-gray-200 w-full mt-1 max-h-32 overflow-y-auto">
                  {filteredPeople.map((person) => (
                    <Combobox.Option
                      key={person.id}
                      value={person}
                      as={Fragment}
                    >
                      {({ active, selected }) => (
                        <li
                          className={`w-full text-left p-2 flex items-center gap-3 ${
                            active ? "bg-red-600 text-white" : "text-black"
                          }`}
                        >
                          {selected && <CheckIcon />}
                          {person.name}
                        </li>
                      )}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              </div>
            </Combobox>
          </div>
        </Card>

        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">
            Résultats de votre recherche{" "}
            <span className="text-sm font-normal p-1 rounded-md bg-red-600 text-white">
              999 résultats
            </span>
          </h2>
          <div className="grid grid-cols-1 gap-2 justify-start lg:grid-cols-2">
            <Place />
            <Place />
            <Place />
            <Place />
            <Place />
            <Place />
            <Place />
            <Place />
            <Place />
            <Place />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
