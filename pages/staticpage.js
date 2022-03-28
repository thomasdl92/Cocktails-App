import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { slug } from "../helpers";

const staticpage = ({ drinks }) => {
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

export async function getStaticProps() {
  //opvragen van de popular movieresults
  const {
    data: { drinks },
  } = await axios(`http://localhost:3000/api/hello`);
  return {
    props: {
      drinks,
    },
    revalidate: 10, //ISRG
  };
}

export default staticpage;
