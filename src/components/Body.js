import ResturantCard, { withPromtedLabel } from "./ResturantCard";
import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofResturants, setListOfResturants] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const ResturantCardPromoted = withPromtedLabel(ResturantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6093909&lng=73.7182088&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfResturants(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants //optional chaining
    );
    setFilteredResList(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    );

  //conditional rendering
  return listofResturants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="res-body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            value={searchText}
            className="border border-solid border-black"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 bg-green-200 mx-4 rounded-lg"
            onClick={() => {
              const filteredResturant = listofResturants.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResList(filteredResturant);
            }}
          >
            Search
          </button>
          <button
            className="px-4 bg-blue-200 mx-4 rounded-lg"
            onClick={() => {
              const filteredList = listofResturants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredResList(filteredList);
            }}
          >
            Top Rated Resturants
          </button>
        </div>
      </div>

      <div className="res-container flex flex-wrap">
        {filteredResList?.map((resturant) => (
          <Link
            to={"/resturants/" + resturant?.info?.id}
            key={resturant?.info?.id}
            className="link-tag"
          >
            {/* If the resturant is vegetarian, promote it as vegetarain */}
            {resturant?.info?.veg ? (
              <ResturantCardPromoted resObj={resturant} />
            ) : (
              <ResturantCard resObj={resturant} />
            )}
            {/* {resturant?.info?.veg}
            <ResturantCard resObj={resturant} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
