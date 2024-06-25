import { Accordion_Image_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="p-2 m-2 border-gray-350 border-b-2 text-left flex justify-between">
          <div className="p-2 ">
            <h2 className="font-semibold">{item?.card?.info?.name}</h2>
            <p className="font-semibold">
              ₹{item?.card?.info?.price / 100 ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}
            </p>
            <p className="font-semibold">
              ⭐{item?.card?.info?.ratings?.aggregatedRating?.rating ? item?.card?.info?.ratings?.aggregatedRating?.rating : "No Rating"}
            </p>
            <p className="text-xs">{item?.card?.info?.description}</p>

          </div>


<div className="relative">
  <img className="w-32 rounded-lg" src={Accordion_Image_URL + item?.card?.info?.imageId} alt="Image Error" />
  <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2  bg-orange-400 shadow-lg rounded-lg px-4 py-2 text-white">
    Add
  </button>
</div>

        </div>
      ))}
    </div>
  );
};

export default ItemList;
