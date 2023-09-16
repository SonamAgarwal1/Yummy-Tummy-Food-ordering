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
    <div className="res-card">
      <img
        alt="food-img"
        className="food-img"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{costForTwo}</h4>
      <h5>{sla.slaString} minutes</h5>
    </div>
  );
};

export default ResturantCard;
