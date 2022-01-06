import React, { useState, useEffect } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const AddFav = ({ media_type, id }) => {
 const { favoriteId, setFavoriteId } = useState('')
 const { favoriteMedia, setFavoriteMedia } = useState('')
 const { favContent, setFavContent } = useState([])

 const favItem = {id, media_type}
 
 const handleAddFavorite = () => {
    
  
  
    localStorage.setItem('FavList', JSON.stringify(favItem))
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
