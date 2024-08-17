import Link from "next/link"
import { Key } from "react"
import { DrinkH } from "./definitions"


export default function DrinksList({drinks} : {drinks : DrinkH[]}) {
  return (
    <ul className="menu menu-vertical">
      {drinks?.map((drink)=>(
        <li className="text-xl font-medium" key={drink.idDrink}>
          <Link href={`/bar/${drink.idDrink}`}>{drink.strDrink}</Link>
        </li>
      ))}
    </ul>
  )
}


