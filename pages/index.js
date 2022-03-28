import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { slug } from "../helpers";

export default function Home() {
  const [cocktail, setCocktail] = useState([]);
  useEffect(() => {
    (async function getCocktails() {
      const {
        data: { drinks },
      } = await axios(`http://localhost:3000/api/hello`);
      setCocktail(drinks);
    })();
  }, []);

  return (
    <>
      <main>
        <h1>Alcoholic cocktails</h1>
        <div className="cols">
          {cocktail.length === 0 && <p>Loading...</p>}
          {cocktail.length > 0 &&
            cocktail.map(({ idDrink, strDrink, strDrinkThumb }) => (
              <Link
                key={idDrink}
                href={`clientside/${idDrink}/${slug(strDrink)}`}
              >
                <a className="col">
                  <Image
                    alt={strDrink}
                    src={strDrinkThumb}
                    width={500}
                    height={450}
                    layout={"responsive"}
                  />
                  <h3>{strDrink}</h3>
                </a>
              </Link>
            ))}
        </div>
      </main>
    </>
  );
}
