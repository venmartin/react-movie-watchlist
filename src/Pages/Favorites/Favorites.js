import React, { useContext } from 'react'
import FavCard from '../../components/FavCard'
import { GlobalContext } from '../../context/GlobalState'



const Favorites = () => {

  const { favorites } = useContext(GlobalContext)
  
  return (
    <>
    <div>
      <h1 className='pageTitle'>Favorites</h1> 
    </div>

    <div className='favorites'>
            { favorites.length > 0 ? (
              favorites.map((item) => 
              <FavCard 
                key={item.id}
                id={item.id} 
                poster={`https://image.tmdb.org/t/p/w500/${item.poster}`}
                title={item.title} 
                date={item.date}
                media_type={item.media_type}
                vote_average={item.vote_average}
                language={item.language}
                />)) :
                <h3>There are no items in your Favorite list</h3>
            
            }
            
          </div>
    </>
  )
}

export default Favorites
