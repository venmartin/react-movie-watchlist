import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ItemCard from '../../components/ItemCard'
import CustomPagination from '../../components/CustomPagination'
import AddFav from '../../components/AddFav'


const Favorites = ({ media_type, id }) => {
  const [ page, setPage ] = useState(1)
  const [ content, setContent ] = useState()
  const [ favorites, setFavorites ] = useState()
  const [ pageNum, setPageNum ] = useState(1)
  
    const getFavorites = () => {
      let favList = {}
      let keys = Object.keys(localStorage)
      let i = keys.length
  
      while (i--) {
        favList [ keys[i] ] = JSON.parse(localStorage.getItem(keys[i]))
      }
      setFavorites(favList)
      
      console.log(favorites)
    }
  
  const fetchData = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
  
    setContent(data)
    console.log(favorites.id)
  }


  // const getFavorites = () => {
  //   Object.keys(localStorage).forEach((key) => {
  //     favArray = localStorage.getItem(key)
  //    });
  // }

  useEffect(() => {
    fetchData()
    
  }, [favorites])


  return (
    <>
      <div>
        <h1 className='pageTitle'>Favorites</h1> 
      </div>
        <div>
          <div className='movies'>
            <button onClick={getFavorites}>
          Test Me
            </button>
            { 
              content && content.map((item) => 
              <ItemCard 
                key={favorites.FavList.id}
                id={favorites.FavList.id} 
                poster={item.poster_path} 
                title={item.title || item.name} 
                date={item.release_date || item.first_air_date}
                media_type={favorites.FavList.media_type}
                vote_average={item.vote_average}
                language={item.original_language}
                status={item.status}
                />)
            
            }
            
          </div>
          {pageNum > 1 && (
        <CustomPagination setPage={setPage} page={page} pageNum={pageNum} />
        )}
      </div>
    </>
  )
}

export default Favorites
