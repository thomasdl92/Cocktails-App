import axios from "axios";
import Link from "next/dist/client/link";
import { slug } from "../helpers";
import Image from "next/image";

const serverside = ({ drinks }) => {
  return (
    <main>
      <h1>Alcoholic cocktails</h1>
      <div className="cols">
        {drinks.length > 0 &&
          drinks.map(({ idDrink, strDrink, strDrinkThumb }) => (
            <Link
              key={idDrink}
              href={`serverside/${idDrink}/${slug(strDrink)}`}
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
  );
};

export async function getServerSideProps() {
  const {
    data: { drinks },
  } = await axios(`http://localhost:3000/api/hello`);
  return {
    props: {
      drinks,
    },
  };
}

export default serverside;
