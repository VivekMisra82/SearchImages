import React from 'react'

const Skeleton = ({item}) => {
  return [...Array(item).keys()].map(() =>(
    <div className="animate-pulse">
        <div className='bg-gray-300 rounded-lg h-72 hover:scale-125 transition duration-500 cursor-pointer'></div>
    </div>
  ))
}

export default Skeleton
