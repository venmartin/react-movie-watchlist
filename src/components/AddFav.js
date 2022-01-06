import React, { useState, useEffect } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const AddFav = ({ media_type, id }) => {
 const { favoriteId, setFavoriteId } = useState()
 const { favoriteMedia, setFavoriteMedia } = useState()

 const favItem = {id, media_type}

 const handleAddFavorite = () => {
  //  const addFavItem = (favItem) => setFavorites(favorites => [...favorites, favItem])
  localStorage.setItem(id, JSON.stringify({id, media_type}))
  // localStorage.setItem(media_type, media_type)
    
   
   console.log(localStorage)
    
  }

  useEffect(() => {
    
  }, [])

  return (
    <div className='modal-btn-container'
      onClick={handleAddFavorite}
        >
      <FavoriteBorderIcon />
      <span className='modal-btn-title'>Favorite</span>
    </div>
  )
}

export default AddFav
