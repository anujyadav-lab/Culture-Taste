import * as React from 'react';
import ItemList from './ItemList';


export default function RestaurantCategories({data}) {


  return (
    <div>
      <div className='w-6/12 my-4 bg-gray-50 shadow-lg p-4 mx-auto'>
    <div className='flex justify-between'>
      <span className=' font-bold text-lg'>{data.title} ({data.itemCards.length})</span>

      <span>⬇️</span>
</div>
      <ItemList items = {data.itemCards}/>

      
    </div>
    
    </div>
  );
}
