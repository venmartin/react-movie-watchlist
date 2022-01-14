import React, { useState, useEffect } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const AddFav = ({ media_type, id }) => {
 const [ favorite, setFavorite ] = useState([])
 

 const favItem = {id, media_type}
 
 const handleAddFavorite = (e) => {
    
  
  
    localStorage.setItem(id, JSON.stringify(favItem))
    console.log(localStorage)
    
  }

  

  useEffect(() => {
    
  }, [])

  return (
    <div className='modal-btn-container'
      // onClick={handleAddFavorite}
      onClick={handleAddFavorite}
        >
      <FavoriteBorderIcon />
      <span className='modal-btn-title'>Favorite</span>
    </div>
  )
}

export default AddFav
