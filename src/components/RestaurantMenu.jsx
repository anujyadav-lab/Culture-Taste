import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { ResId } = useParams();
 
  const { resInfo, menuInfo , accordion} = useRestuarantMenu(ResId);

  const [showIndex,setShowIndex] = useState(0);

  if (resInfo === null) return <ShimmerCard />;

  const { name, costForTwoMessage, cuisines } = resInfo;

  const categories = accordion.filter((c) => c.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  
 
  // console.log("the data :",categories)

  return (
    <div className=" text-center p-3">
      
      <h1 className=" font-bold my-4 text-2xl">{name}</h1>
      <h3 className=" font-bold text-lg">{cuisines?.join(", ")} -  {costForTwoMessage}</h3>

      
{categories.map((category,index) => <RestaurantCategories data = {category?.card?.card} key={category?.card?.card?.title} showItems = {index === showIndex ? true:false} setShowIndex={()=>setShowIndex(index)}/>)}
      {/* <ul>
        {menuInfo.map((item, id) => (
          <li key={id}>
            {item.card.info.name} - {item.card.info.price / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
