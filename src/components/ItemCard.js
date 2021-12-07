import React from 'react'
import { img_300, unavailable } from '../config/config'
import './ItemCard.css'
import LoadingSpinner from './Loading'
import { useState } from 'react'
import ItemModal from './ItemModal'

const ItemCard = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
  language
}) => {

  const [ loading, setLoading] = useState(false)
  

  return (
    <ItemModal media_type={media_type} id={id}>
    <div className="item-card" id={id}>
     <img className='item-poster' src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
     <span className='item-title'>{title}</span>
     <span className='media-type'>{media_type === "tv" ? "TV Series" : "Movie"}</span>
      <div className='bottom-content'>
        <span className='item-lang'><span>Language:</span>{language}</span>
        <span className='item-date'><span>Release Date:</span>{date}</span>
        <span className='item-vote'><span>Rating:</span>{vote_average === 0 ? 'N/A' : vote_average}</span>
      </div>
    </div>
    </ItemModal>


  )
}

export default ItemCard
