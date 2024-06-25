import * as React from 'react';
import ItemList from './ItemList';
import { useState } from 'react';

export default function RestaurantCategories({data,showItems,setShowIndex}) {
  

  const handleClick = () =>{
  setShowIndex(!showItems)
  }


  return (
    <div>
      <div className='w-6/12 my-4 bg-gray-50 shadow-lg p-4 mx-auto cursor-pointer' onClick={handleClick}>
    <div className='flex justify-between'>
      <span className=' font-bold text-lg'>{data.title} ({data.itemCards.length})</span>

      <span>⬇️</span>
</div>
    {showItems &&  <ItemList items = {data.itemCards}/>} 

    
    </div>
    
    </div>
  );
}
