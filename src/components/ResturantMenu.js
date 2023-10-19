import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constant";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json);
  };
  if (resInfo === null) return <Shimmer />;

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")}-{costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((res) => (
          <li key={res?.card?.info?.id}>
            {res?.card?.info?.name}- Rs.{" "}
            {res?.card?.info?.price / 100 ||
              res?.card?.info?.defaultprice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResturantMenu;
