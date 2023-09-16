import ResturantCard from "./ResturantCard";
import { resList } from "../utils/mockData";

const Body = () => {
  return (
    <div className="res-body">
      <button
        className="top-rated-btn"
        onClick={() => {
          console.log("button clicked");
        }}
      >
        Top Rated Resturants
      </button>
      <div className="res-container">
        {resList.map((resturant) => (
          <ResturantCard resObj={resturant} key={resturant?.info?.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
