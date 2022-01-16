import React, { useState, useEffect } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button } from '@mui/material';


const AddFav = ({ media_type, id }) => {
 
 const favItem = {id, media_type}
 
 const handleAddFavorite = () => {
    localStorage.setItem(id, JSON.stringify(favItem))
    console.log(localStorage)
    
  }

  

  useEffect(() => {
    
  }, [])

  return (
    <Button className='modal-btn-container'
      // onClick={handleAddFavorite}
      onClick={handleAddFavorite}
      variant="outlined"
      color='primary'
        >
      <FavoriteBorderIcon />
      <span className='modal-btn-title'>Favorite</span>
    </Button>
  )
}

export default AddFav
