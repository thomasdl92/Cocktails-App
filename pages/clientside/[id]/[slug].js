import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Detail = () => {
  const [cocktail, setCocktail] = useState({});
  const {
    query: { id },
  } = useRouter();
  useEffect(() => {
    (async () => {
      const {
        data: { drinks },
      } = await axios(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`
      );
      setCocktail(drinks.filter((cocktail) => cocktail.idDrink === id)[0]);
    })();
  }, []);

  return (
    <div>
      <h1>Detail van een cocktail</h1>
      {!cocktail.strDrink && <p>Loading...</p>}
      {cocktail.strDrink && (
        <>
          <h2>{cocktail.strDrink}</h2>
          <img src={cocktail.strDrinkThumb} />
        </>
      )}
    </div>
  );
};

export default Detail;
