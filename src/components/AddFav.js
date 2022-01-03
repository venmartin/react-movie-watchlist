import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const AddFav = () => {

  return (
    <div className='modal-btn-container'>
      <FavoriteBorderIcon />
      <span className='modal-btn-title'>Favorite</span>
    </div>
  )
}

export default AddFav
