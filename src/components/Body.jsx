import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import Card from "./ShimmerCard";
import { Link } from "react-router-dom";
import WhatsOnYourMind from "./WhatsOnYourMind";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFilteredRes from "../utils/useFilteredRes";

const Body = () => {

  const myfilteredRestuarant = useFilteredRes();
  const restaurantCardPromoted = withPromotedLabel(RestaurantCard);


  const onlineStat = useOnlineStatus();
  // conditional rendering-> rendering on the basis of conditional rendering.
  if (onlineStat === false)
    return <h>Hey you are not connected to the internet.</h>;

  return myfilteredRestuarant.restaurantList.length === 0 ? (
    <>
      <Card />
    </>
  ) : (
    <>
      <div className="mx-10 ">
        <div className="p-10 ml-80 ">
          <input
            className="border-2 m-30 h-12 w-5/12 rounded-lg	"
            type="text"
            value={myfilteredRestuarant.searchText}
            onChange={(e) =>myfilteredRestuarant.setSearchText(e.target.value)}
          />

          <button  className="mx-16 p-4 rounded-lg w-40 bg-slate-300" onClick={myfilteredRestuarant.handleSearch}>search</button>
          <button
            className="w-auto h-14 p-2 rounded-lg w-40 bg-slate-300  "
            onClick={myfilteredRestuarant.handleFilter}
          >
            Top Rated Restaurant
          </button>

        </div>

        <div className=" flex flex-col		 justify-center">
          <WhatsOnYourMind />
        </div>

        <div className="flex  flex-wrap ">
          {myfilteredRestuarant.filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/resturant/" + restaurant?.info?.id}
            >
               {restaurant.info.promoted ? (
              <restaurantCardPromoted resDat a={resData} />
            ) : (
              <RestaurantCard resData={restaurant.info} />
            )}
            </Link>
          ))} 
        </div>
      </div>
    </>

  );
};

export default Body;
