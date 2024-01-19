import { CDN_URL } from "../utils/constant";

const ResturantCard = (props) => {
  const { resObj } = props;
  const {
    name,
    cuisines,
    sla,
    avgRatingString,
    cloudinaryImageId,
    costForTwo,
  } = resObj?.info;
  return (
    <div className="res-card m-4 p-4 w-[280px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        alt="food-img"
        className="food-img rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{costForTwo}</h4>
      <h5>{sla.slaString} minutes</h5>
    </div>
  );
};

export default ResturantCard;

//Higher Order Component

export const withPromtedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-800 text-white rounded-lg">
          Pure veg
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};
