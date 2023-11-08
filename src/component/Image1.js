import React from 'react'

const Image1 = ({data}) => {
  return (
    <div>
      <a href={data.urls.regular} target="_blank" rel="noreferrer">
        <img className='h-72 w-full object-cover rounded-lg shadow-md hover:scale-125 transition duration-500 cursor-pointer' src={data.urls.small} alt={data.alt_description}/>
        </a>
    </div>
  )
}

export default Image1
