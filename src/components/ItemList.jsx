import { Accordion_Image_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div>
     
        {items.map((item) => (
          <div key={item?.card?.info?.id} className="p-2 m-2 border-gray-350 border-b-2 text-left">
            <div className="p-2">

            <h2 className=" font-semibold">{item?.card?.info?.name}</h2>
            <p className="font-semibold">₹{item?.card?.info?.price / 100 ? item?.card?.info?.price / 100 :  item?.card?.info?.defaultPrice/100}</p>
            <p className=" font-semibold">⭐{item?.card?.info?.ratings?.aggregatedRating?.rating ? item?.card?.info?.ratings?.aggregatedRating?.rating: "No Rating"}</p>

        {/* {item?.card?.info?.offerTags && item.card.info.offerTags.length > 0 && (
              <p>{item.card.info.offerTags[0].title}</p>

            )} */}
            </div>
            <p className=" text-xs">{item?.card?.info?.description}</p>
            <div>
              {/* {console.log( item?.card?.info?.imageId)} */}
              <img className="w-32 m-3 "
              src={Accordion_Image_URL + item?.card?.info?.imageId} alt="Image Error"></img>
            </div>

          </div>
          
        ))}
      
    </div>
  );
};

export default ItemList;
