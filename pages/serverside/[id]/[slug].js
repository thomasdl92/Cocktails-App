import axios from "axios";

const DetailPage = ({ oneCocktail: { strDrink, strDrinkThumb } }) => {
  return (
    <div>
      <h1>Detail van een cocktail</h1>
      <h2>{strDrink}</h2>
      <img src={strDrinkThumb} />
    </div>
  );
};

export default DetailPage;

export const getServerSideProps = async (req) => {
  const {
    query: { id },
  } = req;
  const { data } = await axios(`http://localhost:3000/api/hello`);
  const oneCocktail = data.drinks.filter((drink) => drink.idDrink === id)[0];
  return {
    props: {
      oneCocktail,
    },
  };
};
