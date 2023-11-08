import { useContext, useState } from "react"
import { ImageContext } from "../App";


const SearchFields = () => {
  const[searchValue, setSearchValue]=useState("");
  const {fetchData,setSearchImage}= useContext(ImageContext);
  const handleInputChange=(e)=>{
    setSearchValue(e.target.value);

  }
  const handleButtonSearch=()=>{
    console.log(searchValue)
    fetchData(`search/photos?page=1&query=${searchValue}&client_id=4muj3ICQPxwCT4xTquOtlt1Rg5Q_SMX3bOpGeshOZ8g`);
    setSearchValue("");
    setSearchImage(searchValue);
  }

  const handleEnterSearch=(e)=>{
    if(e.key==='Enter')
    fetchData(`search/photos?page=1&query=${searchValue}&client_id=4muj3ICQPxwCT4xTquOtlt1Rg5Q_SMX3bOpGeshOZ8g`);
    setSearchValue("");
    setSearchImage(searchValue);

  }
  return (
    <div className="flex">
      <input
      className="bg-gray-50 border border-gray-300 text-sm w-full
      indent-2 p-2.5 outline-none focus:border-blue-500" 
      type="search" placeholder="Search Images...."
      value={searchValue}
      onChange={handleInputChange}
      
     />
      

      <button 
      onClick={handleButtonSearch}
      disabled={!searchValue}
      className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br
      foucs:ring-2 focus:ring-blue-300
      disabled:bg-gray-400"
      
      >Serach</button>
     
    </div>
  )
}

export default SearchFields
