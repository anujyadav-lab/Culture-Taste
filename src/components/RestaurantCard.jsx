import CDN_URL from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, avgRating, cuisines, costForTwo, sla } =
    resData;

  return (
    // <div className="m-6  overflow-hidden">
    //   <img
    //     className="h-40 w-60 rounded-lg p-1 "
    //     src={CDN_URL + cloudinaryImageId}
    //     alt="Restaurant Image"
    //   />
    //   <div className="p-6">
    //   <p>{name}</p>
    //   <p className="overflow-hidden whitespace-pre-wrap">{cuisines.join(", ")}</p>
    //   <p>{costForTwo}</p>
    //   <p>{avgRating} ⭐</p>
    //   <p>{sla.slaString} </p>
    // </div>
    // </div>
    <div className=" w-60 m-4 h-96 bg-white rounded-xl  shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
    <img
      className="w-full h-48 object-cover object-center rounded-lg"
      src={CDN_URL + cloudinaryImageId}
      alt="Restaurant Image"
    />

    <div className="p-6 ">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="truncate overflow-hidden text-gray-700 mb-2">{cuisines.join(", ")}</p>

      <p className="text-gray-700 mb-2">{costForTwo}</p>
      <p className="text-yellow-500">{avgRating} ⭐</p>
    </div>
  </div>
  );
};

export const withPromotedLabel = (RestaurantCard) =>{

  return (props)=>{
     return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
     )
  }
}

export default RestaurantCard;







