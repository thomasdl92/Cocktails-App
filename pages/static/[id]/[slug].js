import axios from "axios";
import { slug } from "../../../helpers";

const CocktailDetail = ({ oneCocktail: { strDrink, strDrinkThumb } }) => {
  return (
    <div>
      <h1>Detail van een cocktail</h1>
      <h2>{strDrink}</h2>
      <img src={strDrinkThumb} alt={strDrink} />
    </div>
  );
};

export default CocktailDetail;

export const getStaticProps = async (req) => {
  const {
    params: { id },
  } = req;
  const { data } = await axios(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`
  );
  const oneCocktail = data.drinks.filter((drink) => drink.idDrink === id)[0];
  return {
    props: {
      oneCocktail,
    },
    revalidate: 30,
  };
};

export const getStaticPaths = async () => {
  const {
    data: { drinks },
  } = await axios(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`
  );
  return {
    paths: drinks.map(({ strDrink, idDrink }) => ({
      params: { id: idDrink.toString(), slug: slug(strDrink) },
    })),
    fallback: "blocking", //ISRG
  };
};
