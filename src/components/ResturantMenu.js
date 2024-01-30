import useResturantMenu from "../utils/useResturantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ResturantCategory from "./ResturantCategory";

const ResturantMenu = () => {
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);
  if (resInfo === null) return <Shimmer />;

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;
  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="text-2xl my-6 font-bold">{name}</h1>
      <p className="text-lg font-bold">
        {cuisines?.join(", ")}-{costForTwoMessage}
      </p>

      {categories.map((category) => (
        <ResturantCategory
          data={category?.card?.card}
          key={category?.card?.card?.title}
        />
      ))}
    </div>
  );
};

export default ResturantMenu;
