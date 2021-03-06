import React, { useContext } from 'react'
import { img_300, img_500, unavailable, unavailableLandscape } from '../config/config'
import './ItemCard.css'
import ItemModal from './ItemModal'
import { GlobalContext } from '../context/GlobalState'
import { Button } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const ItemCard = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
  language,
}) => {
  
  const { addToFavorites, favorites } = useContext(GlobalContext)

  let storedItem = favorites.find(obj => obj.id === id)

  const favoriteDisabled = storedItem ? true : false;

  return (
    
    <div className="item-card" id={id}>
    <ItemModal media_type={media_type} id={id}>
     <img className='item-poster' src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
    </ItemModal>
     <span className='item-title'>{title}</span>
     <span className='media-type'>{media_type === "tv" ? "TV Series" : "Movie"}</span>
      <div className='bottom-content'>
        <span className='item-lang'><span>Language:</span>{language}</span>
        <span className='item-date'><span>Release Date:</span>{date}</span>
        <span className='item-vote'><span>Rating:</span>{vote_average === 0 ? 'N/A' : vote_average}</span>
      </div>
      <div className='btn-bg-item'>
      <Button className='modal-btn-container'
        disabled={favoriteDisabled}
        onClick={() => addToFavorites({
          id,
          poster,
          title,
          date,
          media_type,
          vote_average,
          language,
          })}
        variant="outlined"
        color='primary'

         >
        <FavoriteBorderIcon />
      <span className='modal-btn-title'>Favorite</span>
    </Button>
    </div>
    </div>


  )
}

export default ItemCard
