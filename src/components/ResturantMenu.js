import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.6093909&lng=73.7182088&restaurantId=237669&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json);
    console.log(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
  };
  if (resInfo === null) return <Shimmer />;

  const { itemCards } =
    resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  return (
    <div className="menu">
      <h1>{resInfo?.data?.cards[0]?.card?.card?.info?.name}</h1>
      <p>
        {resInfo?.data?.cards[0]?.card?.card?.info?.cuisines?.join(", ")}-
        {resInfo?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((res) => (
          <li>{res.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResturantMenu;
