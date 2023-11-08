
import { createContext, useState } from 'react';
import './App.css';
import Images from './component/Images';
import Jumbutron from './component/Jumbutron';
import useAxios from './hooks/useAxios';
import SearchFields from './component/SearchFields';

//Create Context
export const ImageContext=createContext();
function App() {
  const [searchImage,setSearchImage]=useState([]);
  const { response,isLoading,error,fetchData}=useAxios('search/photos?page=1&query=mountains&client_id=4muj3ICQPxwCT4xTquOtlt1Rg5Q_SMX3bOpGeshOZ8g');
  
  console.log(response);
  
  const value={
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    
    <ImageContext.Provider value={value}>
    <Jumbutron>
     <SearchFields/>
    </Jumbutron>
    <Images />
  

     
    </ImageContext.Provider>
    
  );
}

export default App;
