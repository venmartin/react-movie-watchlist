import React, { useContext } from 'react'
import FavCard from '../../components/FavCard'
import ItemCard from '../../components/ItemCard'
import { GlobalContext } from '../../context/GlobalState'


const Favorites = () => {
  const { favorites } = useContext(GlobalContext)
  
  
  return (
    <>
    <div>
      <h1 className='pageTitle'>Favorites</h1> 
    </div>

    <div className='movies'>
            { 
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
                />)
            
            }
            
          </div>
          {/* {pageNum > 1 && (
        <CustomPagination setPage={setPage} page={page} pageNum={pageNum} />
        )} */}
    </>
  )
}

export default Favorites
