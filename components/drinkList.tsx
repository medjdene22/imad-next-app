import Link from "next/link"
import { DrinkH } from "./definitions"
import Image from "next/image";


export default function DrinksList({drinks} : {drinks : DrinkH[]}) {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-8">
      {drinks?.map((drink)=>(
        <li  key={drink.idDrink} className="mx-auto">
          <Link className="text-xl font-medium" href={`/bar/${drink.idDrink}`}>
            <div className="relative h-64 w-64">
              <Image 
              className="rounded-lg shadow-lg"
              src={drink.strDrinkThumb} 
              fill 
              alt={drink.strDrink}
              />
            </div>
            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  )
}


