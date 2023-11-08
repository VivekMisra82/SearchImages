import { useContext } from "react"
import { ImageContext } from "../App"
import Image1 from "./Image1";
import Skeleton from "./Skeleton";




const Images = () => {
  const {response,isLoading,searchImage}=useContext(ImageContext);
  
  return (
    <>
      <h1 className='text-blue-700 underline text-center text-2xl  mt-6 '>Result for {searchImage||'Mountains'}</h1>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 
    xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4 ">
        {isLoading?<Skeleton item={10}/>:response.map((data,key)=><Image1 key={key} data={data}/>)}
    </div>
    </>
  )
}

export default Images
